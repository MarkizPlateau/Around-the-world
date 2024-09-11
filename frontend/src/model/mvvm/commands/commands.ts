import { action, computed, isAction, makeObservable, observable, runInAction } from 'mobx';
// IMPROVEMENTS ?
export interface ICommand {
  readonly isEnabled: boolean;
  readonly isRunning: boolean;
  execute(): Promise<any>;
  then(f: () => Promise<void> | void): ICommand;
}

class CommandDecorator implements ICommand {
  constructor(
    private readonly command: ICommand,
    private readonly f: (commandResult: any) => Promise<void> | void,
  ) {}

  get isEnabled() {
    return this.command.isEnabled && !this.isRunning;
  }
  private _isRunning = false;
  get isRunning() {
    return this.command.isRunning || this._isRunning;
  }

  async execute(): Promise<any> {
    try {
      await this.f(await this.command.execute());
    } finally {
      this._isRunning = false;
    }
  }

  then(f: () => Promise<void>): ICommand {
    return new CommandDecorator(this, f);
  }
}

export class Command<T = any, K = any> {
  get isEnabled(): boolean {
    return (!this._enabledValueAccessor || !!this._enabledValueAccessor()) && !this._isRunning;
  }

  _isRunning: boolean = false;
  get isRunning() {
    return this._isRunning;
  }

  private readonly _enabledValueAccessor: (() => K | boolean | undefined) | undefined;
  private readonly _execute: ((v: K) => Promise<T>) | ((v: K) => T);

  constructor(
    execute: ((v: K) => Promise<T>) | ((v: K) => T),
    enabled?: () => K | boolean | undefined,
  ) {
    this._execute = isAction(execute) ? execute : action(execute);
    this._enabledValueAccessor = enabled;
    makeObservable(this, {
      isEnabled: computed,
      isRunning: computed,
      _isRunning: observable,
      execute: action.bound,
    });
  }

  async execute(): Promise<T> {
    const enabledValue = this._enabledValueAccessor && this._enabledValueAccessor();
    if (this._enabledValueAccessor && !enabledValue) return Promise.reject();

    runInAction(() => (this._isRunning = true));
    try {
      return await this._execute(enabledValue as any);
    } finally {
      runInAction(() => (this._isRunning = false));
    }
  }

  then(f: (commandResult: any) => Promise<void> | void): ICommand {
    return new CommandDecorator(this, f);
  }
}

import { runInAction } from 'mobx';
import { ICommand } from './commands/commands';

export type ConstructorOf<T> = new (p1?: any, p2?: any, p3?: any, p4?: any) => T;

export type KeyOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: any;
};
export interface IProperty<T> {
  get: () => T;
  set: (v: T) => void;
}

export function property<T, K extends keyof T>(model: T, propertyName: K) {
  return {
    get: () => model[propertyName],
    set: (value: T[K]) => (model[propertyName] = value),
  };
}

export function bindTo<T>(property: IProperty<T>) {
  return {
    value: property.get(),
    onChange: (value: T) => {
      runInAction(() => property.set(value));
    },
  };
}

function bindToCustomValue<T>(property: IProperty<T>, valueName: string) {
  return {
    [valueName]: property.get(),
    onChange: (value: T) => {
      runInAction(() => property.set(value));
    },
  };
}

export function bindProperty<T, K extends keyof T>(model: T, propertyName: K) {
  return bindTo(property(model, propertyName));
}

export function bindPropertyCustomValue<T, K extends keyof T>(
  model: T,
  propertyName: K,
  valueName: string,
) {
  return bindToCustomValue(property(model, propertyName), valueName);
}

export function bindToCommand(command: ICommand, eventName?: string) {
  return {
    [eventName || 'onClick']: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return command.execute();
    },
    disabled: !command.isEnabled,
    isDisabled: !command.isEnabled,
    isLoading: command.isRunning,
  };
}

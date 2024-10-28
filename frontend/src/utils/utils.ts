export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const handlePostcodeKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-',
    'Backspace',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
  ];

  if (allowedKeys.indexOf(event.key) === -1) {
    event.preventDefault();
  }
};

import caesarChipher from './caesarCipher';

test('caesarChipher', () => {
  expect(caesarChipher('xyz', 3)).toBe('abc');
});

test('caesarChipher', () => {
  expect(caesarChipher('HeLLo', 3)).toBe('KhOOr');
});

test('caesarChipher', () => {
  expect(caesarChipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

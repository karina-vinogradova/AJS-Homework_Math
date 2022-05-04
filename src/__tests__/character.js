import Magician from '../magician';
import Deamon from '../daemon';

test('error for field border', () => {
  const mag = new Magician('Tom');
  mag.cell = 11;
  mag.attack = 100;
  expect(mag.attack).toBe('Ячейка за границами поля');
});

test('stoned is false', () => {
  const mag = new Magician('Tom');
  mag.cell = 5;
  mag.attack = 100;
  expect(mag.attack).toBe(60);
});

test('stoned is true', () => {
  const mag = new Magician('Tom');
  mag.cell = 2;
  mag.stoned = true;
  mag.attack = 100;
  expect(mag.attack).toBe(85);
});

test('stoned is false', () => {
  const mag = new Magician('Tom');
  mag.cell = 3;
  mag.attack = 100;
  expect(mag.stoned).toBe(false);
});

test('testing deamon type with stoned is false', () => {
  const deamon = new Deamon('Bob');
  deamon.cell = 3;
  deamon.attack = 100;
  expect(deamon.attack).toBe(80);
});

test('testing deamon type with stoned is true', () => {
  const deamon = new Deamon('Bob');
  deamon.cell = 3;
  deamon.stoned = true;
  deamon.attack = 100;
  expect(deamon.attack).toBe(72);
});

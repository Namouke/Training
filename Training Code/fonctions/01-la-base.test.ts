import { it, describe, expect } from 'vitest';


describe('La base', () => {
  it('Creer une fonction qui retourne 42', () => {
    // TODO

    expect(quaranteDeux()).toBe(42);
  });
  it('Creer une fonction qui renvoie le max de deux nombres', () => {
    // sans utiliser Math.max bien sur

    expect(max(1, 10)).toBe(10);
    expect(max(2, 100)).toBe(100);
    expect(max(2, -100)).toBe(2);

  });

  it('Creer une fonction qui renvoie le max d un tableau', () => {
    function maxtableau(tableau) {

    }

    expect(maxtableau([1, 10])).toBe(10);
    expect(maxtableau([2, 50, 100])).toBe(100);
    expect(maxtableau([2, 50, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(100);
  });
  it('Creer une fonction qui renvoie la somme des elements d un tableau inferieurs a 10', () => {

    expect(sommeInferieurADix([1, 100, 10, 5, 6])).toBe(12);
    expect(sommeInferieurADix([100, 10, 1000])).toBe(0);
  });

  it('Creer une fonction qui renvoie le nombre de fois ou un element est present dans un tableau', () => {

    const tableau = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    expect(count(tableau, 1)).toBe(2);
    expect(count(tableau, 2)).toBe(2);
    expect(count(tableau, 3)).toBe(2);
    expect(count(tableau, 4)).toBe(2);
    expect(count(tableau, 5)).toBe(2);
    expect(count(tableau, 6)).toBe(0);
  });
  it('[DUR] Creer une fonction qui renvoie la mediane d un tableau', () => {
    // la mediane c'est un nombre pour lequel il y a autant d'elements
    // superieurs que d'elements inferieurs dans le tableau
    function mediane(tableau) {

    }
    const med = mediane([40, 25, 50, 100]);
    expect(med).toBeGreaterThanOrEqual(40);
    expect(med).toBeLessThanOrEqual(50);

    //tableau a 100 elements de 0 a 100
    const med2 = mediane(
      [...new Array(50).fill(0).map(() => Math.floor(Math.random() * 49)),
      ...new Array(50).fill(0).map(() => 51 + Math.floor(Math.random() * 49)),
      ]
    );
    expect(med2).toBeGreaterThanOrEqual(49);
    expect(med2).toBeLessThanOrEqual(51);
  });

});
import { transformWithEsbuild } from "vite";
import { describe, expect, it } from "vitest";

describe("Boucles For Of", () => {
  it("Trouver le plus petit nombre dans un tableau", () => {
    // avec une boucle for in
    const tableau = [3, 7, 1, 2, 9, 7, 8, 4, 5];
    let plusPetitNombre = Infinity;
    // trouver le plus petit nombre dans le tableau (for of)
    // Math.min te permet de comparer deux nombres et de retourner le plus petit
    for (let i of tableau) {
      console.log(i, tableau, tableau[i]);
      plusPetitNombre = Math.min(i, plusPetitNombre);
    }

    expect(plusPetitNombre).toEqual(1);
  });

  it(`Trouver l'index de l'element qui a la valeur 7`, () => {
    // avec une boucle for in
    const tableau = [1, 3, 7, 2, 9, 7, 8, 4, 5];
    let index = 0;
    // trouver l'index de l'element qui a la valeur 7 (for of)

    for (let [i, value] of tableau.entries()) {
      console.log(i, value);
      if (value === 7) {
        index = i;
        break;
      }
    }
    expect(index).toEqual(2);
  });

  it(`Trouver l'index de l'ement qui a l'id 7`, () => {
    // avec une boucle for of
    const tableau = [
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 7, nom: "c" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 7, nom: "f" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ];
    let index = 0;
    // trouver l'index de l'element qui a l'id 7 (for of)

    for (let [i, value] of tableau.entries()) {
      if (value.id === 7) {
        index = Number(i);
        break;
      }
    }

    expect(index).toEqual(2);
  });

  it(`Remplacer tous les elements qui ont la valeur 7 par 10`, () => {
    // avec une boucle for in
    const tableau = [1, 3, 7, 2, 9, 7, 8, 4, 5];
    // remplacer tous les elements qui ont la valeur 7 par 10 (for of)

    for (let [i, value] of tableau.entries()) {
      if (value === 7) {
        tableau[i] = 10;
      }
    }

    expect(tableau).toEqual([1, 3, 10, 2, 9, 10, 8, 4, 5]);
  });

  it(`Remplacer tous les elements qui ont l'id 7 par un autre objet`, () => {
    const tableau = [
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 7, nom: "c" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 7, nom: "f" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ];
    const objet = { id: 10, nom: "j" };
    // remplacer tous les elements qui ont l'id 7 par un autre objet (for of)

    for (let [i, value] of tableau.entries()) {
      if (value.id === 7) {
        tableau[i] = objet;
      }
    }

    expect(tableau).toEqual([
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 10, nom: "j" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 10, nom: "j" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ]);
  });
});

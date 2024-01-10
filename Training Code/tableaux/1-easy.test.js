import { describe, expect, it } from "vitest";

describe("Easy, pour commencer", () => {
  it("1. Créer un tableau vide", () => {
    // Créer un tableau vide
    const tableau = [];

    // Vérifier que le tableau est vide
    expect(tableau).toEqual([]);
  });

  it("2. Créer un tableau avec 3 éléments", () => {
    // Créer un tableau avec 3 éléments
    const tableau = [1, 2, 3];
    // Vérifier que le tableau contient 3 éléments
    expect(tableau).toEqual([1, 2, 3]);
  });

  it("3. Ajouter un élément à un tableau", () => {
    // Créer un tableau avec 3 éléments

    const tableau = [1, 2, 3];

    expect(tableau).toEqual([1, 2, 3]);
    // Ajouter un élément au tableau
    let value = 4;
    tableau.push(value);
    // Vérifier que le tableau contient 4 éléments
    expect(tableau).toEqual([1, 2, 3, 4]);
  });

  it("4. Supprimer un élément à un tableau", () => {
    // Créer un tableau avec 3 éléments
    const tableau = [1, 2, 3];

    expect(tableau).toEqual([1, 2, 3]);
    // Supprimer un élément au tableau
    tableau.splice(2);
    // Vérifier que le tableau contient 2 éléments
    expect(tableau).toEqual([1, 2]);
  });

  it("5. Modifier un élément à un tableau", () => {
    // Créer un tableau avec 3 éléments
    const tableau = [1, 2, 3];
    expect(tableau).toEqual([1, 2, 3]);
    // Modifier un élément au tableau

    tableau[1] = 10;

    // Vérifier que le tableau contient 1 10 3
    expect(tableau).toEqual([1, 10, 3]);
  });

  it("6. Concaténer deux tableaux", () => {
    // Créer un tableau avec 3 éléments
    const tableau1 = [1, 2, 3];
    // Créer un tableau avec 3 éléments
    const tableau2 = [4, 5, 6];

    expect(tableau1).toEqual([1, 2, 3]);
    expect(tableau2).toEqual([4, 5, 6]);
    // Concaténer les deux tableaux (fonction concat)
    let tableau3 = tableau1.concat(tableau2);
    // Vérifier que le tableau contient 1 2 3 4 5 6

    expect(tableau3).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Couper un tableau en deux", () => {
    // Créer un tableau avec 6 éléments
    const tableau = [1, 2, 3, 4, 5, 6];
    expect(tableau).toEqual([1, 2, 3, 4, 5, 6]);
    // Couper le tableau en deux (fonction slice)
    let tableau1 = tableau.slice(0, 3);
    let tableau2 = tableau.slice(3);

    // Vérifier que le tableau contient 1 2 3
    expect(tableau1).toEqual([1, 2, 3]);
    // Vérifier que le tableau contient 4 5 6
    expect(tableau2).toEqual([4, 5, 6]);
  });

  it("Trier un tableau", () => {
    // Créer un tableau avec 6 éléments
    const tableau = [3, 5, 2, 6, 1, 4];
    expect(tableau).toEqual([3, 5, 2, 6, 1, 4]);
    // Trier le tableau (fonction sort)
    let tableauTrie = tableau.sort();
    // Vérifier que le tableau contient 1 2 3 4 5 6
    expect(tableauTrie).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Inverser un tableau", () => {
    // Créer un tableau avec 6 éléments
    const tableau = [1, 2, 3, 4, 5, 6];
    expect(tableau).toEqual([1, 2, 3, 4, 5, 6]);
    // Inverser le tableau (fonction reverse)
    let tableauInverse = tableau.reverse();
    // Vérifier que le tableau contient 6 5 4 3 2 1
    expect(tableauInverse).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it("Trouver un élément dans un tableau", () => {
    // Créer un tableau avec 6 éléments
    const tableau = [1, 2, 3, 4, 5, 6];
    expect(tableau).toEqual([1, 2, 3, 4, 5, 6]);

    // Trouver l'element qui vaut 3 dans le tableau (fonction find)
    let index = tableau.find(function (element) {
      return element === 3;
    });
    // Vérifier que l'index est 3
    expect(index).toEqual(3);
  });
});

// Nombre % 2 reste de la division par 2

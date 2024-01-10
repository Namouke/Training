import { describe, expect, it } from "vitest";

describe("Boucles For", () => {
  // rappel sur les boucles for: il y en a 3 sortes:
  // - 1 for (let i = START; i < END; i++) { ... }
  // - 2 for (let i in tableau) { ... }
  // - 3 for (let element of tableau) { ... }
  // La 1 c'est la plus dure, mais la plus puissante: on peut faire tout ce qu'on veut avec
  // Tu luis dis où commencer; où s'arrêter; et comment avancer. La plupart du temps
  // on commence a 0, on finit à tableau.length, et on avance de 1 en 1. Mais dans les exercices
  // de batard que je vais te faire faire, tu vas en avoir des plus dures

  // La 2 c'est un peut comme la 1, mais au lieu de lui dire ou commencer et ou finir,
  // tu lui dis juste "Pour chaque element dans le tableau, fais ça". Et le i c'est l'index
  // de l'element dans le tableau. Donc si tu as un tableau [1, 2, 3], le i va prendre les valeurs
  // 0, 1, 2

  // La 3 c'est comme la deux, mais au lieu de te donner l'index, il te donne l'element directement
  // Donc si tu as un tableau [1, 2, 3], le element va prendre les valeurs 1, 2, 3

  it("creer un tableau avec les nombres de 0 à 10 exclus", () => {
    // avec une boucle for de style 1
    const tableau = [];
    for (let i = 0; i < 10; i++) {
      tableau.push(i);
    }
    expect(tableau).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("creer un tableau avec les 10 premiers nombres pairs", () => {
    // avec une boucle for de style 1

    const tableau = [];
    for (let i = 0; i <= 18; i += 2) {
      tableau.push(i);
    }

    expect(tableau).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
  });

  it("creer un tableau avec les 10 premiers nombres impairs", () => {
    // avec une boucle for de style 1
    const tableau = [];
    for (let i = 1; i <= 19; i += 2) {
      tableau.push(i);
    }
    expect(tableau).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  });

  it("Faire la somme des elements d un tableau", () => {
    // avec une boucle for de style 1
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }

    // faire la somme des elements du tableau

    expect(somme).toEqual(45);
  });

  it("Faire la somme des 5 premiers elements d un tableau", () => {
    // avec une boucle for de style 1
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let somme = 0;
    // faire la somme des 5 premiers elements du tableau+
    for (let i = 0; i < 5; i++) {
      somme += tableau[i];
    }
    expect(somme).toEqual(15);
  });

  it("Faire la somme des 5 derniers elements d un tableau", () => {
    // avec une boucle for de style 1
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let somme = 0;
    // faire la somme des 5 derniers elements du tableau
    for (let i = 4; i < tableau.length; i++) {
      somme += tableau[i];
    }
    expect(somme).toEqual(35); // commentaire bichette tu avais mis 40
  });

  it("Faire la somme des elements d un tableau qui sont pairs", () => {
    // avec une boucle for de style 1
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let somme = 0;
    // Faire la somme, mais ne pas prendre en compte les elements impairs
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] % 2 === 0) {
        somme += tableau[i];
      }
    }
    expect(somme).toEqual(20);
  });

  it("Faire la somme des elements d un tableau qui sont impairs", () => {
    // avec une boucle for de style 1
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let somme = 0;
    // Faire la somme, mais ne pas prendre en compte les elements pairs
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] % 2 !== 0) {
        somme += tableau[i];
      }
    }
    expect(somme).toEqual(25);
  });

  it("Faire la somme des elements d un tableau qui sont pairs et plus grands que 5", () => {
    // avec une boucle for de style 1
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] % 2 === 0 && tableau[i] > 5) {
        somme += tableau[i];
      }
    }
    expect(somme).toEqual(14);
  });

  it("Parcourir un tableau a l envers", () => {
    // avec une boucle for de style 1
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const tableauInverse = [];
    // parcourir le tableau a l envers et mettre les elements dans tableauInverse
    // utiliser la fonction push pour ajouter un element a un tableau
    // Il faut lui dire de partir de la fin du tableau, et d aller jusqu au debut
    for (let i = tableau.length - 1; i >= 0; i--) {
      tableauInverse.push(tableau[i]);
    }
    expect(tableauInverse).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});

import { describe, expect, it } from "vitest";

describe("Plus dur", () => {
  it(`Ajouter au tableau l'element 10, seulement si il n'est pas deja present (for)`, () => {
    function ajouterSiAbsentFor(tableau, element) {
      // ajouter au tableau l'element 10, seulement si il n'est pas deja present
      for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === element) {
          return;
        }
      }
      tableau.push(element);
    }
    const tableau = [1, 2, 3, 4, 5, 6];
    ajouterSiAbsentFor(tableau, 10);
    expect(tableau).toEqual([1, 2, 3, 4, 5, 6, 10]);
    const tableau2 = [1, 2, 3, 4, 5, 6];
    ajouterSiAbsentFor(tableau2, 3); // c'est pas tableau 2 ?
    expect(tableau2).toEqual([1, 2, 3, 4, 5, 6]); // idem pour ici ?
  });

  it(`Ajouter au tableau l'element 10, seulement si il n'est pas deja present (forof)`, () => {
    function ajouterSiAbsentFor(tableau, element) {
      // ajouter au tableau l'element 10, seulement si il n'est pas deja present
    }

    const tableau = [1, 2, 3, 4, 5, 6];
    ajouterSiAbsentFor(tableau, 10);
    expect(tableau).toEqual([1, 2, 3, 4, 5, 6, 10]);
    const tableau2 = [1, 2, 3, 4, 5, 6];
    ajouterSiAbsentFor(tableau2, 3);
    expect(tableau2).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it(`Ajouter au tableau l'element 10, seulement si il n'est pas deja present (forin)`, () => {
    function ajouterSiAbsentFor(tableau, element) {
      // ajouter au tableau l'element 10, seulement si il n'est pas deja present
      if (!tableau.includes(element)) {
        tableau.push(element);
      }
    }

    const tableau = [1, 2, 3, 4, 5, 6];
    ajouterSiAbsentFor(tableau, 10);
    expect(tableau).toEqual([1, 2, 3, 4, 5, 6, 10]);
    const tableau2 = [1, 2, 3, 4, 5, 6];
    ajouterSiAbsentFor(tableau2, 3); 
    expect(tableau2).toEqual([1, 2, 3, 4, 5, 6]); 
  });

  it(`Supprimer du tableau tous les elements qui ont pour id 10`, () => {
    function supprimerElements(tableau, id) {
      // supprimer du tableau l'element qui a pour id 10
      const nouveauTableau = tableau.filter((element) => element.id !== id);

      // Remplacer le contenu du tableau d'origine avec le nouveau tableau filtré
      tableau.length = 0;
      tableau.push(...nouveauTableau);
    }

    const tableau = [
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 10, nom: "c" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 10, nom: "f" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ];
    supprimerElements(tableau, 10);
    expect(tableau).toEqual([
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ]);
  });

  it(`Supprimer du tableau le premier element qui a pour id 10 `, () => {
    function supprimerElement(tableau, id) {
      // supprimer du tableau l'element qui a pour id 10
      const index = tableau.findIndex((element) => element.id === id);

      if (index !== -1) {
        tableau.splice(index, 1); // Supprimer un élément à l'index trouvé
      }
    }

    const tableau = [
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 10, nom: "c" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 10, nom: "f" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ];
    supprimerElement(tableau, 10);
    expect(tableau).toEqual([
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 10, nom: "f" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ]);
  });

  it(`Supprimer du tableau le dernier element qui a pour id 10 `, () => {
    function supprimerElement(tableau, id) {
      // supprimer du tableau l'element qui a pour id 10
      for (let i = tableau.length - 1; i >= 0; i--) {
        if (tableau[i].id === id) {
          tableau.splice(i, 1); // Supprimer le dernier élément avec l'id spécifié
          break; // Sortir de la boucle une fois l'élément supprimé
        }
      }
    }

    const tableau = [
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 10, nom: "c" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 10, nom: "f" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ];
    supprimerElement(tableau, 10);
    expect(tableau).toEqual([
      { id: 1, nom: "a" },
      { id: 3, nom: "b" },
      { id: 10, nom: "c" },
      { id: 2, nom: "d" },
      { id: 9, nom: "e" },
      { id: 8, nom: "g" },
      { id: 4, nom: "h" },
      { id: 5, nom: "i" },
    ]);
  });
});

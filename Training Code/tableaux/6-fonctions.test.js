import { describe, expect, it } from "vitest";

/*
Il y a plein de fonctions utiles sur les tableaux, qui t'evitent d'avoir a ecrire des boucles.
Tu peux les trouver ici: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
On va voir map, filter, find, sort, c'est les plus courantes ( ma pref c'est reduce mais on verra plus tard )
Elles marchent toutes pareil: tu leur donne une fonction en parametre, et elles vont l'appliquer a chaque element du tableau.
 
 - map retourne un tableau avec le meme nombre d'elements que le tableau d'origine, mais transformes par la fonction
 - filter retourne un tableau avec seulement les elements qui ont passe le test de la fonction
 - find retourne le premier element qui a passe le test de la fonction
 - sort retourne un tableau trie selon la fonction
*/
describe("Fonctions", () => {
  it("Doubler tous les elements du tableau", () => {
    const tableau = [1, 2, 3, 4, 5, 6];
    const tableauDouble = tableau.map((element) => {
      return element * 2;
    });
    // ici on utilise une arrow function, c'est comme une fonction normale mais ecrite plus vite
    // elle prend un parametre (element) et retourne element * 2
    // comme elle ne fait qu'une seule ligne, on peut l'ecrire sans les accolades et le return
    // const tableauDouble = tableau.map(element => element * 2);
    // c'est pareil, c'est juste plus court.
    expect(tableauDouble).toEqual([2, 4, 6, 8, 10, 12]);
  });

  it("Ajouter un a tous les elements d'un tableau", () => {
    const tableau = [1, 2, 3, 4, 5, 6];
    const tableauInc = tableau.map((element) => {
      return element + 1;
    });
    expect(tableauInc).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it("Filtrer les elements pairs", () => {
    const tableau = [1, 2, 3, 4, 5, 6];
    let tableauPairs = tableau.filter((element) => element % 2 === 0);
    // Ici tu utilises filter pour garder seulement les elements pairs
    //  valeur % 2 === 0 te dit si valeur est pair
    expect(tableauPairs).toEqual([2, 4, 6]);
  });

  it("Trouver le premier element pair", () => {
    const tableau = [1, 2, 3, 4, 5, 6];
    let premierPair = tableau.find((element) => element % 2 === 0);
    // Ici tu utilises find pour trouver le premier element pair
    expect(premierPair).toEqual(2);
  });

  it("Trouver le dernier element pair", () => {
    const tableau = [1, 2, 3, 4, 5, 6];
    let dernierPair = [...tableau]
      .reverse()
      .find((element) => element % 2 === 0);

    // Ici tu utilises find pour trouver le dernier element pair
    expect(dernierPair).toEqual(6);
  });

  it("Inverser les elements", () => {
    const tableau = [1, 2, 3, 4, 5, 6]; // je pense qu'il y a un problème de l'énoncer.
    let tableauTrie;
    tableauTrie = tableau.reverse();

    // Ici tu utilises sort pour trier les elements
    expect(tableauTrie).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it("Trier les elements dans l'ordre inverse", () => {
    const tableau = [1, 2, 3, 4, 5, 6];
    let tableauTrie = [...tableau];
    tableauTrie.sort((a, b) => b - a);

    // Ici tu utilises sort pour trier les elements
    // il faut que tu lui passes une fonction a deux parametres  disons a et b
    // La fonction doit retourner un nombre negatif si a doit etre avant b
    // un nombre positif si b doit etre avant a
    // et 0 si ils sont egaux

    expect(tableauTrie).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it("Trier les elements par ordre alphabetique", () => {
    const tableau = ["c", "a", "b", "d", "f", "e"];
    let tableauTrie = [...tableau];
    tableauTrie.sort((a, b) => a.localeCompare(b));
    // pour les strings, tu peux appeler la fonction
    // localCompare(a,b) pour comparer a et b
    expect(tableauTrie).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  it("Trier les elements par ordre alphabetique inverse", () => {
    const tableau = ["c", "a", "b", "d", "f", "e"];
    let tableauTrie = [...tableau];
    tableauTrie.sort((a, b) => b.localeCompare(a));
    expect(tableauTrie).toEqual(["f", "e", "d", "c", "b", "a"]);
  });

  it(`Diviser tous les elements par 2 et les trier par ordre croissant`, () => {
    const tableau = [20, 10, 50, 30, 40, 60];
    let tableauTrie = tableau
      .map((e) => {
        return e / 2
      })
      .sort((a, b) => a - b);



    expect(tableauTrie).toEqual([5, 10, 15, 20, 25, 30]);
  });
});

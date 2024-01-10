import { it, describe, expect, isFirstRun } from 'vitest';


describe('Pure Impure', () => {
  it('Creer une fonction impure qui remplace les elements d un tableau par leur carre', () => {
    function carreTableau(tableau) {

    }

    const tableau = [1, 2, 3, 4, 5];
    const tableauCarre = carreTableau(tableau);
    expect(tableau).toEqual([1, 4, 9, 16, 25]);
    expect(tableauCarre).toEqual([1, 4, 9, 16, 25]);
  });

  it('Creer une fonction pure qui remplace les elements d un tableau par leur carre', () => {
    function carreTableau(tableau) {

    }

    const tableau = [1, 2, 3, 4, 5];
    const tableauCarre = carreTableau(tableau);
    expect(tableauCarre).toEqual([1, 4, 9, 16, 25]);
    expect(tableau).toEqual([1, 2, 3, 4, 5]);
  });
  it('Creer deux fonction qui remplacent les elements d un tableau par leur division par deux ', () => {
    function maxPure(tableau) {

    }
    function maxImpure(tableau) {

    }
    const N = 1000000;
    const testTableau = new Array(N).fill(0).map(() => Math.floor(Math.random() * N));
    console.time('pure');
    maxPure(testTableau);
    console.timeEnd('pure');
    console.time('impure');
    maxImpure(testTableau);
    console.timeEnd('impure');
    // console.time permet de mesurer le temps de calcul entre deux points (en milisecondes)
    // regardes dans ta console, normalement la fonction impure est plus rapide
  });
  it('Creer une fonction qui renvoie le nombre de fois ou un element est present dans un tableau', () => {
    function count(tableau, element) {

    }

    const tableau = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    expect(count(tableau, 1)).toBe(2);
    expect(count(tableau, 2)).toBe(2);
    expect(count(tableau, 3)).toBe(2);
    expect(count(tableau, 4)).toBe(2);
    expect(count(tableau, 5)).toBe(2);
    expect(count(tableau, 6)).toBe(0);
  });
  it('Creer une fonction impure qui eneleve la cle "age" d un objet', () => {
    function enleverAge(objet) {

    }

    const objet = { nom: 'toto', age: 42 };
    const objetSansAge = enleverAge(objet);
    expect(objetSansAge).toEqual({ nom: 'toto' });
    expect(objet).toEqual({ nom: 'toto' });
  });


  it('Creer une fonction pure qui eneleve la cle "age" d un objet', () => {
    // delete objet.cle te permet d'enlever une cle d'un objet
    function enleverAge(objet) {

    }

    const objet = { nom: 'toto', age: 42 };
    const objetSansAge = enleverAge(objet);
    expect(objetSansAge).toEqual({ nom: 'toto' });
    expect(objet).toEqual({ nom: 'toto', age: 42 });
  });


  // todo leo fix expect 
  it.skip('Creer une fonction pure qui eneleve la cle "age" de tous les elements d un tableau', () => {
    // Ici il va te falloir lire la section sur le deep copy
    function enleverAge(tableau) {

    }

    const tableau = [{ nom: 'toto', age: 42 }, { nom: 'tata', age: 100 },
    { nom: 'titi' }];
    const objetSansAge = enleverAge(objet);
    expect(objetSansAge).toEqual({ nom: 'toto' });
    expect(objet).toEqual({ nom: 'toto', age: 42 });
  });
});
# Les Fonctions !

Y en a des choses a dire! On va y aller par etapes.

## La Base!

Une fonction c'est un bout de code que tu peux reutiliser. L'idee c'est
de l'ecrire une fois, et ensuite de l'utiliser plein de fois,
c'est plus pratique que de tout reecrire, ca permet d'organiser ton code
et plein d'autre trucs.

Ya plusieur manieres de creer une fonction, on va commencer par la classique

```js
function nomDeMaFonction(argumen1, argument2) {
  // le code de ma fonction
}
```

Pour l'utiliser, on fait comme ca:

```js
nomDeMaFonction("valeur1", "valeur2");
```

Tu peux mettre le nom que tu veux, autant d'arguments que tu veux(0,1,2,1000)
et tu peux mettre le code que tu veux dans ta fonction.

## Return

L'instruction return permet de retourner une valeur,
pour pouvoir recuperer le resultat de la fonction et l'utiliser

```js
function nomDeMaFonction(argumen1, argument2) {
  return argument1 + argument2;
}

const resultat = nomDeMaFonction("valeur1", "valeur2");
console.log(resultat); // affiche 'valeur1valeur2'
```

Bon la c'est un peu con comme fonction, parcque c'est plus rapide de juste faire

```js
const resultat = "valeur1" + "valeur2";
```

Mais c'est pour l'example.

Tu n'es pas oblige de mettre un return dans ta fonction, si tu n'en mets pas,
la fonction retournera `undefined`. Tu peux aussi mettre plusieurs return dans
une fonction, mais une fois que le code a atteint un return, il ne fera plus
rien d'autre. (un peu comme `break` dans une boucle)

**Example:**

```js
function pairouFois2(nombre) {
  if (nombre % 2 === 0) {
    return "Pair";
  }
  // Ici, pas besoin de else, parceque dans le if, on a return.
  // ca s'appelle un 'early return', c'est une bonne pratique.
  const double = nombre * 2;
  return double;
}
```

## Les Parametres

Les paramettres (ou arguments ou args) c'est les trucs que tu mets en parentheses dans ta fonction.
Une fonction fera toujours la meme chose, mais son resultat depend de ce que
tu lui donne en paramettre.

```js
function milieu(param1, param2) {
  // code
  return (param1 + param2) / 2;
}
const a = milieu(1, 2); // a = 1.5
const b = milieu(1, 2); // b = 1.5

const c = milieu(3, 5); // c= 4
const d = milieu(50, 100); // d = 75
```

Si tu donnes les memes paramettres, tu auras toujours le meme resultat.(sauf dans certains cas qu'on verra plus tard)

**Exercices:**
Tu peux faire les exercices `01-labase`.

## La memoire

En javascript, c'est pas toi qui gere la memoire, c'est le navigateur. Mais ya quand meme des trucs a savoir.

### Copie/Shallow Copy/Deep Copy, fonctions pures et fonctions impures

Quand tu passes des arguments a une fonction, ils sont copies. Ca veut dire que si tu les modifies dans la fonction, ca ne les modifie pas en dehors de la fonction.

```js
function double(nombre) {
  // modification de nombre
  nombre = nombre * 2;
  return nombre;
}
let a = 2;
const b = double(a); // retourne 4
console.log(a); // affiche 2
console.log(b); // affiche 4
```

Par contre, si ton argument est un tableau ou un Objet, quand tu le modifies dans la fonction, ca le modifie aussi en dehors de la fonction.

```js
function ajoute5Impure(tab) {
  // modification de tab
  tab.push(5);
  return tab;
}
const a = [1, 2, 3];
const b = ajoute5Impure(a);
console.log(a); // affiche [1,2,3,5]
console.log(b); // affiche [1,2,3,5]
```

Ca c'est parceque les tableaux et les objets sont des references. Ca veut dire que quand tu fais `const a = [1,2,3]`, `a` ne contient pas le tableau, mais une reference vers le tableau. C'est comme si tu avais un bout de papier avec l'adresse du tableau dessus. Quand tu fais `const b = a`, tu fais une copie de la reference, pas du tableau. Donc `a` et `b` pointent vers le meme tableau. Si tu modifies le tableau, ca modifie `a` et `b`.
On appelle ca une `shallow copy`, parceque tu copies la reference, mais pas le contenu.

Si tu veux faire une copie du contenu d'un tableau, utilises `slice`, ca fait un nouveau tableau avec les memes elements.

```js
function ajoute5Pure(tab) {
  // modification de tab
  const b = tab.slice();
  b.push(5);
  return b;
}
const a = [1, 2, 3];
const b = ajoute5Pure(a);
console.log(a); // affiche [1,2,3]
console.log(b); // affiche [1,2,3,5]
```

On dit qu'une fonction est `pure` quand elle ne modifie pas les arguments qu'on lui passe.
On dit qu'elle est `impure` quand elle les modifie.

- L'avantage des fonctions pures, c'est que tu as moins de chance de modifier des trucs par accident mais leur default c'est d'etre plus lente (ca prend du temps de tout recopier a chaque fois), et de prendre plus de memoire (parceque tu as 2 tableaux au lieu d'un).
- L'avantage des fonctions impures, c'est que c'est plus rapide et ca prend moins de memoire, mais tu peux modifier des trucs par accident.

Pour les objets c'est pareil, si tu le passes direct dans une fonction, toutes les modifs qui se passent dans la fonction vont se passer en dehors de la fonction aussi. Si tu veux faire une copie, tu peux utiliser `Object.assign` ou le spread operator `...`.

```js
function changeNomImpure(obj, nouveaunom) {
  // modification de obj
  obj.nom = nouveaunom;
  return obj;
}
const a = {
  nom: "Brigitte",
  age: 20,
};
const b = changeNomImpure(a, "Jeanne");
console.log(a); // affiche {nom: "Jeanne", age: 20}
console.log(b); // affiche {nom: "Jeanne", age: 20}
```

```js
function changeNomPure(obj, nouveaunom) {
  // modification de obj
  const b = { ...obj };
  b.nom = nouveaunom;
  return b;
}
const a = {
  nom: "Brigitte",
  age: 20,
};
const b = changeNomPure(a, "Jeanne");
console.log(a); // affiche {nom: "Brigitte", age: 20}
console.log(b); // affiche {nom: "Jeanne", age: 20}
```

**Exercices:**
Tu peux faire les exercices `02-pure-impure`.

#### Deep Copy

Quand tu fais `tableau.slice()`, ca cree un tableau avec les memes elements que ton tableau d'origine. Mais si les elements de ton tableau sont des objets, ca cree un nouveau tableau avec les memes objets. Donc si tu modifies un objet dans le tableau, ca va modifier l'objet dans les 2 tableaux. Donc il faut te mefier:

```js
function changeNomImpure(tab, nouveaunom) {
  // modification de tab
  const copie = tab.slice();
  for (let personne of copie) {
    personne.nom = nouveaunom;
  }
  return copie;
}

const a = [
  { nom: "Brigitte", age: 20 },
  { nom: "Jeanne", age: 30 },
];
const b = changeNomImpure(a, "Marie");
console.log(a); // affiche [{nom: "Marie", age: 20}, {nom: "Marie", age: 30}]
console.log(b); // affiche [{nom: "Marie", age: 20}, {nom: "Marie", age: 30}]
```

```js
function changeNomPure(tab, nouveaunom) {
  // modification de tab
  const res = [];
  for (let personne of copie) {
    // il faut faire une copie de chaque objet
    res.push({
      ...personne,
      nom: nouveaunom,
    });
  }
  return res;
}

const a = [
  { nom: "Brigitte", age: 20 },
  { nom: "Jeanne", age: 30 },
];
const b = changeNomPure(a, "Marie");
console.log(a); // affiche [{nom: "Marie", age: 20}, {nom: "Marie", age: 30}]
console.log(b); // affiche [{nom: "Marie", age: 20}, {nom: "Marie", age: 30}]
```

Et meme comme ca t'es pas sorti d'affaire: imamgines que tu as un objet qui contient d'autre objets, ou des tableaux. Le `...` va faire une shallow copie des sous objets, pas une deep copie.

```js
fonction changeNomEnfantImpure(obj, nouveaunom) {
  // modification de obj
  obj.enfants[0].nom = nouveaunom;
  return obj;
}

const a = {
  nom: "Brigitte",
  age: 20,
  enfants: [
    { nom: "Jeanne", age: 30 },
    { nom: "Marie", age: 40 },
  ],
};
const b = changeNomEnfantImpure(a, "Pierre");
console.log(a); // affiche {nom: "Brigitte", age: 20, enfants: [{nom: "Pierre", age: 30}, {nom: "Marie", age: 40}]}
console.log(b); // affiche {nom: "Brigitte", age: 20, enfants: [{nom: "Pierre", age: 30}, {nom: "Marie", age: 40}]}
```

En fait la seule facon de faire une deep copy, c'est de faire une fonction compliquee qui va parcourir tout l'objet et faire une copie de chaque element. Ca existe, mais c'est pas pratique. Donc en general, on fait juste une shallow copy, et on fait attention a ne pas modifier les objets qu'on passe en argument.

## Les Fonctions Anonymes (Arrow Functions) et this

On rentre dans le dur ma bichette !
La seconde facon de creer une fonction c'est de faire ca:

```js
const maFonction = (arg1, arg2) => {
  // code
};
```

On dit que c'est des arrow fonctions parce que ca ressemble a une fleche `=>`.

On s'en sert pour deux choses principalement:

- fonctions a usage unique
- fonctions qui ont besoin de `this`

### Fonctions a usage unique

En javascript il y a plein de fonctions qui prennent une fonction en argument. Comme `map`, `filter`, `reduce`, `forEach` que tu as deja vu dans les tableaux. En general c'est plus pratique de leur passer une fonction anonyme.

```js
fonction double(nombre) {
  return nombre * 2;
}
const a = [1, 2, 3];
// ici je passe une fonction normale a map
const b = a.map(double);
```

Avec une arrow fonction:

```js
const a = [1, 2, 3];
// ici je passe une arrow fonction a map
const b = a.map((nombre) => {
  return nombre * 2;
});
```

C'est plus court et ca ne pollue pas mon fichier avec plein de fonctions que je ne veux pas reutiliser.

### Fonctions qui ont besoin de `this`

Ya plusieur notions:

- scope (context): ou est ce que je suis dans mon code, a quoi j'ai acces
- this: Qui je suis (oui parce qu' en js tu incarnes differents personages a different moments)

#### Scope

Quand tu declares une fonction, que tu fais un if/else ou une boucle, tu ouvres des acollades: `{` tu ecris du code`}` et tu les fermes. A chaque fois que tu ouvres des acollades, tu crees un nouveau `scope`. C'est comme une bulle, tu as acces a tout ce qui est dans la bulle, mais pas a ce qui est en dehors. Par exemple:

```js
const a = 1;
function maFonction() {
  const b = 2;
  console.log(a); // affiche 1
  console.log(b); // affiche 2
}
maFonction();
console.log(a); // affiche 1
console.log(b); // affiche une erreur, b n'existe pas ici
```

```js
const a = 1;
function maFonction() {
  const b = 2;
  if (a === 1) {
    const c = 3;
    console.log(a); // affiche 1
    console.log(b); // affiche 2
    console.log(c); // affiche 3
  }
  console.log(a); // affiche 1
  console.log(b); // affiche 2
  console.log(c); // affiche une erreur, c n'existe pas ici
}
```

#### This

En javascript, selon ou tu es, `this` n'a pas la meme valeur. En general, `this` est egal a l'objet qui contient la fonction. Par exemple:

```js
const obj = {
  nom: "Brigitte",
  age: 20,
  direBonjour() {
    console.log(`Bonjour, je m'appelle ${this.nom}`);
  },
};
obj.direBonjour(); // affiche 'Bonjour, je m'appelle Brigitte'
```

Mais si tu fais une fonction anonyme, `this` n'est pas egal a l'objet qui contient la fonction, il est egal a `undefined`.

```js
const obj = {
  nom: "Brigitte",
  age: 20,
  direBonjour: () => {
    console.log(`Bonjour, je m'appelle ${this.nom}`);
  },
};
obj.direBonjour(); // affiche 'Bonjour, je m'appelle undefined'
```

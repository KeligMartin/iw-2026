class Utilisateur {

    private name: string;
    age: number;
    solde: number;
    commandes: Repas[] = [];

    constructor(name: string, age: number, solde: number) {
        this.name = name;
        this.age = age;
        this.solde = solde;
    }

    get userName() {
        return this.name;
    }

    passerCommande(repas: Repas): void {
        this.commandes.push(repas);
        this.solde -= repas.prix;
    }

    afficherCommandes(): void {
        console.table(this.commandes)
    }

    totalCalories(): number {
        return this.commandes
            .reduce((total, repas) => total + repas.calories, 0);
    }

    prixTotal(): number {
        return this.commandes
            .filter(repas => repas.isVegan)
            .reduce((total, repas) => total + repas.prix, 0);
    }
}

enum TypeDeRepas {
    MAIN = "main",
    DESSERT = "dessert",
    BOISSON = "boisson"
}

type typeRepas = 'main' | 'dessert' | 'boisson' | 'entree';

interface Repas {
    prix: number;
    description: string;
    calories: number;
    isVegan: boolean;
    type: typeRepas
}

const repasTotal: Repas = { prix: 100, description: "Pizza", calories: 1000, isVegan: false, type: 'main' };
const repasPartiel: Partial<Repas> = { prix: 100, description: "Pizza" };



interface Gouter extends Repas {
    marque: string
}

interface Boisson {
    prix: number;
    volume: number
}

const utilisateur = new Utilisateur("John", 30, 1000);

const repas1: Repas = { prix: 100, description: "Pizza", calories: 1000, isVegan: false, type: 'main' };
const repas2: Repas = { prix: 200, description: "Burger", calories: 650, isVegan: false, type: 'main'};


const cartes: Repas[] = [repas1, repas2]

console.log(cartes
    .filter(repas => repas.type === 'main')
    .reduce((total, repas) => total + repas.prix, 0))


// Record<K, V>
const menuDuJour: Record<typeRepas, () => number> = {
    'main': () => 1 + 1,
    'dessert': () => 2 + 2,
    'boisson': () => 3 + 3,
    'entree': () => 4 + 4
}

const monRepas: typeRepas = 'main';

console.log(menuDuJour['main']())
console.log(menuDuJour['dessert']())
console.log(menuDuJour['boisson']())
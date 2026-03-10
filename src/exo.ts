class Utilisateur {

    private name: string;
    age: number;
    solde: number;

    constructor(name: string, age: number, solde: number) {
        this.name = name;
        this.age = age;
        this.solde = solde;
    }

    get userName() {
        return this.name;
    }

    passerCommande(): void {
        // A FAIRE
    }

    afficherCommandes(): void {
        // A FAIRE
    }
}

interface Repas {
    prix: number;
    description: string;
}


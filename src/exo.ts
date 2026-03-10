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
}

interface Repas {
    prix: number;
    description: string;
}

const utilisateur = new Utilisateur("John", 30, 1000);

const repas1: Repas = { prix: 100, description: "Pizza" };
const repas2: Repas = { prix: 200, description: "Burger" };
utilisateur.passerCommande(repas1);
utilisateur.passerCommande(repas2);
utilisateur.afficherCommandes();


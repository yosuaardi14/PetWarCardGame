class Player {
    constructor(name, ranger, maxLife) {
        this.name = name;
        this.rangerName = ranger["name"];
        this.ranger = ranger;
        this.maxLife = maxLife;
        this.life = maxLife;
        this.cardDeck = [];
        this.isDead = false;
    }
}
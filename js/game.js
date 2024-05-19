class Game {
    constructor(canvas, ctx) {
        this.gameUI = new GameUI(canvas, ctx);
        // Visible
        this.actionUp = [null, null, null, null, null, null]; // 6
        this.petLine = []; // 6
        this.actionDown = [null, null, null, null, null, null]; // 6

        //Not Visible
        this.actionDeck = [];
        this.petDeck = new CircularQueue();
        this.discardPile = [];

        //
        this.rangerList = Array.from(CANVAS_RANGER);
        this.playerArr = [];
        this.playerNum = 2;
        this.maxLife = 5;
        this.nowTurn = 0;
        this.turn = 0;
        this.round = 0;
    }

    initActionDeck() {
        for (var i in ACTION) {
            // console.log(i);
            var actionCard = Object.assign({}, ACTION[i]);
            switch (actionCard["name"]) {
                case "Grenade":
                case "Grenade-Mega Grenade":
                    actionCard["turn"] = 0;
                    break;
                case "Hide":
                case "Hide-Master Hide":
                    actionCard["playerId"] = -1;
                    break;
            }
            // console.log(ACTION[i]);

            for (var j = 0; j < ACTION[i]["cardNum"]; j++) {
                this.actionDeck.push(actionCard);
            }
            delete actionCard.cardNum;
        }
        shuffle(this.actionDeck);
        console.log(this.actionDeck);
    }


    dealActionCard(size) {
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < this.playerArr.length; j++) {
                this.playerArr[j].cardDeck.push(this.actionDeck[0]);
                this.actionDeck.splice(0, 1);
            }
        }
    }

    getActionCard(player) {
        this.moveDiscardPileToActionDeck();
        player.cardDeck.push(this.actionDeck[0]);
        this.actionDeck.splice(0, 1);
    }

    initPetDeck() {
        for (var i = 0; i < PET["Jungle"].cardNum; i++) {
            var pet = Object.assign({}, PET["Jungle"]);
            this.petDeck.add([pet]);
        }
        for (var i = 0; i < this.playerArr.length; i++) {
            for (var j = 0; j < this.playerArr[i].maxLife; j++) {
                var pet = Object.assign({}, PET[this.playerArr[i].ranger["pet"]]);
                this.petDeck.add([pet]);
            }
        }
        this.petDeck.shuffleAll();
        // console.log(this.petDeck);
    }

    showPetLine() {
        this.petLine = this.petDeck.getSome(6);
        // this.petDeck.printElement(6);
        // this.petDeck.printAll();

        this.gameUI.drawActionUp(this.actionUp, this.actionDeck);
        this.gameUI.drawPetLine(this.petLine, this.petDeck);
        this.gameUI.drawActionDown(this.actionDown, this.discardPile);
    }

    getFirstTurn() {
        var firstPet = this.petLine[0];
        for (var i = 0; i < this.petLine.length; i++) {
            firstPet = this.petLine[i];
            if (firstPet["name"] != PET["Jungle"]["name"]) {
                firstPet = this.petLine[i];
                break;
            }
        }
        for (var i = 0; i < this.playerArr.length; i++) {
            if (this.playerArr[i].ranger["pet"] == firstPet["name"]) {
                this.nowTurn = i;
                break;
            }
        }
    }

    moveDiscardPileToActionDeck() {
        if (this.actionDeck.length == 0) {
            shuffle(this.discardPile);
            this.actionDeck = this.discardPile;
            this.discardPile = [];
        }
    }

    initGame() {
        this.initActionDeck();
        for (var i = 0; i < this.playerNum; i++) {
            var rand = Math.floor(Math.random() * this.rangerList.length);
            var player = new Player("player" + i, this.rangerList[rand], this.maxLife);
            this.playerArr.push(player);
            this.rangerList.splice(rand, 1);
        }
        this.actionDeck = this.actionDeck;
        this.dealActionCard(3);
        this.initPetDeck();
        this.showPetLine();
        this.getFirstTurn();
        // this.startGame();
        // console.log(this.playerArr);
        // console.log(this.actionDeck);
        // this.getActionCard(this.playerArr[0]);
        // console.log(this.playerArr);
    }

    showPlayerActionCard(player) {
        console.log(player.name + "-" + player.rangerName);
        console.log(player.cardDeck);
        let res;
        do {
            res = prompt("Select Card " + player.cardDeck.length);
            if (isNaN(res) || res == "") {
                res = null;
                continue;
            }
            if (parseInt(res) > player.cardDeck.length) {
                res = null;
                continue;
            }
        } while (res === null);
        let cardNum = parseInt(res) - 1;
        this.useActionCard(player, cardNum);
    }

    useActionCard(player, cardNum) {
        var selectedCard = player.cardDeck[cardNum];
        console.log(selectedCard["name"]);
        var cardAbility;
        if (selectedCard["special"] !== null && player.rangerName === selectedCard["special"]["ranger"]) {
            console.log(selectedCard["special"]["ranger"]);
            var useSpecial = confirm("Do you want to use Special?");
            if (useSpecial == true) {
                cardAbility = selectedCard["special"]["ability"];
            } else {
                cardAbility = selectedCard["ability"];
            }
        } else {
            cardAbility = selectedCard["ability"];
        }
        this.abilityAction(player, cardAbility);
        this.actionFinish(player, cardNum, cardAbility);
        this.updateTurn();
    }

    abilityAction(player, action) {
        console.log(action);
        switch (action) {
            case "TwoAim":
                break;
            case "Aim":
                break;
            case "TwoBoom":
                break;
            case "Boom":
                break;
            case "Doom":
                break;
            case "Miss":
                break;
            case "GoForward":
                break;
            case "GoBackward":
                break;
            case "MoveThePet":
                break;
            case "Typhoon":
                break;
            case "GetCover":
                break;
            case "Armor":
                break;

            case "Kamikaze":
                break;

            case "GoAnyward":
                break;
            case "Overshock":
                break;
            case "Shield":
                break;
            case "Hide":
                break;
            case "MasterHide":
                break;
            case "Trap":
                break;
            case "MovingAim":
                break;

            case "Grenade":
                break;
            case "MegaGrenade":
                break;

            case "DoubleResurrect":
                break;
            case "Ressurect":
                break;

            case "LunchTime":
                for (var i = 0; i < this.actionUp.length; i++) {
                    if (this.actionUp[i] != undefined) {
                        // this.actionUp.splice(0, 1);
                        // this.discardPile.push();
                    }
                }
                break;
            case "Escape":
                break;
            case "DoubleRun":
                this.petDeck.moveForwardAll();
            case "Running":
                this.petDeck.moveForwardAll();
                break;
        }
    }

    actionFinish(player, cardNum, cardAbility) {
        switch (cardAbility) {
            case "Armor":
            case "Shield":
            case "Aim":
            case "TwoAim":
            case "Grenade":
            case "MegaGrenade":
            case "Hide":
            case "MasterHide":
            case "Trap":
                break;
            default:
                this.discardPile.push(player.cardDeck[cardNum]);
        }
        player.cardDeck.splice(cardNum, 1);
        this.getActionCard(player);
        this.showPetLine();
    }

    updateTurn() {
        this.nowTurn = (this.nowTurn + 1) % this.playerArr.length;
        while (this.playerArr[this.nowTurn].isDead) {
            this.nowTurn = (this.nowTurn + 1) % this.playerArr.length;
        }
        this.turn++;
        this.startGame();
    }

    startGame() {
        this.checkFinish();
        console.log("Discard Pile");
        console.log(this.discardPile);
        this.showPlayerActionCard(this.playerArr[this.nowTurn]);
    }

    finishGame(winner) {
        console.log(this.playerArr[winner].name + " is Win");
    }

    checkFinish() {
        var deadNum = 0;
        var winner = 0;
        for (var i = 0; i < this.playerArr.length; i++) {
            if (this.playerArr[i].life == 0) {
                this.playerArr[i].isDead = true;
                deadNum += 1;
            } else {
                winner = i;
            }
        }
        if (deadNum == (this.playerArr.length - 1)) {
            this.finishGame(winner);
        }
    }
}
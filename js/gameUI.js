class GameUI {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerCardCanvas = document.getElementById("playerCardCanvas");
        this.playerCardCtx = this.playerCardCanvas.getContext('2d');;
        this.emptyUp = ["C", "A", "N", "V", "A", "S"];
        this.emptyMid = ["R", "A", "N", "G", "E", "R"];
        this.emptyDown = ["P", "E", "T", "W", "A", "R"];
    }

    drawPlayerLife(playerArr) {
        let text = "";
        for (let i = 0; i < playerArr.length; i++) {
            text += playerArr[i].name + " (" + playerArr[i].ranger["pet"] + ") : " + playerArr[i].life + "/" + playerArr[i].maxLife;
            text += ", "
        }
        document.getElementById("playerList").innerHTML = text;
    }

    drawActionUp(array, actionDeck) {
        for (var i = 0; i < array.length; i++) {
            const emptyCard = new ActionEmpty(ctx, 150, 200, i * 160, 0, this.emptyUp[i]);
            emptyCard.draw();
            if (array[i] !== null) {
                const card = new ActionCard(ctx, 150, 200, i * 160, 0, array[i]);
                card.draw();
            }
        }
        const deck = new Deck(ctx, 150, 200, 6 * 160 + 10, 0, "Action Deck");
        deck.draw();
        if (actionDeck.length > 0) {
            const deck = new BackCard(ctx, 150, 200, 6 * 160 + 10, 0, "action", actionDeck.length);
            deck.draw();
        }
    }

    drawPetLine(array, petDeck) {
        for (var i = 0; i < 6; i++) {
            const emptyCard = new PetEmpty(ctx, 150, 200, i * 160, 210, this.emptyMid[i]);
            emptyCard.draw();
            if (i < array.length) {
                const card = new PetCard(ctx, 150, 200, i * 160, 210, array[i][0], array[i].length);
                card.draw();
            }
        }
        const deck = new PetDeck(ctx, 150, 200, 6 * 160 + 10, 210, "Pet Deck");
        deck.draw();
        if (petDeck.size > 0) {
            const deck = new BackCard(ctx, 150, 200, 6 * 160 + 10, 210, "pet", petDeck.size - 6);
            deck.draw();
        }
    }

    drawActionDown(array, discardPile) {
        for (var i = 0; i < array.length; i++) {
            const emptyCard = new ActionEmpty(ctx, 150, 200, i * 160, 420, this.emptyDown[i]);
            emptyCard.draw();
            if (array[i] !== null) {
                const card = new ActionCard(ctx, 150, 200, i * 160, 420, array[i]);
                card.draw();
            }
        }
        const deck = new Deck(ctx, 150, 200, 6 * 160 + 10, 420, "Discard Pile");
        deck.draw();
        if (discardPile.length > 0) {
            const deck = new BackCard(ctx, 150, 200, 6 * 160 + 10, 420, "action", discardPile.length);
            deck.draw();
        }
    }

    drawPlayerActionCardModal(player) {
        this.hideActionButton();
        console.log(player.name);
        for (let i = 0; i < player.cardDeck.length; i++) {
            //console.log(player.cardDeck[i]);
            const card = new ActionCard(this.playerCardCtx, 150, 200, i * 160, 0, player.cardDeck[i]);
            card.draw();
            var btn = document.getElementById("action" + i);
            btn.style.visibility = "visible";
            console.log(btn.style.visibility);
            // if (btn.onclick === null) {
            btn.onclick = (e) => {
                game.useActionCard(player, i);
                // this.hideActionButton();
            }
            // }

        }
    }

    showActionButton(player) {
        for (let i = 0; i < player.cardDeck.length; i++) {
            var btn = document.getElementById("action" + i);
            btn.style.visibility = "visible";
        }
    }

    hideActionButton() {
        for (let i = 0; i < 4; i++) {
            var btn = document.getElementById("action" + i);
            btn.style.visibility = "hidden";
        }
    }
}
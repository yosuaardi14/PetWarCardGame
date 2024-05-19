class ActionCard {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, cardInfo, useSpecial) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.cardInfo = cardInfo;
        this.titleUp = this.cardInfo["name"];
        this.titleDown = this.cardInfo["name"];
        if (this.cardInfo["name"].indexOf("-") >= 0) {
            if (useSpecial) {
                this.titleUp = this.cardInfo["name"].split("-")[1];
                this.titleDown = this.cardInfo["name"].split("-")[0];
            } else {
                this.titleUp = this.cardInfo["name"].split("-")[0];
                this.titleDown = this.cardInfo["name"].split("-")[1];
            }
        }
    }

    drawCardBackground() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '16px Arial';
        this.ctx.fillText(this.titleUp, this.cardX + 10, this.cardY + 30);
    }

    drawMirroredDetails() {
        this.ctx.save();
        this.ctx.translate(this.cardX + this.cardWidth / 2, this.cardY + this.cardHeight / 2);
        this.ctx.rotate(Math.PI);
        this.ctx.translate(-this.cardX - this.cardWidth / 2, -this.cardY - this.cardHeight / 2);
        this.ctx.fillStyle = 'orange';
        this.ctx.font = '16px Arial';
        this.ctx.fillText(this.titleDown, this.cardX + 10, this.cardY + 30);
        this.ctx.restore();
    }
    drawSeparationLine() {
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + this.cardHeight / 2);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + this.cardHeight / 2);
        this.ctx.stroke();
    }

    draw() {
        this.drawCardBackground();
        this.drawCardDetails();
        if (this.cardInfo["special"] != null)
            this.drawMirroredDetails();
        this.drawSeparationLine();
    }
}

class PetCard {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, cardInfo) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.cardInfo = cardInfo;
    }

    drawCardBackground() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '16px Arial';
        this.ctx.fillText(this.cardInfo["name"], this.cardX + 10, this.cardY + 30);
    }

    drawDescriptionDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(this.cardInfo["desc"], this.cardX + 10, this.cardY + 100);
    }

    drawSeparationLine() {
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + 50);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + 50);
        this.ctx.stroke();
    }

    draw() {
        this.drawCardBackground();
        this.drawCardDetails();
        // this.drawDescriptionDetails();
        this.drawSeparationLine();
    }
}

class RangerCard {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, cardInfo) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.cardInfo = cardInfo;
    }

    drawCardBackground() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '16px Arial';
        this.ctx.fillText(this.cardInfo["name"], this.cardX + 10, this.cardY + 30);
    }

    drawDescriptionDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(this.cardInfo["pet"], this.cardX + 10, this.cardHeight - 10);
    }

    drawSeparationLine() {
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + 50);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + 30);
        this.ctx.stroke();
    }

    drawSeparationLineDown() {
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardHeight - 30);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardHeight - 30);
        this.ctx.stroke();
    }

    draw() {
        this.drawCardBackground();
        this.drawCardDetails();
        this.drawDescriptionDetails();
        this.drawSeparationLine();
        this.drawSeparationLineDown();
    }
}



class ActionEmpty {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, text) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.text = text;
    }

    drawCardBackground() {
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '24px Arial';
        this.ctx.fillText(this.text, this.cardX + this.cardWidth / 2 - 8, this.cardY + this.cardHeight / 2 + 7.5);
    }

    drawCircle() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 3;
        const centerX = this.cardX + this.cardWidth / 2;
        const centerY = this.cardY + this.cardHeight / 2;
        const radius = 40;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        const radius2 = 60
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawSeparationLineVertical() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX + this.cardWidth / 2, this.cardY);
        this.ctx.lineTo(this.cardX + this.cardWidth / 2, this.cardY + this.cardHeight);
        this.ctx.stroke();
    }

    drawSeparationLineHorizontal() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + this.cardHeight / 2);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + this.cardHeight / 2);
        this.ctx.stroke();
    }


    draw() {
        this.drawCardBackground();
        this.drawSeparationLineVertical();
        this.drawSeparationLineHorizontal();
        this.drawCircle();
        this.drawCardDetails();
    }
}

class PetEmpty {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, text) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.text = text;
    }

    drawCardBackground() {
        this.ctx.fillStyle = 'cyan';
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '24px Arial';
        this.ctx.fillText(this.text, this.cardX + this.cardWidth / 2 - 8, this.cardY + this.cardHeight / 2 + 7.5);
    }

    drawCircle() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 3;
        const centerX = this.cardX + this.cardWidth / 2;
        const centerY = this.cardY + this.cardHeight / 2;
        const radius = 40;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        const radius2 = 60
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawSeparationLineVertical() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX + this.cardWidth / 2, this.cardY);
        this.ctx.lineTo(this.cardX + this.cardWidth / 2, this.cardY + this.cardHeight);
        this.ctx.stroke();
    }

    drawSeparationLineHorizontal() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + this.cardHeight / 2);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + this.cardHeight / 2);
        this.ctx.stroke();
    }


    draw() {
        this.drawCardBackground();
        this.drawSeparationLineVertical();
        this.drawSeparationLineHorizontal();
        this.drawCircle();
        this.drawCardDetails();
    }
}

class Deck {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, text) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.text = text.split(" ")[0];
        this.text2 = text.split(" ")[1];
    }

    drawCardBackground() {
        this.ctx.fillStyle = 'yellow';
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px Arial';
        const textWidth = this.ctx.measureText(this.text).width; // Measure the width of the text
        const textX = this.cardX + (this.cardWidth - textWidth) / 2; // Calculate the x-coordinate to center the text   
        this.ctx.fillText(this.text, textX, this.cardY + this.cardHeight / 2 - 5);
        const textWidth2 = this.ctx.measureText(this.text2).width; // Measure the width of the text
        const textX2 = this.cardX + (this.cardWidth - textWidth2) / 2; // Calculate the x-coordinate to center the text   
        this.ctx.fillText(this.text2, textX2, this.cardY + this.cardHeight / 2 + 20);
    }

    drawCircle() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 3;
        const centerX = this.cardX + this.cardWidth / 2;
        const centerY = this.cardY + this.cardHeight / 2;
        const radius = 40;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        const radius2 = 60
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawSeparationLineVertical() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX + this.cardWidth / 2, this.cardY);
        this.ctx.lineTo(this.cardX + this.cardWidth / 2, this.cardY + this.cardHeight);
        this.ctx.stroke();
    }

    drawSeparationLineHorizontal() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + this.cardHeight / 2);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + this.cardHeight / 2);
        this.ctx.stroke();
    }


    draw() {
        this.drawCardBackground();
        this.drawSeparationLineVertical();
        this.drawSeparationLineHorizontal();
        this.drawCircle();
        this.drawCardDetails();
    }
}

class PetDeck {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, text) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.text = text.split(" ")[0];
        this.text2 = text.split(" ")[1];
    }

    drawCardBackground() {
        this.ctx.fillStyle = 'cyan';
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px Arial';
        const textWidth = this.ctx.measureText(this.text).width; // Measure the width of the text
        const textX = this.cardX + (this.cardWidth - textWidth) / 2; // Calculate the x-coordinate to center the text   
        this.ctx.fillText(this.text, textX, this.cardY + this.cardHeight / 2 - 5);
        const textWidth2 = this.ctx.measureText(this.text2).width; // Measure the width of the text
        const textX2 = this.cardX + (this.cardWidth - textWidth2) / 2; // Calculate the x-coordinate to center the text   
        this.ctx.fillText(this.text2, textX2, this.cardY + this.cardHeight / 2 + 20);
    }

    drawCircle() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 3;
        const centerX = this.cardX + this.cardWidth / 2;
        const centerY = this.cardY + this.cardHeight / 2;
        const radius = 40;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        const radius2 = 60
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawSeparationLineVertical() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX + this.cardWidth / 2, this.cardY);
        this.ctx.lineTo(this.cardX + this.cardWidth / 2, this.cardY + this.cardHeight);
        this.ctx.stroke();
    }

    drawSeparationLineHorizontal() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + this.cardHeight / 2);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + this.cardHeight / 2);
        this.ctx.stroke();
    }


    draw() {
        this.drawCardBackground();
        this.drawSeparationLineVertical();
        this.drawSeparationLineHorizontal();
        this.drawCircle();
        this.drawCardDetails();
    }
}


class BackCard {
    constructor(ctx, cardWidth = 150, cardHeight = 250, x, y, type, len) {
        this.ctx = ctx;
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.cardX = x;
        this.cardY = y;
        this.text = "Pet";
        this.text2 = "War";
        this.color = "yellow";
        if (type == "pet") {
            this.color = "cyan";
        }
        this.len = "Total: " + len;
    }

    drawCardBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.cardX, this.cardY, this.cardWidth, this.cardHeight);
    }

    drawCardDetails() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px Arial';
        const textWidth = this.ctx.measureText(this.text).width; // Measure the width of the text
        const textX = this.cardX + (this.cardWidth - textWidth) / 2; // Calculate the x-coordinate to center the text   
        this.ctx.fillText(this.text, textX, this.cardY + this.cardHeight / 2 - 5);
        const textWidth2 = this.ctx.measureText(this.text2).width; // Measure the width of the text
        const textX2 = this.cardX + (this.cardWidth - textWidth2) / 2; // Calculate the x-coordinate to center the text   
        this.ctx.fillText(this.text2, textX2, this.cardY + this.cardHeight / 2 + 20);

        this.ctx.font = '16px Arial';
        const textWidthLen = this.ctx.measureText(this.len).width; // Measure the width of the text
        const textXLen = this.cardX + (this.cardWidth - textWidthLen) / 2; // Calculate the x-coordinate to center the text 
        this.ctx.fillText(this.len, textXLen, this.cardY + this.cardHeight - 10);
    }

    drawCircle() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 3;
        const centerX = this.cardX + this.cardWidth / 2;
        const centerY = this.cardY + this.cardHeight / 2;
        // const radius = 40;
        // this.ctx.beginPath();
        // this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        // this.ctx.stroke();
        const radius2 = 60
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawSeparationLineVertical() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX + this.cardWidth / 2, this.cardY);
        this.ctx.lineTo(this.cardX + this.cardWidth / 2, this.cardY + this.cardHeight);
        this.ctx.stroke();
    }

    drawSeparationLineHorizontal() {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(this.cardX, this.cardY + this.cardHeight / 2);
        this.ctx.lineTo(this.cardX + this.cardWidth, this.cardY + this.cardHeight / 2);
        this.ctx.stroke();
    }


    draw() {
        this.drawCardBackground();
        // this.drawSeparationLineVertical();
        // this.drawSeparationLineHorizontal();
        this.drawCircle();
        this.drawCardDetails();
    }
}
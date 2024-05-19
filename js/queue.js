class CircularQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    shuffleSize(size) {
        for (let i = 0; i < size; i++) {
            const rand = Math.floor(Math.random() * size);
            [this.queue[i], this.queue[rand]] = [this.queue[rand], this.queue[i]];
        }
    }

    shuffleAll() {
        for (let i = this.queue.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [this.queue[i], this.queue[rand]] = [this.queue[rand], this.queue[i]];
        }
    }

    get(index) {
        return this.queue[index];
    }

    getSome(len) {
        return Array.from(this.queue).splice(0, len);
    }

    set(elements) {
        this.queue = elements;
        this.size = elements.length;
    }

    add(element) {
        this.queue.push(element);
        this.size += 1;
    }

    removeAt(index) {
        this.queue.splice(index, 1);
        this.size -= 1;
    }

    moveForwardAll() {
        console.log("Forward");
        var firstElement = this.queue[0];
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        this.queue[this.queue.length - 1] = firstElement;
    }

    moveBackwardAll() {
        console.log("Backward");
        var lastElement = this.queue[this.queue.length - 1];
        for (var i = this.queue.length - 1; i > 0; i--) {
            this.queue[i] = this.queue[i - 1];
        }
        this.queue[0] = lastElement;
    }

    printElement(len) {
        if (len > this.size) {
            len = this.size;
        }
        var temp = Array.from(this.queue).splice(0, len);
        console.log(temp);
        // for (var i = 0; i < size; i++) {
        //     console.log(this.queue[i]);
        // }
    }

    printAll() {
        console.log(this.queue);
        // for (var i = 0; i < this.size; i++) {
        //     console.log(this.queue[i]);
        // }
    }
}

// Example usage:
// const circularQueue = new CircularQueue();
// circularQueue.add(5);
// circularQueue.add(4);
// circularQueue.add(3);
// circularQueue.add(2);
// circularQueue.add(1);
// circularQueue.printAll();
// circularQueue.printElement(6);
// circularQueue.moveForwardAll();
// circularQueue.printAll();
// circularQueue.moveForwardAll();
// circularQueue.printAll();
// circularQueue.moveBackwardAll();
// circularQueue.printAll();
// circularQueue.shuffleAll();
// circularQueue.printElement(6);
// circularQueue.shuffleSize(3);
// circularQueue.printElement(6);

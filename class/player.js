const { Food } = require("./food");
//const { Food } = require("./food");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {


        let idx = -1;

        for(let i=0;i<this.currentRoom.items.length ; i++)
        {
            if(itemName == this.currentRoom.items[i].name)
            {
                idx=i;
                this.items.push(this.currentRoom.items[i]);
                break;
            }

        }

        //console.log("hello the advarks!!!!! : " + idx);
        if(idx === -1) return

        //let ret=[];

        this.currentRoom.items.splice(idx,1);
        //this.items.push(itemName);
        // Fill this in

    }

    dropItem(itemName) {

        let idx = -1;

        for(let i=0;i<this.items.length ; i++)
        {
            if(itemName == this.items[i].name)
            {
                idx=i;
                this.currentRoom.items.push(this.items[i]);
                break;
            }

        }

        //console.log("hello the advarks!!!!! : " + idx);
        if(idx === -1) return

        //let ret=[];

        this.items.splice(idx,1);
        //this.items.push(itemName);
        // Fill this in
    }

    eatItem(itemName) {



        let idx = -1;

        for(let i=0;i<this.items.length ; i++)
        {
            if(itemName == this.items[i].name && this.items[i] instanceof Food)
            {
                idx=i;
                //this.currentRoom.items.push(this.items[i]);
                break;
            }

        }

        if(idx === -1) return

        //let ret=[];

        this.items.splice(idx,1);



    }

    getItemByName(name) {



        let ret = this.items.find(item => item.name === name);

        /*
        for(let i=0;i<this.items.length;i++)
        {
            if(this.items[i].name === name)
            {
                return(this.items[i]);
            }
        }*/



        return(ret);



        // Fill this in
    }
}

module.exports = {
  Player,
};

const { v4: uuidv4 } = require('uuid');

class Subject {
    constructor(name, ch) {
        this.id = uuidv4();
        this.name = name;
        this.ch = ch;
    }


}
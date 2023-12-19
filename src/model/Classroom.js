const { v4: uuidv4 } = require('uuid');

class Classroom {
    constructor(quant, description) {
        this.id = uuidv4();
        this.quant = quant;
        this.description = description;
    }
}
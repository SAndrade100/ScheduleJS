const { v4: uuidv4 } = require('uuid');

class Classroom {
    constructor(num, quant, description) {
        this.id = uuidv4();
        this.num = num;
        this.quant = quant;
        this.description = description;
    }
}
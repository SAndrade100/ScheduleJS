const { v4: uuidv4 } = require('uuid');

class StudentsClass {
    constructor(grade, quant) {
        this.id = uuidv4();
        this.grade = grade;
        this.quant = quant;
    }
}
const { v4: uuidv4 } = require('uuid');

class Teacher {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.subjects = [];
        this.days = [];
    }

    addSubject(subject) {
        this.subjects.add(subject);
    }

    addDay(day) {
        this.days.add(day);
    }


}
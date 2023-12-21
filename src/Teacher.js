const { v4: uuidv4 } = require('uuid');

class Teacher {
    constructor(name, birth, graduation) {
        this.id = uuidv4();
        this.name = name;
        this.birth = birth;
        this.graduation = graduation;
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
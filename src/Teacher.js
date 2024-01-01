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

    getInfo() {
        return {
            id: this.id,
            name: this.name,
            birth: this.birth,
            graduation: this.graduation,
            subjects: this.subjects,
            days: this.days
        };
    }
}

class TeacherList {
    constructor() {
        this.teacherList = [];
    }

    addTeacher(Teacher) {
        this.teacherList.push(Teacher);
    }

    getTeacher() {
        return this.teacherList.map(teacher => teacher.getInfo());
    }

    saveData() {
        const jsonData = JSON.stringify(this.getTeacher(), null, 2);
        fs.writeFileSync('teacher.json', jsonData, 'utf-8');
    }
}

module.exports = {Teacher, TeacherList};
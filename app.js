const teknikhogskolan = {
  name: "teknikhogksolan",
  address: "Kalkstensvägen 3",
  zipcode: 22478,
  city: "Lund",
  students: [],
  teachers: [],
  addTeacher: function (teacher) {
    if (!this.teachers.some((t) => t.name === teacher.name)) {
      this.teachers.push(teacher);
    } else {
      console.log(`The teacher ${teacher.name} already works here`);
    }
  },
  addStudent: function (student) {
    if (!this.students.some((s) => s.name === student.name)) {
      this.students.push(student);
    } else {
      console.log(`The student ${student.name} already attend this school`);
    }
  },
  removeTeacher: function (teacher) {
    this.teachers = this.teachers.filter((t) => t.name !== teacher.name);
    teacher.subjects.forEach((subject) => {
      subject.teacher = {};
    });
  },
  fireTeacher: function (teacher) {
    this.removeTeacher(teacher);
    teacher.subjects = [];
  },
};

// **************************************************Subjects

let maths = {
  name: "maths",
  students: [],
  teacher: {},
  addStudent: function (student) {
    if (!this.students.some((s) => s.name === student.name)) {
      this.students.push(student);
    } else {
      console.log(`The student ${student.name} already attend this class`);
    }
  },
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
};
let history = {
  name: "history",
  students: [],
  teacher: {},
  addStudent: function (student) {
    if (!this.students.some((s) => s.name === student.name)) {
      this.students.push(student);
    } else {
      console.log(`The student ${student.name} already attend this class`);
    }
  },
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
};
let english = {
  name: "english",
  students: [],
  teacher: {},
  addStudent: function (student) {
    if (!this.students.some((s) => s.name === student.name)) {
      this.students.push(student);
    } else {
      console.log(`The student ${student.name} already attend this class`);
    }
  },
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
};

// **************************************************************Students

let wictor = {
  name: "wictor",
  age: 29,
  gender: "male",
  subjects: [],
  grades: [],
  enlistSubject: function (subject) {
    if (!this.subjects.some((s) => s.name === subject.name)) {
      this.subjects.push(subject);
    } else {
      console.log(
        `The student ${this.name} is already enrolled in ${subject.name}`
      );
    }
  },
  quitSubject: function (subject) {
    this.subjects = this.subjects.filter((s) => s.name !== subject.name);
    subject.students = subject.students.filter((s) => s.name !== this.name);
  },
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
};
let johnny = {
  name: "johnny",
  age: 18,
  gender: "male",
  subjects: [],
  grades: [],
  enlistSubject: function (subject) {
    if (!this.subjects.some((s) => s.name === subject.name)) {
      this.subjects.push(subject);
    } else {
      console.log(
        `The student ${this.name} is already enrolled in ${subject.name}`
      );
    }
  },
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
  quitSubject: function (subject) {
    this.subjects = this.subjects.filter((s) => s.name !== subject.name);
    subject.students = subject.students.filter((s) => s.name !== this.name);
  },
};
let stina = {
  name: "stina",
  age: 22,
  gender: "female",
  subjects: [],
  grades: [],
  enlistSubject: function (subject) {
    if (!this.subjects.some((s) => s.name === subject.name)) {
      this.subjects.push(subject);
    } else {
      console.log(
        `The student ${this.name} is already enrolled in ${subject.name}`
      );
    }
  },
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
  quitSubject: function (subject) {
    this.subjects = this.subjects.filter((s) => s.name !== subject.name);
    subject.students = subject.students.filter((s) => s.name !== this.name);
  },
};
let julia = {
  name: "julia",
  age: 20,
  gender: "female",
  subjects: [],
  grades: [],
  enlistSubject: function (subject) {
    if (!this.subjects.some((s) => s.name === subject.name)) {
      this.subjects.push(subject);
    } else {
      console.log(
        `The student ${this.name} is already enrolled in ${subject.name}`
      );
    }
  },
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
  quitSubject: function (subject) {
    this.subjects = this.subjects.filter((s) => s.name !== subject.name);
    subject.students = subject.students.filter((s) => s.name !== this.name);
  },
};
let kalle = {
  name: "kalle",
  age: 25,
  gender: "male",
  subjects: [],
  grades: [],
  addGrade: function (grade) {
    this.grades.push(grade);
  },
  displayGrades: function () {
    return this.grades.map((g) => g.displayGrade()).join("\n");
  },
  enlistSubject: function (subject) {
    if (!this.subjects.some((s) => s.name === subject.name)) {
      this.subjects.push(subject);
    } else {
      console.log(
        `The student ${this.name} is already enrolled in ${subject.name}`
      );
    }
  },
  quitSubject: function (subject) {
    this.subjects = this.subjects.filter((s) => s.name !== subject.name);
    subject.students = subject.students.filter((s) => s.name !== this.name);
  },
};

// ********************************************** Teachers

let niklas = {
  name: "niklas",
  subjects: [],
  addSubject: function (subject) {
    if (!this.subjects.some((s) => s.name === subject)) {
      this.subjects.push(subject);
    } else {
      console.log(`The teacher ${this.name} already teaches ${subject.name}`);
    }
  },
  relegateStudent: function (student, newSubject) {
    student.quitSubject(newSubject);
    student.enlistSubject(newSubject);
  },
  addGradeToStudent: function (student, subject, gradeValue) {
    const newGrade = Object.create(grade); // Skapa ett nytt betygsobjekt
    newGrade.student = student;
    newGrade.subject = subject;
    newGrade.teacher = this;
    newGrade.value = gradeValue;

    student.addGrade(newGrade); // Lägger till betyget till studenten
    subject.addGrade(newGrade); // Lägger till betyget till ämnet

    return newGrade;
  },
};

let lars = {
  name: "lars",
  subjects: [],
  addSubject: function (subject) {
    if (!this.subjects.some((s) => s.name === subject)) {
      this.subjects.push(subject);
    } else {
      console.log(`The teacher ${this.name} already teaches ${subject.name}`);
    }
  },
  relegateStudent: function (student, newSubject) {
    student.quitSubject(newSubject);
    student.enlistSubject(newSubject);
  },
  addGradeToStudent: function (student, subject, gradeValue) {
    const newGrade = Object.create(grade); 
    newGrade.student = student;
    newGrade.subject = subject;
    newGrade.teacher = this;
    newGrade.value = gradeValue;

    student.addGrade(newGrade); 
    subject.addGrade(newGrade); 

    return newGrade;
  },
};

lars.subjects.unshift(english);

console.log(lars);

history.students.unshift(wictor);
console.log(history);

const addSubjectToTeacher = (subject, teacher) => {
  if (!teacher.subjects.includes(subject)) {
    teacher.subjects.unshift(subject);
  } else {
    console.log(
      `The teacher ${teacher} already teaches this class, you cant add them twice to the same subject`
    );
  }

  return teacher;
};

function displayAllStudents(school) {
  for (const key in school.students) {
    const student = school.students[key];
    console.log(
      `Name: ${student.name}, Age: ${student.age}, Gender: ${student.gender}`
    );
  }
}

const displayAllSubjectsOfStudent = (student) => {
  const subjectsNames = student.subjects.map((subject) => subject.name);
  console.log(`Subjects of ${student.name}`, subjectsNames);
  return subjectsNames;
};

const displayAllStudentsEnlistedToSubject = (student) => {
  const studentsNames = student.subjects.map((student) => student.name);
  console.log(`Students enlisted in ${student.name}`, studentsNames);
  return studentsNames;
};

const displayAllTeachers = (school) => {
  for (const key in school.teachers) {
    const teacher = school.teachers[key];

    return teacher;
  }
};

//********************************************** Grades */

const grade = {
  student: {},
  subject: {},
  teacher: {},
  value: "",
  date: new Date(),
  comment: "",
  setGradeValue: function (gradeValue) {
    this.value = gradeValue;
  },
  addComment: function (comment) {
    this.comment = comment;
  },

  displayGrade: function () {
    return `${this.student.name} got ${this.value} in ${
      this.subject.name
    } from ${this.teacher.name} on ${this.date.toDateString()}. Comment: ${
      this.comment
    }`;
  },
};

console.log(addSubjectToTeacher(english, niklas));

// Adding a student and a teacher to the school
teknikhogskolan.addStudent(wictor);
teknikhogskolan.addStudent(julia);
teknikhogskolan.addTeacher(niklas);

// Enrolling the student in a subject
wictor.enlistSubject(maths);
maths.addStudent(wictor); // Add the student to the subject as well
niklas.addSubject(maths); // Assign the teacher to the subject

console.log(wictor);
console.log(maths);
console.log(niklas);
console.log(teknikhogskolan);
displayAllStudents(teknikhogskolan);
console.log(displayAllTeachers(teknikhogskolan));
displayAllSubjectsOfStudent(wictor);
displayAllStudentsEnlistedToSubject(wictor);

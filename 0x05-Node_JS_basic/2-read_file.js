const fs = require('fs');


const countStudents = (path) => {
  try {

    const stats = fs.statSync(path);
    if (!stats.isFile()) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');

    const studentGroups = {
      CS: [],
      SWE: []
    };

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '') continue;

      const [firstname, lastname, age, field] = line.split(',');
      if (firstname && lastname && age && field) {
        const student = { firstname, lastname, age };
        studentGroups[field].push(student);
      }
    }

    let totalStudents = 0;
    Object.keys(studentGroups).forEach(field => {
      totalStudents += studentGroups[field].length;
    });

    console.log(`Number of students: ${totalStudents}`);
    Object.keys(studentGroups).forEach(field => {
      const studentNames = studentGroups[field].map(student => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${studentGroups[field].length}. List: ${studentNames}`);
    });

  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => {
  try {

    if (!fs.existsSync(dataPath)) {
      throw new Error('Cannot load the database');
    }

    const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();

    const lines = fileContent.split('\n');

    const studentGroups = {
      CS: [],
      SWE: []
    };

    const header = lines[0].split(',').map(item => item.trim());

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].split(',').map(item => item.trim());
      if (line.length !== header.length) {
        continue;
      }

      const student = {};
      for (let j = 0; j < header.length - 1; j++) {
        student[header[j]] = line[j];
      }

      const field = line[header.length - 1];
      if (field === 'CS' || field === 'SWE') {
        studentGroups[field].push(student);
      }
    }

    let totalStudents = 0;
    for (const field in studentGroups) {
      totalStudents += studentGroups[field].length;
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentGroups) {
      const students = studentGroups[field];
      const studentNames = students.map(student => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = countStudents;
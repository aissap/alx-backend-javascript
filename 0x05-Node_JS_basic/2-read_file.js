const fs = require('fs');

/**
 * Counts the students in the CSV data file.
 * @param {String} path The path to the CSV data file.
 */
function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf8');
  const lines = fileContent.split('\n').filter(line => line.trim() !== '');

  const students = { CS: [], SWE: [] };

  lines.forEach(line => {
    const [firstname, lastname, age, field] = line.split(',').map(item => item.trim());
    if (firstname && lastname && age && field) {
      if (field === 'CS' || field === 'SWE') {
        students[field].push(firstname);
      }
    }
  });

  const totalStudents = students.CS.length + students.SWE.length;
  console.log(`Number of students: ${totalStudents}`);
  console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
  console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);
}

module.exports = countStudents;
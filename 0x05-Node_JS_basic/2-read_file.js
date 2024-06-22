const fs = require('fs');

/**
 * Counts the students in the CSV data file.
 */
function countStudents (path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf8');
  const linz = fileContent.split('\n');
  const hasht = {};
  let students = -1;
  for (const l of linz) {
    if (l.trim() !== '') {
      const colm = l.split(',');
      const field = colm[3];
      const fname = colm[0];
      if (students >= 0) {
        if (!Object.hasOwnProperty.call(hasht, field)) {
          hasht[field] = [];
        }
        hasht[field] = [...hasht[field], fname];
      }
      students += 1;
    }
  }
  console.log(`Number of students: ${students}`);
  for (const key in hasht) {
    if (Object.hasOwnProperty.call(hasht, key)) {
      console.log(`Number of students in ${key}: ${hasht[key].length}. List: ${hasht[key].join(', ')}`);
    }
  }
}

module.exports = countStudents;

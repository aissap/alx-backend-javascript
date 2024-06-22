const fs = require('fs');

/**
 * Counts the students in the CSV data file asynchronously.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise} A Promise that resolves with the student
 * count and logs, or rejects with an error.
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('No valid data found in the database'));
        }

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

        resolve({ totalStudents, students });
      }
    });
  });
};

module.exports = countStudents;

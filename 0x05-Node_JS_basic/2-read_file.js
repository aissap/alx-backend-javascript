const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    if (!fs.existsSync(dataPath)) {
      throw new Error('Cannot load the database');
    }

    const fileContent = fs.readFileSync(dataPath, 'utf8');
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');

    let students = 0;
    const hashtable = {};

    for (const line of lines) {
      const columns = line.split(',').map(item => item.trim());
      const firstname = columns[0];
      const lastname = columns[1];
      const age = columns[2];
      const field = columns[3];

      if (firstname && lastname && age && field) {
        if (!hashtable[field]) {
          hashtable[field] = [];
        }
        hashtable[field].push(firstname);
        students++;
      }
    }

    console.log(`Number of students: ${students}`);
    for (const key in hashtable) {
      if (Object.hasOwnProperty.call(hashtable, key)) {
        console.log(`Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}`);
      }
    }

  } catch (error) {
    console.error(error.message);
  }
};

module.exports = countStudents;

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

        const fileContent = fs.readFileSync(dataPath, 'utf8').trim();
        const lines = fileContent.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('No valid data found in the database');
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

    } catch (error) {
        console.error(error.message);
    }
};

module.exports = countStudents;
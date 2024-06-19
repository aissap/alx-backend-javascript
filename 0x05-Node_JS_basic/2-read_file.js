const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.trim().split('\n');

        const students = [];

        lines.forEach(line => {
            const [firstname, lastname, age, field] = line.trim().split(',');

            if (firstname && lastname && age && field) {
                students.push({ firstname, lastname, age, field });
            }
        });

        const numberOfStudents = students.length;
        console.log(`Number of students: ${numberOfStudents}`);

        const countByField = {
            CS: { count: 0, list: [] },
            SWE: { count: 0, list: [] }
        };
        students.forEach(student => {
            const { firstname, field } = student;
            if (field === 'CS') {
                countByField.CS.count++;
                countByField.CS.list.push(firstname);
            } else if (field === 'SWE') {
                countByField.SWE.count++;
                countByField.SWE.list.push(firstname);
            }
        });

        console.log(`Number of students in CS: ${countByField.CS.count}. List: ${countByField.CS.list.join(', ')}`);
        console.log(`Number of students in SWE: ${countByField.SWE.count}. List: ${countByField.SWE.list.join(', ')}`);

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const students = [];
        const lines = data.trim().split('\n');
        
        lines.forEach(line => {
            if (line.trim() === '') {
                return;
            }

            const [firstname, lastname, age, field] = line.split(',');
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
        Object.keys(countByField).forEach(field => {
            const { count, list } = countByField[field];
            console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        });
        
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students and store them in an array
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 22,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 24,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const renderTable = (studentsList: Student[]): void => {
  const table = document.createElement('table');

  // Create table headers
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
  table.appendChild(headerRow);

  // Populate table rows with student data
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
  });

  document.body.appendChild(table);
};

// Call the renderTable function with the studentsList array
renderTable(studentsList);

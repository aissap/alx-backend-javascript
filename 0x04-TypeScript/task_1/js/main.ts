// Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Create a function to initialize Teacher objects
const createTeacher = (data: Teacher): Teacher => {
  const { firstName, lastName, fullTimeEmployee, location, ...rest } = data;
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...rest
  };
};

// Create Teacher objects
const teacher1: Teacher = createTeacher({
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York'
});

const teacher2: Teacher = createTeacher({
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: 'Los Angeles'
});

const teacher3: Teacher = createTeacher({
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Chicago',
  contract: true
});

// Print Teacher objects
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

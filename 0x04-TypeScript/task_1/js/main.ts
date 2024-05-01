// Teacher Interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Create a Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

//  Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a Directors object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

//  Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Test the printTeacher function
console.log(printTeacher("John", "Doe"));

// Writing a class
interface StudentClass {
  new(firstName: string, lastName: string): StudentClassInstance;
}

interface StudentClassInstance {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass class
class StudentClassImpl implements StudentClassInstance {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the StudentClass
const student = new StudentClassImpl("Alice", "Smith");
console.log(student.workOnHomework());
console.log(student.displayName());

export default function getStudentIdsSum(students) {
  let sum = 0;
  for (const student of students) {
    sum += student.id;
  }
  return sum;
}

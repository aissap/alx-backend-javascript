import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { cTeacher } from "./subjects/Teacher";

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

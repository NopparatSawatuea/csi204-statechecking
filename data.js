// พื้นฐานของตัวแปรและชนิดข้อมูล
let stringVar = "Hello, World!";
let intVar = 42;
let boolVar = true;

console.log("String Variable:", stringVar);
console.log("Integer Variable:", intVar);
console.log("Boolean Variable:", boolVar);

// ทดสอบการแปลงชนิดข้อมูล
console.log("Convert parseInt('10'):", parseInt("10"));
console.log("Convert parseFloat('3.14'):", parseFloat("3.14"));
console.log("Convert String(100):", String(100));

// สร้างและใช้งานโครงสร้างข้อมูล
// List / Array
let myList = [1, 2, 3];
myList.push(4);  // เพิ่มข้อมูล
myList.splice(myList.indexOf(2), 1);  // ลบข้อมูล
myList[0] = 10;  // แก้ไขข้อมูล
console.log("Updated List:", myList);

// Dictionary / Object
let student = {"name": "Tom", "age": 20, "grade": "A"};
console.log("Student Dictionary:", student);

// Tuple & Set
let tupleVar = [1, 2, 3, 3, 4];
let setVar = new Set(tupleVar);  // กำจัดค่าที่ซ้ำกัน
console.log("Tuple Variable:", tupleVar);
console.log("Set Variable (No Duplicates):", setVar);

// จัดการ JSON Data
let studentJson = JSON.stringify(student);  // เขียน JSON
console.log("JSON String:", studentJson);

let loadedStudent = JSON.parse(studentJson);  // อ่าน JSON
console.log("Loaded JSON Data:", loadedStudent);

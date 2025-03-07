function changeBackgroundColor() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4C724", "#A833FF"];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}

// การจัดการ Event ผ่าน HTML Attribute
document.getElementById("clickButton").onclick = function () {
  // แสดงการแจ้งเตือน (alert) เมื่อคลิกปุ่ม
  alert("เชื่อคนง่ายอะเรา");
};

document.getElementById("mouseoverButton").onmouseover = function () {
  // เมื่อเอาเมาส์ไปชี้ที่ปุ่มจะแสดงข้อความในพี (p)
  alert("เอาอีกแล้วนะ");
};

document.getElementById("keyupInput").onkeyup = function (event) {
  // ดึงค่าที่พิมพ์ในช่อง input และแสดงใน p
  document.getElementById("message").textContent = event.target.value;
};

// Handle form submission
const form = document.getElementById("userForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;

  if (emailPattern.test(email)) {
    alert("ลงทะเบียนสำเร็จ");
  } else {
    alert("ลงทะเบียนไม่สำเร็จ: กรุณากรอกอีเมลที่ถูกต้อง");
  }
});

function calculateArea() {
  const radius = document.getElementById("radius").value;
  if (radius > 0) {
    const area = Math.PI * Math.pow(radius, 2); // สูตร: π * r^2
    alert(`พื้นที่วงกลม: ${area.toFixed(2)} ตารางหน่วย`);
  } else {
    alert("กรุณากรอกค่ารัศมีที่มากกว่า 0");
  }
}

// ฟังก์ชันตรวจสอบวัยตามอายุ
function checkAge() {
  const age = document.getElementById("age").value;
  let ageGroup = "";

  if (age >= 0 && age <= 12) {
    ageGroup = "เด็ก";
  } else if (age >= 13 && age <= 19) {
    ageGroup = "วัยรุ่น";
  } else if (age >= 20 && age <= 35) {
    ageGroup = "ผู้ใหญ่";
  } else if (age >= 36 && age <= 49) {
    ageGroup = "วับกลางคน";
  } else if (age >= 50) {
    ageGroup = "ผู้สูงอายุ";
  } else {
    ageGroup = "กรุณากรอกอายุที่ถูกต้อง";
  }

  alert(`คุณเป็น: ${ageGroup}`);
}

// ฟังก์ชันตรวจสอบเลขคู่-คี่
function checkEvenOdd() {
  const number = document.getElementById("number").value;

  if (number === "") {
    alert("กรุณากรอกตัวเลข");
    return;
  }

  const result = number % 2 === 0 ? "เลขคู่" : "เลขคี่";
  alert(`ผลลัพธ์: ${result}`);
}

// ฟังก์ชันแสดงเลข 1-10 ด้วย For Loop
function showNumbers() {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += i + " ";
  }
  document.getElementById("forResult").textContent = `ผลลัพธ์: ${result}`;
}

// ฟังก์ชัน While Loop รับค่าจากผู้ใช้จนกว่าจะพิมพ์ "exit"
function startWhileLoop() {
  let input;
  let allInputs = "";

  while (true) {
    input = prompt("กรอกข้อความ (พิมพ์ 'exit' เพื่อหยุด):");
    if (input === "exit") {
      break; // ออกจากลูปถ้าผู้ใช้พิมพ์ "exit"
    }
    allInputs += input + ", ";
  }

  document.getElementById(
    "whileResult"
  ).textContent = `คุณกรอก: ${allInputs.slice(0, -2)}`;
}

// 🟢 ฟังก์ชันหาค่า Factorial แบบ Recursive
function factorial(n) {
  if (n === 0) return 1; // กรณีฐาน: 0! = 1
  return n * factorial(n - 1); // เรียกตัวเอง
}

// 🟢 ฟังก์ชันเรียกใช้งาน Factorial
function calculateFactorial() {
  const input = parseInt(document.getElementById("factorialInput").value);
  if (isNaN(input) || input < 0) {
    alert("กรุณากรอกตัวเลขที่มากกว่าหรือเท่ากับ 0!");
    return;
  }
  const result = factorial(input);
  alert("ผลลัพธ์ Factorial ของ " + input + " คือ: " + result);
}

// 🟢 ฟังก์ชันหาค่า Fibonacci แบบ Recursive
function fibonacci(n) {
  if (n <= 1) return n; // กรณีฐาน: F(0) = 0, F(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // เรียกตัวเอง
}

// 🟢 ฟังก์ชันเรียกใช้งาน Fibonacci
function calculateFibonacci() {
  const input = parseInt(document.getElementById("fibonacciInput").value);
  if (isNaN(input) || input < 0) {
    alert("กรุณากรอกตัวเลขที่มากกว่าหรือเท่ากับ 0!");
    return;
  }
  const result = fibonacci(input);
  alert("ผลลัพธ์ Fibonacci ลำดับที่ " + input + " คือ: " + result);
}

// ฟังก์ชันส่งข้อความ
function sendMessage() {
  try {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    // ตรวจสอบว่าเป็นข้อความว่างหรือไม่
    if (message === "") {
      throw new Error("Message cannot be empty");
    }

    // เพิ่มข้อความในส่วนที่แสดงข้อความ
    const messagesDiv = document.getElementById("messages");
    const newMessage = document.createElement("p");
    newMessage.textContent = "User: " + message;
    messagesDiv.appendChild(newMessage);

    // เคลียร์ input หลังจากส่งข้อความ
    messageInput.value = "";
    messageInput.focus();

    console.log("Message sent:", message); // ใช้ log เพื่อตรวจสอบข้อความ
  } catch (error) {
    // แสดงข้อความข้อผิดพลาด
    console.error("Error:", error.message);
  }
}

// สำหรับ debugging เมื่อโปรแกรมโหลด
window.onload = function () {
  debugger; // หยุดที่นี่เพื่อตรวจสอบการทำงานตอนเริ่มต้น
  console.log("Chat app is ready.");
};

// Function to calculate GPA and grades
function calculateGPA() {
    // Get the scores from inputs
    let csi101 = parseFloat(document.getElementById("csi101").value);
    let csi102 = parseFloat(document.getElementById("csi102").value);
    let csi203 = parseFloat(document.getElementById("csi203").value);
    let csi204 = parseFloat(document.getElementById("csi204").value);
    let csi305 = parseFloat(document.getElementById("csi305").value);

    // Function to determine grade based on score
    function getGrade(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B+';
        if (score >= 70) return 'B';
        if (score >= 60) return 'C+';
        if (score >= 50) return 'C';
        if (score >= 40) return 'D+';
        if (score >= 30) return 'D';
        return 'F';
    }

    // Display grades for each subject
    document.getElementById("grade101").textContent = getGrade(csi101);
    document.getElementById("grade102").textContent = getGrade(csi102);
    document.getElementById("grade203").textContent = getGrade(csi203);
    document.getElementById("grade204").textContent = getGrade(csi204);
    document.getElementById("grade305").textContent = getGrade(csi305);

    // Function to calculate GPA points
    function getPoints(score) {
        if (score >= 90) return 4.0;   // A
        if (score >= 80) return 3.5;   // B+
        if (score >= 70) return 3.0;   // B
        if (score >= 60) return 2.5;   // C+
        if (score >= 50) return 2.0;   // C
        if (score >= 40) return 1.5;   // D+
        if (score >= 30) return 1.0;   // D
        return 0.0;                    // F
    }

    // Calculate total GPA points
    let totalPoints = 0;
    let subjects = 5;

    totalPoints += getPoints(csi101);
    totalPoints += getPoints(csi102);
    totalPoints += getPoints(csi203);
    totalPoints += getPoints(csi204);
    totalPoints += getPoints(csi305);

    // Calculate and display GPA
    let gpa = totalPoints / subjects;

    // Show GPA in an alert box
    alert("Your GPA is: " + gpa.toFixed(2));
}

// Check if there are existing tasks in localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Load tasks from localStorage into the list
window.onload = function() {
    renderTasks();
}

// Function to add task
function addTask() {
    let taskInput = document.getElementById("todoInput").value;
    
    // Only add if input is not empty
    if (taskInput) {
        let newTask = {
            id: Date.now(), // Unique ID using timestamp
            text: taskInput
        };

        // Add task to tasks array
        tasks.push(newTask);
        
        // Save updated tasks array to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear the input field
        document.getElementById("todoInput").value = "";

        // Re-render tasks
        renderTasks();
    }
}

// Function to render tasks
function renderTasks() {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clear current list
    
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task.text;

        // Create delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(task.id);
        };
        
        // Append the delete button to the list item
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Function to delete task
function deleteTask(taskId) {
    // Filter out the task to be deleted
    tasks = tasks.filter(task => task.id !== taskId);

    // Save updated tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Re-render tasks
    renderTasks();
}

// Function to fetch data from the API when the button is clicked
function fetchUserData() {
    // Clear the user list before loading new data
    const userList = document.getElementById('userList');
    userList.innerHTML = '<p>Loading...</p>'; // Show loading message

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // Convert the response to JSON
        .then(users => {
            // Clear the loading message
            userList.innerHTML = '';

            // Loop through the users array and create HTML to display each user's details
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                // Create HTML content for each user
                userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                `;

                // Append the userDiv to the userList container
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally show an error message to the user
            userList.innerHTML = '<p>Sorry, there was an error fetching user data.</p>';
        });
}

// Function to generate a 6-digit lottery number
function generateLotteryNumber() {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
}

// Function to check if the user's guess is correct
function checkLottery() {
    const userGuess = document.getElementById('userGuess').value;
    const lotteryNumber = generateLotteryNumber();

    // Display the generated lottery number
    document.getElementById('lotteryNumber').innerText = `The lottery number is: ${lotteryNumber}`;

    // Check if the user's guess matches the lottery number
    if (userGuess == lotteryNumber) {
        alert("You guessed the correct number!");
    } else {
        alert("Sorry, your guess is incorrect. Try again!");
    }
}


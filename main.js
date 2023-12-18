const loginForm = document.querySelector(".login-form");

function validateForm() {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  // 1. ตรวจสอบ input ไม่เป็นค่าว่างหรือ space มาล้วนๆ
  if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
    setInvalidInput(usernameInput);
    setInvalidInput(passwordInput);
    alert("กรุณากรอกข้อมูลให้ครบ");
    return false;
  }

  // 2. ตรวจสอบ username
  const trimmedUsername = usernameInput.value.trim();
  // 2.2 ตัด space หน้า-หลังก่อน validate
  // 2.4 ต้องไม่มี spacebar หรือค่าว่างอยู่ใน username
  if (/\s/.test(trimmedUsername) || trimmedUsername.length <= 3 || /^\d/.test(trimmedUsername)) {
    setInvalidInput(usernameInput);
    alert("กรุณากรอก username ให้ถูกต้อง");
    return false;
  }

  // 3. ตรวจสอบ password
  const trimmedPassword = passwordInput.value.trim();
  // 3.1 password ต้องมีทั้งตัวเลขและตัวอักษร
  if (trimmedPassword.length <= 4 || !/\d/.test(trimmedPassword) || !/[a-zA-Z]/.test(trimmedPassword)) {
    setInvalidInput(passwordInput);
    alert("กรุณากรอก password ให้ถูกต้อง");
    return false;
  }

  // ถ้าผ่านทุกเงื่อนไขให้ทำการ login
  alert("Login successful!");
  // ทำการ login โดยตรวจสอบ username, password
  // โค้ด login จะถูกเพิ่มที่นี่

  // นำไปที่ https://www.example.com
  window.location.href = "https://www.example.com";

  return true;
}

function setInvalidInput(inputElement) {
  inputElement.style.borderColor = "red";
}

function resetInputStyles() {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  usernameInput.style.borderColor = "";
  passwordInput.style.borderColor = "";
}

// เพิ่ม event listener ใน form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // ป้องกันการ submit ธรรมดา
  resetInputStyles(); // รีเซ็ตสี input เมื่อมีการ submit ใหม่
  return validateForm();
});

// เพิ่ม event listener ใน input เพื่อรีเซ็ตสีเมื่อผู้ใช้กำลังแก้ไข
usernameInput.addEventListener("input", function () {
  resetInputStyles();
});

passwordInput.addEventListener("input", function () {
  resetInputStyles();
});

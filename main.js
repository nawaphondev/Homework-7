const loginForm = document.querySelector(".login-form");

function validateForm() {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const roleSelect = document.querySelector("#role");

  // 1. ตรวจสอบว่า input ไม่เป็นค่าว่างหรือ space
  if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
    setInvalidInput(usernameInput);
    setInvalidInput(passwordInput);
    alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    return false;
  }

  // 2. ตรวจสอบว่ามีช่องว่างใน username หรือ password
  if (usernameInput.value.includes(' ') || passwordInput.value.includes(' ')) {
    alert("กรุณากรอกข้อมูลใหม่. ข้อมูลห้ามมีช่องว่าง");
    return false;
  }

  // 3. ตรวจสอบ username
  const trimmedUsername = usernameInput.value.trim();
  if (/\s/.test(trimmedUsername) || trimmedUsername.length <= 3 || /^\d/.test(trimmedUsername)) {
    setInvalidInput(usernameInput);
    alert("กรุณากรอก Username ให้ถูกต้อง");
    return false;
  }

  // 4. ตรวจสอบ password
  const trimmedPassword = passwordInput.value.trim();
  if (trimmedPassword.length <= 4 || !/\d/.test(trimmedPassword) || !/[a-zA-Z]/.test(trimmedPassword)) {
    setInvalidInput(passwordInput);
    alert("กรุณากรอก Password ให้ถูกต้อง");
    return false;
  }

  const roleValue = roleSelect.value;
  if (roleValue.trim() === "") {
    setInvalidInput(roleSelect);
    alert("กรุณาเลือก Role");
    return false;
  }

  // ถ้าผ่านทุกเงื่อนไขให้ทำการ simulate login สำเร็จ
  alert("Login Successfully!");

  // Redirect ไปยัง URL ที่ระบุ
  window.location.href = "https://www.example.com";

  return true;
}

function setInvalidInput(inputElement) {
  inputElement.style.borderColor = "red";
}

function resetInputStyles() {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const roleSelect = document.querySelector("#role");

  usernameInput.style.borderColor = "";
  passwordInput.style.borderColor = "";
  roleSelect.style.borderColor = "";
}

// เพิ่ม event listener ใน form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // ป้องกันการ submit ธรรมดา
  resetInputStyles(); // รีเซ็ตสี input เมื่อมีการ submit ใหม่
  return validateForm();
});

// เพิ่ม event listener ใน input เพื่อรีเซ็ตสีเมื่อผู้ใช้กำลังแก้ไข
const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("input", function () {
  resetInputStyles();
});

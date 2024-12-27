document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const result = await apiRegister({ username, email, password });

      if (result.message === "User registered successfully.") {
        alert("Registration successful. Please log in.");
        window.location.href = "login.html";
      } else {
        alert(`Error: ${result.message}`);
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const result = await apiLogin({ email, password });

      if (result.token) {
        alert("Login successful.");
        localStorage.setItem("authToken", result.token);
        window.location.href = "index.html";
      } else {
        alert(`Error: ${result.message}`);
      }
    });
  }
});

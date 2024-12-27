document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
  
    if (registerForm) {
      registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        // Get user input values
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        // Validation to check if fields are empty
        if (!username || !email || !password) {
          alert("All fields are required!");
          return;
        }
  
        // Prepare data to send to the backend
        const userData = { username, email, password };
  
        try {
          const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });
  
          // Check if the response is OK (status code 200-299)
          if (response.ok) {
            const result = await response.json();
            alert(result.message); // Registration success message
            window.location.href = "login.html"; // Redirect to login page
          } else {
            const result = await response.json();
            alert(`Error: ${result.message}`); // Show error message from backend
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong! Please try again.");
        }
      });
    }
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
  
    if (loginForm) {
      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        // Get user input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        // Validate that both fields are filled
        if (!email || !password) {
          alert("Both email and password are required!");
          return;
        }
  
        // Prepare data to send to the backend
        const loginData = { email, password };
  
        try {
          const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
          });
  
          // Handle the response
          if (response.ok) {
            const result = await response.json();
            alert(result.message); // Show login success message
            localStorage.setItem("authToken", result.token); // Store token in localStorage
            window.location.href = "dashboard.html"; // Redirect to a dashboard page or homepage
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
  
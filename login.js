const loginForm = document.getElementById('login-form');
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          const defaultUsername = 'wonks';
          const defaultPassword = 'aadi123';
          
          if (username.value === defaultUsername && password.value === defaultPassword) {
            alert('Login successful');
          } else {
            alert('Invalid username and password');
          }
        });
      
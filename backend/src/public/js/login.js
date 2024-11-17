
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('loginForm');
        const messageDiv = document.getElementById('message');

    
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            messageDiv.textContent = 'Logging in...';

    
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: document.getElementById('username').value,
                        password: document.getElementById('password').value,
                    }),
                    credentials: 'include'
                })
                console.log("response:",response);
    
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log("Response data:", data);
                
                if (data.success) {
                    messageDiv.textContent = 'Login successful. Redirecting...';
                    localStorage.setItem('user', JSON.stringify(data.user));
                    
                    setTimeout(() => {
                        window.location.href = `/mypage?username=${encodeURIComponent(data.user.username)}`;
                    }, 1000);
                } else {
                    messageDiv.textContent = 'Login failed: ' + data.message;
                }
            } catch (error) {
                console.error('Error:', error);
                messageDiv.textContent = 'An error occurred. Please try again.';
            }
        });
    });
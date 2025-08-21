const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const body = document.body;

loginBtn.addEventListener('click', function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if(username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // Show modal on top of login page
        successModal.style.display = "flex";
        body.classList.add("modal-active"); // blur login page
    }
});

closeModal.addEventListener('click', function() {
    successModal.style.display = "none";
    body.classList.remove("modal-active");
    usernameInput.value = "";
    passwordInput.value = "";
});

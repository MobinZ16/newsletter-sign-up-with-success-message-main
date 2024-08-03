document.getElementById("myButton").onclick = function() {
    window.location.href="/#/newsletter-sign-up-with-success-message-main/index.html2";
}

document.getElementById("dismiss").onclick = function() {
    window.location.href="/#/newsletter-sign-up-with-success-message-main/index.html";
}

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    localStorage.setItem('userEmail', email);
    window.location.href="/#/newsletter-sign-up-with-success-message-main/index.html2";
})

window.onload = function (){
    var email = localStorage.getItem('userEmail');
    if (email){
        document.getElementById('emailForm').textContent = email;
    }else {
        document.getElementById('emailForm').textContent = 'NO email found.';
    }
}
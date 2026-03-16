document.getElementById("contactForm").onsubmit = function() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let answer = document.getElementById("answer").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name =="") {
        document.getElementById("nameError").innerText="Please enter your name.";
        return false;
    }
    //  to check name pattern
    let namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(name)) {
        document.getElementById("nameError").innerText="Name should contain only letters.";
        return false;
    }

    if(email =="") {
        document.getElementById("emailError").innerText="Please enter your email address.";
        return false;
    }
    // to check email pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText="Please enter a valid email address.";
        return false;
    }

    if (phone =="") {
        document.getElementById("phoneError").innerText="Please enter the phone number.";
        return false;
    }
    // to check phone pattern
    let phonePattern =  /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText="Please enter a valid phone number.";
        return false;
    } 
    // to check gender is selected or not
    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender ==null) {
        alert("Please select your gender.");
        return false;
    }
    // answer
    if (answer =="") {
        document.getElementById("answerError").innerText="Please enter your answer.";
        return false;
    }
    // answer length
    if (answer.length < 10) {
        document.getElementById("answerError").innerText="Answer must be conatin at least 10 characters.";
        return false;
    }
    // message 
    if (message =="") {
        document.getElementById("messageError").innerText="Please enter your message.";
        return false;
    }
    // message length
    if (message.length < 50) {
        document.getElementById("messageError").innerText="Message must be contain at least 50 characters.";
        return false;
    }
    alert("Your form is submited successfully..!")
    document.getElementById("contactForm").reset();
}

//Reset button
document.getElementById("contactForm").onreset = function() {
    document.getElementById("nameError").innerText ="";
    document.getElementById("emailError").innerText ="";
    document.getElementById("phoneError").innerText ="";
    document.getElementById("answerError").innerText ="";
    document.getElementById("messageError").innerText ="";
}
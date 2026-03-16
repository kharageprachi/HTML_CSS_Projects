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

    if(email =="") {
        document.getElementById("emailError").innerText="Please enter your email address.";
        return false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText="Please enter a valid email address.";
        return false;
    }

    if (phone =="") {
        document.getElementById("phoneError").innerText="Please enter the phone number.";
        return false;
    }
    let phonePattern =  /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText="Please enter a valid phone number.";
        return false;
    } 

    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender ==null) {
        alert("Please select your gender.");
        return false;
    }

    if (answer =="") {
        document.getElementById("answerError").innerText="Please enter your answer.";
        return false;
    }

    if (message =="") {
        document.getElementById("messageError").innerText="Please enter your message.";
        return false;
    }
    alert("Your form is submited successfully..!")
}

//Reset button
document.getElementById("contactForm").onreset = function() {
    document.getElementById("nameError").innerText ="";
    document.getElementById("emailError").innerText ="";
    document.getElementById("phoneError").innerText ="";
    document.getElementById("answerError").innerText ="";
    document.getElementById("messageError").innerText ="";
}
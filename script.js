function validationForm() {
    let name = document.forms["validation"]["name"].value;
    let dob = document.forms["validation"]["dob"].value;
    let email = document.forms["validation"]["email"].value;
    let password = document.forms["validation"]["password"].value;
    let ConfirmPassword = document.forms["validation"]["confirm-pass"].value;
    let upload = document.getElementById("upload").files;

    if (name === "") {
        alert("Name is missing");
        return false;
    }

    if (dob === "") {
        alert("Date of birth is missing");
        return false;
    }

    if (email === "") {
        alert("Email is missing");
        return false;
    }

    // Password validations
    if (password.length !== 7) {
        alert("Password must be exactly 7 characters long");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter");
        return false;
    }
    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter");
        return false;
    }
    if (!/[\W_]/.test(password)) {
        alert("Password must contain at least one special character");
        return false;
    }

    if (ConfirmPassword !== password) {
        alert("Passwords do not match");
        return false;
    }

    if (upload.length === 0) {
        alert("Missing File");
        return false;
    }
    else{
    alert("Form submitted successfully");
    return true;
    }

}

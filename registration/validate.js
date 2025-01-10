document.getElementById(registration_form).addEventListener("submit", function(e){
    
    let valid = true;

    const id = document.getElementById("id").value.trim();
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const conform_password = document.getElementById("conform_password").value;

    //cler previous eerors

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    //validate id

    if (!id){
        document.getElementById("iderror").textContent = " ID is required";
        valid = false;
    }

    if (!fname){
        document.getElementById("fnameerror").textContent ="fname is required";
        valid= false;
    }
    if(!lname){
        document.getElementById("lnameerror").textContent = "lname is required";
        valid= false;
    }
    if(!email){
        document.getElementById("emailerror").textContent = "email is required";
        valid= false;
    }
    if(!password){
        document.getElementById("passworderroe").textContent = "password is required";
        valid= false;
    }
    if(password !== conform_password){
        document.getElementById("conform_passworderror").textContent = "passwords do no match";
        valid= false;
    }
    if(!email){
        document.getElementById("emailerror").textContent = "invalid email format";
        valid= false;
    }
    if(!valid){
        e.preventDefault();
    }

})

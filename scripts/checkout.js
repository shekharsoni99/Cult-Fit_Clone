import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("icon").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("userPic").addEventListener("click", () => {
    window.location.href = "profile.html";
});

document.getElementById("cart").addEventListener("click", () => {
    window.location.href = "cart.html";
});


document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    var firstName = document.querySelector("#fName").value;
    var lastName = document.querySelector("#lName").value;
    var address = document.querySelector("#address").value;
    var city = document.querySelector("#city").value;
    var email = document.querySelector("#email").value;

    if (firstName == "") {
        alert("First Name must be filled out");
    }

    else if (lastName == "") {
        alert("Last Name must be filled out");
    }

    else if (address == "") {
        alert("Address must be filled out");
    }

    else if (city == "") {
        alert("City must be filled out");
    }

    else if (email == "") {
        alert("Email must be filled out");
    }

    else if (firstName != "" && lastName != "" && address != "" && city != "" && email != "") {
        window.location.href = "payment.html";
    };
})

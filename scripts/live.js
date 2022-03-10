import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
import { login } from "../scripts/login.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
document.getElementById('login').innerHTML = login();

document.getElementById("icon").addEventListener("click", () => {
    window.location.href = "index.html";
});


document.getElementById("cart").addEventListener("click", () => {
    window.location.href = "cart.html";
});

let login_count = false;

document.getElementById("userPic").addEventListener("click", () => {
    // window.location.href = "profile.html";
    if (!login_count) {
        document.getElementById('login').style.display = "block";
        login_count = true;
    }
    else {
        document.getElementById('login').style.display = "none";
        login_count = false;
    }
});

document.getElementById('continue_btn').onclick = () => {
    if (document.getElementById('login_input').value == '12345') {
        document.getElementById('login_div').innerHTML = "";

        document.getElementById('login_div').innerText = "OTP is sent to your phone number";

        let input = document.createElement("input");
        input.id = "login_input";
        input.setAttribute("placeholder", "Enter OTP (123)");
        
        let btn = document.createElement("button");
        btn.textContent = "Verify OTP";
        btn.id = "login_verify_btn";
        btn.onclick = () => {
            if (input.value == "123") {
                alert("Login Successfull");
                window.location.href = 'eat.html';
            }
            else {
                alert("Wrong OTP");
            }
        }

        document.getElementById('login_div').append(input, btn);
    }
    else {
        alert("wrong credentials");
    }
}

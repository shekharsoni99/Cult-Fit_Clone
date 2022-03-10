import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
import {login} from "../scripts/login.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
document.getElementById('login').innerHTML = login();

document.getElementById("icon").addEventListener("click", () => {
    window.location.href = "index.html";
});

// document.getElementById("userPic").addEventListener("click", () => {
//     window.location.href = "profile.html";
// });

document.getElementById("cart").addEventListener("click", () => {
    window.location.href = "cart.html";
});

let login_count = false;

document.getElementById("userPic").addEventListener("click",()=>{
    // window.location.href = "profile.html";
    if(!login_count) {
        document.getElementById('login').style.display = "block";
        login_count = true;
    }
    else {
        document.getElementById('login').style.display = "none";
        login_count = false;
    }
});

document.getElementById('continue_btn').onclick = () => {
    if(document.getElementById('login_input').value == '12345') {
        document.getElementById('login_div').innerHTML = "";

        document.getElementById('login_div').innerText = "OTP is send to your phone number";

        let input = document.createElement("input");
        input.id = "login_input";
        input.setAttribute("placeholder", "Enter OTP (123)");
        
        let btn = document.createElement("button");
        btn.textContent = "Verify OTP";
        btn.id = "login_verify_btn";
        btn.onclick = () => {
            if(input.value == "123") {
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

function login_counter () {
    let cart_data_1 = JSON.parse(localStorage.getItem("cart_data")) || [];

    document.getElementById('cart_count').textContent = cart_data_1.length;
}
login_counter();

// ----------------------------start-----------------------------------

import local_Storage from '../scripts/local_Storage.js';
let parent1 = document.getElementById('imageDiv');
let parent2 = document.getElementById('des');

let items = JSON.parse(localStorage.getItem("product_page_data"));

const display = () => {
    let div = document.createElement("div");
    div.id = "nameDiv"

    let imgDiv = document.createElement("div");
    imgDiv.id = "imgDiv";

    let image = document.createElement("img");
    image.src = items.img_url;
    imgDiv.append(image);

    let name = document.createElement("h2");
    name.textContent = items.name;

    let type = document.createElement("span");
    type.setAttribute("id", "vegan_type");
    type.textContent = items.type;

    let cal = document.createElement("span");
    cal.textContent = `${items.cal} Cal`;
    cal.style.borderRight = "1px solid gray";
    cal.className = "fibre";

    let fibre = document.createElement("span");
    fibre.textContent = items.fibre;
    fibre.className = "fibre";

    let price_div = document.createElement("div");
    price_div.id = "priceDiv";
    let price = document.createElement("span");
    price.textContent = `₹ ${items.price}`;
    price.style.color = "rgb(254,79,121)";

    let str_price = document.createElement("span");
    str_price.textContent = `₹ ${items.str_price}`;
    str_price.style.textDecoration = "line-through";
    str_price.className = "fibre";

    let btn = document.createElement("button");
    btn.textContent = "ADD";
    btn.onclick = () => {
        console.log("u");
        local_Storage(items);
        login_counter();
    }

    let hr = document.createElement("hr");

    price_div.append(price, str_price, btn);

    div.append(name, price_div);

    // --------------------------------------------------------------

    let div2 = document.createElement("div");
    let offer = document.createElement("h2");
    offer.textContent = "Offers applied";
    offer.style.fontWeight = "bold";

    let offer1 = document.createElement("p");
    offer1.textContent = "🏷️ Flat 50% discount on Meals T&C";

    let offer2 = document.createElement("p");
    offer2.textContent = "🏷️ Get 20% Fitcash on orders from ₹250 (upto 80) T&C";

    let nutrition = document.createElement("h2");
    nutrition.textContent = "Nutritional Info.";
    nutrition.style.marginTop = "8%";
    nutrition.style.fontWeight = "bold";

    let nut_img = document.createElement("img");
    nut_img.src = "/images/Screenshot 2022-02-23 141306.jpg";

    let description = document.createElement("p");
    description.textContent = items.des;
    description.style.marginTop = "8%";

    let allergen = document.createElement("p");
    allergen.textContent = items.allergen;
    allergen.style.marginTop = "8%";

    let fassai_img = document.createElement("img");
    fassai_img.src = "https://bit.ly/3sb2tvO";
    fassai_img.style.width = "8%";
    fassai_img.style.marginRight = "3%";
    fassai_img.style.marginTop = "5%";

    let fassai = document.createElement("span");
    fassai.textContent = " License No. 10018043002300";
    fassai.className = "fibre";
    fassai.style.marginTop = "5%";

    div2.append(offer, offer1, offer2, nutrition, nut_img, description, allergen, fassai_img, fassai);

    parent2.append(div, hr, div2);
    parent1.append(imgDiv);
}

display();
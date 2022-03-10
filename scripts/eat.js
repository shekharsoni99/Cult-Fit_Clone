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

function login_counter() {
    let cart_data_1 = JSON.parse(localStorage.getItem("cart_data")) || [];

    document.getElementById('cart_count').textContent = cart_data_1.length;
}
login_counter();

// -----------------------------------------------------start-------------------------------------------------------------------------------


import local_Storage from "../scripts/local_Storage.js";

// ------------------------------------------------------slider js-----------------------------------------------------------------------


let slide = document.querySelector('#sliders');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn1.onclick = () => {
    slide.style.transform = 'translateX(0px)';
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
}

btn2.onclick = () => {
    slide.style.transform = 'translateX(-100%)';
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
}

btn3.onclick = () => {
    slide.style.transform = 'translateX(-200%)';
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
}

document.getElementById('left_arrow_btn').onclick = () => {
    slide.style.transform = 'translateX(`${previous}%`)';
}

document.getElementById('right_arrow_btn').onclick = () => {
    slide.style.transform = 'translateX(`${previous}%`)';
}

let count = 0;
setInterval(function () {
    // console.log(count);
    if (count < -200) {
        count = 0;
    }
    if (count == 0) {
        slide.style.transform = 'translateX(-100%)';
        btn1.classList.remove("active");
        btn2.classList.add("active");
        btn3.classList.remove("active");
    }
    if (count == -100) {
        slide.style.transform = 'translateX(-200%)';
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.add("active");
    }

    if (count == -200) {
        slide.style.transform = 'translateX(0%)';
        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
    }
    count -= 100;
}, 4000);

// --------------------------------------------------------------end of slider js-------------------------------------------------------------------------------------

// ------------------------------------------------------------------append data on dom--------------------------------------------------------------------------------

// {img_url: "", name: "", type:"", cal: "", fibre: "", price: "", str_price: ""}

let kulcha_burger_arr = [
    [{ img_url: "https://bit.ly/3LNwF82", name: "Ghar ke Rajma, Aloo Methi & Jeera Pulao", type: "🟢", cal: "824", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BLexr1", name: "Yellow Dal Tadka, Carrot Beans & Jeera Pulao", type: "🟢", cal: "801", fibre: "High fibre", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BNhven", name: "Chicken Masala, Aloo Methi & Jeera Pulao", type: "🔴", cal: "332", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "922", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "58", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/3LNxNZk", name: "Ghar ke Rajma, Aloo Methi & Jeera Pulao", type: "🟢", cal: "524", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3pbCmD7", name: "Egg Curry with Fried Jeera & Ghar ki Roti", type: "🔴", cal: "701", fibre: "High fibre", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3LT1AQo", name: "Chana Masala, Aloo Methi & Jeera Pulao", type: "🟢", cal: "332", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "222", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3IdlOlO", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "158", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/352rPTY", name: "Vegetable Khichdi (500gm)", type: "🟢", cal: "224", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3t0blUb", name: "Curd Rice (500gm)", type: "🟢", cal: "301", fibre: "High protein", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BNhven", name: "Chana Masala, Aloo Methi & Jeera Pulao", type: "🟢", cal: "132", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "922", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "958", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/3BImj4N", name: "Whole Wheat Garlic Bread", type: "🟢", cal: "324", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BGV4aR", name: "Chicken Tikka Stuff Garlic Bread", type: "🔴", cal: "401", fibre: "High fibre", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3LXaf4v", name: "8'' Golden Corn Pizza", type: "🟢", cal: "132", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "922", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "358", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/3IlWfz6", name: "Spicy Dilli Kulcha Burger & Zero Sugar Cola Fizz", type: "🟢", cal: "124", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3pbHBmh", name: "Chicken Paneer XL Burger Combo", type: "🔴", cal: "932", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3hatcT0", name: "Chicken XL Kulcha Burger Combo", type: "🔴", cal: "932", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "322", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "958", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/36oSGK6", name: "Lahsooni Methi Chicken (Servers 1-2)", type: "🔴", cal: "824", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3habRcN", name: "Yellow Dal Tadka, Carrot Beans & Jeera Pulao", type: "🟢", cal: "801", fibre: "High fibre", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BNhven", name: "Chana Masala, Aloo Methi & Jeera Pulao", type: "🟢", cal: "932", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "322", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "158", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/3sbJPny", name: "Whole Wheat Methi Rotis (3pcs)", type: "🟢", cal: "124", fibre: "High fibre", price: "19", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3p5GGUo", name: "Whole Wheat Parathas(3pcs)", type: "🟢", cal: "342", fibre: "High fibre", price: "39", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BNhven", name: "Chana Masala, Aloo Methi & Jeera Pulao", type: "🟢", cal: "332", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "922", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "958", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/34XmUUq", name: "Parsi Chicken Keema", type: "🔴", cal: "309", fibre: "High fibre", price: "289", str_price: "478", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3533Yn9", name: "Shahi Subz Biryani", type: "🔴", cal: "140", fibre: "High fibre", price: "199", str_price: "399", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3JNtLyf", name: "Boneless Chicken Biryani", type: "🔴", cal: "932", fibre: "High fibre", price: "294", str_price: "488", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3hb2I3G", name: "Shahi Murgh Biryani", type: "🔴", cal: "922", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BJGXBy", name: "Chicken Shami Kebab", type: "🔴", cal: "958", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/3p9iYXj", name: "Parsi Chicken Kulcha Burger", type: "🔴", cal: "193", fibre: "High fibre", price: "120", str_price: "241", des: "Yummy chicken keema patty, topped with crunchy sauteed veggies, roasted onions, homemade cheese sauce and egg white omelette layered in between whole wheat soft kulcha. Dig into this double the joy of kulcha burger for guilt free indulgence.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3IgOUjZ", name: "Butter Chicken Kulcha Burger", type: "🔴", cal: "348", fibre: "High protein", price: "120", str_price: "241", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3p4u7Ja", name: "Spicy Dilli Kulcha Burger & Zero Sugar Cola Fizz", type: "🟢", cal: "538", fibre: "High protein", price: "104", str_price: "209", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3saIk9i", name: "Veg Keema Kulcha Burger", type: "🟢", cal: "576", fibre: "High protein", price: "110", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3p4Lsl9", name: "Butter Panner Kulcha Burger", type: "🟢", cal: "557", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },],

    [{ img_url: "https://bit.ly/3LNwF82", name: "Ghar ke Rajma, Aloo Methi & Jeera Pulao", type: "🟢", cal: "824", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BLexr1", name: "Yellow Dal Tadka, Carrot Beans & Jeera Pulao", type: "🟢", cal: "101", fibre: "High fibre", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BNhven", name: "Chana Masala, Aloo Methi & Jeera Pulao", type: "🟢", cal: "332", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "922", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "958", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },]
];

let nameArr = ["3 Layer Rice Bowls", "Indian Thalis", "Khichdis", "Multigrain Pizzas", "Beverages", "Fit Curries", "Bread & Rice", "Non-Veg Curries", "Kulcha Burger", "Signature Salads"];

let idCatchArr = ["rice_bowl", "indian_thalis", "khichdis", "multigrain", "beverages", "fit_curries", "bread_rice", "non_veg_curries", "kulcha_burger", "signature_salad"];

let loop = (arr) => {
    document.getElementById('dish_item').innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let parent = document.createElement("div");
        parent.id = idCatchArr[i];
        let h1 = document.createElement("p");
        h1.textContent = nameArr[i];
        h1.style.fontSize = "20px";
        let br = document.createElement("br");
        parent.append(h1, br);

        displayData(arr[i], parent);
    }
}

const displayData = (array, parent) => {

    array.map((items) => {
        let div = document.createElement("div");

        let imgDiv = document.createElement("div");
        imgDiv.id = "imgDiv";

        let image = document.createElement("img");
        image.src = items.img_url;
        imgDiv.append(image);

        let name = document.createElement("p");
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
        price.style.fontWeight = "600";

        let str_price = document.createElement("span");
        str_price.textContent = `₹ ${items.str_price}`;
        str_price.style.textDecoration = "line-through";
        str_price.className = "fibre";

        let btn = document.createElement("button");
        btn.textContent = "ADD";
        btn.onclick = () => {
            local_Storage(items);
            login_counter();
        }

        price_div.append(price, str_price, btn);

        image.onclick = () => {
            localStorage.setItem("product_page_data", JSON.stringify(items));
            window.location.href = 'product.html';
        }

        div.append(imgDiv, name, type, cal, fibre, price_div);

        parent.append(div);

        document.getElementById('dish_item').append(parent);
    });
}

loop(kulcha_burger_arr);

// ------------------------------------------------------------end of append data------------------------------------------------------

// -------------------------------------------------------------------filter methods ---------------------------------------------------

let veg_filter = document.querySelector("#veg_span");
let flag = false;

veg_filter.onclick = () => {
    document.getElementById('dish_item').innerHTML = "";
    veg_filter.style.color = "rgb(138, 221, 48)";
    veg_filter.style.border = "1px solid rgb(138, 221, 48)";
    veg_filter.style.backgroundColor = "rgb(216,242,188)"
    let veg_arr = [];

    kulcha_burger_arr.map((item) => {
        let temp = [];
        item.map((add) => {
            if (add.type == "🟢") {
                temp.push(add);
            }
        });
        veg_arr.push(temp);
    });
    if (flag) {
        flag = false;
    }
    else {
        flag = true;
    }
    if (flag) {
        loop(veg_arr);
    }
    else {
        loop(kulcha_burger_arr);
        veg_filter.style.color = "rgb(180, 180, 180)";
        veg_filter.style.border = "1px solid rgb(180, 180, 180)";
        veg_filter.style.backgroundColor = "white";
    }
}

let filter_sort = document.querySelector("#filter_img_class");
let filter_overlay = document.getElementById('filter_overlay');
let flag1 = false;

filter_sort.onclick = () => {
    if (!flag1) {
        filter_overlay.style.display = "block";
        filter_sort.style.color = "rgb(234,6,120)";
        flag1 = true;
    }
    else {
        filter_overlay.style.display = "none";
        filter_sort.style.color = "rgb(75, 75, 75)";
        flag1 = false;
    }
}

document.getElementById('cancel').onclick = () => {
    if (flag1) {
        filter_overlay.style.display = "none";
        filter_sort.style.color = "rgb(75, 75, 75)";
        flag1 = false;
    }
}

// ---------------------------overlay filter----------------------------------

let cal_span1 = document.getElementById('cal_span1');
let cal_span2 = document.getElementById('cal_span2');
let cal_span3 = document.getElementById('cal_span3');
let cal_span4 = document.getElementById('cal_span4');

let ul_list = document.getElementById('item_select');
let list = document.getElementById('ul_list');

ul_list.onclick = () => {
    if (!flag1) {
        list.style.display = "block";
        list.style.backgroundColor = "white";
        flag1 = true;
    }
    else {
        list.style.display = "none";
        flag1 = false;
    }
}

let x1 = document.getElementById('li1');
let p = document.getElementById('eat_now');
x1.onclick = () => {
    p.innerText = x1.textContent;
}

let x2 = document.getElementById('li2');
x2.onclick = () => {
    p.innerText = x2.textContent;
}

let x3 = document.getElementById('li3');
x3.onclick = () => {
    p.innerText = x3.textContent;
}

let x4 = document.getElementById('li4');
x4.onclick = () => {
    p.innerText = x4.textContent;
}

let x5 = document.getElementById('li5');
x5.onclick = () => {
    p.innerText = x5.textContent;
}

// -----------------------------------clear all------------------------------

document.getElementById('zero').onclick = () => {
    let veg_arr = [];

    kulcha_burger_arr.map((item) => {
        let temp = [];
        item.map((add) => {
            if (add.cal >= 0 && add.cal <= 200) {
                temp.push(add);
            }
        });
        veg_arr.push(temp);
    });

    loop(veg_arr);
}

document.getElementById('two').onclick = () => {
    let veg_arr = [];

    kulcha_burger_arr.map((item) => {
        let temp = [];
        item.map((add) => {
            if (add.cal >= 200 && add.cal <= 500) {
                temp.push(add);
            }
        });
        veg_arr.push(temp);
    });

    loop(veg_arr);
}

document.getElementById('four').onclick = () => {
    let veg_arr = [];

    kulcha_burger_arr.map((item) => {
        let temp = [];
        item.map((add) => {
            if (add.cal >= 500) {
                temp.push(add);
            }
        });
        veg_arr.push(temp);
    });
    loop(veg_arr);
}

// ------------------------------------apply----------------------------

let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');
let check4 = document.getElementById('check4');

document.getElementById('apply').onclick = () => {
    let veg_arr = [];
    if (check1.checked) {
        kulcha_burger_arr.map((item) => {
            let temp = [];
            item.map((add) => {
                if (add.fibre == "High protein") {
                    temp.push(add);
                }
            });
            veg_arr.push(temp);
        });
    }

    if (check2.checked) {
        kulcha_burger_arr.map((item) => {
            let temp = [];
            item.map((add) => {
                if (add.cal >= 200 && add.cal <= 500) {
                    temp.push(add);
                }
            });
            veg_arr.push(temp);
        });
    }

    if (check3.checked) {
        kulcha_burger_arr.map((item) => {
            let temp = [];
            item.map((add) => {
                if (add.fibre == "High fibre") {
                    temp.push(add);
                }
            });
            veg_arr.push(temp);
        });
    }

    if (check4.checked) {
        kulcha_burger_arr.map((item) => {
            let temp = [];
            item.map((add) => {
                if (add.type == "🟢") {
                    temp.push(add);
                }
            });
            veg_arr.push(temp);
        });
    }
    filter_overlay.style.display = "none";
    console.log(veg_arr);

    loop(veg_arr);
}

document.getElementById('clear_all').onclick = () => {
    loop(kulcha_burger_arr);
}

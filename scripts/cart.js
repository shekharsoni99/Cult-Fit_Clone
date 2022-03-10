import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

document.getElementById("icon").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("userPic").addEventListener("click", () => {
    window.location.href = "profile.html";
});

document.getElementById("cart").addEventListener("click", () => {
    window.location.href = "cart.html";
});

function login_counter () {
    let cart_data_1 = JSON.parse(localStorage.getItem("cart_data")) || [];

    document.getElementById('cart_count').textContent = cart_data_1.length;
}
login_counter();

// ------------------------------------start-----------------------

let food_data = [
    { img_url: "https://bit.ly/3LNwF82", name: "Ghar ke Rajma, Aloo Methi & Jeera Pulao", type: "🟢", cal: "824", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BLexr1", name: "Yellow Dal Tadka, Carrot Beans & Jeera Pulao", type: "🟢", cal: "801", fibre: "High fibre", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3BNhven", name: "Chicken Masala, Aloo Methi & Jeera Pulao", type: "🔴", cal: "332", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "922", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3BIhZT7", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "58", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },

    { img_url: "https://bit.ly/3LNxNZk", name: "Ghar ke Rajma, Aloo Methi & Jeera Pulao", type: "🟢", cal: "524", fibre: "High fibre", price: "89", str_price: "178", des: "What’s better than a rice bowl? A rajma rice bowl! Indulge in the wholesomeness and happiness of the all-appreciated rajma that’s served with our aloo-methi and ghee-ful jeera pulao in this rice bowl.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3pbCmD7", name: "Egg Curry with Fried Jeera & Ghar ki Roti", type: "🔴", cal: "701", fibre: "High fibre", price: "99", str_price: "199", des: "Eat fit's Dilli special kulcha burger combo evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight. Enjoy with the unbeatable taste and goodness of fizzy classic cola with superherb - Ashwagandha.", allergen: "Allergen information: Gluten, egg, soy, vinegar, nutmeg, dairy." },
    { img_url: "https://bit.ly/3LT1AQo", name: "Chana Masala, Aloo Methi & Jeera Pulao", type: "🟢", cal: "332", fibre: "High fibre", price: "94", str_price: "188", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3H9WDPz", name: "Kadhai Paneer, Carrot Beans & Jeera Pulao", type: "🟢", cal: "222", fibre: "High protein", price: "114", str_price: "220", des: "Does a burger always need to be firangi? Definitely not! Eat fit's Dilli special kulcha burger evokes not only nostalgia but also let’s you enjoy traditional tastes in contemporary style. Bite into the layers of whole wheat kulcha with protein packed mashed chole and crunchy sauteed veggies with delight.", allergen: "Allergen Information: Vinegar, Soy, Gluten, Nutmeg, Dairy." },
    { img_url: "https://bit.ly/3IdlOlO", name: "Matar Paneer, Aloo Methi & Jeera Pulao", type: "🟢", cal: "158", fibre: "High fibre", price: "115", str_price: "230", des: "Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together.", allergen: "Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg." },
];

let cart_data = JSON.parse(localStorage.getItem("cart_data"));

let total_price = () => {
    cart_data.map((items, index) => {
        console.log(items);
        let div = document.createElement("div");
        let img_div = document.createElement("div");
        let des_div = document.createElement("div");

        let image = document.createElement("img");
        image.src = items.img_url;
        img_div.append(image);

        let name = document.createElement("p");
        name.textContent = items.name;

        let price = document.createElement("p");
        price.textContent = `₹ ${items.price}`;

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = () => {
            cart_data.splice(index, 1);
            localStorage.setItem("cart_data", JSON.stringify(cart_data));
            window.location.href = 'cart.html';
        }

        image.onclick = () => {
            localStorage.setItem("product_page_data", JSON.stringify(items));
            window.location.href = 'product.html';
        }

        des_div.append(name, price, btn);

        div.append(img_div, des_div);

        document.getElementById('left_up').append(div);
    })
}


let discount_total = cart_data.reduce((a, b) => {
    return (+a + +b.price);
}, 0);

let str_total = cart_data.reduce((a, b) => {
    return (+a + +b.str_price);
}, 0);

document.getElementById('str_total').innerText = `₹ ${str_total}`;
document.getElementById('discount_total').innerText = `₹ ${discount_total}`;

let pack_charge = Math.floor(Math.random() * (20 - 10) + 10);
document.getElementById('pack_charge').innerText = `₹ ${pack_charge}`;

document.getElementById('final_total').innerText = `₹ ${discount_total + pack_charge}`;

total_price();

let display_data = () => {
    food_data.map((items) => {
        let div = document.createElement("div");
        let img_div = document.createElement("div");
        let des_div = document.createElement("div");
        let price_div = document.createElement("div");

        let image = document.createElement("img");
        image.src = items.img_url;
        img_div.append(image);

        let name = document.createElement("p");
        name.textContent = items.name;

        let price = document.createElement("span");
        price.textContent = `₹ ${items.price}`;


        let veg = document.createElement("span");
        veg.innerText = items.type;

        let cal = document.createElement("span");
        cal.innerHTML = ` | ${items.cal} Cal`;

        let btn = document.createElement("button");
        btn.textContent = "Add";
        btn.onclick = () => {
            cart_data.push(items);
            localStorage.setItem("cart_data", JSON.stringify(cart_data));
            window.location.href = 'cart.html';
        }

        image.onclick = () => {
            localStorage.setItem("product_page_data", JSON.stringify(items));
            window.location.href = 'product.html';
        }

        price_div.append(price, btn);

        des_div.append(name, veg, cal, price_div);

        div.append(img_div, des_div);

        document.getElementById('left_down').append(div);
    })
}
display_data();
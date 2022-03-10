let cart_data = JSON.parse(localStorage.getItem("cart_data")) || [];

const local_Storage = (obj) => {
    cart_data.push(obj);
    localStorage.setItem("cart_data", JSON.stringify(cart_data));
}

export default local_Storage;
document.querySelector("#btn").addEventListener("click", () => {
    var otp = document.querySelector("input").value;
    if (otp == 1234) {
        alert("Payment successful! Your order has been placed.");
        window.location.href = "index.html";
    }
});
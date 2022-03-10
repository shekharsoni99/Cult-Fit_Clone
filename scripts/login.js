function login () {
    return `
    <div id="login_img_div"><img src="images/Screenshot 2022-02-26 103529.jpg" alt="" id="login_img"></div>      
    <div id="down">
        <div style="font-weight: bolder; font-size: large;" id="login_div">
            +91<input type="text" placeholder="Enter your phone number (12345)" id="login_input">
            <button style="background-color: rgb(179, 179, 179); color: rgb(29, 29, 29);" id="continue_btn">CONTINUE</button>
            
        </div>
        <button style="background-color: rgb(29, 29, 29); color: rgb(179, 179, 179);" id="login_signup_btn">OR CONNECT WITH GOOGLE</button>
        <div style="text-align: center;"><sup>*</sup>By Continuing you agree to the <span id="login_span">Terms of Services</span> and <span id="login_span"> Privacy policy</span></div>
    </div>
    `;
}

function continue_btn() {
    alert("Hello");
}

export {login};
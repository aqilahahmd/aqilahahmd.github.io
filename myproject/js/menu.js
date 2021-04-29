let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmailVal = document.getElementById("userEmail");
    let userPhoneVal = document.getElementById("userPhone");
    let userPaxVal = document.getElementById("userPax");
    let userBeveragesVal = document.getElementById("userBeverages");
    let userDessertsVal = document.getElementById("userDesserts");
    let userRemarksVal = document.getElementById("userRemarks");

    bookNow(userNameVal, userEmailVal, userPhoneVal, userPaxVal, userBeveragesVal, userDessertsVal, userRemarksVal);
});

function bookNow(userName, userEmail, userPhone, userPax, userBeverages, userDesserts, userRemarks) {
    let url = 'https://api.sheety.co/14e5dbeb43f50147a8373c58a5a3b6e5/myproject/namelist';
    let body = {
        bookingitem: {
            name: userName,
            email: userEmail,
            tel: userPhone,
            pax: userPax,
            beverages: userBeverages,
            desserts: userDesserts,
            remarks: userRemarks
        }
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.namelist.name + "coffee booking is done")
        });
}
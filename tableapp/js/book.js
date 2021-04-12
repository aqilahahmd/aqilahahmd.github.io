let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let UserEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks0").value;

    bookNowBtn(userNameVal, UserEmailVal, userPaxVal, userRemarksVal);
});

function BookNow(userName, userEmail, userPax, userRemarks) {
    let url = 'https://api.sheety.co/14e5dbeb43f50147a8373c58a5a3b6e5/tableapp/bookingitem';
    let body = {
        bookingitem: {
            name: userName,
            email: userEmail,
            pax: userPax,
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
            aler(json.bookingtem.name + + "," + json.bookingitem.name +" successfully added ")
        });
}

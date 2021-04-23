let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetBooking();
});

function GetBooking() {
    let url = 'https://api.sheety.co/14e5dbeb43f50147a8373c58a5a3b6e5/myproject/namelist';
    fetch(url)
        .then((response) => response.json())
        .then(json => {

            let bookingNameList = document.getElementById("bookingNameList");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k);
            }

            for (let i = 0; i < json.namelist.length; i++) {
                let gName = json.namelist[i].name;
                let gEmail = json.namelist[i].email;
                let gTel = json.namelist[i].tel;
                let gPax = json.namelist[i].pax;
                let gBeverages = json.namelist[i].beverages;
                let gDesserts = json.namelist[i].desserts;
                let gRemarks = json.namelist[i].remarks;
                let gId = json.namelist[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(2).innerHTML = gTel;
                row.insertCell(3).innerHTML = gPax;
                row.insertCell(2).innerHTML = gBeverages;
                row.insertCell(2).innerHTML = gDesserts;
                row.insertCell(4).innerHTML = gRemarks;
                row.insertCell(5).innerHTML = "<button id='" + btnId + "' class='btn btn-danger'> Delete </button>";

                bookingIds.push(btnId);
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    DeleteBooking(theId);
                });
            }
        });
}


function DeleteBooking(id) {
    let url = 'https://api.sheety.co/14e5dbeb43f50147a8373c58a5a3b6e5/myproject/namelist/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + "deleted!");
            GetBooking();
        });
}
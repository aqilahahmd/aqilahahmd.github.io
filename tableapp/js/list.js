let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetBooking();
});

function GetBooking() {
    let url = 'https://api.sheety.co/14e5dbeb43f50147a8373c58a5a3b6e5/tableapp/bookingitem';
    fetch(url)
        .then((response) => response.json())
        .then(json => {

            let bookingNameList = document.getElementById("bookingNameList");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k);
            }

            for (let i = 0; i < json.bookingitem.length; i++) {
                let gName = json.bookingitem[i].name;
                let gEmail = json.bookingitem[i].email;
                let gPax = json.bookingitem[i].pax;
                let gRemarks = json.bookingitem[i].remarks;
                let gId = json.bookingitem[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPax;
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
    let url = 'https://api.sheety.co/14e5dbeb43f50147a8373c58a5a3b6e5/tableapp/bookingitem/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + "deleted!");
            GetBooking();
        });
}
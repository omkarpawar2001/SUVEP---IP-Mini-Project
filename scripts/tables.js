
import { db } from "./firebase_config.js";
import { userHead, orderHead, feedHead, getusers, getorders, getfeed } from './tableheaders.js';

document.getElementById("users").onclick = usersData;
// document.getElementById("orders").onclick = ordersData;
document.getElementById("feedback").onclick = feedData;
// var tableClear = document.getElementById("table").innerHTML = "";

function usersData() {
    clearTable();
    userHead();
    var i = 1;
    db.collection("users")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const userdata = doc.data();
                if (userdata.Type != "Admin") {
                    getusers(
                        i,
                        userdata.Name,
                        userdata.Email,
                        userdata.MobileNo,
                        userdata.Address,
                        userdata.Type
                    );
                    i++;
                }
                

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

}

function feedData() {
    // table;
    clearTable();
    feedHead();
    
    var i = 1;
    db.collection("queries")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const userdata = doc.data();
                getfeed(
                    i,
                    userdata.Name,
                    userdata.Email,
                    userdata.Queries,
                );
                i++;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}


function clearTable() {
    var table = document.getElementById("thead1");
    var table1 = document.getElementById("tbody1");
    table.innerHTML = "";
    table1.innerHTML = "";


    // var tableHeaderRowCount = 0;
    // var table = document.getElementById("table");
    // var rowCount = table.rows.length;
    // for (var i = tableHeaderRowCount; i < rowCount; i++) {
    //   table.deleteRow(tableHeaderRowCount);
    // }
}

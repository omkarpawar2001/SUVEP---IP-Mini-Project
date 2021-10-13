var thead = document.getElementById("thead1");
var title = document.getElementById("title");
var tbody = document.getElementById("tbody1");

function userHead() {
    title.innerHTML = "User's Data";
    var th0 = document.createElement("th");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");

    th0.innerHTML = "Sr No";
    th1.innerHTML = "Name";
    th2.innerHTML = "Email ID";
    th3.innerHTML = "Mobile No";
    th4.innerHTML = "Address";
    th5.innerHTML = "Type";

    thead.appendChild(th0);
    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    thead.appendChild(th4);
    thead.appendChild(th5);
}

function orderHead() {
    title.innerHTML = "Orders's Data";
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");

    th1.innerHTML = "Name";
    th2.innerHTML = "Email ID";
    th3.innerHTML = "Queries";

    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
}

function feedHead() {
    title.innerHTML = "Feedback's Data";

    var th0 = document.createElement("th");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");

    th0.innerHTML = "Sr No";
    th1.innerHTML = "Name";
    th2.innerHTML = "Email ID";
    th3.innerHTML = "Feedback";

    thead.appendChild(th0);
    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
}

function getusers(sr,name, email, mobile, address, type) {


    var trow = document.createElement("tr");
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td0.innerHTML = sr;
    td1.innerHTML = name;
    td2.innerHTML = email;
    td3.innerHTML = mobile;
    td4.innerHTML = address;
    td5.innerHTML = type;

    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);
}

function getorders(sr,name, email, mobile, address, type) {
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td1.innerHTML = name;
    td2.innerHTML = email;
    td3.innerHTML = mobile;
    td4.innerHTML = address;
    td5.innerHTML = type;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);
}

function getfeed(sr,name, email, queries) {

    var trow = document.createElement("tr");
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td0.innerHTML = sr;
    td1.innerHTML = name;
    td2.innerHTML = email;
    td3.innerHTML = queries;

    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);

    tbody.appendChild(trow);
}

export { userHead, feedHead, orderHead, getusers, getorders, getfeed };

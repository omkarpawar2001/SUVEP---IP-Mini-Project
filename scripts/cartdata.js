import { getCookieLogin } from "./cookiestore.js";
import { db, storage } from "./firebase_config.js";

var array = [];
var emails = [];
var prices = [];

var clear = document.getElementById("clearall");
clear.onclick = clearall;

var clear = document.getElementById("checkout");
clear.onclick = checkout;

var email = getCookieLogin("email");
var name = getCookieLogin("username");
var mobile = getCookieLogin("mobile");
function clearall() {
  console.log("Email: "+email)
  for (var cl = 0; cl < emails.length; cl++){
    var remove = db
      .collection("cart")
      .doc(email)
      .collection(email)
      .doc(emails[cl])
      .delete()
      .then(() => {});
    remove.then(() => {
      Swal.fire("Clear Cart", "All Items removed from cart..!", "success").then(
        () => {
          window.location.href = "/cart.html";
        }
      );
    });
  }
  
        
}



function checkout(e) {
  var totalprice = parseInt(document.getElementById("carttotalfinal").value);
  // alert(totalprice);
  var options = {
    key: "rzp_test_l6jWZQryNCk0Xq", // Enter the Key ID generated from the Dashboard Yash ID
    // "key": "rzp_test_PpOinqLyVBHOcP", // Enter the Key ID generated from the Dashboard
    amount: totalprice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
    currency: "INR",
    name: name,
    description: "SUVEP - Order Payment",
    image: "/img/logo.PNG", // Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
    handler: function (response) {
      // alert("payment success");
      console.log(response);
      console.log(response.razorpay_payment_id);
      console.log(totalprice);
      console.log(name);
      console.log(mobile);
      console.log(email);
      console.log(emails);
      var currentdate = new Date();
      var datetime =
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      console.log(datetime);

      const order_data = {
        Name: name,
        Email: email,
        MobileNo: mobile,
        Amount: totalprice,
        Products: emails,
        PaymentID: response.razorpay_payment_id,
        TimeStamp: datetime,
      };
      const insert = db
        .collection("orders")
        .doc(response.razorpay_payment_id)
        .set(order_data)
        .then(function () {
          console.log("Added to the database");
        });
      insert.then(
        () => {
          Swal.fire(
            "Congratulations!",
            "Your order has been placed succesfully & will be delivered in 3-4 working days!",
            "success"
          ).then(() => {
            clearall();
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
      $("#myModal").modal();
    },
    prefill: {
      name: name,
      email: email,
      contact: mobile,
    },
    theme: {
      color: "#9932CC",
    },
  };
  var rzp1 = new Razorpay(options);

  rzp1.on("payment.failed", function (response) {
    // alert(response.error.code);
    // alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
    alert("payment failed");
  });
  rzp1.open();
  e.preventDefault();
}



var i = 0;
// console.log(email)
db.collection("cart")
  .doc(email)
  .collection(email)
  .get()
  .then((doc) => {
    doc.forEach((querySnapshot) => {
      let userdata = querySnapshot.data();
      i++;
      var cartdata = document.getElementById("cartdata");
      var divborder = document.createElement("div");
      var divalign = document.createElement("div");
      var divtitle = document.createElement("div");
      var divcol2 = document.createElement("div");
      var col1 = document.createElement("div");
      var col2 = document.createElement("div");
      var col3 = document.createElement("div");
      var imgtag = document.createElement("img");
      var btnplus = document.createElement("button");
      var btnminus = document.createElement("button");
      var counttag = document.createElement("a");
      var pricetag = document.createElement("a");
      var btnclose = document.createElement("button");

      var price = userdata.Price;

      // prices.push(userdata.ProdPrice);
      // console.log(prices)

      emails.push(userdata.ProdName);
      prices.push(price);
      console.log(emails);
      if (email.length != 0) {
        var nodata = document.getElementById("nodata");
        nodata.innerHTML = "";
        btnclose.setAttribute("class", "close btn-outline-danger");
        btnclose.setAttribute("id", "close" + i);
        btnclose.setAttribute("name", i);
        btnclose.setAttribute("style", "border-radius: 20px; margin-left: 5px;");
        btnclose.innerHTML = "&#10005;";

        btnclose.onclick = function () {
          var index = parseInt(btnclose.getAttribute("name"));

          var remove = db
            .collection("cart")
            .doc(email)
            .collection(email)
            .doc(emails[index - 1])
            .delete()
            .then(() => {});
          remove.then(() => {
            Swal.fire(
              "Remove Item",
              "Item removed from cart..!",
              "success"
            ).then(() => {
              window.location.href = "/cart.html";
            });
          });
        };

        // pricetag.setAttribute("class", "border");
        pricetag.setAttribute("id", "price" + i);
        col3.setAttribute("class", "col");
        //Edit this for price

        col3.appendChild(pricetag);

        // col2
        btnminus.setAttribute("class", "btn-outline-secondary plus-minus");
        btnminus.setAttribute("name", i);
        btnminus.setAttribute("style", "border-radius: 20px;");
        // btnminus.setAttribute(
        //   "onclick",
        //   "console.log(" +
        //     i +
        //     ");    \
        //   \
        //   var quan = document.getElementById('quan" +
        //     i +
        //     "');\
        //   if(parseInt(quan.innerHTML)>1)\
        //   {\
        //     quan.innerHTML = parseInt(quan.innerHTML)-1;\
        //     var price = document.getElementById('price" +
        //     i +
        //     "');\
        //     price.innerHTML =" +
        //     price +
        //     "*(parseInt(quan.innerHTML));\
        //   }\
        //   else{ alert('Minimum Count Reached!!')}\
        //   \
        //   "
        // );
        btnminus.onclick = function () {
          carttotal = 0;
          // console.log("Value of btnminus" + btnminus.getAttribute("name"));
          var nm = btnminus.getAttribute("name");
          var quan = document.getElementById("quan".concat(nm));
          // console.log("quan.innerHTML " + quan.innerHTML);
          if (parseInt(quan.innerHTML) >= 2) {
            quan.innerHTML = parseInt(quan.innerHTML) - 1;
            var price1 = document.getElementById("price".concat(nm));
            // console.log("price:" + price1.innerHTML);
            price1.innerHTML = price1.innerHTML - prices[parseInt(nm) - 1];
            // prices[parseInt(nm) - 1] / parseInt(quan.innerHTML)-1;
            // console.log("nm+1 " + (parseInt(nm) + 1));
            // for (var x = parseInt(nm); x >= 0; x--) {
            //   console.log("nm:" + x);
            //   console.log("quan".concat(nm))

            // }
            for (var y = 0; y < i; y++) {
              var quan2 = document.getElementById(
                "quan".concat(y + 1)
              ).innerHTML;
              // console.log("quantity for each iteraion" + quan2);
              // console.log(prices);
              // console.log("X" + y);
              // console.log(prices[y] + " * " + parseInt(quan2));
              // console.log(carttotal + "+=" + prices[y] + "*" + parseInt(quan2));
              carttotal += prices[y] * parseInt(quan2);
              // console.log("Carttotal: ", carttotal);
              document.getElementById("carttotalfinal").innerHTML =
                "₹ " + carttotal + "/-";
            }
          } else {
            alert("Minimum Count Reached!!");
          }
        };
        counttag.setAttribute("class", "border");
        counttag.setAttribute("id", "quan" + i);

        //Edit this for quantity
        btnplus.setAttribute("class", "btn-outline-success plus-minus");
        btnplus.innerHTML = "+";
        btnplus.setAttribute("id", "plus" + i);
        btnplus.setAttribute("name", i);
        btnplus.setAttribute("style", "border-radius: 20px;");
        const p = btnplus.getAttribute("id");
        // console.log(p);

        btnplus.onclick = function () {
          carttotal = 0;
          // console.log("Value of i" + btnplus.getAttribute("name"));
          var nm = btnplus.getAttribute("name");
          var quan = document.getElementById("quan".concat(nm));
          if (parseInt(quan.innerHTML) <= 4) {
            quan.innerHTML = parseInt(quan.innerHTML) + 1;
            var col3 = document.getElementById("col3");
            var price1 = document.getElementById("price".concat(nm));
            // console.log("price:" + price1.innerHTML);
            price1.innerHTML =
              prices[parseInt(nm) - 1] * parseInt(quan.innerHTML);
            for (var x = 0; x < i; x++) {
              // console.log("nm:" + (parseInt(nm) + 1));
              // console.log("X:" + x);
              // console.log("X+1 = " + parseInt(x + 1));
              // console.log("quan".concat(parseInt(x + 1)));
              var quan1 = document.getElementById(
                "quan".concat(parseInt(x + 1))
              ).innerHTML;
              // var price2 = document.getElementById("price".concat(x+1));
              // console.log("quantity for each iteraion" + quan1);
              // console.log(prices);
              // // console.log(prices[x]);
              // console.log("X"+x)
              // console.log(prices[x] + " * " + parseInt(quan1));
              // console.log(carttotal+"+="+prices[x]+"*"+parseInt(quan1))
              carttotal += prices[x] * parseInt(quan1);
              // console.log("Carttotal: ", carttotal);
              document.getElementById("carttotalfinal").innerHTML =
                "₹ " + carttotal + "/-";
            }
          } else {
            alert("Maximum Count Reached!!");
          }
        };

        btnminus.innerHTML = "-";
        btnminus.setAttribute("id", "minus" + i);
        col2.setAttribute("class", "col");
        col2.appendChild(btnminus);
        col2.appendChild(counttag);
        col2.appendChild(btnplus);

        // col1
        col1.setAttribute("class", "col");
        divtitle.setAttribute("class", "row");
        divtitle.setAttribute("style","padding: 0 0 0 15px;")
        //Edit this for product title
        col1.appendChild(divtitle);
        // divcol2
        imgtag.setAttribute("class", "img-fluid");

        divcol2.setAttribute("class", "col-2");
        divcol2.appendChild(imgtag);

        divborder.setAttribute("class", "row  border-bottom");
        divborder.appendChild(divalign);

        divalign.setAttribute("class", "row main align-items-center");
        divalign.appendChild(divcol2);
        divalign.appendChild(col1);
        divalign.appendChild(col2);
        divalign.appendChild(col3);

        cartdata.appendChild(divborder);

        // doc.data() is never undefined for query doc snapshots

        divtitle.innerHTML = userdata.ProdName;
        array.push(userdata.ProdName);
        counttag.innerHTML = 1;

        // col3.innerHTML = "&#8377; ";
        pricetag.innerHTML = price;

        col3.innerHTML += "/-";
        col3.appendChild(btnclose);

        imgtag.setAttribute("src", userdata.ProdPic); //Edit this for product picture

        document.getElementById("totalitems").innerHTML =
          array.length + " items";
        document.getElementById("totalcartitems").innerHTML =
          array.length + " items";
        var carttotal = 0;
        for (var j = 0; j <= i - 1; j++) {
          var quantity = document.getElementById("quan" + i).innerHTML;
          // console.log("quantity" + quantity);
          // quan.push(quantity);
          // console.log(prices);
          // console.log(prices[j]);
          carttotal += parseInt(prices[j]) * parseInt(quantity);
          // console.log("Carttotal: ", carttotal);
        }
        // console.log(carttotal);
        document.getElementById("carttotalfinal").innerHTML =
          "₹ " + carttotal + " /-";
        document.getElementById("carttotalfinal").value =
          carttotal;
      } else {
        
      }
    });
  })
  .catch((error) => {
    console.error("Error removing document: ", error);
  });

  
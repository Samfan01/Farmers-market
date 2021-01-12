$(document).ready(function(){



});

// SHOP.HTML FUNCTION TO FILTER PRODUCTS

filterProducts("all");

function filterProducts(c) {
  var x,i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++){
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " "+ arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// SHOPPING CART FUNCTIONALITY

// <body onload="doShowAll()">
//
// function doShowAll() {
//     if (CheckBrowser()) {
//         var key = "";
//         var list = "<tr><th>Item</th><th>Value</th></tr>\n";
//         var i = 0;
//         for (i = 0; i <= localStorage.length-1; i++) {
//             key = localStorage.key(i);
//             list += "<tr><td>" + key + "</td>\n<td>"
//                     + localStorage.getItem(key) + "</td></tr>\n";
//         }
//         if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
//             list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
//         }
//         document.getElementById('list').innerHTML = list;
//     } else {
//         alert('Cannot save shopping list as your browser does not support HTML 5');
//     }
// }

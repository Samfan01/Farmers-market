shop-page
// SHOPPING CART FUNCTIONALITY
// Append
$(document).ready(function(){
  var itemPrice = $("#price").val();
  $(".store-item-icon").click(function(){
    $("ul#list").append("<li><span> "+itemPrice+"</span></li>");
    alert("Item added to cart");
  })
});

ft-AboutUs
const myForm = document.getElementById("myForm");
const inpFile = document.getElementById("inpFile");

myForm.addEventListener("submit", e => {
    e.preventDefault();

    const endpoint = "upload.php";
    const formData = new FormData();


$(document).ready(function(){
    var name = $('#name').Val();
$('#submit').click(function(){
      alert(name)
})
 master

    console.log(inpFile.files);

    formData.append("inpFile", inpFile.files[0]);

shop-page
// SHOP.HTML FUNCTION TO FILTER PRODUCTS
filterProducts("all");

function filterProducts(c) {
  var x,i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  //add .show to filtered products
  for (i = 0; i < x.length; i++){
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}
//Show filtered elements
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
//hide elements not selected
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

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("buttons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
    fetch(endpoint, {
        method: "post",
        body: formData,
    }).catch(console.error);
})
master

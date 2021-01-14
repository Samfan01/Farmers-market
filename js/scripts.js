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

    console.log(inpFile.files);

    formData.append("inpFile", inpFile.files[0]);

    fetch(endpoint, {
        method: "post",
        body: formData,
    }).catch(console.error);
})
const myForm = document.getElementById("myForm");
const inpFile = document.getElementById("inpFile");

myForm.addEventListener("submit", e => {
    e.preventDefault();

    const endpoint = "upload.php";
    const formData = new FormData();

    console.log(inpFile.files);

    formData.append("inpFile", inpFile.files[0]);

    fetch(endpoint, {
        method: "post",
        body: formData,
    }).catch(console.error);
})
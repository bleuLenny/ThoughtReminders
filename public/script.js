document.getElementById("file").addEventListener("change", (ev) => {
    ev.preventDefault();
    const formdata = new FormData();
    formdata.append("image", ev.target.files[0]);
    fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formdata,
    })
    // .then(data => data.json())
    .then(data => console.log(data))
    // .catch(error => console.log(error))
});
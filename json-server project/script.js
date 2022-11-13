let imageDiv = document.getElementById('image-div')
let apiUrl = "http://localhost:3000/posts";


async function getapi(apiUrl) {
    const response = await fetch(apiUrl);

    var data = await response.json();
    console.log(data);
    showData(data);

}

//Fonksiyonun çağırılması
getapi(apiUrl);

function showData(data) {
    let tab = ``
    for (let r of data) {
        console.log(r.imageId)
        tab += `
    <div class="card mr-5" style="width: 18rem;">
    <img class="card-img-top" src="./images/image${r.imageId}.jpg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
        `
        imageDiv.innerHTML = tab;
    }
}
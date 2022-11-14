let imageDiv = document.getElementById('image-div')
let apiUrl = "http://localhost:3000/posts";


async function getapi(apiUrl) {
    const response = await fetch(apiUrl)
    .catch(error=>{
        console.log(error);
        console.log("error");
    })
    var data = await response.json();
    showData(data);
    allDatas.push(data)
    let lastElement = data.slice(-1);
    lastElement.map(x => {
        document.getElementById('id-span').innerHTML = `Please Write Id More Than ${x.id}.`
    })
}

//Fonksiyonun çağırılması
getapi(apiUrl);

function showData(data) {
    let tab = ``
    for (let r of data) {
        tab += `
        <div class="col-md-4 col-sm-6 mt-5" id="cards-div">
        <div class="example-card w-100" >
        <img class="card-img-top" src="./images/image${r.imageId}.jpg" alt="Card image cap">
        <div class="card-body d-flex flex-column align-items-start pl-0">
        <h5  class="card-title three-dots" >${r.title}</h5>
        <p id="${r.id}" class="card-text three-dots" >${r.body}</p>
        <div class="d-flex flex-column">
        <span id=${r.id} onclick="showMore(event.target)" class="show-btn">Show More</span>
        </div>
        </div>
        </div>
        </div>
        `
        imageDiv.innerHTML = tab;
    }

}

//Show Text
function showMore(event) {
    console.log(event.id)
    var cardBody = document.getElementById(event.id);
    if (cardBody.classList.contains('three-dots')) {
        cardBody.classList.remove('three-dots');
    } else {
        cardBody.classList.add('three-dots');
    }
}

//Open Dialog
let dataBody = document.getElementById('data-body');
let popupDialog = document.getElementById('openPopup');
let allDatas = [];

let bodyInput = document.getElementById('bodyInput');
let titleInput = document.getElementById('titleInput');
let imageId = document.getElementById('imageId');
let idInput = document.getElementById('idInput');
let alertMessage = document.getElementById('alert-message');

function addCard() {
    if (bodyInput.value.length < 4 || titleInput.value.length < 4) {
        alertMessage.classList.remove('none');
    } else if (imageId.value == '' || idInput.value == '') {
        alertMessage.classList.remove('none');
    } else {
        postNewData();
    }
}

function postNewData() {
    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
            imageId: imageId.value,
            id: idInput.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })
        .then(response => response.json())
        .then(json => console.log(json));
    console.log(allDatas, "alldata save");
}

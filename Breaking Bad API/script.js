const url = "https://api.breakingbadquotes.xyz/v1/quotes";
const pTag = document.getElementById('breaking-bad');

fetch(url)
.then(response=>response.json())
.then(data => {
    console.log(data)
    pTag.innerHTML = data.map(data=>`
    <p>${data.author}</p> <br>
    <p>${data.quote}</p> 
    `);
}).catch(e=>{
    console.log(e)
})
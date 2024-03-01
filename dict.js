const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const button=document.getElementById("search-btn");
const result=document.getElementById("result");
const sound=document.getElementById("sound");


button.addEventListener("click" , () => {
    let inpword=document.getElementById("inp-word").value;
    console.log(inpword);
    fetch(`${url}${inpword}`)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML=`
        <div class="word">
            <h3>${inpword}</h3>
            <button onclick="playSound()" id="sound"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <div class="word-meaning">
           <p>
           ${data[0].meanings[0].definitions[0].definition}
           </p> 
        </div>
        <div class="word-example">
            <p>${data[0].meanings[1].definitions[0].example} </p>
        </div>
       </div>`;
    //    sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
    })
    .catch(()=>{
        result.innerHTML=`<h3 class="error" >Couldn't find any word</h3>`
    })
});
// function playSound() {
//     sound.play();
// }


//Lets Get the btn
const genBtn=document.querySelector("#jokeBtn");
// Get the div where We need to push the  joke;

const jokeDiv=document.querySelector("#joke");
// Fetch The API
const Api='https://icanhazdadjoke.com/';

// creating The para For store the joke
let para=document.createElement("p");
   para.innerHTML=`<p>" "</p>`
   
   jokeDiv.appendChild(para);

//Adding the event to the btn
genBtn.addEventListener('click',getjoke)

//Writing the function for generating the joke

document.addEventListener('DOMContentLoaded',() =>
{
    jokeDiv.firstElementChild.textContent="Are You Ready for laughing😆";
})



 async function getjoke()

{
    jokeDiv.firstElementChild.textContent="Happiness is loading Please wait........"
  // Let the fetch the data form The url and store in jokeData;
    const jokeData= await fetch(Api,{
        headers:{
            'Accept':'application/json'
        }
    });
    console.log(jokeData);
    // as We have the Data Lets convert in Json for more Readablity
    const jokeObj =await jokeData.json();
    console.log(jokeObj);
    
   jokeDiv.firstElementChild.textContent=`"${jokeObj.joke}"`;
}

















// let para=document.createElement("p");
// para.innerHTML=`<p>Loding Please Wait.....</p>`
// // let paraContent=para.innerText
// // console.log(paraContent);
// jokeDiv.appendChild(para);
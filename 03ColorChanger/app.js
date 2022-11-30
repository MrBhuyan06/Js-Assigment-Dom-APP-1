const colChangeBtn=document.querySelector("#button");
const canvases=document.querySelector("#canvas");

// Lets make a function for generating the Fex Code for col

function genHexCol()
{
   let val="0123456789ABCDEF";
   let Hash="#";
   for(let i=0;i<6;i++)
   {
    Hash=Hash+val[Math.floor(Math.random() *16)];

   }
   return Hash; 
}
colChangeBtn.addEventListener('click',() =>
{
    canvases.style.backgroundColor=genHexCol();
})
// Lets Grap The genBtn
let genBtn=document.querySelector("#submit");
// Lets Grap The value that has been Inserted;
let inputText=document.querySelector("#input");
console.log(inputText.value);
// OKay let the grap the location we need to insert the qrcode so That we can pass the value to The QRCode Instance
let outPutLocation=document.querySelector(".qr-code")
let parDiv=document.querySelector("#main");

function genQRcode(urlText)
{
    
    new QRCode(outPutLocation,{
        text:urlText,
        width:128,
        height:128,
        colorDark:"#000000",
        colorLight:"#ffffff",
        correctLevel:QRCode.CorrectLevel.H,
    }
    );
}

// function to get the value

genBtn.addEventListener('click' ,getValue)

function getValue()
{
    if(inputText.value=='')
    {
        let para=document.createElement("p");
        para.className="warn";
        para.innerText="*please Give Input";
        para.style.color="red";
        para.style.fontSize="30px";
        para.style.fontWeight="500px"
       
        inputText.placeholder=para.innerText;
        console.log("hello");
    }
    else
        
    {
          
           parDiv.classList.toggle("active")
           outPutLocation.innerHTML=""
           if (parDiv.className.includes("active")) {
            const qrcode= genQRcode(inputText.value);
            outPutLocation.setAttribute("src", "qrcode");
           }
           
    
      
           
           
    }
    

    }


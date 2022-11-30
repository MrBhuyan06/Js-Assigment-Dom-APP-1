// Lets Pick all the p of the case;
const CamelCase=document.querySelector("#camel-case");
const pascalCase=document.querySelector("#pascal-case");
const sakeCase=document.querySelector("#snake-case");
const screamingSnakeCase=document.querySelector("#screaming-snake-case");
const kebabCase=document.querySelector("#kebab-case");
const screamingkebabCase=document.querySelector("#screaming-kebab-case");

// lets create a class for all the methods

class ConverstionClass
{
    constructor(text)
    {
        this.text=text.toLowerCase();
    }
    camelCase()
    {
        //as the str is already lowerin case
        const txtArr=this.text.split(/[,.\s]/);
        const cameltxt=txtArr.map((word,index) =>
        {
            if(index==0)
            {
                console.log(word);
                return word
            }
            else
            {
                console.log(index);
               return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
            }
        });
          return cameltxt.join('')
    }
   

    pascalcase()
    {
        const txtArr=this.text.split(" ");
        const pascaltxt=txtArr.map((word,index) =>
        {
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        });
        return pascaltxt.join('')
    }
  

        
   snakecase()
   {
    const txtArr=this.text.split(" ");
    const snaketxt=txtArr.map((word,index) =>
    {
        return word.toLowerCase()
    });
    return snaketxt.join('_')

   }
   screamingsnakecase()
   {
    const txtArr=this.text.split(" ");
    const snaketxt=txtArr.map((word,index) =>
    {
        return word.toUpperCase()
    });
    return snaketxt.join('_')

   }
   kebabcase()
   {
    const txtArr=this.text.split(" ");
    const snaketxt=txtArr.map((word,index) =>
    {
        return word.toLowerCase()
    });
    return snaketxt.join('-')

   }
   Screamingkebabcase()
   {
    const txtArr=this.text.split(" ");
    const snaketxt=txtArr.map((word,index) =>
    {
        return word.toUpperCase()
    });
    return snaketxt.join('-')

   }
    
}

// lets crap the input element for the values

function convert()
{

const div=document.querySelector(".naming_conversion");
console.log(div);
const input =document.querySelector("#text");
console.log(input);
// lets grap the conversion btn 
 const conversionBtn=document.querySelector("#convert-btn")
 conversionBtn.addEventListener('click', () =>
 {
    if(isNaN(input.value))
    {
       
        let conversion= new  ConverstionClass(input.value)
        input.classList.remove('red');
        input.placeholder = "Please Enter Text";
        CamelCase.textContent= conversion.camelCase();
        pascalCase.textContent= conversion.pascalcase();
        sakeCase.textContent= conversion.snakecase();
        screamingSnakeCase.textContent= conversion.screamingsnakecase();
        kebabCase.textContent= conversion.kebabcase();
        screamingkebabCase.textContent= conversion.Screamingkebabcase();
        
    }
    else{
        input.value = '';
        input.placeholder = "Please enter a vaild string";
        // div.classList.add('warning');
        input.classList.add('red');
        // input.classList.add('reda');
    }

 })
};
convert();
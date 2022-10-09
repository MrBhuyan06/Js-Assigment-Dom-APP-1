const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.querySelector(".accordian_body")
// console.log(accordianBody);
const faqs = [];


// show and u have to hide the ans 
// init hide all ans and later show the selected options

// 4. Lets Showfaqfunction which work is to show he faq inside that we will have another finction as btnStatus update inside we will add the evenr Listener to all the faqbody
function showFaq() 
{
  function btnStatusUpdate() {
    const faqHEader=document.querySelectorAll(".faq_header");
    const faqbody=document.querySelectorAll("p")
    faqHEader.forEach((eachEle) =>
    {
       eachEle.addEventListener('click', (e) =>
       {
        faqbody.forEach((acc) =>
          {
            if(e.target.nextElementSibling !== acc && acc.classList.contains('active') )
            {
               acc.classList.remove('active');
               faqHEader.forEach((btn) => btn.classList.remove('active'))
            }
          });
   
  
        const panel=eachEle.nextElementSibling;
        panel.classList.toggle("active")
        eachEle.classList.toggle('active');
       });
    });
  }
  btnStatusUpdate();
}

// 1. Let Create A Function Create Faq Where We will Create Element Div (We have aleady Have a Array of the object which already Have id Question ANd the Paraorans  we will itrate over the array and grap each object propertity)


function createFaq() 
{
  
  faqData.forEach((currObj) =>
  {
     const faqBody=document.createElement("div");
     accordianBody.appendChild(faqBody);
     faqBody.className="faq";
     queElement(faqBody,currObj);
     ansElement(faqBody,currObj)

  });

  // 2. Create a create question fucntion which accept 2 argument 1.divfaqbody 2.currobje well will create a div for faq_header and innerHtml will be h3${currobject.question}
  function queElement(div, curobjs)
  {
      const faqheader=document.createElement("div")
      faqheader.id=curobjs.id;
      faqheader.className = "faq_header" 
      faqheader.style.cursor="pointer";
      faqheader.innerHTML=`<h3 id=${curobjs.id} > ${curobjs.question}</h3>   `;
      div.appendChild(faqheader);
      }
    function  ansElement(div,curobjs)
    {
       const faqans=document.createElement("p");
      //  faqans.className="";
       faqans.textContent=curobjs.answer;

      div.appendChild(faqans);
    }
  
  }
  createFaq();
  showFaq();


// const faqheadertoggle=document.querySelectorAll('.faq_header');
// faqheadertoggle.forEach( (faqheadertoggle =>
//   {
//     faqheadertoggle.addEventListener('click' , (events) =>
//     {
//       faqheadertoggle.classList.toggle('active')
//     })
//   }));

const accordionQuestions = document.querySelectorAll(".accordion-item-question");

accordionQuestions.forEach(accordionQuestion => {
   accordionQuestion.addEventListener("click", event => {
    accordionQuestion.classList.toggle("active");
    const accordionBody = accordionQuestion.nextElementSibling;
    if(accordionQuestion.classList.contains("active")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";}
        else {
         accordionBody.style.maxHeight = 0;
        }
   }); 
});

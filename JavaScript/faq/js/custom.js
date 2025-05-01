

var allFaqQuestions = document.querySelectorAll('.faq_question');


allFaqQuestions.forEach((value, index) => {
    value.addEventListener('click', (event) => {
        event.target.nextElementSibling.classList.toggle('faq_display');

        if(event.target.children[0].innerText == '-'){     /// it will get text value of span tag
            event.target.children[0].innerText = '+';
        } else {
            event.target.children[0].innerText = '-';
        }


        allFaqQuestions.forEach((element) => {
            
            if(event.target != element){
                console.log(element);
                element.nextElementSibling.classList.add('faq_display');
                element.children[0].innerText = '+';
            }
        })

    })
})
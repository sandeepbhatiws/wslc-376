
function getContentById(){
    // var output = document.getElementById('content_1');
    var output = document.getElementById('content_2');  //  To get the div element

    console.log(output);
    console.log(output.innerText);   // Ignore the HTML Tags
    console.log(output.innerHTML);   // Give with the HTML Tags

    document.getElementById('output').innerText = output.innerHTML;
    document.getElementById('output').innerHTML = output.innerHTML;
}

function getContentByClassName(){
    var output = document.getElementsByClassName("content");

    console.log(output);

    // document.getElementById('output').innerHTML = output[2].innerText;

    document.getElementsByClassName('content')[3].innerHTML = output[2].innerText;
}

function getContentByTagName(){
    var output = document.getElementsByTagName("div");

    console.log(output);
    document.getElementById('output').innerHTML = output[1].innerText;
}

function getContentByQuerySelector(){
    // var input = document.querySelector('#content_2').innerText;

    var input = document.querySelector('.content').innerText;

    console.log(input);
}

function getContentByQuerySelectorAll(){
    var input = document.querySelectorAll('.content');

    input.forEach((value,index) => {
        if(index == 1){
            console.log(index);
            console.log(value.innerText);
        }
        
    })
    console.log(input);
}

function addCssProperties(){
    document.getElementById('content_1').style.color = 'white';
    document.getElementById('content_1').style.backgroundColor = 'black';
}

function addClassName(){
    document.getElementById('content_1').classList.add('content_class');
    document.getElementById('content_1').classList.add('content_class_2');
}

function removeClassname(){
    document.getElementById('content_1').classList.remove('content_class');
}

function toggleClassName(){
    document.getElementById('content_1').classList.toggle('content_class');
}

const images = ['images/category1.jpg', 'images/category2.jpg', 'images/category3.jpg', 'images/category4.jpg', 'images/category5.jpg', 'images/category6.jpg', 'images/category7.jpg', 'images/category8.jpg', 'images/category9.jpg', 'images/category10.jpg', 'images/category11.jpg', 'images/category12.jpg', 'images/category13.jpg', 'images/category14.jpg', 'images/category15.jpg', 'images/category16.jpg'];


var imagesOutput = '';

images.forEach((value, index) => {
    
    imagesOutput += `
        <div class="gallery">
            <img src="${ value }"/>
        </div>
    `;
});

document.getElementById('galleries').innerHTML = imagesOutput;


var getImages = document.querySelectorAll('.gallery');

getImages.forEach((value,index) => {
    value.addEventListener('click',(event)=> {
        document.getElementById('outer_lightbox').classList.remove('lighbox_display');
        console.log(event.target.src);
        document.getElementById('image').src = event.target.src;
    })
})


document.getElementById('close').addEventListener('click',() => {
    document.getElementById('outer_lightbox').classList.add('lighbox_display');
})

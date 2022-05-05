var images;


images = ['https://drive.google.com/thumbnail?id=1Fsz-ManDN0WL7uLfYxQqZEaG8NnAK0hC', 'https://drive.google.com/thumbnail?id=16FFreoBGDMEIU7THqcgKNzrZg1W4bcCz', 'https://drive.google.com/thumbnail?id=1RjsQ4-klx-19fdR0yeTMUEcBCcMm7rY2', 'https://drive.google.com/thumbnail?id=1DhEKmaROg-GFThdKu3nCgVRY2JBoffaX'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next_button').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  element_image2.replaceChildren();
  element_image2.setAttribute("src", images[0]);
  images.push(images.shift());

});

document.getElementById('previous_button').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  element_image3.replaceChildren();
  element_image3.setAttribute("src", images.slice(-1)[0]);
  images.unshift(images.pop());

});
const paragraphs = document.querySelector('.paragraphs');
const ps = paragraphs.querySelectorAll('p')

const styleBody = getComputedStyle(document.body);
const bodyBackground = styleBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = bodyBackground;
    p.style.color = '#FFFF'
}
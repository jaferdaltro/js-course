const els = [
    {tag: 'a', text: 'first text'},
    {tag: 'div', text: 'third text'},
    {tag: 'strong', text: 'second text'},
    {tag: 'div', text: 'third text'},
    {tag: 'div', text: 'third text'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let e in els){
    const { tag, text } = els[e];
    const createdTag = document.createElement(tag);
    createdTag.innerText = text;
    
    div.appendChild(createdTag);
}

container.appendChild(div);
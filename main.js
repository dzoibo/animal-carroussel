import './style.scss'

const data = [
    { name: 'Moose', description: 'Large deer with broad antlers.', image: 'img1.jpg' },
    { name: 'Antelope', description: 'Swift-running mammal with slender legs.', image: 'img2.jpg' },
    { name: 'Elephant', description: 'Large herbivorous mammal with a trunk.', image: 'img3.jpg' },
    { name: 'Tiger', description: 'Large carnivorous feline mammal native.', image: 'img4.jpg' },
];
  
  const thumbnail = document.querySelector('.thumbnail');
  
  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
  
    const img = document.createElement('img');
    img.src = `./public/image/${item.image}`;
    img.alt = item.name;
  
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
  
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.textContent = item.name;
  
    const desDiv = document.createElement('div');
    desDiv.className = 'des';
    desDiv.textContent = item.description;
  
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(desDiv);
  
    div.appendChild(img);
    div.appendChild(contentDiv);
  
    thumbnail.appendChild(div);
  });
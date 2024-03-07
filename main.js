import './style.scss'

const data = [
    { name: 'Moose', description: 'Large deer with broad antlers.', image: 'img1.jpg' },
    { name: 'Antelope', description: 'Swift-running mammal with slender legs.', image: 'img2.jpg' },
    { name: 'Elephant', description: 'Large herbivorous mammal with a trunk.', image: 'img3.jpg' },
    { name: 'Tiger', description: 'Large carnivorous feline mammal native.', image: 'img4.jpg' },
];
  
  const thumbnail = document.querySelector('.thumbnail');
  const timeDom = document.querySelector('.time');
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

  //Animation
  let nextBtn =document.getElementById('next');
  let prevBtn = document.getElementById('prev');
  let carouselDom = document.querySelector('.carousel');
  let listDom = document.querySelector('.carousel .list');
  let thumbnailDom = document.querySelector('.carousel .thumbnail');
  nextBtn.addEventListener("click",()=>{
    showSlider("next");
  });

  prevBtn.addEventListener("click",()=>{
    showSlider("prev")
  });

  let timeRunning = 1000;
  let runTimeOut;
  function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    if(type ==='next'){
        listDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    afficherPourcentageEvolution(timeRunning/1000);

    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning)
  }
  function afficherPourcentageEvolution(nombreDeSecondes) {
    let debut = Date.now();
  
    function calculerPourcentage() {
      const tempsEcoule = Date.now() - debut;
      const pourcentage = Math.min(tempsEcoule / (nombreDeSecondes * 1000) * 100, 100); // Limiter le pourcentage à 100
      const percent=pourcentage.toFixed(2);
      console.log('this is the percent',percent);
      
      if (pourcentage < 100) {
        timeDom.style.width=percent.substring(0,2); 
        requestAnimationFrame(calculerPourcentage); // Continuer à calculer le pourcentage jusqu'à ce qu'il atteigne 100 %
        nextBtn.disabled=true;
        prevBtn.disabled=true;
    }else{
        timeDom.style.width=percent; 
        nextBtn.disabled=false;
        prevBtn.disabled=false;
      }
    }
  
    requestAnimationFrame(calculerPourcentage);
  }
  
function displaySlides(){
    const contents = document.querySelectorAll('.slide__img'),
          right = document.querySelector('.slider__right-btn'),
          left = document.querySelector('.slider__left-btn');
    let index = 1;

    function setActiveIndex(n){
        contents.forEach(item =>{
            item.classList.remove('block')
        });
        contents[n].classList.add('block');
    }
    setActiveIndex(index);
    left.addEventListener('click', ()=>{
      setActiveIndex(index);
      index = index - 1;
      if(index < 0){
        index = (contents.length - 1);
      }
    setActiveIndex(index); 
    });

    right.addEventListener('click', ()=>{
      setActiveIndex(index);
      index = index + 1;
      if(index > (contents.length - 1)){
        index = 0;
      }
    setActiveIndex(index);
    });
  }
  displaySlides();
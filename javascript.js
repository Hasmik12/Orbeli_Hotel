

  const slider1 = new Swiper('.image-slider', {
    slidesPerView:1,
    spaceBetween:0,
    paginationClickable:true,
    loop: true,
    slidesPerView: 'auto',
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000
    },
  });
  
  const slider2 = new Swiper('.review-slider', {
    slidesPerView:1,
    spaceBetween:0,
    paginationClickable:true,
    pagination: {
        el: ".review-pagination",
        clickable: true,
      },
   
  });

  var slider3 = new Swiper(".rooms-slider", {
    slidesPerView: 4,
    spaceBetween: 20  ,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        resistanceRatio: 0.85
    },
      480: {
          slidesPerView: 2,
          spaceBetween: 10,
          resistanceRatio: 0.85
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 15
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 20
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 20
    }
  },
  keyboard: {
      enabled: true,
   }
  });

  var slider4 = new Swiper(".hotel__slider", {
    slidesPerView: 1,
    paginationClickable:true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  var swiper = new Swiper('.inside__slider', {
    slidesPerView: 5,
    initialSlide: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        spaceBetween: 8
      },
      768: {
        spaceBetween: 8
      }
     }
  });
  

  const dropdownBtns = document.querySelectorAll('.filter-nav__btn');
  const dropdown = document.querySelectorAll('.dropdown-block');

  const headerMenu = document.querySelector('.header__menu');
  const headerItems = document.querySelector('.header__nav');
   const drodounContainer = document.querySelector('.header__nav');

   const minusBtn = document.querySelectorAll('.quantity__minus');
   const plusBtn = document.querySelectorAll('.quantity__plus');
   const quantytyNumber = document.querySelectorAll('.number');

   const dropdownItemName =document.querySelectorAll('.name');

   const dropdownValue = document.querySelectorAll('.dropdown-block__item .name');
   const dropdownInputValue = document.querySelectorAll('.number').value;

   const currentLanguage = document.querySelector('.current-language');
   const languageList = document.querySelector('.language__list');
   const languageListItem = document.querySelectorAll('.language__list-item');

    currentLanguage.addEventListener('click', function() {
      languageList.classList.toggle('active');
    });
    languageListItem.forEach(i => {
      i.addEventListener('click', function(e){
         let languageText = i.innerText;
         let currentLanguageText = document.querySelector('.current-language span');
         currentLanguageText.innerText= languageText;
      })
    })

   dropdownValue.forEach(value => {
    value.addEventListener('click', function(){
       let text = this.innerText;
       let number = this.nextSibling.nextSibling.childNodes[2].nextSibling.value;
       text=  this.innerText + number;
       if(number !== '0') {
        this.parentElement.parentElement.previousSibling.previousSibling.childNodes[2].nextSibling.innerText = number + ' ' + this.innerText;
       }
       else{
        this.parentElement.parentElement.previousSibling.previousSibling.childNodes[2].nextSibling.innerText = this.innerText;
       }
      //  console.log(());
     })
  });



  if (dropdownBtns) {
    dropdownBtns.forEach(dropdownBtn => {
        dropdownBtn.addEventListener('click', function (e) {
          dropdownBtn.classList.toggle('active');
          if (dropdownBtn.nextElementSibling.classList.contains('show')) {
            dropdownBtn.nextElementSibling.classList.toggle('show');
          }else{
            dropdown.forEach(block => {
              block.classList.remove('show');
            })
            dropdownBtn.nextElementSibling.classList.toggle('show');
          }

        })
    });
  }

  function close_dropdowns(){
    let dropdowns = document.querySelectorAll("dropdown-block");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

    for (i = 0; i < dropdownBtns.length; i++) {

      let activeBtn = dropdownBtns[i];
      if (activeBtn.classList.contains('active')) {
        activeBtn.classList.remove('active');
      }
    }


  }

  window.onclick = function (event) {
    if (!event.target.matches('.filter__item') &&
        !event.target.matches('.filter__item img') &&
        !event.target.matches('.filter__item span') &&
        !event.target.matches('.quantity__change')
    ) {
        close_dropdowns()
    }
}
window.onclick = function (e) {
  if ( !e.target.closest('.header__language')) {
    languageList.classList.remove('active');
  }
}

  var min = 0, max = 5;

for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].onclick = function (e) {
        minusBtn[i].nextElementSibling.value = (minusBtn[i].nextElementSibling.value == min) ? min : minusBtn[i].nextElementSibling.value - 1;
    }
}

for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].onclick = function (e) {
        // if(plusBtn[i].previousElementSibling.value == max){
        //     plusBtn[i].previousElementSibling.value = max;
        // }else{
          plusBtn[i].previousElementSibling.value++
        // }
    }
}



  headerMenu.addEventListener('click', function() {
    this.classList.toggle("active");
    if(headerItems.style.maxHeight) {
      headerItems.style.maxHeight = null;
    }
    else {
      headerItems.style.maxHeight =  headerItems.scrollHeight + "px";
    }
  });


  const TabItem = document.querySelectorAll('.tab__item');
  const TabContent = document.querySelectorAll('.tabcontent');

  if(TabItem && TabContent ) {
    TabItem.forEach(function (item,index){
      item.addEventListener('click',function(e){
        e.preventDefault();
        TabItem.forEach(function(item) {
          item.classList.remove('active');
        });
        TabContent.forEach(function(item){
          item.classList.remove('active');
        });
        this.classList.add('active');
        TabContent[index].classList.add('active');
      });
    });
  }
 
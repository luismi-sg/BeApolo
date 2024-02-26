'use strict'

const cursor = document.querySelector(".cursor__ball");
const attentionContainer = document.querySelector(".attention")
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
  cursor.style.top = e.clientY + "px";
});
attentionContainer.addEventListener("mouseover" , () => {
  cursor.classList.add("bigger__ball")
})
attentionContainer.addEventListener("mouseout" , () => {
  cursor.classList.remove("bigger__ball")
})


const cookieBox = document.querySelector(".cookies");
const cookieButtons = document.querySelectorAll(".cookies__button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  cookieButtons.forEach((eachButton) => {
    eachButton.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if eachButton has acceptBtn id
      if (eachButton.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);



const headerLi = document.querySelectorAll(".liAnimation")

headerLi.forEach( function ( eachLi , index ){
  eachLi.addEventListener("mouseover" , function(){
    cursor.style.width = `${headerLi[index].clientWidth + 32}px`
    cursor.classList.add("animation__li")
    headerLi[index].style.color = `var(--primaryColor)`
  })
  eachLi.addEventListener("mouseout" , function(){
    cursor.classList.remove("animation__li")
    cursor.style.width = `12px`
    headerLi[index].style.color = `var(--bgColorWhite)`
  })
})

const langDesktop = document.querySelector(".lang__desktop")
const langModal = document.querySelector(".lang__wrapper")
const langa = document.querySelectorAll(".lang__a")
const langSpan = document.querySelectorAll(".lang__span")
const langIcon = document.querySelectorAll(".lang__icon")

const langMobile  = document.querySelector(".abrir__lang")
const langMobileModal = document.querySelector(".langmob__wrapper")

langMobile.addEventListener("click" , () => {
  langMobileModal.classList.toggle("mobileactive")
})

langDesktop.addEventListener("click" , () => {
  langModal.classList.toggle("langActive")
})

langa.forEach( function ( item , i ){
  langa[i].addEventListener("click" , function(e) {
    e.preventDefault()
    langSpan[i].classList.add("iconActive")
    langIcon[i].classList.add("iconActive")
  })
})

const modalMenu = document.querySelector(".modal__mobile");
const botones = document.querySelectorAll(".abrir__menu , .cerrar__menu");
const botonesLi = document.querySelectorAll(".header__li")
const body = document.querySelector("body")

botones.forEach( function ( eachBoton , index ){
  eachBoton.addEventListener("click" , function() {
    modalMenu.classList.toggle("menuActive")
    body.classList.toggle("hidden")
  })
})
botonesLi.forEach( function ( eachBotonLi , index ){
  eachBotonLi.addEventListener("click" , function() {
    modalMenu.classList.remove("menuActive")
    body.classList.remove("hidden")
  })
})

const toUpButton = document.querySelector(".toupbutton")
const publicityContainerHeight = document.querySelector(".publicity").offsetTop

const buttonTopaction = () => {
  const positionButton = window.visualViewport.pageTop
  publicityContainerHeight < positionButton  ? toUpButton.classList.add("upIsActive") : toUpButton.classList.remove("upIsActive")
}

window.addEventListener("scroll" , buttonTopaction )

const technologyWrapDesktop = document.querySelector(".technology__slider.wrapper__desktop")
const technologyItemDesktopWidth = document.querySelectorAll(".technology__item")[0].clientWidth
const technologyWrapDesktopHeight = document.querySelector(".content").offsetTop

window.addEventListener("load" , () => technologyWrapDesktop.scrollLeft == 0)

const scrollTechSlider = () => {
  const positionTechnology = window.visualViewport.pageTop
  if( technologyWrapDesktopHeight < positionTechnology){
    technologyWrapDesktop.scrollLeft = technologyItemDesktopWidth * 2
    window.removeEventListener("scroll" , scrollTechSlider)
  }
}

window.addEventListener("scroll" , scrollTechSlider )

// Variables para almacenar la posición inicial y el punto de desplazamiento
let isDown = false;
let startX;
let scrollLeft;

// Evento mousedown: usuario hace clic y mantiene presionado
technologyWrapDesktop.addEventListener('mousedown', (e) => {
  isDown = true;
  // technologyWrapDesktop.classList.add('active'); // Opcional: añadir una clase para efectos visuales
  startX = e.pageX - technologyWrapDesktop.offsetLeft; // Posición inicial del cursor
  scrollLeft = technologyWrapDesktop.scrollLeft; // Posición inicial del desplazamiento
});

// Evento mouseleave: usuario deja el área del contenedor
technologyWrapDesktop.addEventListener('mouseleave', () => {
  isDown = false;
  // technologyWrapDesktop.classList.remove('active'); // Opcional: remover la clase
});

// Evento mouseup: usuario suelta el clic
technologyWrapDesktop.addEventListener('mouseup', () => {
  isDown = false;
  // technologyWrapDesktop.classList.remove('active'); // Opcional: remover la clase
});

// Evento mousemove: usuario arrastra el mouse
technologyWrapDesktop.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Si no está presionado, no hacer nada
  e.preventDefault(); // Previene cualquier selección de texto accidental
  const x = e.pageX - technologyWrapDesktop.offsetLeft; // Posición actual del cursor
  const walk = (x - startX) * 2; // Calcular el desplazamiento (*3 para aumentar la velocidad)
  technologyWrapDesktop.scrollLeft = scrollLeft - walk;
});


const premiumSlider = document.querySelector(".premium__slider")
const premiumImg = document.querySelectorAll(".premium__img")
const premiumContainerHeight = document.querySelector(".premium").offsetTop


window.addEventListener("load" , () => premiumSlider.scrollLeft = 0)
const scrollPremiumSlider = () => {
  const positionPremium = window.visualViewport.pageTop
  if(premiumContainerHeight < positionPremium){
    premiumSlider.scrollLeft = premiumImg[0].clientWidth
    window.removeEventListener("scroll" , scrollPremiumSlider) 
  } 
}
window.addEventListener("scroll" , scrollPremiumSlider)



const animationTitle = document.querySelector(".title__animation")
const spanTitle = document.querySelectorAll(".title__span")
const animationHeight = spanTitle[0].clientHeight
let animationTitlePosition = 0
let interval = 2000

function autoAnimation(){
  animationTitlePosition++
  animationTitle.style.transform = `translateY(-${animationHeight * animationTitlePosition}px)`
  if (animationTitlePosition >= spanTitle.length / 2) {
    setTimeout(() => {
      animationTitle.style.transition = 'none'; // Desactivar la transición
      animationTitle.style.transform = 'translateY(0px)'; // Volver al inicio
      animationTitlePosition = 0; // Reiniciar índice
      // Necesitamos reactivar la transición después de que el navegador haya tenido tiempo de pintar la actualización
      setTimeout(() => {
        animationTitle.style.transition = 'all 0.5s ease';
      }, 0);
    }, 500); // Hacer coincidir con el tiempo de transición de CSS
  }
}
let carouselInterval = setInterval(autoAnimation, interval);


const animationAmount = document.querySelectorAll(".amount__animation")
const spanAmount = document.querySelectorAll(".amount__span")
let animationAmountPosition = 0

function autoAmountAnimation(){
  animationAmount.forEach( function( eachAmount , i ){
    const animationAmountHeight = spanAmount[0].clientHeight * animationAmountPosition
    eachAmount.style.transform = `translateY(-${animationAmountHeight}px)`
  })
    animationAmountPosition < (spanAmount.length - 2) / 2 ? animationAmountPosition++ : animationAmountPosition = 0
}
setInterval(autoAmountAnimation, 2000);







const technologyCard = document.querySelectorAll(".technology__item.slider__mobile")
const technologyWrapper = document.querySelectorAll(".technology__wrapper")
const triggerSlider = document.querySelectorAll(".trigger__slider")
const openTrigger = document.querySelectorAll(".trigger__open")
const closeTrigger = document.querySelectorAll(".trigger__close")

technologyCard.forEach( function( eachCard , i ) {
  triggerSlider[i].addEventListener("click" , function(){
    technologyCard[i].classList.toggle("isOpen")
    technologyWrapper[i].classList.toggle("isOpen")
    openTrigger[i].classList.toggle("iconTrigger")
    closeTrigger[i].classList.toggle("iconTrigger")
  })
})

const technologySliderMobile = document.querySelector(".technology__slider.slider__mobile")
const technologyCardWidth = technologySliderMobile.querySelectorAll("article")[0].clientWidth
const technologyPointers = document.querySelectorAll(".technology__pointer")

technologyPointers.forEach( ( eachPointer , i ) => {
  eachPointer.addEventListener("click" , () => {
    let positionPointer = i
    technologySliderMobile.scrollLeft = (technologyCardWidth + 32 ) * i
    technologyPointers.forEach( (item, i ) => {
      i <= positionPointer ?
      technologyPointers[i].classList.add("pointer__active") :
      technologyPointers[i].classList.remove("pointer__active")
    })
  })
})
technologySliderMobile.addEventListener("scroll" , () => {
  let calculo = Math.round(technologySliderMobile.scrollLeft / (technologyCardWidth + 32))
  technologyPointers.forEach( ( eachPointer , i ) => {
    i <= calculo ?
      technologyPointers[i].classList.add("pointer__active") :
      technologyPointers[i].classList.remove("pointer__active")
  })
})


const tabButton = document.querySelectorAll(".publicity__button")
const tabData = document.querySelectorAll(".publicity__tabs")

tabButton.forEach( function ( eachTab , index){
  eachTab.addEventListener("click" , function (){
    tabButton.forEach( function ( eachBoton , index ){
      tabButton[index].classList.remove("tabIsActive")
    })
    tabData.forEach( function ( eachData , index ){
      tabData[index].classList.remove("tabIsActive")
    })
    tabData[index].classList.add("tabIsActive")
    tabButton[index].classList.add("tabIsActive")
  })
})

const accordionTitle = document.querySelectorAll(".accordion__title")
const accordionButton = document.querySelectorAll(".abrir__accordion")
const accordionData = document.querySelectorAll(".item__text")
const alturaData = document.querySelectorAll(".accordion__p")
const accordionCerrar = document.querySelectorAll(".cerrar__accordion")

accordionTitle.forEach( function (eachTitle , index ){
  accordionTitle[index].addEventListener("click" , () => {
    accordionData[index].classList.toggle("accordionActive")
    accordionButton[index].classList.toggle("accordionActive")
    accordionCerrar[index].classList.toggle("accordionActive")
    if ( accordionData[index].classList.contains("accordionActive") ){
      accordionData[index].style.height = `${alturaData[index].clientHeight}px`
    }else{
      accordionData[index].style.height = "0px"
    }
  })
})

accordionButton.forEach( function (eachButton , index ){
  accordionButton[index].addEventListener("click" , function(){
    accordionButton[index].classList.remove("accordionActive")
    accordionData[index].classList.add("accordionActive")
    accordionCerrar[index].classList.add("accordionActive")
    if ( accordionData[index].classList.contains("accordionActive") ){
      accordionData[index].style.height = `${alturaData[index].clientHeight}px`
    }else{
      accordionData[index].style.height = "0px"
    }
  })
})


accordionCerrar.forEach( function (eachCerrar , index){
  accordionCerrar[index].addEventListener("click" , function(){
    accordionButton[index].classList.add("accordionActive")
    accordionData[index].classList.remove("accordionActive")
    accordionCerrar[index].classList.remove("accordionActive")
    if ( accordionData[index].classList.contains("accordionActive") ){
      accordionData[index].style.height = `${alturaData[index].clientHeight}px`
    }else{
      accordionData[index].style.height = "0px"
    }
  })
})


const audienceSlider = document.querySelector(".audience__cards");
const audienceItemWidth = document.querySelectorAll(".cards__article")[0].clientWidth - 6;
const audiencePointers = document.querySelectorAll(".pointer__audience");

let pantalla = window.innerWidth;

function updateWindowSize() {
  pantalla = window.innerWidth;
}

window.addEventListener('resize', updateWindowSize);

function updateActivePointer(position) {
  audiencePointers.forEach((pointer, index) => {
    if (index <= position) {
      pointer.classList.add("actual");
    } else {
      pointer.classList.remove("actual");
    }
  });
}

if (pantalla <= 960) {
  audiencePointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
      audienceSlider.scrollLeft = audienceItemWidth * index;
      updateActivePointer(index);
    });
  });

  audienceSlider.addEventListener("scroll", () => {
    const calculo = Math.round(audienceSlider.scrollLeft / (audienceItemWidth + 32));
    updateActivePointer(calculo);
  });

  let Slideposition = 0
  let timer
  function autoSlider() {
    const position = Slideposition < audiencePointers.length - 1 ? Slideposition + 1 : 0;
    audienceSlider.scrollLeft = audienceItemWidth * position;
    Slideposition = position;
    updateActivePointer(position);
  }
  function startAutoSlider(){
    stopAutoSlider()
    timer = setInterval(autoSlider , 4000)
  }
  function stopAutoSlider() {
    clearInterval(timer);
  }
  function handleTouchStart() {
    stopAutoSlider();
  }
  
  function handleTouchEnd() {
    stopAutoSlider();
  }

  audienceSlider.addEventListener('touchstart', handleTouchStart);
  audiencePointers.forEach((pointer, i ) => pointer.addEventListener('touchstart' , handleTouchStart))
  audienceSlider.addEventListener('touchend', handleTouchEnd);
  audiencePointers.forEach((pointer, i ) => pointer.addEventListener('touchend' , handleTouchEnd))
  startAutoSlider(); // Initiate auto-slider if screen width is appropriate.
}


const form = document.querySelector("form")
const fullName = document.getElementById("nombre")
const correo = document.getElementById("mail")
const telefono = document.getElementById("telefono")
const pais = document.getElementById("pais")
const mensaje = document.getElementById("cuentanos")

function sendEmail() {

  const bodyMessage = `Hay un nuevo contacto en la Web BeApolo<br><br> Nombre: ${fullName.value}<br><br>Apellidos: ${apellido.value}<br><br>Correo: ${correo.value}<br><br>Telefono: ${telefono.value}<br><br>Pais: ${pais.value}<br><br>mensaje: ${mensaje.value}<br><br>`

  Email.send({
    SecureToken : "0256e72f-189b-4180-84ee-ff9dc605bc99",
    To : 'info@beapolo.io',
    From : "info@beapolo.io",
    Subject : "Nuevo Contacto en BeApolo",
    Body : bodyMessage
  }).then(
    message => {
      if( message == "OK") {
        const formularioCorrecto = document.querySelector(".success__text")
        formularioCorrecto.classList.add("successActive")
      }
    }
  );
}

function checkInputs() {
  const formItems = document.querySelectorAll(".contact__input")

  for( const item of formItems){
    if(item.value == ""){
      item.classList.add("error")
      item.parentElement.classList.add("error")
    }

    if( formItems[1].value != "" ){
      checkEmail()
    }
    formItems[1].addEventListener("keyup" , () => {
      checkEmail()
    })

    item.addEventListener("keyup" , () => {
      if( item.value != ""){
        item.classList.remove("error")
        item.parentElement.classList.remove("error")
      }
      else{
        item.classList.add("error")
        item.parentElement.classList.add("error")
      }

    })
  }
}

function checkEmail (){
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error__text.email")

  if( !correo.value.match(emailRegex)){
    correo.classList.add("error")
    correo.parentElement.classList.add("error")
    
    if(correo.value != ""){
      errorTxtEmail.innerHTML = "Ingresa un correo válido"
    }
    else{
      errorTxtEmail.innerHTML = "El correo no puede estar vacío"
    }
  }
  else{
    correo.classList.remove("error")
    correo.parentElement.classList.remove("error")
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if(
    !fullName.classList.contains("error") &&
    !correo.classList.contains("error") &&
    !telefono.classList.contains("error") &&
    !pais.classList.contains("error") &&
    !mensaje.classList.contains("error")
    ){
      sendEmail();
      form.reset();
      return false;
    }

})
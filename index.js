

window.onload = () => {

  animateWelcome()
  
  scrollFunction()
  
}

window.onresize = ()=>{


}

window.onscroll = ()=>{
  scrollFunction()
}

var welcome = document.getElementById('welcome')
var welc = document.getElementById('welc')
var welcomeCards = document.getElementById('welcome-cards')
var navbar = document.getElementById('navbar1')
var navBarLogo = document.getElementById('navBarLogo')
var navText = document.getElementById('navbarNav')

var navbutton = document.getElementById('navbutton')
var navbuttonstatus = false

navbutton.addEventListener('click', ()=>{
  navbuttonstatus == false ? navbuttonstatus = true : navbuttonstatus = false;
  
  if(navbuttonstatus){
    navbar.style.backgroundColor = 'rgba(173, 42, 47, 01)'
    navbar.style.backgroundImage = 'linear-gradient(30deg, rgba(143, 46, 49, 1) 50%,  rgba(173, 42, 47, 01) 50%)'
    navBarLogo.style.visibility='visible'
  }
  else {
    navbar.style.backgroundColor = 'rgba(247, 247, 214,0)'
    navbar.style.backgroundImage = ''
    navBarLogo.style.visibility='hidden'
  }

  console.log(navbuttonstatus)
})

function scrollFunction(){
  var pageTop = window.pageYOffset;
  var divTop = welc.offsetTop

  
    if (pageTop>0){
      
      // welcome.style.height='0px'
      // welcome.style.width ='0px'
      welcome.style.opacity = '0'
      
      navbar.style.backgroundColor = 'rgba(173, 42, 47, 01)'
      navbar.style.backgroundImage = 'linear-gradient(145deg, rgba(143, 46, 49, 1) 50%,  rgba(173, 42, 47, 01) 50%)'
      navText.style.color = 'rgba(173, 42, 47, 01)'
      navbar.classList.add('shadow-lg')
      navBarLogo.style.visibility='visible'

    } else {
      
      welcome.style.opacity = '1'
      
      navbar.classList.remove('shadow-lg')

      if(navbuttonstatus){
        navbar.style.backgroundColor = 'rgba(173, 42, 47, 01)'
      }
      else {
        navbar.style.backgroundColor = 'rgba(247, 247, 214,0)'
        navbar.style.backgroundImage = ''
        navBarLogo.style.visibility='hidden'
      }
      
      
      
      
    }
}


function animateWelcome(){
     
  welcome.style.marginTop= '0px'
  welcome.style.opacity = 1
  


  welcomeCards.style.marginBottom= '0px'
  welcomeCards.style.opacity = 1
  
  }


  


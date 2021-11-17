//$(document).ready(function() {
    
    // $("#carrossel img:eq(0)").addClass("banner-ativo").show()

    // setInterval(slide, 4000)

    // function slide() {
        // if( $(".banner-ativo").next().length ) {
         //    $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
      //   } else {
      //       $(".banner-ativo").removeClass().hide()
       //      $("#carrossel img:eq(0)").addClass("banner-ativo").show()
       //  }
    // }
     //teste menu de barra
    //$("#btn-mobile").click(function  () {
      // $("#nav").toggleClasss("menu-ativo")

        
       // if($("#nav").hasClas("menu-ativo")) {
           //  $("#nav").removeClass("menu-ativo")

       // } else {
            //$("#nav").addClass("menu-ativo")
        // }

   // })

//})



//Menu de Barras com JS
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//contador carrinho
     let numeroProdutos = 0
    // numeroProdutos = 1
   //  numeroProdutos = 1
    let marcador = document.getElementById("marcador");

   function contarProdutos() {
    numeroProdutos = numeroProdutos + 1
     console.log(numeroProdutos)

    marcador.innerText = numeroProdutos;
   // marcador.innerHtml = numeroProdutos;
   }


//email
let email = document.getElementById("campo-email");
let mensagem = document.getElementById("campo-mensagem");

//window.alert("teste");
function mostrarPopup() {
    window.alert("Hello World")
}

//DOM- Document Object Model
// regex -expressoes regulares

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

function enviarMensagem() {
    let mensagemDigitada = mensagem.value
    console.log(mensagemDigitada)
}

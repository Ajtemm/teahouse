//Nav

let nizLinkova = [
    {
        putanja : "index.html",
        tekst: "Home",
       
    },
    {
        putanja : "about.html",
        tekst: "about",
     
    },
    {
        putanja : "store.html",
        tekst: "store",
      
    },
    {
        putanja : "contact.html",
        tekst: "contact",
       
    },
    {
        putanja : "author.html",
        tekst: "author",
       
    }
    ]
    function ispisati(elink) {
    let navlink = `<a href="${elink.putanja}" class="nav-link nav-item">${elink.tekst}</a>`;
    return navlink
    }
    let meni = ""
    for(let elink of nizLinkova) {
    meni += ispisati(elink)
    }
    let navMeni = document.querySelector("#meni")
    console.log(navMeni)
    navMeni.innerHTML = meni
   console.log(location.pathname)
   console.log(typeof(location.pathname))

   //Newsletter validacija

    function kliki(){
        let regNewsletter=/^([0-9]|[A-z]){1,20}@(gmail.com|yahoo.com|ict.edu.rs)$/

        let yourNewsletter=document.querySelector("#newsletter")
        if(regNewsletter.test(yourNewsletter.value)){
         yourNewsletter.nextElementSibling.setAttribute("class","sacuDaNestanem")
         yourNewsletter.removeAttribute("class","crveno form-control bg-transparent w-100 py-3 ps-4 pe-5 ubicute")
         yourNewsletter.setAttribute("class","form-control bg-transparent w-100 py-3 ps-4 pe-5 ubicute")
     }
     else{
         yourNewsletter.nextElementSibling.removeAttribute("class",".sacuDaNestanem")
         yourNewsletter.nextElementSibling.setAttribute("class","crvenitekst")
         yourNewsletter.setAttribute("class","crveno form-control bg-transparent w-100 py-3 ps-4 pe-5 ubicute")
     }
    }


    //Quick links dinamicko ispisivanje

    let nizQuickLinks=[{
        link:"about.html",
        ime:"About us",
    },
    {
        link:"store.html",
        ime:"Store",
    },
    {
        link:"contact.html",
        ime:"Contact",
    },
    {
        link:"Author.html",
        ime:"Author",
    },
    {
        link:"dokumentacija.pdf",
        ime:"Dokumentacija",
    }]

    let quickhtml=`<h4 class="text-primary mb-4">Quick Links</h4>`

    for(let i=0;i<nizQuickLinks.length;i++){

        quickhtml+=`<a href="${nizQuickLinks[i].link}" class="btn btn-link">${nizQuickLinks[i].ime}</a>`

    }
    console.log(quickhtml)
    let kviklink= document.querySelector("#QuickLinks")
    console.log(kviklink)
    kviklink.innerHTML=quickhtml
  



   if(location.pathname=="/teahouse/" || location.pathname=="/teahouse/index.html"){
//Products

let nizSlike=["img/product-1.jpg","img/product-2.jpg","img/product-3.jpg"]
let nizTea=["Green Tea","Cinnamon Tea","Black Tea"]
let nizTeaOpis=[`Green tea is a healthy, antioxidant-rich drink made from unoxidized tea leaves.`
    ,`Cinnamon tea is a warm, spiced drink made from cinnamon bark, rich in antioxidants and health benefits.`,
    `Black tea is a bold, fully oxidized tea known for its rich flavor and antioxidants.`]


for(i=0;i<nizSlike.length;i++){
    let prod=document.createElement("div")
    prod.setAttribute("class","flexi2")

    let prodSad=document.createElement("img")
    prodSad.setAttribute("src",nizSlike[i])

    let prodDivTekst=document.createElement("div")

    let prodTekst=document.createElement("h4")
    let prodTekstSadrzaj=document.createTextNode(nizTea[i])
    
    let prodTekstOpis=document.createElement("p")
    let prodTekstSadrzajOpis=document.createTextNode(nizTeaOpis[i])

    prodTekstOpis.appendChild(prodTekstSadrzajOpis)

    prodDivTekst.setAttribute("class","teksti")
    prodTekst.appendChild(prodTekstSadrzaj)

    prodDivTekst.appendChild(prodTekst)
    prodDivTekst.appendChild(prodTekstOpis)
    prod.appendChild(prodSad)
    prod.appendChild(prodDivTekst)
    document.querySelector("#productsMain2").appendChild(prod)
}


//History - view more

var modal = document.getElementById("mdl");
var btn = document.getElementById("batnn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//Testimonials - promena na dugme


let nizTestimonial=[
        {nekiTekst:"I've never had tea so refreshing and full of flavor! The delicate balance of aroma and taste makes every cup feel like a moment of pure bliss.",
        ime:"Sophia Bennett",
        profesija:"Wellness Coach",
        slika:"img/testimonial-1.jpg"},

        {nekiTekst:"This tea has completely transformed my mornings. The rich flavors and natural ingredients are unlike anything I've tasted before. It's not just tea; it's an experience.",
        ime:"James Carter",
        profesija:"Creative Director",
        slika:"img/testimonial-2.jpg"},

        {nekiTekst:"As someone who appreciates high-quality teas, this brand has exceeded my expectations. The craftsmanship and care put into every blend are evident from the very first sip.",
        ime:"Priya Mehta",
        profesija:"Nutritionist",
        slika:"img/testimonial-3.jpg"}
    ]



let testDiv=document.querySelector("#testimonial-item")

let a=0;

console.log(testDiv)
testDiv.innerHTML=`<div>
<p>
${nizTestimonial[0].nekiTekst}
</p>
<div class="nesto">
    <img src="${nizTestimonial[0].slika}"/>
        <div class="flexxi">
        <h5>${nizTestimonial[0].ime}</h5>
        <p>${nizTestimonial[0].profesija}</p>
        </div>
    </div>
</div>`


let testBtns=document.querySelector("#testimonial-buttons")


testBtns.innerHTML=`<div class="owl-nav">
                    <div class="owl-prev">
                        <i class="bi bi-chevron-left"></i>
                    </div>
                    <div class="owl-next">
                        <i class="bi bi-chevron-right">
                    </i>
                    </div>
                </div>`

let btr=document.querySelector(".owl-next")
let btl=document.querySelector(".owl-prev")
btr.addEventListener('click', function (){
a = (nizTestimonial.length + a + 1) % nizTestimonial.length 
    promena()
})
 
btl.addEventListener('click', function (){
a = (nizTestimonial.length + a + 1) % nizTestimonial.length 
    promena()
})

function promena(){
    testDiv.innerHTML=`<div>
<p>
${nizTestimonial[a].nekiTekst}
</p>
<div class="nesto">
    <img src="${nizTestimonial[a].slika}"/>
        <div class="flexxi">
        <h5>${nizTestimonial[a].ime}</h5>
        <p>${nizTestimonial[a].profesija}</p>
        </div>
    </div>
</div>`
}

//Carousel


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;
    let interval;

    function changeSlide() {
     
        items[currentIndex].classList.remove("active");
        
        currentIndex = (currentIndex + 1) % items.length;

       
        items[currentIndex].classList.add("active");
    }

    function startCarousel() {
       
        interval = setInterval(changeSlide, 7000);
    }

    function stopCarousel() {

        clearInterval(interval);
    }

    startCarousel();

    carousel.addEventListener("mouseover", stopCarousel);
    carousel.addEventListener("mouseout", startCarousel);
});


}


else if(location.pathname=="/teahouse/contact.html"){


//Dinamicka ddl


let ddlNiz=["Product Inquiries","Order Assistance","Wholesale or Bulk Orders","Custom Blends","Events and Collaborations","Health and Wellness Questions","Other"]
let ddl=`<select id="selectSubject">
            <option value="0">Select a subject
            </option>`

            let i=1;
for (const element of ddlNiz) {
    
    ddl+=`<option value="${i}">${element}</option>`
    i++;
}
ddl+=`</select>
        <p class="sacuDaNestanem">Please select a brand from the list*</p>`
let objDdl=document.querySelector("#dropdown")
console.log(objDdl)
console.log(ddl)
objDdl.innerHTML=ddl



function regi(){
    



    let regName=/^[A-Z][a-z]{1,19}(\s[A-Z][a-z]{1,19})?$/

    let regEmail=/^([0-9]|[A-z]){1,20}@(gmail.com|yahoo.com|ict.edu.rs)$/

    let yourName=document.querySelector("#name")
    let yourEmail=document.querySelector("#email")
    let yourMessage=document.querySelector("#message")
    let i=0
    if(regName.test(yourName.value)){
        yourName.nextElementSibling.setAttribute("class","sacuDaNestanem")
        yourName.removeAttribute("class","crveno")
        yourName.setAttribute("class","form-control")

    }
    else{
        yourName.nextElementSibling.removeAttribute("class",".sacuDaNestanem")
        yourName.nextElementSibling.setAttribute("class","crvenitekst")
        yourName.setAttribute("class","crveno form-control")
        i++;
    }


    if(regEmail.test(yourEmail.value)){
        yourEmail.nextElementSibling.setAttribute("class","sacuDaNestanem")
        yourEmail.removeAttribute("class","crveno form-control")
        yourEmail.setAttribute("class","form-control")
    }
    else{
        yourEmail.nextElementSibling.removeAttribute("class",".sacuDaNestanem")
        yourEmail.nextElementSibling.setAttribute("class","crvenitekst")
        yourEmail.setAttribute("class","crveno form-control")
        i++;
    }
    

    let ddLista=document.querySelector("#selectSubject")
    
    if(ddLista.options[ddLista.options.selectedIndex].value!="0"){
        ddLista.removeAttribute("class","crveno form-control")
        ddLista.nextElementSibling.setAttribute("class","sacuDaNestanem")
    }
    else{
        ddLista.nextElementSibling.removeAttribute("class",".sacuDaNestanem")
        ddLista.nextElementSibling.setAttribute("class","crvenitekst")
        ddLista.setAttribute("class","crveno")
        i++;
        
    }

    if(yourMessage.value.length!=0){
        yourMessage.nextElementSibling.setAttribute("class","sacuDaNestanem")
        yourMessage.removeAttribute("class","crveno form-control")
        yourMessage.setAttribute("class","form-control")

    }
    else{
        yourMessage.nextElementSibling.removeAttribute("class",".sacuDaNestanem")
        yourMessage.nextElementSibling.setAttribute("class","crvenitekst")
        yourMessage.setAttribute("class","crveno form-control")
        i++;
    }
    console.log(i);
    if(i==0){
        document.querySelector("#nestaniiii").removeAttribute("class",".sacuDaNestanem")
        document.querySelector("#nestaniiii").setAttribute("class","zeleni")
    }
    else{
        document.querySelector("#nestaniiii").setAttribute("class","sacuDaNestanem")
    }
}

}



else if(location.pathname=="/teahouse/store.html"){


    let batnView=document.querySelector("#storeViewMore")
    let nizStore=[{
        slika:`store-product-4.jpg`,
        zvezdice:`<small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>`,
        ime:`Black tea`,
        opis:`Black tea is a fully oxidized tea made from the leaves of the Camellia sinensis plant. Known for its bold flavor and dark color`,
        cena:`$20.00`
    },
    {
        slika:`store-product-5.jpg`,
        zvezdice:`<small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>`,
        ime:`Hibiscus tea`,
        opis:`Hibiscus tea is a herbal tea made from the dried petals of the hibiscus flower (Hibiscus sabdariffa). It has a vibrant red color and a tangy, cranberry-like flavor.`,
        cena:`$30.00`
    },
    {
        slika:`store-product-6.jpg`,
        zvezdice:`<small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>`,
        ime:`Matcha tea`,
        opis:`Matcha is a finely ground powder made from specially grown and processed green tea leaves, traditionally used in Japanese tea ceremonies.`,
        cena:`$25.00`
    },{
        slika:`store-product-3.jpg`,
        zvezdice:`<small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>`,
        ime:`Some other tea`,
        opis:`Very good for health!`,
        cena:`$20.00`
    },
    {
        slika:`store-product-2.jpg`,
        zvezdice:`<small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>`,
        ime:`Belgrade tea`,
        opis:`Fenomenal tea with dark wood aroma`,
        cena:`$20.00`
    },
    {
        slika:`store-product-1.jpg`,
        zvezdice:`<small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>`,
        ime:`Ict tea`,
        opis:`Nicest tea on the market only available here`,
        cena:`$99.99`
    }]
    var a=0
    batnView.addEventListener("click", function () {
        console.log("radi");
    
        let nizHTML = "";
        
        if(a<3){
            for (let i = 0; i < nizStore.length/2; i++) {
                nizHTML += `
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="store-item position-relative text-center">
                            <img class="img-fluid" src="img/${nizStore[i].slika}" alt="">
                            <div class="p-4">
                                <div class="text-center mb-3">
                                    ${nizStore[i].zvezdice}
                                </div>
                                <h4 class="mb-3">${nizStore[i].ime}</h4>
                                <p>${nizStore[i].opis}</p>
                                <h4 class="text-primary">${nizStore[i].cena}</h4>
                            </div>
                            <div class="store-overlay">
                                <a href="" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                                <a href="" class="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i class="fa fa-cart-plus ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                `;
                a++;
            }
        
    
            document.querySelector("#nanuliti").insertAdjacentHTML("beforebegin", nizHTML);
            return;
        }
        else if(a>=3 && a<6){
            for (let i = 3; i < nizStore.length; i++) {
                nizHTML += `
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="store-item position-relative text-center">
                            <img class="img-fluid" src="img/${nizStore[i].slika}" alt="">
                            <div class="p-4">
                                <div class="text-center mb-3">
                                    ${nizStore[i].zvezdice}
                                </div>
                                <h4 class="mb-3">${nizStore[i].ime}</h4>
                                <p>${nizStore[i].opis}</p>
                                <h4 class="text-primary">${nizStore[i].cena}</h4>
                            </div>
                            <div class="store-overlay">
                                <a href="" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                                <a href="" class="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i class="fa fa-cart-plus ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                `;
                a++;
            }
            document.querySelector("#nanuliti").insertAdjacentHTML("beforebegin", nizHTML);
            document.querySelector("#nanuliti").setAttribute("class","sacuDaNestanem")
            let info=document.createElement("p")
            let infoOpis=document.createTextNode("Sorry we have no more products, subscribe to our Newsletter to get information about our products!")
            info.appendChild(infoOpis)
            info.setAttribute("class","tekstinfo")
            
            document.querySelector("#bitan-div").appendChild(info)
        }
        console.log(a)
    });
    
    


}












// jQuery

$(document).ready(function(){

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn()
        } else {
            $('.back-to-top').fadeOut()
        }
    })

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000,'swing')
        return false
    })
    
})

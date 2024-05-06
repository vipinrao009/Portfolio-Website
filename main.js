// Toggle icon navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let lightMode = document.querySelector("#dark-mode");
lightMode.onclick = ()=>{
    lightMode.classList.toggle("fa-moon")
    document.body.classList.toggle('dark-mode')
    console.log("me vipip");
}
//section 
let section = document.querySelector('section')
let navLink = document.querySelector('header nav a')

window.scroll = ()=> {
    section.forEach(sec => {

        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    })

    // sticy navbar
    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100)

    //remove toggle icon and navbar 
    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')
};

// TypedJS 

let typed = new Typed('.multiple-text',{
    strings:['FullStack Developer','Frontend Developer','Backend Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})



const form = document.querySelector('form');
const fullName = document.querySelector('#name'); // Select by ID
const email = document.querySelector('#email'); // Select by ID
const phone = document.querySelector('#phone'); // Select by ID
const subject = document.querySelector('#subject'); // Select by ID
const mess = document.querySelector('#message'); // Select by ID

function sendEmail(){

    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Subject: ${subject.value} <br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vipinrao950@gmail.com",
        Password : "93DD8509491E9EEE21F467A0F4D163C8B1EF",
        To : 'vipinrao950@gmail.com',
        From : "vipinrao950@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            
        }
      }
    );
}

function checkInput() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail()
        }

        items[1].addEventListener("keyup", ()=>{
            checkEmail()
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const emailInput = document.getElementById("email");
    const errorTxtEmail = document.querySelector(".email.error-text");

    if (!emailInput.value.match(emailRegex)) {
        emailInput.classList.add("error");
        emailInput.parentElement.classList.add("error");

        if (emailInput.value.trim() !== "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        } else {
            errorTxtEmail.innerText = "Email address can't be blank";
        }
    } else {
        emailInput.classList.remove("error");
        emailInput.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    checkInput()

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !phone.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail();
        form.reset()
        return
    }

});

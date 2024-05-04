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

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    sendEmail();
});

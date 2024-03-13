const openNavbar = document.querySelector('.Hmorger_navbar');
const closNave = document.querySelector(".closNave");
const lenkes = document.querySelector(".lenkes");
const logo = document.querySelector(".logo");


openNavbar.onclick = ()=>{
    lenkes.classList.remove('display');

}
closNave.onclick = ()=>{
    lenkes.classList.add('display');
    
}

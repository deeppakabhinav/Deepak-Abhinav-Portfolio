function displayEducation(){
    activeeducation.add("active");
    activeexperience.remove("active");
    activeskills.remove("active");
    activeedulink.add("active");
    activeexplink.remove("active");
    activeskilink.remove("active");
}
function displayExperience(){
    activeexperience.add("active");
    activeeducation.remove("active");
    activeskills.remove("active");
    activeexplink.add("active");
    activeedulink.remove("active");
    activeskilink.remove("active");
}
function displaySkills(){
    activeskills.add("active");
    activeeducation.remove("active");
    activeexperience.remove("active");
    activeskilink.add("active");
    activeexplink.remove("active");
    activeedulink.remove("active");
}
function hidenavbar(){
    activeclickbar.add("active");
    hidingclickbar.remove("active");
}
function shownavbar(){
    activeclickbar.remove("active");
    hidingclickbar.add("active");
}
var abouteducation = document.getElementById("displayingeducation");
abouteducation.addEventListener("click", displayEducation);
var aboutexperience = document.getElementById("displayingexperience");
aboutexperience.addEventListener("click", displayExperience);
var aboutskills = document.getElementById("displayingskills");
aboutskills.addEventListener("click", displaySkills);
const activeeducation = document.getElementById("edudisplay").classList;
const activeexperience = document.getElementById("expdisplay").classList;
const activeskills = document.getElementById("skidisplay").classList;
const activeedulink = document.getElementById("displayingeducation").classList;
const activeexplink = document.getElementById("displayingexperience").classList;
const activeskilink = document.getElementById("displayingskills").classList;
var clickbar = document.getElementById("barwithin");
clickbar.addEventListener("click",hidenavbar);
const activeclickbar = document.getElementById("bardisplaybttn").classList;

var clickybar = document.getElementById("baroutside");
clickybar.addEventListener("click",shownavbar);

const hidingclickbar = document.getElementById("baroutside").classList;

const scriptURL = 'https://script.google.com/macros/s/AKfycbzO-ePW-Bvyv5XJTYdtMZ3VhS5zC2UTe9KsKqD_DyBbPl-BsXgDkIszr7CKtaMvKocA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>{
            msg.innerHTML="Message received";
            setTimeout(function(){
                msg.innerHTML="";
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

window.onload = function(){
    hidenavbar();
    displayEducation();
}
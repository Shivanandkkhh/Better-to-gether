
// for inceremnet or decrement the number of add cart 
function totalClick(click) {
  const totalClick = document.getElementById('totalClick');
  const sumvalue = parseInt(totalClicks.innerText) + click;
  console.log(sumvalue + click);
  totalClicks.innerText = sumvalue;
  // 
  if (sumvalue < 0) {
    totalClicks.innerText = 0;
  }
}

// for descrpition and review tablinks replacing
// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += "active";
// }

const tabs = document.querySelectorAll(".tablinks");
const tabcontent = document.querySelectorAll(".tabcontent");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    for (let j = 0; j < tabcontent.length; j++) {
      tabcontent[j].classList.remove("tab-content-active")
    }
    for (let k = 0; k < tabs.length; k++) {
      tabs[k].classList.remove("tab-active")
    }
    tabcontent[i].classList.add("tab-content-active")
    tabs[i].classList.add("tab-active")
  })
}
// for replacing the imgies
function myFunction(img) {
  var manImg = document.getElementById("replace_img");
  manImg.src = img.src;
}
// document.getElementById("image").classList.add("slide-right");
// code for replacing tabs?
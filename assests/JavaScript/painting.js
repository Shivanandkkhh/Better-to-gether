// for showing imagies when clicking on small imgies
const smalimg = document.querySelectorAll(".smalImg");
const productImg = document.querySelectorAll(".mainImg");
for (let i = 0; i < smalimg.length; i++) {
  smalimg[i].addEventListener("click", () => {
    for (let j = 0; j < productImg.length; j++) {
      productImg[j].classList.remove('main-active');
    }
    for (let k = 0; k < smalimg.length; k++) {
      smalimg[k].classList.remove('Active-img');
    }
    productImg[i].classList.add('main-active');
    smalimg[i].classList.add('Active-img');
  })
}


// for inceremnet or decrement the number of add cart 
function totalClick(click) {
  const totalClick = document.getElementById('totalClick');
  const sumvalue = parseInt(totalClicks.innerText) + click;
  console.log(sumvalue + click);
  totalClicks.innerText = sumvalue;
  if (sumvalue < 0) {
    totalClicks.innerText = 0;
  }
}

// for descrpition and review tablinks replacing
const tabs = document.querySelectorAll(".tablinks");
const tabcontent = document.querySelectorAll(".tabcontent");
for (let i = 0; i < tabs.length; i++) {
  // alert(i)
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



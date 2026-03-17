
let subscribeBtn = document.querySelector(".subscribe-btn");
let theSuccessPage = document.querySelector(".mobile-success");
let theMainContainer = document.querySelector(".container");
let dismissBtn = document.querySelector(".dismiss-btn");
let emailInput = document.querySelector(".email-input");
let errorNote = document.querySelector(".error-message")

function toggleSuccessPage (){
  theSuccessPage.classList.toggle("opened");
  theMainContainer.style.visibility = "hidden"
}
function toggleErrorInput(){
  emailInput.classList.add("error");
  errorNote.style.display = "block"
}

// email pattern
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}



subscribeBtn.addEventListener("click", function(){
  let currentInputValue = emailInput.value;
  if(validateEmail(currentInputValue)){
    toggleSuccessPage()
  }else{
    toggleErrorInput();
     
  }
});

// Mail Acknowlegment
dismissBtn.addEventListener("click", function(){
   location.reload()
  
    // theSuccessPage.classList.remove("opened");
    // theMainContainer.style.display = "block"; 
    // theMainContainer.style.visibility = "visible";
    // emailInput.value = "";
    // emailInput.classList.remove("error");
    // errorNote.style.display = "none"
});

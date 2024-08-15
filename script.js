const radiodivs = document.querySelectorAll('.radiodiv');
const radiolabels = document.querySelectorAll('.radiolabel');
const allinputs = document.querySelectorAll("input");

const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const check = document.querySelector(".check");
var valid = false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function validateEmailInput(email) {
   
  
  
  
  }

radiodivs.forEach(radiodiv => {
    radiodiv.addEventListener('click', () => {
        valid = true;


for (const radiodiv of radiodivs) {


         radiodiv.classList.remove('selecteddiv');
}
radiodiv.classList.add('selecteddiv');
    });

    document.querySelector(".btn").addEventListener("click",function(e){
        e.preventDefault();


   



            
       
             if(firstName.value=="" || lastName.value=="" || email.value=="" || message.value == "" || !check.checked || !valid){

                document.querySelector(".error-message").textContent="Please fill in the blanks !";
                document.querySelector(".error-message").classList.add("error-active");
            }

            else if (!emailRegex.test(email.value)) {
                document.querySelector(".error-message").textContent="Enter the e-mail section according to the rules.";
                document.querySelector(".error-message").classList.add("error-active");
                   }

            else {
                document.querySelector(".error-message").textContent="";
                document.querySelector(".error-message").classList.remove("error-active");
                document.querySelector(".btn").textContent="Completed !";

                document.querySelector(".succes-div").classList.add("succes-div-active");
                

            }



      

        });
});







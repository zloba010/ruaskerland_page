          let optionMy = document.querySelector(".selector");
          
console.log(optionMy.lastChild.previousElementSibling);

          optionMy.addEventListener('click', function(evt) {
            evt.target.id ? console.log(evt.target.lastElementChild) : null;
          })
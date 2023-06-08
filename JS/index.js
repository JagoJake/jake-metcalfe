// DARK/LIGHT MODE
document.querySelector(".theme-toggle-btn").addEventListener("click", () => {
  document.body.classList.toggle("light");
});


// IMAGE-SLIDER
  const slider1 = document.querySelectorAll("#slider1 img");
  const slider2 = document.querySelectorAll("#slider2 img");

  function sliderimages(images) {
    let i = 0;
    /*
    setInterval() method executes for the second time, get the first indexed image by subtracting i by 1, which gives the previously displayed image, and set its display to none.
    the second index image set its display to block.
    */
    setInterval(function () {
      if (i == 0) {
        images[i].className = "fade-in-image";
      } else if (i == images.length) {
        images[i - 1].className = "fade-out-image";
        images[0].className = "fade-in-image";
        i = 0;
      } else {
        images[i - 1].className = "fade-out-image";
        images[i].className = "fade-in-image";
      }

      i++;
    }, 2000);
  }

  sliderimages(slider1);
  sliderimages(slider2);


  
  const items = document.querySelectorAll(".item");

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
      }
    });
  }, options);

  items.forEach((item) => {
    observer.observe(item);
  });



  // FORM
  // Get all the necessary DOM elements
const form = document.getElementById('exampleForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')

// Store all form elements in an array by spreading the elements property of the form
const formElements = [ ...form.elements ]

// Create function to check if all form elements are valid
const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if (element.nodeName === 'SELECT') {
      return element.value !== 'Please select an option'
    } else {
      return element.checkValidity()
    }
  })


  return valid
}

/*
  Create function to handle the change event on a form element,
  enabling the submit button if all form elements are valid
*/
const handleChange = () => {
  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}

// Create function to handle the submit event on the form
const handleSubmit = (e) => {


  e.preventDefault()


  formElements.forEach((element) => {


    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'  
          && element.type !== 'checkbox'
          && element.type !== 'radio'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'


      element.nextElementSibling.style.display = 'block'


      element.previousElementSibling.style.color = 'red'
    }


    // Reset to original colors if valid
    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'
          && element.type !== 'checkbox'
          && element.type !== 'radio'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'


      element.nextElementSibling.style.display = 'none'


      element.previousElementSibling.style.color = '#212529'
    }


    if (!element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'


    }


    // Reset to original colors if valid
    if (element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#212529'


    }


    if (element.nodeName === 'SELECT'
          && element.value === 'Please select an option'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'


      element.nextElementSibling.style.display = 'block'


      element.previousElementSibling.style.color = 'red'
    }


    // Reset to original colors if valid
    if (element.nodeName === 'SELECT'
          && element.value !== 'Please select an option'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'


      element.nextElementSibling.style.display = 'none'


      element.previousElementSibling.style.color = '#212529'
    }
  })


  if (allInputsValid()) {
    successMessage.style.display = 'block'


    form.reset()


    submitButton.setAttribute('disabled', '')


    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3000)
  }
}

// Add event listener to each form element
formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})




// Add submit listener to the form
form.addEventListener('submit', (e) => handleSubmit(e))


// TYPES JS


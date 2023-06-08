// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_cD_2azDnEWDmNwNEd44zZgAOgs_mEPA",
  authDomain: "contact-form-71801.firebaseapp.com",
  databaseURL: "https://contact-form-71801-default-rtdb.firebaseio.com",
  projectId: "contact-form-71801",
  storageBucket: "contact-form-71801.appspot.com",
  messagingSenderId: "210853177660",
  appId: "1:210853177660:web:51babba98ee92c1bf9d639",
};

firebase.initializeApp(firebaseConfig);

let contactDB = firebase.database().ref('contact');

document.getElementById("exampleForm").addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  let firstName = getElementVal('firstName');
  let lastName = getElementVal("lastName");
  let email = getElementVal("email");
  let message = getElementVal("message");
  let personal = getElementVal("personal");
  let business = getElementVal("business");
  let subscribeYes = getElementVal("subscribeYes");

  saveSubmit(
    firstName,
    lastName,
    email,
    message,
    personal,
    business,
    subscribeYes
  );
}

const saveSubmit =
  (firstName, lastName, email, message, personal, business, subscribeYes) => {
    let newContact = contactDB.push();
    newContact.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      personal: personal,
      business: business,
      subscribeYes: subscribeYes
    });
  };

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
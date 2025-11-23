// document.getElementById('send').addEventListener('click', ()=>{
    
// Swal.fire({
// title: "Do you want to save your information?",
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: "Save",
//   denyButtonText: `Don't save`
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire("Saved!", "", "success");
//   } else if (result.isDenied) {
//     Swal.fire("Changes are not saved", "", "info");
//   }
// })
// })

  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
    import{getDatabase , ref , push} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCsZ6mjf3qPWqhyiZNfZH-5OA0AcLbSy-8",
    authDomain: "real-time-database-9a7e1.firebaseapp.com",
    databaseURL: "https://real-time-database-9a7e1-default-rtdb.firebaseio.com",
    projectId: "real-time-database-9a7e1",
    storageBucket: "real-time-database-9a7e1.firebasestorage.app",
    messagingSenderId: "1026502043481",
    appId: "1:1026502043481:web:0b002cd9f9758abe1c8e48",
    measurementId: "G-4PN73TS6HR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
    const db = getDatabase(app);

const send =  document.getElementById('send'); 
send.addEventListener('click', (e)=>{
  e.preventDefault();

  const name = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;

  Swal.fire({
    title: "Do you want to send your information?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Send",
    denyButtonText: `Don't send`
  }).then((result) => {

    if (result.isConfirmed) {

      push(ref(db, 'CarSpotter'), {name, email})
      .then(()=>{
        Swal.fire("Send!", "", "success");
        document.getElementById("yourFormID").reset(); // correct reset
      })
      .catch((error)=>{
        alert('Error Submitting: ' + error.message);
      });

    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }

  });

});


//   send.addEventListener('click' , (e)=>{
//     e.preventDefault()
//     const name = document.getElementById('full-name').value;
//     const email = document.getElementById('email').value;
// push(ref(db , 'CarSpotter'), {name , email})
// .then(()=>{
//   Swal.fire({
// title: "Do you want to save your information?",
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: "Save",
//   denyButtonText: `Don't save`
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire("Saved!", "", "success");
//   } else if (result.isDenied) {
//     Swal.fire("Changes are not saved", "", "info");
//   }
// })
//     send.reset()
// })
// .catch((error)=>{
//     alert('Error Submitting Feedback: ' +error.message)
// })
//   })

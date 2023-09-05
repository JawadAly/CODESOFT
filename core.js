// footer year js
const footerYearArea = document.getElementById('footerDate');
const currentYear = new Date().getFullYear();
footerYearArea.innerHTML = currentYear;
// console.log(currentYear);
const getMyEmailAddress = () =>{
    alert("You can mail me at : \n 'jawadsaleem932@gmail.com' or 'bukc688@gmail.com' . Thank you for reaching out to me.");
}
// form data retrieval and emtying inputs
// const submitBtn = document.querySelector('#submissionBtn');
// const inputs = document.querySelectorAll('#myInput');    
// submitBtn.addEventListener('click',()=>{
//     inputs.forEach((singleInput)=>{
//         singleInput.value = "";
//     });
//     alert('Your response has been successfully recieved !');
// });

const inputs = document.querySelectorAll('#myInput');    
const fetchData = (e) =>{
    Array.from(inputs).forEach((singleInput)=>{
        singleInput.value = '';
    });
    alert('Your response has been successfully recieved !');
    return false;
}

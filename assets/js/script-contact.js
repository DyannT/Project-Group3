const clearForm = document.querySelector('.js-btn-clear')
const inputForms = document.querySelectorAll('.js-input-form')
// console.log(sendForms)

// function clearInput(){
//     for(let inputForm of inputForms){
//         document.value = ''
//     }
// }

clearForm.onclick = function() {
    for(let inputForm of inputForms){
        inputForm.value = ''
    }
}
const formEl = document.querySelector('.js-feedback-form')
const inputEl = document.querySelector('.js-feedback-form input')
const textAreaEl = document.querySelector('.js-feedback-form textarea')

formEl.addEventListener('submit', handleTextAreaInput)
textAreaEl.addEventListener('input', getInputValue)
formEl.addEventListener('submit', handleInputValue)
getvalueFromLocalStorage()

const formData = {}

function handleInputValue(e){
    console.log(e.target.name)
    console.log(e.target.value)

    formData.[e.target.name] = e.target.value
}

function getInputValue(event){
    const inputValue = event.target.value
    localStorage.setItem("value", inputValue)
}

function getvalueFromLocalStorage(){
    const comment = localStorage.getItem('value')
    if(comment){
       textAreaEl.textContent = comment;
    }
}

function handleTextAreaInput(event){
    event.preventDefault()
    event.currentTarget.reset()
    localStorage.removeItem('value')
}











let d = document 
let form = d.querySelector('form')

console.log(form)

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    console.log(form.name.value)    
    console.log(form.score.value)    
})

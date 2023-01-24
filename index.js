
let cardwrapper = document.querySelector('.card-wrapper')
let search =  document.getElementsByTagName('input')[0]
let btn = document.getElementsByTagName('button')[0]
let neww = []


let fetchdata = fetch("https://jsonplaceholder.typicode.com/users")
fetchdata.then(response => {
    return response.json()
}).then(json => {
    console.log(json)
    neww = json.map(element => {
        let name = element.name
        let email = element.email
        let div = document.createElement('div')
        let innerhtml = `
        <div class="card">
        <h1>${name}</h1>
        <p>${email}</p>
         </div>
        `
        div.innerHTML = innerhtml
        cardwrapper.append(div)
        return {name: name, email: email, ele: div}
    });
    console.log(search.value)
})


search.addEventListener('input', (e)=>{
    const value = e.target.value.toLowerCase()
    neww.forEach(element => {
        const isvisible = element.name.toLowerCase().includes(value)|| element.email.toLowerCase().includes(value);
        element.ele.classList.toggle('hide', !isvisible)
    });

})
console.log(neww)

//for testing

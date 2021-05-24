let main = document.getElementById("main")
let text = document.getElementById("search-text")
let button = document.getElementById("search-button")


discover()

text.onchange=()=>{
    onclick()
}

function onclick() {
    while(main.firstChild){
        main.removeChild(main.firstChild)
    }
    fetch("https://fakestoreapi.com/products?limit=30")
        .then(re => re.json())
        .then(response => {
                
        })
}

function discover() {
    fetch("https://fakestoreapi.com/products?limit=30")
        .then(re => re.json())
        .then(response => {
            console.log(response)
            for (let i = 0; i < response.length; i++) {
                let div = document.createElement('div')
                let img_div = document.createElement('div')
                let img = document.createElement('img')
                let name = document.createElement('h4')
                main.appendChild(div)
                div.appendChild(img_div)
                img_div.appendChild(img)
                div.appendChild(name)
                img.src = response[i].image
                name.textContent = response[i].title
                
            }
        })

}
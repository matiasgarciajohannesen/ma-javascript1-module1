const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// q1

var cat = {complain: function(){
    console.log("Meow!")
}}
cat.complain();

// q2

const heading = document.querySelector("h3")
heading.innerHTML = "Updated heading"

// q3

heading.style.fontSize = "2em"

// q4

heading.classList = "subheading"

// q5

const paragraf = document.querySelectorAll("p")
paragraf.forEach(p => {
    p.style.color = "red"
})

// q6

const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New paragraph</p>"
resultsContainer.style.background = "yellow"

// q7

const listCheck = (list) =>{
    for(i of list){
        console.log(i.name)
    }
}
listCheck(cats)

// q8
let catcontainer = document.querySelector(".cat-container")
const createCats = (cats) =>{
    for(const cat of cats){
        if(cat.age === undefined){
            cat.age = "Age unknown"
        }
        let newDiv =`
        <div>
        <h2>${cat.name}</h2>
        <p>${cat.age}</p>
        </div>
        `;
        catcontainer.innerHTML += newDiv
    }
}

createCats(cats)
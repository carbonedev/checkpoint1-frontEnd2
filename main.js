//Referencia dos inputs e buttom

let recipeTitleReference = document.querySelector('#recipeTitle')
let recipeDescriptionReference = document.querySelector('#recipeDescription')
let recipeImageReference = document.querySelector('#recipeImage')
let buttonRegisterReference = document.querySelector('#buttonRegister')
let recipeColectionReference = document.querySelector('#recipeColection')


//Variavel com os dados coletados pelos inputs

let recipeCard = ""

//Variavel com os dados inseridos em uma array

let recipeCardArray = []


//evento

buttonRegisterReference.addEventListener('click', function(event){

    event.preventDefault()

    //input para receber Dados

    recipeCard = { title: recipeTitleReference.value, description:recipeDescriptionReference.value,  image: recipeImageReference.value}


    //Adicionando dados coletados para o HTML
    
    recipeColectionReference.innerHTML += (`
   
        <div id="cardStyle" class="col-4">
            <h2>
                ${recipeCard.title}
            </h2>
            
            <img src="${recipeCard.image}" alt="">

            <p>
                ${recipeCard.description}
            </p>
        </div>    
    </div>`)

    //Criando um banco de Dados 

    recipeCardArray.push(recipeCard)
  
    
    
    // console.log(recipeCard)
    // console.log(recipeCardArray)
    
    
    
})





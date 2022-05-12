const miLista = document.getElementById('container')

const informacion = {
   personajes: []
}

const getDataFromApi = () => {
   const URI = "https://gateway.marvel.com/v1/public";
   const CREDENTIALS = "ts=1&apikey=5230904141b43d248f5e8468e0ff6759&hash=81ab3e48092d910b0c726ab8f0e902be"
   return fetch(`${URI}/characters?${CREDENTIALS}`)
}


const createListNodeElement = (personaje) => {
   const myLi = document.createElement('li')
   myLi.className = 'card'
   myLi.innerText = personaje.name
   return myLi
}

const renderNodes = (node) => {
   miLista.appendChild(node)
}

const callbackFunction = () => {
   getDataFromApi()
      .then((data) => data.json())
      .then(({ data: { results } }) => {
         const nombresDePersonajes = results.map((personaje) => {
            return createListNodeElement(personaje)
         })

         nombresDePersonajes.forEach((Node) => {
            renderNodes(Node)
         })
      })
}


window.addEventListener('load', callbackFunction)
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = []

function agregarAmigo(){
    let amigo = document.querySelector('#amigo');
    let amigoVal = amigo.value;
    if(amigoVal == ''){
        alert('Por favor, ingrese un nombre valido')
    }else{
        lista.push(amigoVal);
        amigo.value = '';
        mostrarLista (lista)
    }
}

function mostrarLista(listaAmigos){
    let ulAmigos = document.querySelector('#listaAmigos');
    ulAmigos.innerHTML = ''
    
    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.innerHTML = amigo;
        ulAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let cantidad = lista.length;
    if (cantidad > 0){
        let posicion = Math.floor(Math.random() * cantidad);
        console.log(posicion)
        let amigo = lista[posicion];
        
        let ulAmigos = document.querySelector('#resultado');
        ulAmigos.innerHTML = '';
        let li = document.createElement('li');
        li.innerHTML = `El amigo secreto sorteado es: ${amigo}`;
        ulAmigos.appendChild(li);
    }
}
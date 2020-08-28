let url = sessionStorage.getItem('urlSearch');
let inputWords = sessionStorage.getItem('searchedWord');
console.log(url);


let no_image = "images/image-coming-soon.jpg";
let beer_cont = document.getElementById('beer_results');
let numberOfResults = document.getElementById('numberOfResults');
let cont = 0;
fetch(url).then(response).then(show)

function response(datos) {
    return datos.json();
}

function show(datos) {
    if (datos.length === 0) {
        console.log("No hay cervezas!")
        numberOfResults.innerText = 'No results found for "' + inputWords + '"';
        numberOfResults.style.color = 'red';
    }
    else {
        if (datos.length === 25) {
            numberOfResults.innerText = 'Showing only the first 25 matches. Try redefining your search';
            numberOfResults.style.color = 'red';
        }
        else {
            numberOfResults.innerText = datos.length + ' results found for "' + inputWords + '"';
        }
        for (let j = 0; j < datos.length; j++) {
            let nuevoDiv = document.createElement('div');
            let nuevoDiv2 = document.createElement('div')
            let nuevoDiv3 = document.createElement('div')
            let name = document.createElement('h3');
            let tagline = document.createElement('p');
            let image = document.createElement('img');
            name.innerHTML = datos[j].name;
            tagline.innerHTML = datos[j].tagline;
            if (datos[j].image_url === 'https://images.punkapi.com/v2/keg.png') {
                image.setAttribute('src', no_image);
                image.setAttribute('alt', 'coming_soon')
            }
            else {
                image.setAttribute('src', datos[j].image_url);
            }

            //Datos del OVerlay

            nuevoDiv3.innerText = 'Details';
            let lista = document.createElement('ul');
            let alcohol = document.createElement('li');
            let amargo = document.createElement('li');
            let colorebcsrm = document.createElement('li');
            let descripcion = document.createElement('li');
            let addList = document.createElement('button');
            let addCart = document.createElement('button');

            alcohol.innerText = 'Alcohol: ' + datos[j].abv + ' ABV';
            amargo.innerText = 'Bitterness: ' + datos[j].ibu + ' IBU';
            colorebcsrm.innerText = 'Color: ' + datos[j].ebc + ' EBC - ' + datos[j].srm + ' SRM';
            descripcion.innerText = 'Description: ' + datos[j].description;

            lista.setAttribute('class', 'listado');
            alcohol.setAttribute('class', 'list_element');
            amargo.setAttribute('class', 'list_element');
            colorebcsrm.setAttribute('class', 'list_element');
            descripcion.setAttribute('class', 'list_element');
            addList.setAttribute('type', 'button')
            addList.setAttribute('class', 'btn btn-warning addToList');
            addList.innerText = 'Add to Wishlist';
            addList.addEventListener('click', function (event) {
                addListClick(datos[j]);
                addList.innerText = 'Added';
                addList.disabled = true;
                // addList.style.opacity=0.2;
            });// `addListClick(${i,j})`); closure
            addCart.setAttribute('type', 'button')
            addCart.setAttribute('class', 'btn btn-success addToCart');
            addCart.innerText = 'Add to Cart';

            nuevoDiv3.appendChild(lista);
            nuevoDiv3.appendChild(addList);
            nuevoDiv3.appendChild(addCart);
            lista.appendChild(alcohol);
            lista.appendChild(amargo);
            lista.appendChild(colorebcsrm);
            lista.appendChild(descripcion);

            //Fin datos del OVerlay


            beer_cont.appendChild(nuevoDiv);
            nuevoDiv.appendChild(name);
            nuevoDiv.appendChild(tagline);
            nuevoDiv.appendChild(image);
            nuevoDiv.appendChild(nuevoDiv2);
            nuevoDiv2.appendChild(nuevoDiv3);

            // nuevoDiv.setAttribute('class', 'card');
            nuevoDiv.setAttribute('class', 'card col-md-4 contenedor');
            name.setAttribute('class', 'beer_name');
            tagline.setAttribute('class', 'beer_tagline');
            image.setAttribute('class', 'beer_image');
            nuevoDiv2.setAttribute('class', 'overlay')
            nuevoDiv3.setAttribute('class', 'text')
        }
    }
}
function addListClick(datos) {
    console.log(datos);

    if (JSON.parse(localStorage.getItem('Favoritos')) !== null) {
        arrayFav = JSON.parse(localStorage.getItem('Favoritos'));
    }
    let nuevoFavorito = datos.id;
    arrayFav.push(nuevoFavorito);
    localStorage.setItem('Favoritos', JSON.stringify(arrayFav))
}
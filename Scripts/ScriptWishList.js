/////////////// Scripts para Beer.html /////////////// 
let wishlistbutton = document.getElementById('Wishlist');
wishlistbutton.setAttribute('class', 'nav-link titleactive');


let arrayFav = JSON.parse(localStorage.getItem('Favoritos'));
let urlBeers = 'https://api.punkapi.com/v2/beers/';
let no_image = "image-coming-soon.jpg";
let beer_cont = document.getElementById('list_content');

for (let i = 0; i < arrayFav.length; i++) {
    let url = urlBeers + arrayFav[i];
    console.log(url);
    fetch(url).then(response).then(show)

    function response(datos) {
        console.log(datos)
        return datos.json();
    }
    function show(datos) {

        //Elementos a crear
        let nuevoDiv = document.createElement('div');
        let nuevoDiv2 = document.createElement('div')
        let nuevoDiv3 = document.createElement('div')
        let nuevoDiv4 = document.createElement('div')
        let nuevoDiv5 = document.createElement('div')
        let name = document.createElement('h3');
        let tagline = document.createElement('h5');
        let descripcion = document.createElement('p');
        let subdescripcion = document.createElement('p');
        let atributos = document.createElement('medium');
        let image = document.createElement('img');
        let removeItem = document.createElement('button');
        let addCart = document.createElement('button');

        //Contenido de cada elemento creado
        name.innerHTML = datos[0].name;
        tagline.innerHTML = datos[0].tagline;
        if (datos[0].image_url === 'https://images.punkapi.com/v2/keg.png') {
            image.setAttribute('src', no_image);
            image.setAttribute('alt', 'coming_soon')
        }
        else {
            image.setAttribute('src', datos[0].image_url);
        }
        atributos.innerText = 'Alcohol: ' + datos[0].abv + ' ABV | ' + 'Bitterness: ' + datos[0].ibu + ' IBU | ' + 'Color: ' + datos[0].ebc + ' EBC';
        descripcion.innerText = datos[0].description;

        //Caracterìsitcas de cada elemento
        if (i % 2 !== 0) {
            nuevoDiv.setAttribute('class', 'card wishcard col-10 col-md-5');
        }
        else {
            nuevoDiv.setAttribute('class', 'card wishcard col-10 col-md-5');
        }
        nuevoDiv2.setAttribute('class', 'row no-gutters');
        nuevoDiv3.setAttribute('class', 'col-3 col-md-3');
        image.setAttribute('class', 'card-img img-fluid');
        nuevoDiv4.setAttribute('class', 'col-9 col-md-9');
        nuevoDiv5.setAttribute('class', 'card-body')
        name.setAttribute('class', 'card-title');
        tagline.setAttribute('class', 'card-subtitle');
        descripcion.setAttribute('class', 'card-text');
        subdescripcion.setAttribute('class', 'card-text');
        atributos.setAttribute('class', 'text-muted');
        removeItem.setAttribute('type', 'button')
        removeItem.setAttribute('class', 'btn btn-dark removeButton');
        removeItem.innerText = 'Remove Item';
        removeItem.addEventListener('click', function (event) {
            removeItemClick(i);
            removeItem.innerText = 'Removed';
            removeItem.disabled = true;
            // addList.style.opacity=0.2;
        });// `addListClick(${i,j})`); closure
        addCart.setAttribute('type', 'button')
        addCart.setAttribute('class', 'btn btn-success cartButton');
        addCart.innerText = 'Add to Cart';

        //Árbol de elementos
        beer_cont.appendChild(nuevoDiv);
        nuevoDiv.appendChild(nuevoDiv2);
        nuevoDiv2.appendChild(nuevoDiv3);
        nuevoDiv3.appendChild(image);
        nuevoDiv2.appendChild(nuevoDiv4);
        nuevoDiv4.appendChild(nuevoDiv5);
        nuevoDiv5.appendChild(name);
        nuevoDiv5.appendChild(tagline);
        nuevoDiv5.appendChild(descripcion);
        nuevoDiv5.appendChild(subdescripcion);
        subdescripcion.appendChild(atributos);
        nuevoDiv5.appendChild(removeItem);
        nuevoDiv5.appendChild(addCart);
    }
}


function removeItemClick(index) {
    console.log(index);

    arrayFav.splice(index, 1);
    localStorage.setItem('Favoritos', JSON.stringify(arrayFav));
    location.reload();

}
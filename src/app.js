/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Write your code here
  console.log('hola mundo')
  const rockStars = [
    {
      "id": 1,
      "name": "John Lennon",
      "username": "john",
      "email": "john.lennon@thebeatles.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Paul McCartney",
      "username": "paul",
      "email": "paul.mccartney@thebeatles.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/2.jpg",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "George Harrinson",
      "username": "george",
      "email": "george.harrinson@thebeatles.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/3.jpg",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Ringo Starr",
      "username": "ringo",
      "email": "ringo.starr@thebeatles.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/4.jpg",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Freddie Mercury",
      "username": "freddie",
      "email": "freddie@queen.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/6.jpg",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Brian May",
      "username": "guitarrista",
      "email": "brian.may@queen.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/8.jpg",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Roger Taylor",
      "username": "baterista",
      "email": "roger.taylor@queen.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/9.jpg",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "John Deacon",
      "username": "bajista",
      "email": "john.deacon@queen.uk",
      "imageUrl": "https://starwars-visualguide.com/assets/img/characters/10.jpg",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    }
  ]

  // inicializo una variable tipo string
  // let textHTML = '<ul class="list-group">'
  let textHTML = '<ul class="list-group">'
  rockStars.map((item, id) => {
    textHTML += `
      <li key=${id} class="list-group-item d-flex justify-content-between">
        <div>${item.name}</div>
        <div>
          <span class="mx-1"><i class="far fa-eye"></i></span>
          <span class="mx-1"><i class="far fa-edit"></i></span>
          <span class="mx-1"><i class="fas fa-trash-alt text-danger"></i></span>
        </div>
      </li>
    `
    console.log(textHTML)
  })
  textHTML += '</ul>'
  console.log(textHTML)

  let cardHTML = ''
  rockStars.map((item, id) => {
    cardHTML += `
      <div key=${id} class="card" style="width: 18rem;">
        <img src=${item.imageUrl} class="card-img-top" alt=${item.name}>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.company.name}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
  })


  // Capturar el elmento html cuyo id es list
  const listRocksStars = document.querySelector('#list')
  // Modifico el valor de la propiedad innerHTML
  listRocksStars.innerHTML = textHTML

  // Capturo el div de las card
  const cardRocksStars = document.querySelector('#card')
  cardRocksStars.innerHTML = cardHTML

};


// Como acceder a distitos tipos de datos: Objeto, Array

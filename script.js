const api = "https://restcountries.eu/rest/v2/name/";

const searchValue = document.querySelector('.search');
searchValue.addEventListener('keypress', searchCountry);

function searchCountry(e) {
    if (e.keyCode == 13) {
        writeResult(searchValue.value)
    }
}

function writeResult(result) {
    console.log('asdsad')
    fetch(`${api}${result}`)
        .then(element => {
            return element.json()
        }
        ).then(displayCountry);
}

function displayCountry(element) {
 console.log(element.lenght);

 let name = document.querySelector('.country');
 name.innerText = `${element[0].name}`;

 let capital = document.querySelector('.capital');
 capital.innerHTML = `${element[0].capital}`;

 let nativename = document.querySelector('.nativename');
 nativename.innerHTML = `${element[0].nativeName}`;

 let flag = document.querySelector('.flag');
 flag.innerHTML = `<img src="${element[0].flag}">`

 let population = document.querySelector('.population');
 population.innerHTML = `Population ${element[0].population}`


}
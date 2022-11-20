let randomOptions = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': 'a85a65c501msh8f4f657b002f658p14b2a3jsnf0b8e00bd7a6',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
};

let searchOptions = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',
    params: {query: '<REQUIRED>'},
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': 'a85a65c501msh8f4f657b002f658p14b2a3jsnf0b8e00bd7a6',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
};

function getRandomBtn() {
    fetch(randomOptions.url, {
        method: randomOptions.method,
        headers: randomOptions.headers,
      })
        .then((response) => response.json())
        .then((data) => {
          let p = document.createElement('p');
          p.innerHTML = data.value;
          document.body.append(p);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}

function searchBtn() {
    let searchValue = document.getElementById("inputFild").value;
    if (searchValue === "" || !searchValue.trim()) {
        alert("Input value");
    }

    fetch(searchOptions.url + `?query=${searchValue}`, {
        method: searchOptions.method,
        headers: searchOptions.headers, 
      })
        .then((response) => response.json())
        .then((data) => {
                for (let index = 0; index < data.result.length; index++) {
                let p = document.createElement('p');
                p.innerHTML = `${index}: ${data.result[index].value}`;
                document.body.append(p);
            }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}

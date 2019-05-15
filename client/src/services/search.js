export function alertMessage(message) {
    console.log(message)
}

export function searchId(f, m, l) {
    return fetch(`http://localhost:3001/search-physician/${f}/${m}/${l}`, {
        method: 'POST'
    }).then(function (response) {
        return response.json();
    })
}

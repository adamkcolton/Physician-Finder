export function alertMessage(message) {
    console.log(message)
}

export function searchId(f, m, l) {
    return fetch(`http://localhost:3001/search-physician/${f}/${m}/${l}`, {
        method: 'POST'
    }).then(function (response) {
        if (response.ok) {
            console.log(response)
            return response.json();
        } else {
            return false
        }
    })
}

export function alertMessage(message) {
    console.log(message)
}

export function searchId(data) {
    return fetch(`http://localhost:3001/search-physician`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: {
            firstName: data
        }
    }).then(function (response) {
        return response;
    })
}

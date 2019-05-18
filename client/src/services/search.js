export function alertMessage(message) {
    console.log(message)
}

export function searchId(f, m, l) {
    return fetch(`/search-physician/${f}/${m}/${l}`, {
        method: 'POST'
        // mode: "no-cors"
    }).then(function (response) {
        if (response.ok) {
            console.log(response)
            return response.json();
        } else {
            return false
        }
    })
}

export function alertMessage(message) {
    console.log(message)
}

export function searchId(event) {
    event.preventDefault()
    console.log(event.target.element[0].value)
}

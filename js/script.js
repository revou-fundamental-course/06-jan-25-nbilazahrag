let nameInput = document.getElementById('name-input')

document.getElementById('submit').addEventListener("click", function() {
    const nama = nameInput.value

    document.getElementById('name').innerHTML = nama
})
function mostraform(){
    let name = document.getElementById('email')
    let username = document.getElementById('senha')
    let password = createRandomString()

    let newTr = document.createElement('tr')
    newTr.id = password

    let tbody = document.getElementById('tbody')
    tbody.append(newTr)

    let newTd = document.createElement('td')
    newTd.classList.add('valueName')
    newTd.innerHTML = name.value

    // let tr = newTr
    newTr.append(newTd)

    let secondTd = document.createElement('td')
    secondTd.classList.add('valueUsername')
    secondTd.innerHTML = username.value

    newTr.append(secondTd)

    let thirdTd = document.createElement('td')
    newTr.append(thirdTd)

    let buttonTd = document.createElement('button')
    buttonTd.id = password + "-btn"
    buttonTd.innerHTML = 'efetuar logout'

    buttonTd.onclick = () => resteForm(newTr)

    thirdTd.append(buttonTd)

    name.value = null
    username.value = null
}

function createRandomString(){
   return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}


/**/
function resteForm(line) {
    line.remove()
}
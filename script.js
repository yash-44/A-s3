let name = document.getElementById('name')
let profession = document.getElementById('profession')
let age = document.getElementById('age')
let button = document.getElementById('adduser')
let alert = document.getElementById('alert')

button.addEventListener('click', handlebutton)
let array = []
showemployee()


function handlebutton(e) {
    e.preventDefault()
    let ename = name.value
    let eprof = profession.value
    let eage = age.value

    if (ename.length !== 0 && eprof.length !== 0 && eage.length !== 0) {
        array.push({ "name": ename, "prof": eprof, "age": eage })
        alert.innerHTML = `<p style="color: green;">Success: Employee Added Successfully..!</p> `  
        setTimeout(() => {
            alert.innerHTML = ""
        }, 2000);
    }
    else {
        alert.innerHTML = `<p style="color: red;">Error: Please Make sure All the fields are filied before adding in an employee !</p> `
        setTimeout(() => {
            alert.innerHTML = ""
        }, 2000);
    }

    showemployee()
}

function showemployee() {
    
    let m = ""
    array.forEach((element, index) => {
        m += `<div class="box" id=${index}>
            <div id="employeebox">
            <p id="eid">${index + 1}.</p>
            <p id="ename">name: ${element.name}</p>
            <p id="eprof">Profession: ${element.prof}</p>
            <p id="eage">Age: ${element.age}</p>
            </div>
            <button class="deletebtn" id="${index}" onclick='employeedel(this.id)'>Delete User</button>
        </div>`
    });

    let show = document.getElementById('showemployee')

    if (array.length != 0) {
        show.innerHTML = m
    }
    else {
        show.innerHTML = `<p id='zero'>You have 0 Employee..`
    }
    
}


function employeedel(index) {
    array.splice(index,1)
    document.getElementById(index).remove()
    alert.innerHTML = `<p style="color: green;">Success: Employee Deleted Successfully..!</p> `
    setTimeout(() => {
        alert.innerHTML = ""
    }, 2000);
    showemployee()
}


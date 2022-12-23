function onClickRegistration() {
    window.location.href = 'http://localhost:3000/pages/auth'
}

function onClickLogin() {
    const element = document.getElementById("modal")
    element.style.display = 'flex'
}

function onClickBG() {
    const element = document.getElementById("modal")
    element.style.display = 'none'
}

function onClickForm (e) {
    e.stopPropagation()
}

async function onClickReg() {
    try {
        const login = document.getElementById('login_reg').value
        const password = document.getElementById('password_reg').value
        const passwordRep = document.getElementById('pass_rep').value
        const email = document.getElementById('email').value
        const favorite = document.getElementById('fav').value

        if(password !== passwordRep) {
            throw new Error('Пароли не совпадают')
            return
        }

        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                login,
                password,
                email,
                favorite,
            }),
        })
        console.log(response)
    }
    catch(e) {
        alert(e)
    }
}

async function login() {
    try {
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const token = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: login,
                password,
            }),
        }).then((response => response.json()))
        .then((data) => localStorage.setItem('token', data.token))
    }
    catch(e) {
        alert(e)
    }
}

async function whoAmI() {
    try {

    }
    catch(e) {
        alert(e)
    }
}
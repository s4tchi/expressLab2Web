
async function getUserByEmail() {
    try {
        let params = (new URL(document.location)).searchParams; 
        console.log(params.get("email"));
        if(params.get("email")) {
            await fetch(`http://localhost:3000/user?email=${params.get("email")}`, {
            method: 'GET',
            headers: {
                ['Content-Type']: 'application/json',
                ['charset']: 'utf-8',
                ['Authorization'] : `Bearer ${localStorage.getItem('token')}`,
            },  
            }) 
            .then((response) => response.json())
            .then((data) => setProfilee(data.user))  
        }
        else {
            await fetch(`http://localhost:3000/auth/whoAmI`,  {
                method: 'GET',
                headers: {
                    ['Content-Type']: 'application/json',
                    ['charset']: 'utf-8',
                    ['Authorization'] : `Bearer ${localStorage.getItem('token')}`,
                },
                })
            .then((response) => response.json())
            .then((data) => setProfilee(data.user)) 
        }  
    }
    catch(e) {
        alert(e)
    }
}

function setProfilee(user) {
    document.getElementById('user_name_p').textContent = user.name
    document.getElementById('user_email_p').textContent = user.email
    document.getElementById('user_favorite_p').textContent = user.favorite_car
    document.getElementById('user_desc_p').textContent = user.favorite_car
}

async function getStates() {
    try {
        let params = (new URL(document.location)).searchParams
        console.log(params.get("email"))
        if(params.get("email")) {
        await fetch('http://localhost:3000/state?email=', {
            method: 'GET',
            headers: {
                ['Content-Type']: 'application/json',
                ['charset']: 'utf-8',
                ['Authorization'] : `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => response.json())
        .then((data) => {
            if(data.states){
            data.states.map((state) => {
                const div = document.createElement('div')
                div.className = 'list_item'
                div.innerHTML= `<img src="http://localhost:3000/img/driver.png" alt="state_logo" class="state_logo"/>
                                <div>
                                    <p class="state_title">${state.name}</p>
                                    <div class="block8"></div>
                                    <p class="state_text">${state.private ? 'Приватная статья' : 'Публичная статья'}</p>
                                    <div class="block8"></div>
                                    <p class="state_text">Автор: <span  class="state_value">${state.autor}</span></p>
                                </div>`
                document.getElementById('states_list').append(div)
            })
            } else {
                const div = document.createElement('div')
                div.innerHTML = '<h1>Статей нет</h1>'
                document.getElementById('states_list').append(div)
            }
        })
    }
}
    catch(e) {
        throw e
    }
}

getUserByEmail()
getStates()
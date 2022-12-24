
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

getUserByEmail()
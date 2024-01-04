export const baseUrl = 'http://localhost:8090/'


let tokenUpdateNew = false

export const getProducts = async () => {
    const response = await fetch(`${baseUrl}ads`)
    const data = await response.json()
    return data
}

export const registration = async (email, password ) => {
    return fetch(`${baseUrl}auth/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
}

export const authorization = async (email, password ) => {
        const response = await fetch(`${baseUrl}auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    const data = await response.json()
    return data
}


export const refreshToken = async () => {

    tokenUpdateNew = true
    const t = setTimeout(() => {
        tokenUpdateNew = false
        close(t)
    }, 30000);
 
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('refToken'));

    const response = await fetch(`${baseUrl}auth/login`, {
    method: 'PUT',
    headers: {
        "content-type": "application/json",
      },
    body: JSON.stringify({
        access_token: localStorage.getItem('token'),
        refresh_token: localStorage.getItem('refToken'),
        }),
    })
    if (response.status === 201) {
        const data = await response.json()
        console.log(data);
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('refToken', data.refresh_token)
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('refToken'));
        return data
    }
    if (response.status === 401) {
        return response
    }
    

}

export const getMyAdverts = async() => {
    console.log("getMyAdverts");
    if (!tokenUpdateNew) {
       await refreshToken()
    }
    const response = await fetch(`${baseUrl}ads/me`,{
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
    })

    const data = await response.json()
    return data
}

export const getMyData = async() => {
  
    if (!tokenUpdateNew) {
        await refreshToken()
     }
 
    const response = await fetch(`${baseUrl}user`,{
        headers: {
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
    })
    const data = await response.json()

    return data
}

export async function updateUser (name, surname, city, phone) {
    if (!tokenUpdateNew) {
        await refreshToken()
     }
    const response = await fetch(`${baseUrl}user`,{
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            "name": name,
            "surname": surname,
            "phone": phone,
            "city": city
          }),
    })
    
    const data = await response.json()
    return data
}
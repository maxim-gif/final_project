export const baseUrl = 'http://localhost:8090/'

let tokenUpdateNew = false

export const getProducts = async () => {
    const response = await fetch(`${baseUrl}ads`)
    const data = await response.json()
    return data
}

export const registration = async (email, password, name, surname, city) => {
    try {
        const response = await fetch(`${baseUrl}auth/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                surname: surname,
                city: city,
            }),
        })

        if (response.ok) {
            const data = await response.json()
            return { success: true, data: data }
        } else {
            const errorData = await response.json()
            return errorData
        }
    } catch (error) {
        return { success: false, status: 'NETWORK_ERROR', error: error.message }
    }
}

export const authorization = async (email, password) => {
    try {
        const response = await fetch(`${baseUrl}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            const errorData = await response.json()
            return errorData
        }
    } catch (error) {
        return { success: false, status: 'NETWORK_ERROR', error: error.message }
    }
}

export const refreshToken = async () => {
    tokenUpdateNew = true
    const t = setTimeout(() => {
        tokenUpdateNew = false
        clearTimeout(t)
    }, 30000)

    const response = await fetch(`${baseUrl}auth/login`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            access_token: localStorage.getItem('token'),
            refresh_token: localStorage.getItem('refToken'),
        }),
    })
    if (response.status === 201) {
        const data = await response.json()
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('refToken', data.refresh_token)
        return data
    }
    if (response.status === 401) {
        return response
    }
}

export const getMyAdverts = async () => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }
    const response = await fetch(`${baseUrl}ads/me`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
    })

    const data = await response.json()
    return data
}

export const getMyData = async () => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }

    const response = await fetch(`${baseUrl}user`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
    })
    const data = await response.json()

    return data
}

export async function updateUser(name, surname, city, phone) {
    if (!tokenUpdateNew) {
        await refreshToken()
    }
    const response = await fetch(`${baseUrl}user`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            phone: phone,
            city: city,
        }),
    })

    const data = await response.json()
    return data
}

export const createAdvert = async (name, description, price) => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }
    const response = await fetch(`${baseUrl}adstext`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            title: name,
            description: description,
            price: price,
        }),
    })

    const data = await response.json()
    return data
}

export const editAdvert = async (name, description, price, id) => {
    console.log(name, description, price)
    if (!tokenUpdateNew) {
        await refreshToken()
    }
    const response = await fetch(`${baseUrl}ads/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            title: name,
            description: description,
            price: price,
        }),
    })

    const data = await response.json()
    return data
}

export const deleteAdvert = async (id) => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }
    const response = await fetch(`${baseUrl}ads/` + id, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
    })

    const data = await response.json()
    return data
}

export const deleteImage = async (url, id) => {
    console.log(url, id)
    if (!tokenUpdateNew) {
        await refreshToken()
    }

    const fileUrlParam = encodeURIComponent(url)
    const response = await fetch(
        `${baseUrl}ads/${id}/image?file_url=${fileUrlParam}`,
        {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('refToken')}`,
            },
        },
    )

    const data = await response.json()
    return data
}

export const addImage = async (id, image) => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }

    const formData = new FormData()

    formData.append('file', image)

    const response = await fetch(`${baseUrl}ads/${id}/image`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: formData,
    })
    if (response.status === 201) {
        const data = await response.json()
        return data
    }
}

export const addAvatar = async (image) => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }

    const formData = new FormData()

    formData.append('file', image)

    const response = await fetch(`${baseUrl}user/avatar`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: formData,
    })

    const data = await response.json()
    return data
}

export const getReviews = async (id) => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }

    const response = await fetch(`${baseUrl}ads/${id}/comments`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
    })

    const data = await response.json()
    return data
}

export const addReviews = async (id, text) => {
    if (!tokenUpdateNew) {
        await refreshToken()
    }
    const response = await fetch(`${baseUrl}ads/${id}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('refToken')}`,
        },
        body: JSON.stringify({
            text: text,
        }),
    })

    const data = await response.json()
    return data
}

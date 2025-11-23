export const fetchUserById = async (user_id: string) => {
     try {
        const endpoint = `${import.meta.env.VITE_API_URL}/users/${user_id}`;
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // very important for cookies
        })

        const responseJson = await response.json();
        const user = responseJson.data;
        return user;
    } catch (error : any) {
        throw new Error(error.message);
     }
}


export const fetchClusterStat = async () => {
    try {
        const endpoint = `${import.meta.env.VITE_API_URL}/users/clusters`;
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        const responseJson = await response.json();
        return responseJson.data;
    } catch (error : any) {
        throw new Error(error.message);
    }
}

export const predictUser = async (user_id: string) => {
    try {
        const endpoint = `${import.meta.env.VITE_API_URL}/users/${user_id}/predict`;
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        const responseJson = await response.json();
        return responseJson.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
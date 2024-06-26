import axios from "axios";

async function addUserApi(data) {
    const { name, email, password } = data;
    
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/addUser`, {
            name,
            email,
            password,
        }, {
            withCredentials: true
        });


        console.log(response,"respone from teh server")

        return response;

    } catch (e) {
        console.error(e, "error in api function");
        return { error: e.message }; // Return error message
    }
}
export async function getAllHotelsApi() {
    
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/listAllHotels`, {
            method: 'GET',
            // credentials: 'include' // Include credentials (cookies) in the request
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();

        return res;

    } catch (e) {
        console.error(e, "error in api function");
        return { error: e.message }; // Return error message
    }
}
export async function getHotelsRecommendationsApi() {
    
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/listAllHotelInteractions`, {
            method: 'GET',
            // credentials: 'include' // Include credentials (cookies) in the request
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();

        return res;

    } catch (e) {
        console.error(e, "error in api function");
        return { error: e.message }; // Return error message
    }
}
export async function getHotelByIdApi(id) {
    
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/findHotelById/${id}`, {
            method: 'GET',
            // credentials: 'include' // Include credentials (cookies) in the request
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();

        return res;

    } catch (e) {
        return { error: e.message }; // Return error message
    }
}


export default addUserApi;
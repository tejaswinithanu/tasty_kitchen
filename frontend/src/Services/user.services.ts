import axios from 'axios'

let API_URL = 'http://localhost:3000'
class UserServices{
    constructor(){}

    async loginUser(data) {
        try {
            const response = await axios.post(`${API_URL}/login`, data);
            localStorage.setItem('token', response.data.token); 
            // Store the token
            
            console.log(response.data.token)
            return response.data.token; // Return user data or token
        } catch (error) {
            console.error('Error logging in:', error.response.data); // Log the error response
            throw error.response.data.message; // Rethrow error for component to handle
        }
    }

    async usersData(){
        try{
        let response = await axios.get(`${API_URL}/login`)
        return response.data
        }catch(e){
            throw e
        }
    }
}

let userServices = new UserServices()

module.exports = {
    userServices
}

import axios from 'axios'

let API_URL = 'http://localhost:8000'
class UserServices{
    

    async loginUser(data) {
        try {
            const response = await axios.post('http://localhost:8000/user/login', data);
            console.log(response.data)
            return response; // Return user data or token
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

export default userServices
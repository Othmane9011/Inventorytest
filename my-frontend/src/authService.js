import axios from 'axios';

const API_URL = 'http://localhost:4433'; // Replace with your Ory Kratos API URL

const register = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/self-service/registration`, {
            username,
            password,
        });
        if (response.status === 201) {
            return { success: true };
        } else {
            return { success: false, message: 'Failed to register' };
        }
    } catch (error) {
        console.error('Error registering:', error);
        return { success: false, message: 'Error registering' };
    }
};

export default {
    register,
};

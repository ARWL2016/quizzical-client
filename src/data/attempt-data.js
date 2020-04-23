import axios from 'axios';

async function checkQuizAnswers(payload) {
    try {
        const response = await axios.post(`http://localhost:3001/attempt`, payload);
        return response.data.data;

    } catch (error) {
        console.error(error);
    }
}

export {
    checkQuizAnswers
}
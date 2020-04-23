import axios from 'axios';

let lastResult;

async function checkQuizAnswers(payload) {
    try {
        const response = await axios.post(`http://localhost:3001/attempt`, payload);
        lastResult = response.data.data.result;

        return response.data.data.result;

    } catch (error) {
        console.error(error);
    }
}

function getLastResult() {
    return lastResult;
}

export {
    checkQuizAnswers, getLastResult
}
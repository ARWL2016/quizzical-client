import axios from 'axios';


async function getAttemptReport(id) {
    try {
        const response = await axios.get(`http://localhost:3001/attempt/${id}/report`);


        return response.data.data.report;

    } catch (error) {
        console.error(error);
    }
}

async function postAttempt(payload) {
    try {
        const response = await axios.post(`http://localhost:3001/attempt`, payload);

        return response.data.data.result;

    } catch (error) {
        console.error(error);
    }
}



export {
    postAttempt, getAttemptReport
}
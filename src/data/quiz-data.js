import axios from 'axios';

async function getAll() {
    try {
        const response = await axios.get(`http://localhost:3001/quiz`);
        return response.data.data.quizzes;

      } catch (error) {
        console.error(error);
      }
}

async function getQuizById(id) {
    try {
        const response = await axios.get(`http://localhost:3001/quiz/${id}`);
        return response.data.data.quiz;

      } catch (error) {
        console.error(error);
      }
}

async function getQuizQuestions(id) {
  try {
      const response = await axios.get(`http://localhost:3001/quiz/${id}/questions`);
      return response.data.data;

    } catch (error) {
      console.error(error);
    }
}



export {
    getAll, getQuizById, getQuizQuestions
}
import axios from 'axios';

const API_BASE_URL = 'https://6348cc5ea59874146b110e79.mockapi.io';

// Função para realizar uma requisição GET
export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Função para realizar uma requisição POST
export const createCourse = async (itemData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/courses`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

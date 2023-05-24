import axios from 'axios';

const API_BASE_URL = 'https://6348cc5ea59874146b110e79.mockapi.io';

// Função para realizar uma requisição GET
export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Função para realizar uma requisição POST
export const createCourse = async (courseData) => {
  try {
    const { title, description, instructor, createdAt, id } = courseData;
    const response = await axios.post(`${API_BASE_URL}/courses`, {
      title,
      description,
      instructor,
      createdAt,
      id
    });
    return response.data;
  } catch (error) {
    console.error('Error creating course:', error);
    throw error;
  }
};

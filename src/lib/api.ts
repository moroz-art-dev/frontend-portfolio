import axios, {AxiosError} from 'axios';

// Создаем экземпляр axios с базовым URL
const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/moroz-art-dev/materials/main',
});

// Функция для проверки, что данные могут быть сериализованы в JSON
const isValidJSON = (data: any): boolean => {
  try {
    JSON.stringify(data);
    return true;
  } catch (e) {
    return false;
  }
};

// Функция для получения сертификатов
export const fetchCertificates = async () => {
  try {
    const response = await api.get('/certificates/data.json');
    if (!isValidJSON(response.data)) {
      throw new Error('Invalid JSON format for certificates data');
    }
    return response.data;
  } catch (error) {
    throw handleError(error as AxiosError);
  }
};

// Функция для получения проектов
export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects/data.json');
    if (!isValidJSON(response.data)) {
      throw new Error('Invalid JSON format for projects data');
    }
    return response.data;
  } catch (error) {
    throw handleError(error as AxiosError);
  }
};

// Функция для получения скиллов
export const fetchSkills = async () => {
  try {
    const response = await api.get('/stack/data_v1.json');

    if (!isValidJSON(response.data)) {
      throw new Error('Invalid JSON format for skills data');
    }
    return response.data;
  } catch (error) {
    throw handleError(error as AxiosError);
  }
};

// Функция для обработки ошибок
const handleError = (error: AxiosError) => {
  // Логирование ошибки
  console.error('API Error:', error.message);
  // Создаем объект ошибки для проброса
  return new Error(error.message || 'An unknown error occurred');
};

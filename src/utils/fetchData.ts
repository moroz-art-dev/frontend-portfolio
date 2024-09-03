import axios, {AxiosError} from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/moroz-art-dev/materials/main',
});

const isValidJSON = (data: JSON): boolean => {
  try {
    JSON.stringify(data);
    return true;
  } catch {
    return false;
  }
};

const handleError = (error: AxiosError) => {
  let errorMessage = 'An unknown error occurred';

  if (error.response) {
    errorMessage = `Server responded with status ${error.response.status}: ${error.response.data}`;
  } else if (error.request) {
    errorMessage = 'No response received from server';
  } else {
    errorMessage = error.message;
  }

  console.error('API Error:', errorMessage);
  return new Error(errorMessage);
};

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await api.get(url);

    if (!isValidJSON(response.data)) {
      throw new Error('Invalid JSON format');
    }

    return response.data;
  } catch (error) {
    throw handleError(error as AxiosError);
  }
};

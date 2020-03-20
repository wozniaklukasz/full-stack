import axios from 'axios';

const client = axios.create({
  responseType: 'json'
});

// todo: services refactoring - add cache, create universal client
export const getCards = async () => {
  try {
    const response = await client.get('rest/cards');
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getCard = async (id: string) => {
  try {
    const response = await client.get(`rest/cards/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

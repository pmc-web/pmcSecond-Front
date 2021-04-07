import axios from 'axios';

export const getSomething = () => axios.get('/');

export const postSomething = (data: string) => axios.post('/', data);

import api from './axiosConfig';

export const getAllStades = () => api.get('/stades');
export const getStadeById = (id) => api.get(`/stades/${id}`);
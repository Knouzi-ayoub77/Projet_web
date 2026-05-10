import api from './axiosConfig';

export const getAllPitches = () => api.get('/football-pitch');
export const getPitchById = (id) => api.get(`/football-pitch/${id}`);
import api from './axiosConfig';

export const getOverpassData = (params) => api.get('/overpass', { params });
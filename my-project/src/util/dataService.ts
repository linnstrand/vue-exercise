import axios, { AxiosPromise } from 'axios';

export default class DataService {
	static getAll(url: string): AxiosPromise {
		return axios.get(`/api/${url}`);
	}
	static create(url: string, payload: any): AxiosPromise {
		return axios.post(`/api/${url}`, payload);
	}
	static edit(url: string, payload: any): AxiosPromise {
		return axios.put('api/equipment', payload);
	}

	static delete(url: string, id: string): AxiosPromise {
		return axios.post(`/api/${url}`, id);
	}
}

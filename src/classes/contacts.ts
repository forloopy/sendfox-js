export default class SendFox_Contacts {

	api: any;
	
	constructor(props: {
		api: any
	}) {
		this.api = props.api;
	}

	get = async (
		id: string
	): Promise <object> => {
		const res = await this.api.get(`/contacts/${id}`); 
		return await res.json();
	}

	getByEmail = async (
		email: string
	): Promise <object> => {
		const { buildQueryString } = await import('../utils/helpers');
		const queryString = buildQueryString({email});
		const res = await this.api.get(`/contacts?${queryString}`); 
		return await res.json();
	}

	getList = async (
		params: {
			page: string
		}
	): Promise <object> => {
		const { buildQueryString } = await import('../utils/helpers');
		const queryString = buildQueryString(params);
		const res = await this.api.get(`/contacts?${queryString}`);
		return await res.json();
	}

	unsubscribed = async (
	): Promise <object> => {
		const res = await this.api.get(`/contacts/unsubscribed`); 
		return await res.json();
	}

	create = async (
		params: {
			email: string,
			first_name?: string,
			last_name?: string,
			lists?: string[]
		}
	): Promise <object> => {
		const { buildQueryString } = await import('../utils/helpers');
		const queryString = buildQueryString(params);
		const res = await this.api.post(`/contacts?${queryString}`); 
		return await res.json();
	}

}
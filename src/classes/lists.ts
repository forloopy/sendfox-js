import SendFox_Lists_Contacts from './lists/contacts';

export default class SendFox_Lists {

	api: any;
	
	constructor(props: {
		api: any
	}) {
		this.api = props.api;
	}

	get = async (
		id: string
	): Promise <any> => {

		const res = await this.api.get(`/lists/${id}`); 
		const listData = await res.json();

		return {
            ...listData,
            getContacts: async (
			): Promise<any> => {
                const contacts = new SendFox_Lists_Contacts({api: this.api, list_id: id});
				return await contacts.get(id);
            },
			deleteContact: async (
				contact_id: string
			): Promise<any> => {
                const contacts = new SendFox_Lists_Contacts({api: this.api, list_id: id});
				return await contacts.delete({ list_id: id, contact_id });
            },
        };

	}

	getList = async (
	): Promise <object> => {
		const res = await this.api.get(`/lists`); 
		return await res.json();
	}

	create = async (
		props: {
			name: string,
		}
	): Promise <object> => {
		const { buildQueryString } = await import('../utils/helpers');
		const queryString = buildQueryString(props);
		const res = await this.api.post(`/lists?${queryString}`); 
		return await res.json();
	}

}
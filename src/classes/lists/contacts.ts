export default class SendFox_Lists_Contacts {

	api: any;
	list_id: string;
	
	constructor(props: {
		api: any,
		list_id: string,
	}) {
		this.api = props.api;
		this.list_id = props.list_id;
	}

	get = async (
		list_id: string
	): Promise <object> => {
		const res = await this.api.get(`/lists/${list_id}/contacts`); 
		return await res.json();
	}

	delete = async (
		params: {
			list_id: string,
			contact_id: string
		}
	): Promise <object> => {
		const res = await this.api.delete(`/lists/${params.list_id}/contacts/${params.contact_id}`); 
		return await res.json();
	}

}
export default class SendFox_Automations {

	api: any;
	
	constructor(props: {
		api: any
	}) {
		this.api = props.api;
	}

	get = async (
		id: string
	): Promise <object> => {
		const res = await this.api.get(`/automations/${id}`); 
		return await res.json();
	}

	getList = async (
		
	): Promise <object> => {
		const res = await this.api.get(`/automations`); 
		return await res.json();
	}

}
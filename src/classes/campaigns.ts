export default class SendFox_Campaigns {

	api: any;
	
	constructor(props: {
		api: any
	}) {
		this.api = props.api;
	}

	get = async (
		id: string
	): Promise <object> => {
		const res = await this.api.get(`/campaigns/${id}`); 
		return await res.json();
	}

	getList = async (
		
	): Promise <object> => {
		const res = await this.api.get(`/campaigns`); 
		return await res.json();
	}

}
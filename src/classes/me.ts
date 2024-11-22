export default class SendFox_Me {

	api: any;
	
	constructor(props: {
		api: any
	}) {
		this.api = props.api;
	}

	run = async (
	): Promise <object> => {
		const res = await this.api.get(`/me`); 
		return await res.json();
	}

}
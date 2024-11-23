export default class SendFox_Unsubscribe {

	api: any;
	
	constructor(props: {
		api: any
	}) {
		this.api = props.api;
	}

	run = async (
		email: string
	): Promise <object> => {
		const { buildQueryString } = await import('../utils/helpers.js');
		const queryString = buildQueryString({email});
		const res = await this.api.patch(`/unsubscribe?${queryString}`); 
		return await res.json();
	}

}
export default class SendFox_APIClient {
	
	baseUrl: string;
	accessToken: string;

	constructor(props: {
		accessToken: string
	}) {
		this.baseUrl = 'https://api.sendfox.com';
		this.accessToken = props.accessToken
	}

	get = async (
		url: string,
		body?: object
	): Promise <object> => {
		return await fetch(`${this.baseUrl}${url}`, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${this.accessToken}`
			},
		}); 	
	}

	post = async (
		url: string,
		body?: object
	): Promise <object> => {
		return await fetch(`${this.baseUrl}${url}`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${this.accessToken}`
			},
			body: JSON.stringify(body)
		}); 
	}

	patch = async (
		url: string,
		body?: object
	): Promise <object> => {
		return await fetch(`${this.baseUrl}${url}`, {
			method: "PATCH",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${this.accessToken}`
			},
			body: JSON.stringify(body)
		}); 
	}

	delete = async (
		url: string,
		body?: object
	): Promise <object> => {
		return await fetch(`${this.baseUrl}${url}`, {
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${this.accessToken}`
			},
		}); 
	}

}
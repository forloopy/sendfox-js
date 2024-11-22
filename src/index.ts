// Utils
import SendFox_APIClient from './utils/client';
// Classes
import SendFox_Me from './classes/me';
import SendFox_Lists from './classes/lists';
import SendFox_Contacts from './classes/contacts';
import SendFox_Campaigns from './classes/campaigns';
import SendFox_Automations from './classes/automations';
import SendFox_Unsubscribe from './classes/unsubscribe';

export default class SendFox {

	api: any;
	lists: any;
	contacts: any;
	campaigns: any;
    automations: any;

	constructor(props: {
		accessToken: string
	}) {
		this.api = new SendFox_APIClient({
			accessToken: props.accessToken
		});
		this.lists = new SendFox_Lists({api: this.api});
		this.contacts = new SendFox_Contacts({api: this.api});
		this.campaigns = new SendFox_Campaigns({api: this.api});
        this.automations = new SendFox_Automations({api: this.api});
	}

	me = async () => {
		const me = new SendFox_Me({api: this.api});
		return await me.run();
	}

	unsubscribe = async (
		email: string
	) => {
		const unsubscribe = new SendFox_Unsubscribe({api: this.api});
		return await unsubscribe.run(email);
	}

}
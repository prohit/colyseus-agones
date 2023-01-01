/**
 * IMPORTANT: 
 * ---------
 * Do not manually edit this file if you'd like to use Colyseus Arena
 * 
 * If you're self-hosting (without Arena), you can manually instantiate a
 * Colyseus Server as documented here: 👉 https://docs.colyseus.io/server/api/#constructor-options 
 */
import { listen } from "@colyseus/arena";

// Import arena config
import arenaConfig from "./arena.config";

const AgonesSDK = require('@google-cloud/agones-sdk');
const {setTimeout} = require('timers/promises');

const connect = async () => {
	let agonesSDK = new AgonesSDK();
	
	try {
		console.log(`Connecting to the Colyseus SDK server...`);		
		await agonesSDK.connect();
		console.log('...connected to Colyseus SDK server');
        await agonesSDK.ready();
        console.log('...Colyseus SDK server is ready');
		await agonesSDK.allocate();
		console.log('...Colyseus SDK server is allocated');
        listen(arenaConfig, 2558);
		
	} catch (error) {
		console.error("agoned sdk stopped");
		console.error(error);
		process.exit(0);
	}
};

connect();

// Create and listen on 2567 (or PORT environment variable.)
//listen(arenaConfig);
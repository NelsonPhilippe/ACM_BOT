import fs from "node:fs";

export default (client) => {
    client.handleEvents = async () => {

        const eventFiles = fs.readdirSync('./events').filter(e => e.endsWith('.js'));
        
        for(const file of eventFiles){
            const event = import('./events/' + file);
        
            if(event.once){
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
        }        
    }
}

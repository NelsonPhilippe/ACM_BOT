const {Command} = require('./Commands')
const { BaseInteraction } = require('discord.js');


exports.TicketCommand = class TicketCommand extends Command{

    constructor(){
        super('ticket', 'Commannd corresponding to support systeme', ['setup', 'set'])
        this.register_command()
    }

    /**
     * Event of command on discord tell this methods
     * @param {BaseInteraction} Event handler of commands event
     */
    event(interaction){
        
    }

}
const { commands } = require('./../discord_rest')



exports.Command = class Command {

    /**
     * 
     * @param {String} name Command name
     * @param {String} description Description of command
     * @param {Array} arg Argument for command
     */
    constructor(name, description, arg) {
        this.name = name;
        this.description = description;
        this.arg = arg;
    }

    register_command(){

        commands.push({
            name: this.name,
            description: this.description
        })
    }


}
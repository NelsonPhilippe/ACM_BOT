const { commands } = require('./../discord_rest')

exports.Command = class Command {

    constructor(name, description, options) {
        this.name = name;
        this.description = description;
        this.options = options;
    }

    register_command(){

        commands.push({
            name: this.name,
            description: this.description
        })
    }


}
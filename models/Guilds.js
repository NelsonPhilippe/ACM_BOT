import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize('sqlite::memory:')

export class Guild extends Model{}

export function init_guild() {
    Guild.init({

        guild_id : {
            type: DataTypes.STRING,
            allowNull: false
        },
        name : {
            type : DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Guild'
    })
    
    
    console.log(Guild === sequelize.models.Guild);
}
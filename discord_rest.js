const { REST, Routes, REST} = require('discord.js')

const commands = [
    {
        name : "ping",
        description: "Permet de vérifier le bon fonctionnement du bot discord"
    }
]

//918079618639077410

const rest = new REST({ version : 10 }).setToken('OTE4MTA1MDYyODYwMDA1Mzg2.YbCZ-A.U1FfmuBdwHDMCD6fAb6_aSiJ-po')


(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands('918079618639077410'), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
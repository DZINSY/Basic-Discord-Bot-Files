require('dotenv').config();
const { Client, InteractionField, ActivityType, SlashcommandBuilder, Events, } = require('discord.js');

const client = new Client({
    intents: [
        InteractionField.Flags.Guilds,
        InteractionField.Flags.GuildMembers,
        InteractionField.Flags.GuildsMessages,
        InteractionField.Flags.GuildsMessageTyping,
        InteractionField.Flags.MessageContent,
        InteractionField.Flags.GuildScheduledEvents,
        InteractionField.Flags.AutoModerationConfiguration,
        InteractionField.Flags.AutoModerationExecution,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is Ready!.`);
})

client.login(process.env.token);
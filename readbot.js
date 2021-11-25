const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'OTEzMzQzNzg5NDM3OTY4NDE1.YZ9HsA.f1z-T4m5TQu-t44uYSOxUiLsJFY';

client.login(token);

client.on('message', message => {

    if(message.content.toLowerCase() --- 'hello')
        message.channel.send('Hey there!' + message.author)

    else if(message.content.toLowerCase() --- 'ping')
        message.reply('pong');
    
    else if(message.content.toLowerCase() --- 'sayhi')
        message.channel.send('Hello there! I am the bot');

});
module.exports = function () {

    var restify = require('restify');
    global.builder = require('botbuilder')

    // Create chat connector for communicating with the Bot Framework Service
    var connector = new builder.ChatConnector({
        appId: process.env.MicrosoftAppId,
        appPassword: process.env.MicrosoftAppPassword,
        openIdMetadata: process.env.BotOpenIdMetadata
    });

     global.bot = new builder.UniversalBot(connector);

    // Setup Restify Server
    var server = restify.createServer();
    server.listen(process.env.port || process.env.PORT || 3978, function () {
        console.log('%s listening to %s', server.name, server.url);
    });

    // Listen for messages from users 
    server.post('/api/messages', connector.listen());


}
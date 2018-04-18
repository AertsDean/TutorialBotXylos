/*-----------------------------------------------------------------------------
A simple Language Understanding (LUIS) bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    openIdMetadata: process.env.BotOpenIdMetadata
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, 'DefaultEndpointsProtocol=https;AccountName=tutorialbotxylos8dc2;AccountKey=b5tdghAGneBjkoMsDD9+PQZNhIikUZS7AnBjJc/CwNqbbThRPGfvXMgAZttXcIvGGBLD6pJTSGLfdAZX600CvA==;');
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);


// Create your bot with a function to receive messages from the user
// This default message handler is invoked if the user's utterance doesn't
// match any intents handled by other dialogs.
bot = new builder.UniversalBot(connector, function (session, args) {
    session.beginDialog('Hello, I\'m an experimental bot built by Dean', session.userData.profile);
});

// bot.set('storage', tableStorage);

// Temporary local storage
var inMemoryStorage = new builder.MemoryBotStorage();
bot.set('storage', inMemoryStorage);

// LuisModelUrl, found in app settings on luis.ai
const LuisModelUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/646a964e-f456-4798-b86f-f527feccd4c9?subscription-key=dd7bc79c8ff743e89cf15b84ada60c5c&verbose=true&timezoneOffset=0&q=';

// Create a recognizer that gets intents from LUIS, and add it to the bot
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);

// Add a dialog for each intent that the LUIS app recognizes.
// See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-luis 
bot.dialog('HelpDialog',
    (session) => {
        session.send('You reached the Help intent. You said \'%s\'.', session.message.text);
        session.endDialog();
    }
).triggerAction({
    matches: 'Help'
})

bot.dialog('CancelDialog',
    (session) => {
        session.send('You reached the Cancel intent. You said \'%s\'.', session.message.text);
        session.endDialog();
    }
).triggerAction({
    matches: 'Cancel'
})


bot.dialog('Greetings', require('./dialogs/main/greetings')).triggerAction({ matches: 'Greeting' })
bot.dialog('Introduction', require('./dialogs/main/introduction'))
bot.dialog('EventBook', require('./dialogs/events/eventBook')).triggerAction({ matches: 'Events.Book' })



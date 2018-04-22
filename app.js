/*-----------------------------------------------------------------------------
A simple Language Understanding (LUIS) bot for the Microsoft Bot Framework.
Built by Dean Aerts to learn/experiment about the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

require('./Settings/connectorSetup.js')();
require('./Settings/storageConfig.js')();
require('./Services/LUIS')();
require('./Services/AzureSearch')();

// Add a dialog for each intent that the LUIS app recognizes.
// See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-luis 

// Entry point
bot.dialog('/', [
    function (session) {
        session.send('Welcome to my first bot');
    }
])

bot.dialog('Greetings', require('./Dialogs/Main/greetings')).triggerAction({ matches: 'Greeting' })
bot.dialog('Introduction', require('./Dialogs/Main/introduction'))
bot.dialog('Search', require('./Dialogs/Main/search')).triggerAction({ matches: 'Search' })
bot.dialog('AdaptiveCard', require('./Dialogs/Cards/adaptiveCard')).triggerAction({matches: [/adaptivecard/i]})
bot.dialog('BookEvent', require('./Dialogs/Events/bookEvent')).triggerAction({ matches: 'Events.Book' })
bot.dialog('ShowEvents', require('./Dialogs/Events/showEvents')).triggerAction({ matches: 'Events.Show' })

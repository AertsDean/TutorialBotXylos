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

bot.dialog('Greetings', require('./dialogs/main/greetings')).triggerAction({ matches: 'Greeting' })
bot.dialog('Introduction', require('./dialogs/main/introduction'))
bot.dialog('BookEvent', require('./dialogs/events/bookEvent')).triggerAction({ matches: 'Events.Book' })
bot.dialog('ShowEvents', require('./dialogs/events/showEvents')).triggerAction({ matches: 'Events.Show' })
bot.dialog('Search', require('./dialogs/main/search')).triggerAction({ matches: 'Search' })


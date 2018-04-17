var builder = require('botbuilder')

module.exports [
    function (session) {
        builder.Prompts.text(session, 'What is your name?')
    },
    function (session, results) {
        session.endDialogWithResult(results);
    } 
]
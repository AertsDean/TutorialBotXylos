var builder = require('botbuilder')

module.exports = [
    function (session, args, next) {
        session.dialogData.profile = args || {};
        if (!session.dialogData.profile.userName) {
            builder.Prompts.text(session, 'What is your name?');
        } else {
            next();
        }
    },
    function (session, results, next) {
        if (results.response) {
            session.dialogData.profile.userName = results.response;
        }
        if (!session.dialogData.profile.country) {
            builder.Prompts.text(session, 'Where do you live?');
        } else {
            next();
        }
    },
    function (session, results) {
        if (results.response) {
            session.dialogData.profile.country = results.response;
        }
        session.endDialogWithResult({ response: session.dialogData.profile });
    }
]
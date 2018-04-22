var builder = require('botbuilder')

module.exports = [
    function (session) {
        var card = new builder.SigninCard(session)
            .text('BotFramework Sign-in Card')
            .button('Sign-in', 'https://login.microsoftonline.com');
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg)
    }
]
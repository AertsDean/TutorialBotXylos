var builder = require('botbuilder')

module.exports = [
    function (session) {
        var card = new builder.AnimationCard(session)
            .title('Xylos Animation Card')
            .subtitle('Xylos')
            .media([
                { url: 'https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif' }
            ]);
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg)
    }
]
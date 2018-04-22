var builder = require('botbuilder')

module.exports = [
    function (session) {
        var card = new builder.VideoCard(session)
            .title('Xylos Video Card')
            .media([
                { url: 'https://www.youtube.com/watch?v=rIadl7H7AjU' }
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://www.xylos.com/', 'Bezoek site')
            ]);
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg)
    }
]
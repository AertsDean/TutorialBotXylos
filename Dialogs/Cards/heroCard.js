var builder = require('botbuilder')

module.exports = [
    function (session) {
        var card = new builder.HeroCard(session)
            .title('Xylos Hero Card')
            .subtitle('Xylos')
            .text('Ked ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.')
            .images([
                builder.CardImage.create(session, 'https://cdn1.bloovi.be/frontend/files/profiles/avatars/source/6579_xylos.png')
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://www.xylos.com', 'Ga naar Xylos')
            ]);
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg)
    }
]
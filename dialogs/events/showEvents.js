var builder = require('botbuilder')

module.exports = [
    function (session) {
        //session.send('you reached the showEvent intent');

        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel);
        msg.attachments([
            new builder.HeroCard(session).title('Football Game').subtitle('Champions League game').text('Bests seats for this awesome game, price: €75').images([
                builder.CardImage.create(session, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Shunsuke1_20080622.jpg/220px-Shunsuke1_20080622.jpg')
            ]),
            new builder.HeroCard(session).title('Concert').subtitle('Heavy metal concert').text('Cool seats for this amazing concert, price: €50').images([
                builder.CardImage.create(session, 'http://cdn.playbuzz.com/cdn/962eee6e-7ee7-4a43-97ab-458d4d9fcecf/97720155-3b4d-489c-9302-37b6a81c7f0f_560_420.jpg')
            ])
        ]);
        session.send(msg).endDialog();
    }
]
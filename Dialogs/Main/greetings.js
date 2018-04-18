module.exports = [
    function (session) {
        session.send('Greetings!');
        session.beginDialog('Introduction', session.userData.profile);
    },
    function (session, results) {
        session.user.profile = results.response;
        session.endDialog('Hello %s from %s!', session.userData.userName, session.userData.country);
    }
]
module.exports = [
    function (session, args) {
        session.dialogData.profile = args || {};
        session.beginDialog('Introduction', session.userData.profile);
    },
    function (session, results) {
        session.userData.profile = results.response;
        session.endDialog('Hello %s from %s!', session.userData.profile.userName, session.userData.profile.country);
    }
]
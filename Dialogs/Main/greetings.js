var builder = require('botbuilder');

module.exports = [
    function (session) {
        session.send('Hello, welcome to my first bot');
        session.beginDialog('askName');
    },
    function (session, results) {
        session.endDialog('Hello ${results.response}!')
    }
]
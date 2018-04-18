var builder = require('botbuilder');

module.exports = [
    function (session) {
        session.send('you reached the book events intent');
    }
]
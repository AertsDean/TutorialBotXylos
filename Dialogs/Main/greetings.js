module.exports = [
    function (session) {
        session.send('You reached the Greeting intent.')
        session.endDialog();
    }
]
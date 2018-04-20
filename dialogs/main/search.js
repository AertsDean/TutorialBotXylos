var searchLibrary = require('../../SearchDialogLibrary')

module.exports = [
    function (session) {
        // Start search
        searchLibrary.begin(session);
    },
    function (session, args) {
        // Process selected search results
        session.send('Here you go: %s', args.selection.map(function (i) { return i.title; }).join(', '));
        session.endDialog;
    }
]

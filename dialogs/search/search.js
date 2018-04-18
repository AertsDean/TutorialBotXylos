var SearchLibrary = require('../../SearchDialogLibrary');

module.exports = [
    function (session) {
        // Trigger Azure Search dialogs 
        SearchLibrary.begin(session);
    },
    function (session, args) {
        // Process selected search results
        session.send(
            'Search Completed!',
            args.selection.map()); // format your response 
    }
]
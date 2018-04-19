module.exports = function () {
    // Azure Search
    var SearchLibrary = require('../SearchDialogLibrary');
    var AzureSearch = require('../SearchProviders/azure-search');
    var util = require('util');

    var azureSearchClient = AzureSearch.create(process.env.AZURE_SEARCH_NAME, process.env.AZURE_SEARCH_KEY, process.env.INDEX_NAME);
    var ResultsMapper = SearchLibrary.defaultResultsMapper(ToSearchHit);

    // Register Search Dialogs Library with bot
    bot.library(SearchLibrary.create({
        multipleSelection: true,
        search: function (query) { return azureSearchClient.search(query).then(ResultsMapper); },
        refiners: ['region', 'city', 'type'], // customize your own refiners 
        refineFormatter: function (refiners) {
            return _.zipObject(
                refiners.map(function (r) { return 'By ' + _.capitalize(r); }),
                refiners);
        }
    }));

    function ToSearchHit(realstate) {
        return {
            key: realstate.listingId,
            title: util.format('%d bedroom, %d bath in %s, $%s',
                realstate.beds, realstate.baths, realstate.city, realstate.price.toFixed(2)),
            description: realstate.description,
            imageUrl: realstate.thumbnail
        };
    }
}
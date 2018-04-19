/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

module.exports = function () {

    var botbuilder_azure = require("botbuilder-azure");

    var tableName = 'botdata';
    var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']);
    var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);

    bot.set('storage', tableStorage);

    // Temporary local storage
    // var inMemoryStorage = new builder.MemoryBotStorage();
    // bot.set('storage', inMemoryStorage);
}
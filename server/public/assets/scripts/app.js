var Markit = {};
/**
 * Define the QuoteService.
 * First argument is symbol (string) for the quote. Examples: AAPL, MSFT, JNJ, GOOG.
 * Second argument is fCallback, a callback function executed onSuccess of API.
 */
Markit.QuoteService = function(stockSearch, results) {
    this.symbol = stockSearch;
    this.results = results;
    this.DATA_SRC = "https://dev.markitondemand.com/Api/v2/Quote/jsonp";
    this.makeRequest();
};
/**
 * Ajax success callback. fCallback is the 2nd argument in the QuoteService constructor.
 */
Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
    this.results(jsonResult);
};
/**
 * Ajax error callback
 */
Markit.QuoteService.prototype.handleError = function(jsonResult) {
    console.error(jsonResult);
};

Markit.QuoteService.prototype.makeRequest = function() {
    //Abort any open requests
    if (this.xhr) { this.xhr.abort(); }
    //Start a new request
    this.xhr = $.ajax({
        data: { symbol: this.symbol },
        url: this.DATA_SRC,
        dataType: "jsonp",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};

$(document).ready(function() {
    $(".submit").on("click", function () {
        $(".results").empty();
        var stockSearch = $("#stock_search").val();

        new Markit.QuoteService(stockSearch, function (jsonResult) {
            //Catch errors
            if (!jsonResult || jsonResult.Message) {
                $(".results").append("Error: ", jsonResult.Message);
                console.error("Error: ", jsonResult.Message);
                return;
            }
            console.log(jsonResult);
            $(".results").append("<p><b>Name:</b> " + jsonResult.Name + "</p> <p><b>Symbol:</b> " + jsonResult.Symbol + "</p><p><b>Last Price:</b> " + jsonResult.LastPrice + "</p><p><b>Change:</b> " + jsonResult.Change + "</p><br/><p class='small'>this api brought to you by: http://dev.markitondemand.com</p>").hide().fadeIn();
        });

        $("#stock_search").val('');
    });
});
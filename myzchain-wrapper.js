var rp = require('request-promise');
var querystring = require('querystring');

module.exports = function () {

    function getRequest(query) {
        var options = {
            method: 'GET',
            uri: 'https://api.zcha.in/v2/mainnet' + query,
            body: {},
            headers: { "Access-Control-Allow-Origin": "*"},
            json: true // Automatically stringifies the body to JSON
        };
        return rp(options);
    }

    return {
        network: function () {
            var query = '/network';
            return getRequest(query);
        },

        getBlocks: function (sort, direction, limit, offset) {
            var query = '/blocks?' + querystring.stringify({
                sort, direction, limit, offset
            }
            );
            return getRequest(query);
        },

        getBlock: function (hash) {
            var query = '/blocks/' + hash;
            return getRequest(query);
        },

        getTransactions: function (sort, direction, limit, offset) {
            var query = '/transactions?' + querystring.stringify({
                sort, direction, limit, offset
            });
            return getRequest(query);
        },

        getTransaction: function (hash) {
            var query = '/transactions/' + hash;
            return getRequest(query);
        },

        getAccounts: function (direction, limit, offset) {
            var query = '/accounts?' + querystring.stringify({
                direction, limit, offset
            });
            return getRequest(query);
        },

        getAccount: function (address) {
            var query = '/accounts/' + address;
            return getRequest(query);
        },

        getReceived: function (address, limit, offset) {
            var query = '/accounts/' + address + '/recv?' + querystring.stringify({
                limit, offset
            });
            return getRequest(query);
        },

        getSent: function (address, limit, offset) {
            var query = '/accounts/' + address + '/sent?' + querystring.stringify({
                limit, offset
            });
            return getRequest(query);
        }
    }
};
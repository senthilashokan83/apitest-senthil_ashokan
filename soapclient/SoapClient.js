const axios = require('axios');

function postRequest (wsdl, xml, callback) {

    var config = {
        headers: {'Content-Type': 'text/xml'}
    };

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    axios.post(wsdl, xml, config)
        .then(function (response) {
            //console.log(response.data);
            if(response.data != null) {
                callback(response.data);
            } else {
                console.log('Failed to get the response');
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

module.exports = {
    postRequest : postRequest
};

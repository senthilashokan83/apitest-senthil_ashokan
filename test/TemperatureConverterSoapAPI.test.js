var soap = require('../soapclient/SoapClient');
var xml = require('../markupbuilder/TemperatureConverterMarkupbuilder');

describe('SOAP API Test', () => {

    it('Temperature Converter SOAP API Test', function () {

        let requestXML = xml.TemperatureConverterMarkupBuilder();

        soap.postRequest('https://www.w3schools.com/xml/tempconvert.asmx', requestXML,function (results) {
            console.log('FahrenheitToCelsiusResponse   : ' + results);
        });
    });

});



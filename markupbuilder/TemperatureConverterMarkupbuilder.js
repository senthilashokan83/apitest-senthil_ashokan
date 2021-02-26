var builder = require('xmlbuilder');

module.exports.TemperatureConverterMarkupBuilder = function() {
        var obj = {
            'soapenv:Envelope': {
                '@xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
                '@xmlns:ns': 'https://www.w3schools.com/xml/',
                'soapenv:Header': {

                },
            'soapenv:Body': {
              'ns:FahrenheitToCelsius': {
                    'ns:Fahrenheit' :  75
                },
            },
        },
    };
           
          var xml = builder.create(obj).end({ pretty: true});
          console.log(xml);
          return xml;
}



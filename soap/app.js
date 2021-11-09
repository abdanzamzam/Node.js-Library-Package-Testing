const soap = require('soap');

const url = 'http://123.231.237.22/TPSOnlineServices/server.php?wsdl';
const args = {
     Username: 'INSW',
     Password: 'INSW123',
     Creator: 'Abdan',
     fStream: {
          NPWP_DEPO: '',
          DOCUMENT_NO: '',
          CUSTOMS_DOCUMENT_ID: '1',
          TRANSACTIONS_TYPE_ID: '1',
          DOCUMENT_SHIPPING_DATE: '',
          DOCUMENT_DATE: '',
          DOCUMENT_SHIPPING_NO: '',
          CUST_ID_PPJK: '',
          TERMINAL_ID: 'KOJA'
     }
};

soap.createClient(url, function(err, client) {
     if (err) console.error(err);
     else {
          client.MAIN_GetDocumentCustomsNGen(args, function(err, response) {
               if (err) console.error(err);
               else {
                    console.log(response);
                    return response;
               }
          });
     }
});
const xml2js = require('xml2js');

// XML string to be parsed to JSON
const xml = `<?xml version="1.0" encoding="UTF-8" ?>
            <user id="1">
                <name>John Doe</name>
                <email>john.doe@example.com</email>
                <roles>
                    <role>Member</role>
                    <role>Admin</role>
                </roles>
                <admin>true</admin>
            </user>`;

// convert XML to JSON
xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {  // { mergeAttrs: true } is optional
    if(err) {
        throw err;
    }

    // `result` is a JavaScript object
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4);

    // log JSON string
    console.log(json);
});
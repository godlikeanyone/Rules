/**
 * @supported 82AC21D8
 */
var body = $response.body;

let obj = JSON.parse(body);
obj.valid = true;
obj.newlyAssociated = true;
body = JSON.stringify(obj);
$done({body});

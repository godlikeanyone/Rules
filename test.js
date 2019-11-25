/**
* @supported 82AC21D89933
*/
var body = $response.body;
let obj = JSON.parse(body);
obj
body = JSON.stringify(obj);
$done({body});

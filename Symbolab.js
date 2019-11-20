/**
 * @supported 82AC21D8
 */
var body = $response.body;
var url = $request.url;

const path1 = 'appleSubscriptionValidate';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.valid = true;
	obj.newlyAssociated = true;
	body = JSON.stringify(obj);  
 }

$done({body});

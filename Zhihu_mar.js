 /**
 * @supported 82AC21D8 13635BDB C59DB9FB
 */
let body = $response.body 
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
$done({body})

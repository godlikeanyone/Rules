/**
 * @supported 82AC21D89933
 */
let obj = JSON.parse($response.body);
obj = {"valid":true,"newlyAssociated":true,"expired":false};
$done({body: JSON.stringify(obj)});

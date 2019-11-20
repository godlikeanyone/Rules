/**
 * @supported 82AC21D89933
 */
let obj = JSON.parse($response.body);
obj = {"valid":true,"newlyAssociated": true};
$done({body: JSON.stringify(obj)});

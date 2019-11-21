/**
 * @supported 82AC21D89933
 */
let obj = JSON.parse($request.body);
obj.udid = "doeijd3-dnoi3-39029309dj3jd20";
obj.avatarStockChoice = 1;
obj.firstName = "AA";
$done({body: JSON.stringify(obj)});

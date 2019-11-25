/**
* @supported 82AC21D89933
*/
var body = $response.body;
let obj = JSON.parse(body);
obj.status["pro"] = true;
obj.status["proLevel"] = 2;
obj.permissions.features.showSteps["value"] = true;
obj.subscriptions.primarySubscription["nextBillingDate"] = "2020-11-22";
obj.subscriptions.primarySubscription.plan["name"] = "Pro";
obj.subscriptions.primarySubscription.plan["planType"] = "PRO";
body = JSON.stringify(obj);
$done({body});

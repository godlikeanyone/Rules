var body = $response.body;
var url = $request.url;
var myarray = obj.message.result.priority;
let obj = JSON.parse(body);
for (var p in myarray) {
    myarray[p].purchased = true;
  }
obj.message.result.unclocked = 1;
body = JSON.stringify(obj);
$done({body});

var body = $response.body;
var url = $request.url;
let obj = JSON.parse(body);
var myarray = obj.message.result.priority;
for (var p in myarray) {
    myarray[p].purchased = true;
  }
obj.message.result.unclocked = 1;
body = JSON.stringify(obj);
$done({body});

var body = $response.body;
let obj = JSON.parse(body);
for (i in obj.data.items) {
  if (i.card_type == "cm_v2") delete i;
}
body = JSON.stringify(obj);
$done({body});

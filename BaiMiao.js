var body = $response.body;
let obj = JSON.parse(body);
obj.value.recognize.remainNormal = -100;
obj.value.recognize.remainBatch = -100;
obj.value.recognize.remainTranslate = -100;
obj.value.recognize.recognizeTranslateAll = 1;
obj.value.vip = true;
body = JSON.stringify(obj);
$done({body});

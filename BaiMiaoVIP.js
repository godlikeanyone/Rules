var body = $response.body;
let obj = JSON.parse(body);
obj.value.defaultRecognize.defaultNormal = -100;
obj.value.defaultRecognize.defaultBatch = -100;
obj.value.defaultRecognize.defaultTranslate = -100;
obj.value.defaultRecognize.recognizeTranslateAll = 1;
body = JSON.stringify(obj);
$done({ body });

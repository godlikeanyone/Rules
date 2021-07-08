  
var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['free_trial'] = 0;
obj['result']['vip_type'] = '';
obj['result']['svip_expired_at'] = 0;
obj['result']['is_vip'] = false;
body = JSON['stringify'](obj);
$done({
    body
})

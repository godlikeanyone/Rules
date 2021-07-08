var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['free_trial'] = 4096483190;
obj['result']['vip_type'] = 's';
obj['result']['svip_expired_at'] = 4096483190;
obj['result']['is_vip'] = true;
body = JSON['stringify'](obj);
$done({
    body
})

var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['xy_vip_expire'] = 4096483190;
obj['result']['is_vip'] = true;
obj['result']['vip_expired_at'] = 4096483190;
obj['result']['is_xy_vip'] = true;
obj['result']['wt']['vip']['enabled'] = true;
obj['result']['wt']['vip']['expired_at'] = 4096483190;
body = JSON['stringify'](obj);
$done({
    body
})

var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['xy_vip_expire'] = 970844390;
obj['result']['is_vip'] = true;
obj['result']['vip_expired_at'] = 970844390;
obj['result']['is_xy_vip'] = true;
obj['result']['vip_type'] = "s";
body = JSON['stringify'](obj);
$done({
    body
})

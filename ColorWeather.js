var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['device_id'] = a8ac08d6-e7a1-11eb-ba80-0242ac130004
obj['result']['xy_vip_expire'] = 4096483190;
obj['result']['is_vip'] = true;
obj['result']['svip_expired_at'] = 4096483190;
obj['result']['is_xy_vip'] = true;
obj['result']['vip_type'] = 's';
body = JSON['stringify'](obj);
$done({
    body
})

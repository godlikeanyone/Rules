var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['xy_vip_expire'] = 4096483190;
obj['result']['is_vip'] = true;
obj['result']['svip_expired_at'] = 4096483190;
obj['result']['is_xy_vip'] = true;
obj['result']['vip_type'] = 's';
obj['result']['_id'] = 60e6afe150b4ce004fa8153d;
obj['result']['token'] = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNjBlNmFmZTE1MGI0Y2UwMDRmYTgxNTNkIiwic3ZpcF9leHBpcmVkX2F0IjoxNjI2MzQwODA2LjgyMjI4NywidmlwX2V4cGlyZWRfYXQiOjB9.vp_trBN5y7AWJg--32ZuAm5I13oO0UXj7AJZPeDDta4;
body = JSON['stringify'](obj);
$done({
    body
})

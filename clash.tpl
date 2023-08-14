{% if request.target == "clash" or request.target == "clashr" %}
port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
dns:
  enable: true
  ipv6: true
  nameserver:
    - 223.5.5.5
    - 223.6.6.6
  fake-ip-filter:
    - "dns.msftncsi.com"
    - "www.msftncsi.com"
    - "www.msftconnecttest.com"
{% endif %}

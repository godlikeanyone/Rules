{% if request.target == "clash" or request.target == "clashr" %}
port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
{% endif %}

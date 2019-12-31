const cookieName = 'V2EX'
const cookieKey = 'cookie_v2ex'
const cookieVal = $prefs.valueForKey(cookieKey)

function sign() {
  let url = {
    url: `https://www.v2ex.com/mission/daily`,
    method: 'GET',
    headers: {
      Cookie: cookieVal
    }
  }
  $task.fetch(url).then((response) => {
    let data = response.body
    if (data.indexOf('每日登录奖励已领取') >= 0) {
      let title = `${cookieName}`
      let subTitle = `签到结果: 签到跳过`
      let detail = `今天已经签过了`
      $notify(title, subTitle, detail)
    } else {
      let regex = /<input[^>]*\/mission\/daily\/redeem\?once=(\d+)[^>]*>/g
      for (const code of data.matchAll(regex)) {
        signMission(code[1])
      }
    }
  })
}

function signMission(code) {
  let url = {
    url: `https://www.v2ex.com/mission/daily/redeem?once=${code}`,
    method: 'GET',
    headers: { Cookie: cookieVal }
  }
  $task.fetch(url).then((response) => {
    let data = response.body
    if (data.indexOf('每日登录奖励已领取') >= 0) {
      let title = `${cookieName}`
      let subTitle = `签到结果: 签到成功`
      let detail = ``
      $notify(title, subTitle, detail)
    } else {
      let title = `${cookieName}`
      let subTitle = `签到结果: 签到失败`
      let detail = `详见日志`
      $notify(title, subTitle, detail)
    }
  })
}

sign({})

const cookieName = '网易云音乐'
const cookieKey = 'cookie_neteasemusic'
const cookieVal = JSESSIONID-WYYY=WIEneU2P80dt2RD3B659mMNic89IRJuEsdiIsCvYKueKNEwKOIcBRV73PJ6Rur5nHUbNVqdPXDau1d3q%2BS7eF%5CVt4Nqz9QI8KgIpBCB7wDFf4s9UucBJSDtP36TCfa%2FqzOfkdRbNyQ%2FjjR9VFrh9d5ERVo2h%2FXqVDXf7ZR6I6UOrNcaq%3A1577608524709; _iuqxldmzr_=32; MUSIC_U=4a93bc4a89403e9807cc5908aff670bb65abe33c1db6d1841ecbd1e57345ce618ec357f3011c150b11d1dbaf673a2a3dfe2897047e8106fb; __csrf=e46f2ea85bba17429657ac2db1299408; WM_NI=UeiVxFInYI%2BjWHoZm4ayu1Q%2BxizucM3hPY1aPvWqnP%2BzAV29X2Gyznj9XtCi10PcKyFXF6jGe7a8TCCFZ9eCgaOkKc0jFoj1Nr59JIfP%2FUaAuATZFcceO0Cz3tVdiCjFcGU%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eeb6bb21f7bd9aa8b75c98bc8aa2d55a978f8ebaf33eaa879a98f95d94bffecce82af0fea7c3b92a97bba7b7fb4e8bb297aaaa629598a1bbf040a3a7bbd2d421bcb7b696e247f1b8a0bab46b94aa9992ed5ce9a68fb7b1339cee899af966aae79895c263f3f0a084ca7386888ad7e94da7e9afd9d749819a96dae849a5bf818cca69f4b68a90e93b8eaefbdac943a690e1b6e44bb79f9cbbc569a1bb81d1c272f1ac9a85ec49aa9aada8d837e2a3; WM_TID=pZQEiajCGH9FQAFUAQd8vjV80NlSTtxC; _ntes_nnid=ee74644bca6a42103eba593dad179591,1577436450202; _ntes_nuid=ee74644bca6a42103eba593dad179591

const pc = `http://music.163.com/api/point/dailyTask?type=1`
const mobile = `http://music.163.com/api/point/dailyTask?type=0`

function sign() {
  let url = {
    url: null,
    headers: {
      Cookie: cookieVal
    }
  }

  let signinfo = {}

  url.url = pc
  $task.fetch(url).then((response) => {
    let data = response.body
    let result = JSON.parse(data)
    signinfo.pc = {
      title: `网易云音乐(PC)`,
      success: result.code == 200 || result.code == -2 ? true : false,
      skiped: result.code == -2 ? true : false,
      resultCode: result.code,
      resultMsg: result.msg
    }
    //console.log(`开始签到: ${signinfo.pc.title}, 编码: ${result.code}, 原因: ${result.msg}`)
  })

  url.url = mobile
  $task.fetch(url).then((response) => {
    let data = response.body
    let result = JSON.parse(data)
    signinfo.app = {
      title: `网易云音乐(APP)`,
      success: result.code == 200 || result.code == -2 ? true : false,
      skiped: result.code == -2 ? true : false,
      resultCode: result.code,
      resultMsg: result.msg
    }
    //console.log(`开始签到: ${signinfo.app.title}, 编码: ${result.code}, 原因: ${result.msg}`)
  })
  check(signinfo)
}

function check(signinfo, checkms = 0) {
  if (signinfo.pc && signinfo.app) {
    log(signinfo)
    $done({})
  } else {
    if (checkms > 5000) {
      $done({})
    } else {
      setTimeout(() => check(signinfo, checkms + 100), 100)
    }
  }
}

function log(signinfo) {
  let title = `${cookieName}`
  let subTitle = ``
  let detail = `今日共签: ${signinfo.signedCnt}, 本次成功: ${signinfo.successCnt}, 本次失败: ${signinfo.failedCnt}`

  if (signinfo.pc.success && signinfo.app.success) {
    subTitle = `签到结果: 全部成功`
    detail = `PC: ${signinfo.pc.success ? '成功' : '失败'}, APP: ${signinfo.app.success ? '成功' : '失败'}`
  } else if (!signinfo.pc.success && !signinfo.app.success) {
    subTitle = `签到结果: 全部失败`
    detail = `PC: ${signinfo.pc.success ? '成功' : '失败'}, APP: ${signinfo.app.success ? '成功' : '失败'}, 详见日志!`
  } else {
    subTitle = ``
    detail = `PC: ${signinfo.pc.success ? '成功' : '失败'}, APP: ${signinfo.app.success ? '成功' : '失败'}, 详见日志!`
  }
  $notify(title, subTitle, detail)
  $prefs.removeAllValues()
}

sign()

function getNowFormatDate() {
    var date = new Date()
    var seperator1 = "-"
    var seperator2 = ":"
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
        month = "0" + month
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds()
    return currentdate
}

module.exports = {
  formatTime: formatTime
}


function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

/* eslint-disable */
/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
    return /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{1,4}){1,3})$/.test(s)
  }
  
  /**
   * 手机号码
   * @param {*} s
   */
  export function isMobile (s) {
    return /^1[0-9]{10}$/.test(s)
  }
  
  /**
   * 电话号码
   * @param {*} s
   */
  export function isPhone (s) {
    const reg = /^[0-9]{1,16}$/
    return reg.test(s)
    // return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
  }
  
  /**
   * 6-16数字+字母密码
   * @param {*} s
   */
  export function isPwd (s) { // 请输入6-16位数字+字母+符号,至少一位大写字母和一位特殊字符的密码格式错误
    // (?=.*?[A-Z]) //至少有一位
    // (?![0-9]+$) //不全是数字
    return /^(?![0-9]+$)(?![a-zA-Z]+$)(?=.*?[A-Z])(?=.*[`~!@#$%^&*()_+<>?:"{},.\\/;'[\]]).{6,16}$/.test(s)
  }
  
  export function isSimplePwd (s) { // 请输入6-16位
    return /^[a-zA-Z0-9~!@#$%^&*()<>,.?\[\]{}]{6,16}$/.test(s)
  }
  
  /**
   * 不超过16位
   * @param {*} s
   */
  export function isMaxLen (s) {
    if(s.length < 17){
      return true
    }else{
      return false
    }
  }
  /**
   * URL地址
   * @param {*} s
   */
  export function isURL (s) {
    return /^http[s]?:\/\/.*/.test(s)
  }
  
  /**
   * 去左右空格
   * @param {*} s
   */
  export function trim (s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }
  
  /**
   * @param {string} url
   * @returns {Boolean}
   */
  export function validURL (url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
  }
  
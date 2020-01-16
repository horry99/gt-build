<template>
  <div>
    <div>
      <main>
        <div>
          <form>
            <input placeholder="请输入账号" />
            <input placeholder="请输入密码" type="password" />
            <button @click="submitHandle">登录</button>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { setToken } from '../../utils/auth'

import debounce from 'lodash/debounce'

export default {
  data() {
    return {}
  },
  methods: {
    submitHandle: debounce(
      function() {
        this.$http
          .post('/login', this.dataForm)
          .then(({ data: res }) => {
            setToken(res.content.token)
            this.$router.replace({ name: 'home' })
          })
          .catch(err => {
            console.log(err)
          })
      },
      1000,
      { leading: true, trailing: false }
    )
  }
}
</script>
<style lang="scss">
.mod-sys__submitBtn {
  width: 400px;
  height: 40px;
  border-radius: 4px;
  // background-color: rgba(129, 129, 129, 1);
  // color: rgba(255, 255, 255, 1);
  font-size: 16px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 1);
}

.login-btn {
  padding: 0;
}

.Show {
  display: block;
}

.inline {
  display: inline-block;
}

.Hide {
  display: none;
}

.mod-sys_param {
  text-align: left;
  color: #e51c23;
  line-height: 22px;
  margin-bottom: 5px;

  img {
    float: left;
  }
}
</style>

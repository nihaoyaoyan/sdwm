<template>
    <div class="register">
        <div class="register-main">
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
            <div class="register-main-li">
                <div class="register-main-li-name">账号</div>
                <el-input
                    placeholder="请输入邮箱"
                    prefix-icon="el-icon-user-solid"
                    v-model="loginForm.username"
                    value="value1"
                ></el-input>
            </div>
            <div class="register-main-li">
                <div class="register-main-li-password">密码</div>
                <el-input placeholder="请输入密码" prefix-icon="el-icon-edit-outline" v-model="loginForm.password"></el-input>
            </div>
            <div class="register-main-li center">
                <el-button size="small" v-on:click="isPercent" class="load" type="primary">登录</el-button>
            </div>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  name: "register",
  props: {
    msg: String
  },
  data() {
      const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
      const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
        loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      input1: "",
      input2: "",
      value1: "222"
    };
  },
  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
.register {
  width: 100%;
  min-height: 100%;
  display: block;
  background: #000;
  padding: 300px 0;
  box-sizing: border-box;
  .register-main {
    width: 400px;
    // height: 200px;
    border-radius: 5px;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    text-align: left;
  }
  .register-main-li-name {
    padding-bottom: 5px;
  }
  .register-main-li-password {
    padding-bottom: 5px;
  }
  .register-main-li {
    padding: 10px 0;
  }
  .center {
    text-align: center;
  }
  .load {
    width: 100px;
  }
}
</style>


<template>
  <div class="relative bg-gray-100 min-h-screen">
    <div class="flex justify-between md:justify-end items-center bg-white shadow-sm">
      <div class="container px-4 mx-auto py-4">
        <div class="flex items-center justify-between">
          <a href="/">
            <span class="text-2xl font-semibold text-teal-600">NeedJob</span>
          </a>
          <div>
            <a href="/" class="border-b-2 inline-flex items-center text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">
              <svg fill="none" viewBox="0 0 24 24" class="stroke-current w-5 h-5 -ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>返回首页</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex px-4 py-10 flex justify-center">
      <div class="max-w-lg w-full">
        <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block">
          <div class="p-8">
            <p class="mb-1 text-2xl md:text-3xl text-gray-700 font-bold leading-tight tracking-tight">用户注册</p>
            <p class="mb-6 text-base text-gray-600 leading-normal">
              <span>已有账号？</span>
              <a href="/auth/login" class="border-b-2 inline-flex text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">去登录</a>
            </p>
            <form action="#">
              <div class="mb-4">
                <label class="form-label block mb-1 font-semibold text-gray-700">选择类型</label>
                <label for="type_1" class="items-center mb-2 clearfix relative inline-flex mr-4 border-2 p-3 rounded-lg">
                  <input id="type_1" type="radio" name="type" class="check-custom" checked>
                  <span class="check-toggle flex-shrink-0 large"></span>
                  <div class="ml-4">
                    <div class="flex">
                      <div class="w-24">
                        <h5 class="text-gray-700">我要找工作</h5>
                      </div>
                    </div>
                  </div>
                </label>
                <label for="type_2" class="items-center mb-2 clearfix relative inline-flex mr-4 border-2 p-3 rounded-lg">
                  <input id="type_2" type="radio" name="type" class="check-custom">
                  <span class="check-toggle flex-shrink-0 large"></span>
                  <div class="ml-4">
                    <div class="flex">
                      <div class="w-24">
                        <h5 class="text-gray-700">我要招聘</h5>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div class="mb-4">
                <label for="name" class="form-label block mb-1 font-semibold text-gray-700">昵称</label>
                <div class="relative">
                  <input id="name" type="text" name="name" placeholder="输入昵称" class="px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600">
                </div>
              </div>
              <div class="mb-4">
                <label for="email" class="form-label block mb-1 font-semibold text-gray-700">邮箱地址</label>
                <div class="relative">
                  <input id="email" type="text" name="email" placeholder="输入邮箱地址" class="px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600">
                </div>
              </div>
              <div class="mb-4">
                <label for="password" class="form-label block mb-1 font-semibold text-gray-700">密码</label>
                <div class="relative">
                  <input id="password" type="password" name="password" placeholder="输入密码" class="px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600">
                </div>
              </div>
              <div class="mb-4">
                <label for="confirm_password" class="form-label block mb-1 font-semibold text-gray-700">重复密码</label>
                <div class="relative">
                  <input id="confirm_password" type="password" name="confirm_password" placeholder="输入重复密码" class="px-3 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600">
                </div>
              </div>
              <button type="submit" class="w-full inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-6 py-2 h-12 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white">立即注册</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthRegister'
  }
</script>

<style lang="scss" scoped>
  input[type=radio].check-custom {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;

    ~.check-toggle {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      border: 2px solid #969696;
      border-radius: 50%;
      cursor: pointer;
      box-sizing: border-box;
      &.large {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    &:hover~.check-toggle {
      border: 2px solid #4a4a4a;
    }
    &:checked~.check-toggle {
      border: 2px solid #047481;
      &:after {
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 50%;
        height: 50%;
        margin: auto;
        position: absolute;
        border-radius: 50%;
        background: #047481;
      }
    }
  }
</style>

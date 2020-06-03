<template>
  <div class="relative px-4 lg:px-6 md:py-16 lg:py-24 bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="absolute left-0 right-0 top-0 bg-white">
      <div class="container px-4 mx-auto py-6">
        <div class="flex items-center justify-between">
          <div>
            <a href="/" class="border-b-2 inline-flex items-center text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">
              <svg fill="none" viewBox="0 0 24 24" class="stroke-current w-5 h-5 -ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>返回首页</span>
            </a>
          </div>
          <div>
              <span>没有账号？</span>
              <a href="/auth/register" class="border-b-2 inline-flex text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">立即注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-md w-full">
      <div class="flex justify-center">
        <a href="/" class="mb-6">
          <span class="text-3xl font-semibold text-teal-600">NeedJob</span>
        </a>
      </div>
      <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block">
        <div class="p-8">
          <p class="mb-1 text-center text-xl md:text-2xl text-gray-700 font-bold leading-tight tracking-tight">欢迎登录</p>
          <p class="mb-6 text-center text-sm text-gray-600 leading-normal">请输入您的邮箱地址和密码</p>
          <form action="#">
            <div class="mb-4 relative">
              <input type="text" placeholder="邮箱地址" class="px-2 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none pl-12 border-2 focus:border-teal-600 focus:border-teal-600">
              <div class="absolute left-0 top-0 bottom-0 w-10 flex items-center ml-3 text-gray-400">
                <svg fill="none" class="stroke-current w-7 h-7" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <div class="mb-2 relative">
              <input type="password" placeholder="密码" class="px-2 py-2 h-12 leading-normal block w-full text-gray-800 bg-white rounded-lg text-left appearance-none outline-none pl-12 border-2 focus:border-teal-600 focus:border-teal-600">
              <div class="absolute left-0 top-0 bottom-0 w-10 flex items-center ml-3 text-gray-400">
                <svg fill="none" class="stroke-current w-7 h-7" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
            </div>
            <div class="flex justify-end">
              <a href="#" class="border-b-2 mb-4 text-sm inline-flex text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">忘记密码？</a>
            </div>
            <button type="submit" class="w-full inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-6 py-2 h-12 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthLogin',
  }
</script>

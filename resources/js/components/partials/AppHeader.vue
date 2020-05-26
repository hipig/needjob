<template>
  <div class="bg-white px-4 relative z-30" :class="{'shadow-sm': currentRouteName !== 'home'}">
    <div class="md:flex items-center justify-between mx-auto max-w-6xl">
      <div class="flex justify-between md:flex-none items-center">
        <a href="/" class="flex items-center py-2">
          <span class="text-2xl font-semibold text-indigo-600">NeedJob</span>
        </a>
        <div class="-mr-2 flex items-center md:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 transition duration-150 ease-in-out">
            <svg class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div class="hidden md:block">
        <a href="#" class="mr-6 py-6 inline-block font-medium hover:text-indigo-600 text-gray-600">职位</a>
        <a href="#" class="mr-6 py-6 inline-block font-medium hover:text-indigo-600 text-gray-600">技能标签</a>
        <a href="#" class="mr-6 py-6 inline-block font-medium hover:text-indigo-600 text-gray-600">公司</a>
        <a href="#" class="mr-6 py-6 inline-block font-medium hover:text-indigo-600 text-gray-600">关于我们</a>
      </div>
      <div class="hidden md:block">
        <a href="#" class="px-6 py-1 mr-1 inline-block font-medium text-gray-600 hover:text-indigo-600">登录</a>
        <a href="#" class="base-button inline-flex items-center justify-center font-medium focus:outline-none rounded-full px-6 py-1 border-2 border-indigo-600 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 text-white">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppHeader",
    data () {
      return {
        currentRouteName: '',
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.currentRouteName = route.name
        },
        immediate: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .menu-active {
    position: relative;
    &:after {
      bottom: 0;
      position: absolute;
      left: 0;
      right: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;
      content: "";
      height: 3px;
      width: 100%;
      border-radius: 1000px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background-color: #319795;
    }
  }
</style>

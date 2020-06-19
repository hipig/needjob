<template>
  <div class="flex-1">
    <div class="bg-white px-4 pt-6 pb-4 shadow-sm z-20 relative">
      <div class="max-w-6xl mx-auto">
        <a href="/jobs" class="border-b-2 mb-4 inline-flex items-center text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">
          <svg fill="none" viewBox="0 0 24 24" class="stroke-current w-5 h-5 -ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>职位列表</span>
        </a>
        <div class="md:flex -mx-4">
          <div class="md:w-2/3 px-4">
            <p class="inline-block mb-2 text-2xl md:text-3xl text-gray-700 font-bold leading-tight tracking-tight">线上活动策划/运营</p>
            <p class="mb-4 text-base text-gray-600 leading-normal">
              深圳欢悦科技有限公司
              <span class="mx-2 text-gray-400">•</span>
              <a href="#" class="border-b-2 inline-flex text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">{{ data.category.title }}</a>
            </p>
            <div class="md:flex justify-between mb-4">
              <div class="md:flex-1 flex items-center mb-2 md:mb-0">
                <svg fill="none" class="stroke-current w-6 h-6 mr-2 text-gray-400" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                </svg>
                <p class="text-gray-600 leading-normal">深圳</p>
              </div>
              <div class="md:flex-1 flex items-center mb-2 md:mb-0">
                <svg fill="none" class="stroke-current w-6 h-6 mr-2 text-gray-400" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-gray-600 leading-normal">10k-15k</p>
              </div>
              <div class="md:flex-1 flex items-center mb-2 md:mb-0">
                <svg fill="none" class="stroke-current w-6 h-6 mr-2 text-gray-400" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-gray-600 leading-normal">全职</p>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 px-4 flex md:flex-col mt-4 md:mt-0">
            <div class="flex-1 mr-4 md:mr-0">
              <button type="button" class="w-full md:w-64 mb-2 inline-flex items-center justify-center font-medium focus:outline-none rounded-full px-4 py-2 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white">投个简历</button>
              <button type="button" class="w-full md:w-64 inline-flex items-center justify-center font-medium focus:outline-none rounded-full px-4 py-2 border-2 border-gray-300 bg-gray-100 hover:text-teal-600 hover:border-teal-400 text-gray-500">收藏</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jobsShow",
    data () {
      return {
        data: {
          id: 3,
          title: '线上活动策划/运营',
          cover: 'https://jobsharbour.com/storage/company/Qg9zlF3WngGfqwxP5ZaX5KL1gkm9kmeU0FIkA6Vf.jpeg',
          category: {
            id: 3,
            title: '运营'
          },
          company: {
            id: 65,
            title: '深圳欢悦科技有限公司'
          },
          tags: ['游戏', '直播', '英文'],
          salary: '10k-15k',
          type: '全职',
          created_at: '6小时前'
        }
      }
    }
  }
</script>

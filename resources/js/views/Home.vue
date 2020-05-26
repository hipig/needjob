<template>
  <div>
    <div class="bg-white border-t md:border-0 border-gray-200 md:bg-white overflow-hidden px-4 relative z-20 md:pt-5">
      <div class="hidden">
        <div class="h-4 w-24 bg-teal-100 absolute left-0 top-0 mt-4 transform skew-x-0 -skew-y-20"></div>
        <div class="h-8 w-full bg-gray-100 absolute left-0 top-0 mt-10 transform skew-x-0 -skew-y-20"></div>
        <div class="h-4 w-10 bg-gray-100 absolute left-0 top-0 mt-20 transform skew-x-0 -skew-y-20"></div>
        <div class="-mb-10 h-16 w-32 bg-teal-200 absolute left-0 bottom-0 transform skew-x-0 -skew-y-20"></div>
        <div class="mb-4 h-12 w-32 bg-gray-100 absolute left-0 bottom-0 ml-10 transform skew-x-0 -skew-y-20"></div>
        <div class="-mb-16 h-20 w-32 bg-orange-200 absolute left-0 bottom-0 ml-16 transform skew-x-0 -skew-y-20"></div>
        <div class="h-10 w-10 bg-teal-400 absolute right-0 top-0 mt-16 mr-6 transform skew-x-0 -skew-y-20"></div>
        <div class="h-10 w-10 bg-teal-200 absolute right-0 top-0 mt-10 mr-10 transform skew-x-0 -skew-y-20"></div>
        <div class="mb-32 h-16 w-32 bg-teal-200 absolute right-0 bottom-0 transform skew-x-0 -skew-y-20"></div>
        <div class="mb-12 h-12 w-48 bg-gray-100 absolute right-0 bottom-0 ml-4 transform skew-x-0 -skew-y-20"></div>
        <div class="-mb-16 h-20 w-64 bg-orange-200 absolute right-0 bottom-0 ml-6 transform skew-x-0 -skew-y-20"></div>
      </div>
      <div class="hidden md:block absolute top-0 right-0 mt-6" style="height: 100%; width: 45%; background-color: rgb(238,248,244); border-top-left-radius: 150px;"></div>
      <div class="md:flex relative max-w-6xl mx-auto">
        <div class="lg:w-3/5 md:flex mx-auto">
          <div class="py-10 md:pt-16 mb:pb-32 text-center md:text-left">
            <p class="mb-1 text-teal-600 text-xl md:text-2xl text-base text-gray-600 leading-normal">想成为或寻找远程工作者？</p>
            <h1 class="mb-8 text-3xl md:text-5xl text-gray-700 leading-none font-bold tracking-tight">
              <span class="block">发现更多工作机会</span> 现在加入 NeedJob！
            </h1>
            <div class="mt-4 md:mt-0 w-64 md:w-auto mx-auto">
              <a href="#" class="block w-full md:w-auto mx-auto shadow-md inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-6 py-3 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white">我要找工作</a>
              <div class="mt-4 hidden md:block md:inline-block md:ml-4">
                <a href="#" class="block w-full md:w-auto shadow-md inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-6 py-3 border-2 border-white bg-white bg-white text-teal-600 hover:text-teal-800">我要招聘</a>
              </div>
            </div>
            <img src="@/assets/img/nj-banner.svg" alt="career" class="inline-block md:hidden mx-auto -mb-24 mt-8">
          </div>
        </div>
        <div class="lg:w-2/5 relative hidden md:block">
          <div class="md:hidden rounded-t-full" style="background: rgb(238, 248, 244);">
            <div class="mx-auto md:hidden text-center" style="width: 200px;">
              <lottie :options="lottieOptions" :width="200" :height="200"></lottie>
            </div>
          </div>
          <lottie :options="lottieOptions" :width="420" :height="420" class="mx-auto hidden md:block"></lottie>
        </div>
      </div>
    </div>

    <div class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="md:flex -mx-4">
          <div class="md:w-2/3 px-4">
            <div class="flex items-center mb-4 justify-between">
              <p class="text-xl md:text-2xl text-gray-700 font-bold leading-tight tracking-tight font-serif">推荐职位</p>
            </div>
            <job-item v-for="item in recommendJobs" :key="item.id" :detail="item"></job-item>
            <div class="text-center pt-5 pb-10">
              <a href="#" class="inline-flex items-center justify-center shadow hover:shadow-md font-medium focus:outline-none rounded-lg px-8 py-3 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white">更多推荐</a>
            </div>
          </div>
          <div class="md:w-1/3 px-4">
            <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mt-12 mb-5 relative px-5 py-5">
              <div class="flex justify-between items-center mb-4">
                <p class="leading-tight text-gray-700 tracking-tight text-xl font-semibold text-base text-gray-600 leading-normal">分类筛选</p>
              </div>
              <a href="#" class="px-4 py-1 rounded-full text-sm uppercase tracking-wide inline-block mr-2 mb-3 bg-teal-50 text-teal-600 hover:bg-teal-100">技术</a>
              <a href="#" class="px-4 py-1 rounded-full text-sm uppercase tracking-wide inline-block mr-2 mb-3 bg-teal-50 text-teal-600 hover:bg-teal-100">设计</a>
              <a href="#" class="px-4 py-1 rounded-full text-sm uppercase tracking-wide inline-block mr-2 mb-3 bg-teal-50 text-teal-600 hover:bg-teal-100">运营</a>
              <a href="#" class="px-4 py-1 rounded-full text-sm uppercase tracking-wide inline-block mr-2 mb-3 bg-teal-50 text-teal-600 hover:bg-teal-100">产品</a>
              <a href="#" class="px-4 py-1 rounded-full text-sm uppercase tracking-wide inline-block mr-2 mb-3 bg-teal-50 text-teal-600 hover:bg-teal-100">市场</a>
              <a href="#" class="px-4 py-1 rounded-full text-sm uppercase tracking-wide inline-block mr-2 mb-3 bg-teal-50 text-teal-600 hover:bg-teal-100">销售</a>
              <a href="#" class="px-4 py-1 rounded-full text-sm uppercase tracking-wide inline-block mr-2 mb-3 bg-teal-50 text-teal-600 hover:bg-teal-100">其他</a>
            </div>
            <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-5 relative bg-orange-100 px-5 py-5">
              <p class="mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold text-base text-gray-600 leading-normal">需要招聘？</p>
                <p class="mb-2 text-base text-gray-600 leading-normal">还在努力与求职者沟通？</p>
                <p class="mb-10 text-base text-gray-600 leading-normal">立即注册一个账户!</p>
              <a href="#" class="shadow bg-white hover:shadow-md text-gray-700 inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-4 py-2">加入我们</a>
                <div class="absolute right-0 bottom-0 -mb-4"><img src="@/assets/img/RegisterAccountMobile.png" width="200"></div>
            </div>
            <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-5 relative bg-teal-100 px-5 py-5">
              <p class="mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold text-base text-gray-600 leading-normal">广告投放</p>
              <p class="mb-10 pr-10 md:pr-8 text-base text-gray-600 leading-normal">与活跃，有影响力的远程工作者及企业建立联系。</p>
              <a href="#" class="shadow bg-white hover:shadow-md text-gray-700 inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-4 py-2">商务合作</a>
              <div class="absolute right-0 bottom-0 -mb-4"><img src="@/assets/img/SearchEngineMarketing.png" width="180"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="subscribe" class="bg-teal-800 px-4 pt-10 md:pt-16 border-b border-gray-200 relative">
      <div class="max-w-3xl mx-auto mb-10 z-10">
        <h2 class="md:text-center mb-4 text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">订阅职位周刊</h2>
        <p class="md:text-center mb-5 text-teal-300 md:text-lg">订阅我们的职位周刊，即可在收件箱中直接获取与工作，职业，公司等相关的信息。无论您是寻找全职，兼职还是实习机会，我们都能满足您的需求。保证没有垃圾邮件。</p>
      </div>
      <div
        class="shadow w-full rounded-lg bg-white overflow-hidden w-full block max-w-4xl mx-auto bg-white shadow-md z-10 relative -mb-20">
        <div class="px-8 py-6">
          <div class="md:flex -mx-2">
            <div class="flex-1 px-2">
              <div class="mb-4 md:mb-0">
                <label for="subscribe-name" class="form-label block mb-1 font-semibold text-gray-700">称呼</label>
                <div class="relative">
                  <input id="subscribe-name" type="text" placeholder="例如：王先生" class="px-2 py-2 h-12 leading-normal block w-full text-gray-800 bg-white font-sans rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600">
                </div>
              </div>
            </div>
            <div class="flex-1 px-2">
              <div class="mb-4 md:mb-0">
                <label for="subscribe-email" class="form-label block mb-1 font-semibold text-gray-700">邮箱地址</label>
                <div class="relative">
                  <input id="subscribe-email" type="email" placeholder="例如：123456@qq.com" class="px-2 py-2 h-12 leading-normal block w-full text-gray-800 bg-white font-sans rounded-lg text-left appearance-none outline-none border-2 focus:border-teal-600 focus:border-teal-600">
                </div>
              </div>
            </div>
            <div class="px-2">
              <div class="mb-1 hidden md:block">&nbsp;</div>
              <button class="shadow hover:shadow-md w-full md:w-auto inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-6 py-2 h-12 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white">
                职位订阅
              </button>
            </div>
          </div>
          <p class="md:w-2/3 text-xs mt-4 text-gray-500">订阅即表示您同意服务条款和隐私政策。并同意从 NeedJob 接收与产品相关的电子邮件，您可以随时取消订阅。</p>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="-mb-10 h-16 w-32 bg-teal-300 absolute left-0 transform skew-x-0 -skew-y-20" style="bottom: 55%;"></div>
        <div class="mb-8 h-12 w-48 bg-gray-100 absolute left-0 ml-10 transform skew-x-0 -skew-y-20" style="bottom: 55%;"></div>
        <div class="-mb-16 h-20 w-32 bg-orange-200 absolute left-0 ml-16 transform skew-x-0 -skew-y-20" style="bottom: 55%;"></div>
        <div class="mb-6 h-16 w-32 bg-teal-300 absolute right-0 transform skew-x-0 -skew-y-20" style="bottom: 10%;"></div>
        <div class="mb-8 h-12 w-48 bg-gray-100 absolute right-0 mr-10 transform skew-x-0 -skew-y-20" style="bottom: 10%;"></div>
        <div class="-mb-16 h-20 w-32 bg-orange-200 absolute right-0 mr-16 transform skew-x-0 -skew-y-20" style="bottom: 10%;"></div>
      </div>
    </div>
    <div class="h-24 bg-white"></div>
  </div>
</template>

<script>
  import animationData from "@/assets/lottie/banner.json"
  import JobItem from "@/components/jobs/Item"

  export default {
    name: "Home",
    components: {
      JobItem
    },
    data() {
      return {
        lottieOptions: {
          animationData,
          loop: true,
          autoplay: true
        },
        recommendJobs: [
          {
            id: 1,
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
          },
          {
            id: 2,
            title: '区块链工程师 Rust 方向',
            cover: 'https://jobsharbour.com/storage/company/5V6YTLBK6JpcjIBPj9tzG6s7SOnl8JxMVFP0oUuT.png',
            category: {
              id: 1,
              title: '技术'
            },
            company: {
              id: 12,
              title: '猎币'
            },
            tags: ['Blockchain', 'Rust', 'Substrate'],
            salary: '10k-15k',
            type: '全职',
            created_at: '2020-05-01'
          },
          {
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
          },
          {
            id: 4,
            title: '区块链工程师 Rust 方向',
            cover: 'https://jobsharbour.com/storage/company/5V6YTLBK6JpcjIBPj9tzG6s7SOnl8JxMVFP0oUuT.png',
            category: {
              id: 1,
              title: '技术'
            },
            company: {
              id: 12,
              title: '猎币'
            },
            tags: ['Blockchain', 'Rust', 'Substrate'],
            salary: '10k-15k',
            type: '全职',
            created_at: '2020-05-01'
          },
          {
            id: 5,
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
          },
          {
            id: 6,
            title: '区块链工程师 Rust 方向',
            cover: 'https://jobsharbour.com/storage/company/5V6YTLBK6JpcjIBPj9tzG6s7SOnl8JxMVFP0oUuT.png',
            category: {
              id: 1,
              title: '技术'
            },
            company: {
              id: 12,
              title: '猎币'
            },
            tags: ['Blockchain', 'Rust', 'Substrate'],
            salary: '10k-15k',
            type: '全职',
            created_at: '2020-05-01'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>

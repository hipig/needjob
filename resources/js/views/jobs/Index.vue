<template>
  <div class="flex-1">
    <div class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="md:flex -mx-4">
          <div class="hidden md:block md:w-1/5 px-4">
            <div class="pt-2 pb-4">
              <div class="flex justify-between items-center w-full">
                <p class="mb-0 text-lg text-gray-700 font-semibold leading-normal">筛选</p>
                <button type="reset" class="bg-teal-100 hover:bg-teal-200 focus:outline-none focus:bg-teal-200 text-teal-600 px-2 text-sm rounded-full">清除筛选</button>
              </div>
              <hr class="mt-2 mb-5">
              <div class="mb-5">
                <p class="mb-2 text-gray-700 text-gray-500 text-xs font-bold tracking-wider uppercase">职位类型</p>
                <div>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="1" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">技术</span>
                      <span class="text-gray-600 ml-2">（20）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="2" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">设计</span>
                      <span class="text-gray-600 ml-2">（11）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">运营</span>
                      <span class="text-gray-600 ml-2">（4）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">产品</span>
                      <span class="text-gray-600 ml-2">（9）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">市场</span>
                      <span class="text-gray-600 ml-2">（1）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">销售</span>
                      <span class="text-gray-600 ml-2">（1）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">其他</span>
                      <span class="text-gray-600 ml-2">（23）</span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="mb-5">
                <p class="mb-2 text-gray-700 text-gray-500 text-xs font-bold tracking-wider uppercase">工作性质</p>
                <div>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="1" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">全职</span>
                      <span class="text-gray-600 ml-2">（7）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="2" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">兼职</span>
                      <span class="text-gray-600 ml-2">（3）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">实习</span>
                      <span class="text-gray-600 ml-2">（0）</span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="mb-5">
                <p class="mb-2 text-gray-700 text-gray-500 text-xs font-bold tracking-wider uppercase">薪资水平</p>
                <div>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="1" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">5k-15k</span>
                      <span class="text-gray-600 ml-2">（10）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="2" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">15k-25k</span>
                      <span class="text-gray-600 ml-2">（11）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">25k-35k</span>
                      <span class="text-gray-600 ml-2">（4）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">35k-45k</span>
                      <span class="text-gray-600 ml-2">（9）</span>
                    </div>
                  </label>
                  <label class="flex items-center mb-3 cursor-pointer">
                    <input type="checkbox" name="type" value="3" class="form-checkbox w-5 h-5">
                    <div class="ml-3 flex flex-1 items-center text-sm leading-none">
                      <span class="truncate text-left flex-1">45k+</span>
                      <span class="text-gray-600 ml-2">（1）</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-3/5 px-4">
            <div class="flex items-center mb-4">
              <input placeholder="搜索职位名称、分类、标签" class="px-4 py-2 leading-normal block w-full text-gray-800 bg-white text-left appearance-none outline-none rounded-lg border-2 focus:border-teal-600">
            </div>
            <div>
              <div class="mb-6">
                <job-item v-for="item in jobs" :key="item.id" :detail="item" :newest="item.is_new" :recommended="item.is_recommend"></job-item>
              </div>
              <div class="flex justify-center">
                <a href="#" class="h-6 w-6 p-4 mx-1 rounded-lg flex items-center justify-center border">‹‹</a>
                <a href="#" class="h-6 w-6 p-4 mx-1 rounded-lg flex items-center justify-center border">‹</a>
                <a href="#" class="h-6 w-6 p-4 mx-1 rounded-lg flex items-center justify-center border border-teal-600 bg-teal-600 text-white">1</a>
                <a href="#" class="h-6 w-6 p-4 mx-1 rounded-lg flex items-center justify-center border">›</a>
                <a href="#" class="h-6 w-6 p-4 mx-1 rounded-lg flex items-center justify-center border">››</a>
              </div>
            </div>
          </div>
          <div class="md:w-1/5 px-4 pt-5 md:pt-16">
            <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-5 relative bg-orange-100 px-5 py-5">
              <div class="p-2 inline-flex justify-center items-center bg-orange-200 text-orange-800 rounded-full mb-3">
                <svg fill="none" viewBox="0 0 24 24" class="stroke-current w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="mb-2 leading-tight text-gray-700 text-xl font-semibold text-base text-gray-600 leading-normal">需要招聘？</p>
              <p class="text-base text-gray-600 leading-normal">还在努力与求职者沟通？</p>
              <p class="mb-5 text-base text-gray-600 leading-normal">立即注册一个账户!</p>
              <a href="#" class="shadow bg-white hover:shadow-md text-gray-700 inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-4 py-2">加入我们</a>
            </div>
            <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-5 relative bg-teal-100 px-5 py-5">
              <div class="p-2 inline-flex justify-center items-center bg-teal-200 text-teal-800 rounded-full mb-3">
                <svg fill="none" viewBox="0 0 24 24" class="stroke-current w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <p class="mb-2 leading-tight text-gray-700 text-xl font-semibold text-base text-gray-600 leading-normal">广告投放</p>
              <p class="mb-5 text-base text-gray-600 leading-normal">与活跃，有影响力的远程工作者及企业建立联系。</p>
              <a href="#" class="shadow bg-white hover:shadow-md text-gray-700 inline-flex items-center justify-center font-medium focus:outline-none rounded-lg px-4 py-2">商务合作</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import JobItem from "@/components/jobs/Item"

  export default {
    name: "jobs",
    components: {
      JobItem
    },
    data () {
      return {
        jobs: [
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
            city: '深圳',
            salary: '10k-15k',
            type: '全职',
            created_at: '6小时前',
            is_new: true
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
            city: '深圳',
            type: '全职',
            created_at: '2020-05-01',
            is_recommend: true
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
            city: '广州',
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
            city: '成都',
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
            city: '长沙',
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
            city: '深圳',
            type: '全职',
            created_at: '2020-05-01'
          },
        ]
      }
    }
  }
</script>

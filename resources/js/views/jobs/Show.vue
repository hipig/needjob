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
                <p class="text-gray-600 leading-normal">全职</p>
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
                <p class="text-gray-600 leading-normal">2020-05-01</p>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 px-4 flex md:flex-col mt-4 md:mt-0">
            <div class="flex-1 mr-4 md:mr-0">
              <button type="button" class="w-full md:w-64 mb-2 inline-flex items-center justify-center font-medium focus:outline-none rounded-full px-4 py-2 border-2 border-teal-600 bg-teal-600 hover:bg-teal-700 hover:border-teal-700 text-white">投个简历</button>
              <button type="button" class="w-full md:w-64 inline-flex items-center justify-center font-medium focus:outline-none rounded-full px-4 py-2 border-2 border-gray-300 bg-gray-100 hover:border-teal-600 text-gray-500 group">
                <svg fill="none" viewBox="0 0 24 24" class="stroke-current w-6 h-6 mr-2 text-gray-400 group-hover:text-teal-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <span class="group-hover:text-teal-600">收藏</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="md:flex -mx-4">
          <div class="px-4 flex flex-col md:w-2/3">
            <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-10 pb-5 flex-1">
              <div class="px-8 py-6">
                <p class="mb-1 text-lg text-gray-700 font-semibold leading-normal">Job Description</p>
                <div class="mb-4">
                  <p><strong>Required Knowledge, Skills, and Abilities</strong></p>
                  <p><span style="color: rgb(88, 99, 104);">Our team is seeking an experienced front-end developer with a background in PHP, Laravel, HTML, CSS, vue, tailwind and Javascript. The right candidate will have a strong understanding of front-end frameworks.</span></p>
                  <p><br></p>
                  <p><span style="color: rgb(88, 99, 104);">As a front-end developer, you’ll join our team of designers and engineers to help scope, build, test, and launch new features &amp; products. We’re seeking candidates with strong front-end opinions, attention to detail, and the desire to take ownership of the user experience.</span></p>
                  <p><br></p>
                  <p><strong>Education + Experience</strong></p>
                  <ul>
                    <li>Experience with Git workflows, HTML, CSS, Vue</li>
                    <li>Front-end framework like Tailwind</li>
                    <li>Familiarity with Laravel</li>
                    <li>Ability and willingness to learn, adapt to, and teach new technologies.</li>
                    <li>Self-starter, you’re the kind of person that sees opportunity and tackles it!</li>
                  </ul>
                </div>
                <p class="mb-1 text-lg text-gray-700 font-semibold leading-normal">Skills</p>
                <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold inline-block mr-2 bg-teal-100 text-teal-500 border-2 border-teal-200">laravel</span>
                <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold inline-block mr-2 bg-teal-100 text-teal-500 border-2 border-teal-200">vue</span>
                <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold inline-block mr-2 bg-teal-100 text-teal-500 border-2 border-teal-200">tailwind</span>
                <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold inline-block mr-2 bg-teal-100 text-teal-500 border-2 border-teal-200">css</span>
                <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold inline-block mr-2 bg-teal-100 text-teal-500 border-2 border-teal-200">react</span>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 flex flex-col">
            <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-10 flex-1">
              <div class="px-8 py-6">
                <p class="mb-4 text-lg text-gray-700 font-semibold leading-normal">关于 深圳欢悦科技有限公司</p>
                <div class="mb-4 flex-shrink-0 flex items-center w-24 h-24 p-2 rounded-lg bg-gray-100 border-2 block mx-auto overflow-hidden">
                  <img src="https://jobsharbour.com/storage/company/5V6YTLBK6JpcjIBPj9tzG6s7SOnl8JxMVFP0oUuT.png" alt="company-logo" class="object-contain w-full h-full">
                </div>
                <p class="text-base text-gray-600 leading-normal">
                  Sumato is one of the leading providers of full-service B2B solutions, operating business decision making. Our research and forecasts help customers make more effective critical decisions, increasing revenues, saving costs, improving sustainability and reducing risk. Our expert team is on hand 24x7 to deliver the highest-quality analysis and support.
                </p>
                <div class="my-5">
                  <div class="py-2 md:flex-1 flex items-center border-b border-gray-100 justify-between">
                    <p class="text-gray-500 text-xs font-bold tracking-wider uppercase">分类</p>
                    <p class="text-sm text-gray-600 leading-normal">服装/纺织/皮革</p>
                  </div>
                  <div class="py-2 md:flex-1 flex items-center border-b border-gray-100 justify-between">
                    <p class="text-gray-500 text-xs font-bold tracking-wider uppercase">公司规模</p>
                    <p class="text-sm text-gray-600 leading-normal">0-25</p>
                  </div>
                  <div class="py-2 md:flex-1 flex items-center border-b border-gray-100 justify-between">
                    <p class="text-gray-500 text-xs font-bold tracking-wider uppercase">官方网站</p>
                    <a href="https://sumato.global" target="_blank" class="small text-teal-500 hover:text-teal-800">https://sumato.global</a>
                  </div>
                </div>
                <p class="mb-1 text-lg text-gray-700 font-semibold leading-normal">工作福利</p>
                <p class="text-gray-600 leading-normal">免费午餐，灵活假期</p>
              </div>
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

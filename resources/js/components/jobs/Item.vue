<template>
  <div class="shadow w-full rounded-lg bg-white overflow-hidden w-full block mb-4 relative">
    <div class="px-8 py-6">
      <div class="bg-red-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2" v-if="newest">新</div>
      <div class="bg-orange-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2" v-if="recommended">荐</div>
      <div class="flex">
        <a :href="'/companies/'+detail.company.id" class="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-lg bg-gray-100 block mr-5 overflow-hidden border p-1">
          <img :src="detail.cover" alt="Company Logo" class="object-contain w-full h-full rounded-lg">
        </a>
        <div class="flex-1">
          <div class="md:flex mb-4">
            <div class="flex-1">
              <div class="mb-1 pr-3">
                <a :href="'/jobs/'+detail.id" class="inline-block text-lg text-gray-700 font-semibold leading-normal">{{ detail.title }}</a>
              </div>
              <p class="mb-1 font-semibold inline-block text-sm text-gray-600 leading-normal">{{ detail.company.title }}</p>
              <p class="mb-1 inline-block md:block leading-normal">{{ detail.category.title }}</p>
            </div>
            <div class="md:w-48 flex-col justify-between mt-1">
              <div class="mb-1 md:flex-1 flex items-center">
                <svg fill="none" class="stroke-current w-6 h-6 mr-2 text-gray-400" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                </svg>
                <p class="text-sm text-gray-600 leading-normal">{{ detail.city }}</p>
              </div>
              <div class="mb-1 md:flex-1 flex items-center">
                <svg fill="none" class="stroke-current w-6 h-6 mr-2 text-gray-400" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-sm text-gray-600 leading-normal">{{ detail.salary }}</p>
              </div>
              <div class="mb-1 md:flex-1 flex items-center">
                <svg fill="none" class="stroke-current w-6 h-6 mr-2 text-gray-400" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-sm text-gray-600 leading-normal">{{ detail.type }}</p>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-600 leading-normal">{{ detail.created_at }}</p>
            <a :href="'/jobs/'+detail.id" class="border-b-2 text-sm inline-flex text-teal-600 border-teal-200 hover:text-teal-700 hover:border-teal-400">查看详情</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "JobItem",
    props: {
      detail: {
        type: Object,
        default: () => {}
      },
      newest: {
        type: Boolean,
        default: false
      },
      recommended: {
        type: Boolean,
        default: false
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>

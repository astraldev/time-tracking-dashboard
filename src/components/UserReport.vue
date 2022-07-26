<template>
  <div class="report-for">
    <div class="content">
      <div class="report-for-image">
        <img src="/image-jeremy.png" alt="" />
      </div>
      <div class="flex flex-col self-center lg:mb-auto">
        <span class="text-pale-blue">Report for</span>
        <span class="text-2xl text-white md:text-5xl inline font-light" >Jeremy Robson</span>
      </div>
    </div>
    <ul class="flex items-center lg:flex-col gap-y-4 flex-row justify-between">
      <li :class="`${timeline == 0 ? 'active' : ''}`" @click="$emit('timeline-changed', 0)">Daily</li>
      <li :class="`${timeline == 1 ? 'active' : ''}`" @click="$emit('timeline-changed', 1)">Weekly</li>
      <li :class="`${timeline == 2 ? 'active' : ''}`" @click="$emit('timeline-changed', 2)">Monthly</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['timeline'],
  emits: ['timeline-changed']
};
</script>
<style scoped>
.report-for {
  @apply rounded-2xl lg:max-w-[17rem] lg:h-full overflow-hidden flex flex-col bg-dark-blue;
}
.report-for > * {
  @apply px-6 md:px-x-spacing py-y-spacing;
}
.report-for > ul > li {
  @apply text-desaturated-blue hover:text-white lg:w-full cursor-pointer;
}
.report-for > ul > li.active {
  @apply text-white;
}
.report-for > .content {
  @apply py-8 rounded-2xl text-white bg-blue-primary
         flex lg:flex-col lg:items-start gap-x-5 lg:h-3/4 lg:gap-y-10 
         items-center;
}
.report-for-image {
  @apply h-16 lg:h-20 w-16 lg:w-20 flex-shrink-0 rounded-full border-white border-2;
}

</style>
<template>
  <div class="card">
    <div :class="`h-16 pb-4 -mb-4 bg-${getColor()} flex justify-end`">
      <img class="h-full" :src="`/${image}`" alt="">
    </div>
    <div class="content">
      <div class="flex justify-between items-center">
        <h3 class="text-white text-lg font-medium text-[18px]">{{cardData.title}}</h3>
        <Elipses class="text-pale-blue hover:text-white" />
      </div>
      <div class="flex flex-row md:flex-col md:items-start items-center justify-between">
        <h1 class="text-white text-4xl md:text-6xl font-light py-y-spacing">{{getTimeFrame()}}</h1>
        <span class="text-pale-blue">
          {{getPreviousTimeFrame()}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Elipses from "../assets/icons/icon-ellipsis.svg";
import { getCardColor } from '../utils/parseData'
export default {
  components: { Elipses },
  props: ['card-data', 'image', 'timeframe'],
  data(){
    return {
      timeline: [
        ['daily', 'Yesterday'],
        ['weekly', 'Last Week'],
        ['monthly', "Last Month"]
      ]
    } 
  },
  mounted(){},
  methods: {
    getTimeFrame(){
      let current_time = this.cardData.timeframes[this.timeline[this.timeframe][0]].current
      return `${current_time}hrs`
    },
    getPreviousTimeFrame(){
      let previous_time = this.cardData.timeframes[this.timeline[this.timeframe][0]].previous
      return `${this.timeline[this.timeframe][1]} - ${previous_time}hrs`
      
    },
    getColor(){
      return getCardColor(this.image)
    }
  }
};
</script>
<style scoped >
.card {
  @apply rounded-2xl overflow-hidden md:w-[18rem] lg:w-auto flex flex-col h-full;
}

.card > .content {
  @apply px-x-spacing flex flex-col py-y-spacing hover:bg-desaturated-blue rounded-2xl bg-dark-blue;
}
</style>
<template>
  <div class="md:grid grid-rows-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 flex gap-4 flex-col w-11/12 md:w-auto m-4 px-2 md:flex-row">
    <UserReport class="col-span-1 row-span-1" @timeline-changed="timelineChanged" :timeline="current_timeline_index"/>
    <div class="grid md:grid-rows-3 lg:col-span-3 md:row-span-3 lg:row-span-1 lg:grid-rows-2 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-rows-6 grid-cols-1">
      <Cards v-for="(data, index) in DashBoardData" :key="index" :card-data="data" :image="data.img"
        :timeframe="current_timeline_index" />
    </div>
  </div>
</template>
<script>
import UserReport from "./components/UserReport.vue";
import Cards from "./components/Cards.vue";
import DATA from './data.json'
import { parser } from "./utils/parseData";

export default {
  components: { Cards, UserReport },
  data(){
    return {
      current_timeline_index: 1,
      DashBoardData: parser(DATA)
    }
  },
  methods: {
    timelineChanged(timeline){
      this.current_timeline_index = timeline
    }
  }
}
</script>
<style scoped>
</style>

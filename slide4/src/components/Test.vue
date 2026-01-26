<template lang="">
  <div>
      <button v-on:click="this.ahihi = !ahihi" v-html="ahihi? 'show' : 'hide'">  </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ahihi: true
    }
  },

}
</script>
<style lang="">
  
</style>
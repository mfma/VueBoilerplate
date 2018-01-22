<!--suppress JSUnusedGlobalSymbols, JSUnresolvedVariable -->
<template>
  <div class="ma-recommend-page">

  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        data: state => state.recommend.data
      })
    },
    beforeCreate () {
      this.$store.dispatch('getData').then(() => {
        console.log('=========加载完成===========');
      });
    },
    created () {
    },
    mounted () {
    },
    beforeUpdate () {
    },
    updated () {
    },
    activated () {
    },
    deactivated () {
    },
    beforeDestroy () {
    },
    destroyed () {
    },
    errorCaptured () {
    },
    methods: {}
  }
  ;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<!--suppress JSUnusedGlobalSymbols -->
<template>
  <div class="ma-recommend-page">
    <p id="test">
      {{test1}}
    </p>
    <div>{{mmf}}</div>
    <p>
      ################
    </p>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        test1: '1'
      };
    },
    computed: {
      ...mapState({
        mmf: state => state.recommend.mmf
      }),
      ...mapGetters({
        msg: 'getRecommend'
      })
    },
    beforeCreate () {
      console.log('mmf111');
      this.$store.dispatch('getData').then(() => {
        this.test1 = '987654321';
      });
    },
    created () {
      console.log('mmf222===', this.$store.state.recommend);

      console.log('mmf333===', this.$store.recommend);
    },
    mounted () {
      console.log('mmf444===', this.$store.state);
    },
    beforeUpdate () {
      console.log('mmf555===', this.$store.state);
    },
    updated () {
      console.log('mmf666===', this.$store.state);
    },
    activated () {
      console.log('mmf777===', this.$store.state);
    },
    deactivated () {
      console.log('mmf888===', this.$store.state);
    },
    beforeDestroy () {
      console.log('mmf999===', this.$store.state);
    },
    destroyed () {
      console.log('mmf1010===', this.$store.state);
    },
    errorCaptured () {
      console.log('mmf1111===', this.$store.state);
    },
    methods: {}
  }
  ;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

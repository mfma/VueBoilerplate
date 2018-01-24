<template>
  <div id="app">
    <MaHeader/>
    <Container/>
    <MaFooter/>
  </div>
</template>

<script>
  import MaHeader from 'components/header/Header';
  import Container from 'components/page/Container';
  import MaFooter from 'components/Footer';

  export default {
    name: 'app',
    components: {
      MaHeader,
      Container,
      MaFooter
    }
  };
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
    padding: 44px 0 44px 0;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>

<template>
    <div id="app">
        <Header></Header>
        <Container></Container>
    </div>
</template>

<script>
  import Header from 'components/header/Header';
  import Container from 'components/page/Container';

  export default {
    name: 'app',
    components: {
      Header,
      Container
    }
  };
</script>

<style>
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        width: 100%;
        height: 100%;
    }
</style>

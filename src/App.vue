<template>
<div>
  <section class="todoapp">
    <Header />
    <Todos />
    <Footer />
  </section>
  <Info />
</div>
</template>

<script>
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import Info from './components/Info/Info'

export default {
  name: 'App',
  components: {
    Footer,
    Todos,
    Header,
    Info,
  },
};
</script>

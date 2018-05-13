<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h1>coucou</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: {
    articles: {
      get() {
        return this.$store.getters['article/all'];
      },
    },
  },
  // computed: mapState(['articles']),
  components: {},
  mounted() {
    return this.$store.dispatch('article/getAll');
  },
};
</script>

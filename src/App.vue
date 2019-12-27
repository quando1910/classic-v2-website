<template>
  <div id="bg">
    <loading v-if="loading" />
    <div class="page-wraper">
      <header-nav v-if="recommendNews.length !== 0" :news="recommendNews"/>
      <router-view :key="$route.path"/>
      <footer-nav/>
    </div>
    <button class="scroltop fa fa-chevron-up" ></button>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/layout/Loading.vue'
import HeaderNav from '@/components/layout/Header.vue'
import FooterNav from '@/components/layout/Footer.vue'

export default {
  components: {
    Loading,
    HeaderNav,
    FooterNav
  },
  data () {
    return {
      loading: true,
      recommendNews: []
    }
  },
  created () {
    this.$http.forkJoin([
      this.$http.get(['api', 'index_article'], { kind: 0 }), // Costumes
      this.$http.get(['api', 'index_article'], { kind: 1 }), // Posing
      this.$http.get(['api', 'index_article'], { kind: 2 }) // Ideas
    ]).then(res => {
      this.recommendNews = res.map(x => x.slice(0, 4))
    })
  },
  mounted () {
    setTimeout(() => { this.loading = false }, 1000)
  }
}
</script>

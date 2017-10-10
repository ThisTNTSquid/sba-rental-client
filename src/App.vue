<template lang="pug">
  v-app(light='')
    main-navigation
    main-toolbar
    main
      v-content
        v-container(fluid='')
          v-slide-y-transition(mode='out-in')
            router-view
          //- //? The layout is defined each page
          //- v-layout(column='', align-center='')
            
    main-footer

</template>

<script>
import mainNavigation from './components/MainNavigation.vue'
import mainToolbar from './components/MainToolbar.vue'
import mainFooter from './components/MainFooter'
  export default {
    components:{
      mainNavigation,
      mainToolbar,
      mainFooter
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

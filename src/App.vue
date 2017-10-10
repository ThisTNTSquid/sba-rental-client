<template>
  <v-app light>
    <main-navigation></main-navigation>
    <main-toolbar></main-toolbar>
    
    
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <img src="/static/v.png" alt="Vuetify.js" class="mb-5">
              <blockquote>
                &#8220;First, solve the problem. Then, write the code.&#8221;
                <footer>
                  <small>
                    <em>&mdash;John Johnson</em>
                  </small>
                </footer>
              </blockquote>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <main-footer></main-footer>
  </v-app>
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

<template lang="pug">
  v-container(fluid style="min-height: 0;" grid-list-lg)
    v-layout(row wrap)
      v-flex(md4 xs12 sm6 v-for="company in companies" :key="company.id" )
        v-card(color="grey lighten-5")
          v-card-media(:src="cardbg" height="55px")
          v-card-title(primary-title)
            div
              .headline {{company.name}}
              span.grey--text {{company.desc}}

          v-card-text
            v-list
              v-list-tile
                v-list-tile-action
                  v-icon phone
                v-list-tile-content
                  span {{company.tel_no}}
              v-list-tile
                v-list-tile-action
                  v-icon public
                v-list-tile-content
                  span(v-if="company.business_reg_no") {{company.business_reg_no}}
                  span(v-else) N/A
              v-list-tile
                v-list-tile-action
                  v-icon all_inclusive
                v-list-tile-content
                  span(v-if="cr_no") {{cr_no}}
                  span(v-else) N/A
          v-card-action
            v-btn(flat color="red darken-3") Delete
            v-btn(flat color="cyan darken-3") Edit
      
      v-snackbar(timeout="2000" top v-model="notify") Data Loaded
        v-btn(flat color="pink" @click.native="notify=false") Close



    v-btn(@click="refreshTest(); anotify()") Refresh
</template>
<script>
import axios from 'axios'
import config from '../config/config'

export default {
  data() {
    return {
      companies: [],
      notify: false
    }
  },
  computed: {
    cardbg(bgnum){
      return require('../assets/cardbg1.jpg')
    }
  },
  methods: {
    refreshTest: async function() {
      let tmp = await axios(config.api.hostname + encodeURIComponent("select * from company"))
      this.companies = tmp.data
      console.log(this.companies)
    },
    anotify: function(){
      this.notify = true
    },
    formatphone(phone){
      return phone.substr(0, 4) + "-" + phone.substr(4, 8)
    }
    // getTest: function(){
    //   this.test=request.query('select * from company')
    // }
  },
  mounted() {
    this.refreshTest()
  }
}


</script>


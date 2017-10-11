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
            v-btn(flat color="cyan darken-3" @click="edit(company.id)") Edit
      
      v-snackbar(timeout="2000" top v-model="notify") Data Loaded
        v-btn(flat color="pink" @click.native="notify=false") Close

    v-dialog(v-model="dialog" persistent max-width="500px")    
      v-card
        v-card-title
          span.headline Define New Flat
        v-card-text
          v-container(grid-list-md='')
            //- span {{form.selectedFloor}}
            v-layout(wrap='')
              v-flex(xs12='')
                v-select(:items="form.floors" label="Floor" v-model="form.selectedFloor" bottom autocomplete required)
              v-flex(xs12='')
                v-text-field(label='Flat Number', required hint="64, 25, 155" persistent-hint mask="###")
              v-flex(xs12='', sm6='')
                v-select(label='Shop', required='', :items="shops" v-model="form.selectedShop")
              v-flex(xs12='', sm6='')
                v-select(label='Interests', multiple='', autocomplete='', chips='', :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']")
          small *indicates required field
        v-card-actions
          v-spacer
          v-btn(color='primary darken-1', flat='', @click.native='dialog = false') Close
          v-btn(color='primary darken-1', flat='', @click.native='dialog = false') Save

    v-btn(@click="refreshTest(); anotify()") Refresh
</template>
<script>
import axios from 'axios'
import config from '../config/config'

export default {
  data() {
    return {
      companies: [],
      notify: false,
      edit:{
        name: "",
        phone: "",
        br: "",
        cr: ""
      },
      dialog: false
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
    },
    // getTest: function(){
    //   this.test=request.query('select * from company')
    // }
    edit(a){

      console.log(this.companies[a-1])
    }
  },
  mounted() {
    this.refreshTest()
  }
}


</script>


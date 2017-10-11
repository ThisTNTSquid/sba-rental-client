<template lang="pug">
  div
    v-card(v-for="company in companies" :key="company.id")
      v-card-text {{company.id}} {{company.name}}
    button(@click="refreshTest") Refresh
</template>
<script>
import axios from 'axios'
import config from '../config/config'

export default {
  data() {
    return {
      companies: []
    }
  },
  computed: {

  },
  methods: {
    refreshTest: async function() {
      let tmp = await axios(config.api.hostname + encodeURIComponent("select * from company"))
      this.companies = tmp.data
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


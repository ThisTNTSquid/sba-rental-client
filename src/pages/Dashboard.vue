<template lang="pug">
div
  // The 3 boxes
  v-container(grid-list-lg fluid style='min-height:0;')
    v-layout(row wrap)
      v-flex()
        v-card(color="blue-grey darken-1").white--text.mb-3
          v-layout(row wrap)
            v-flex(xs7)
              v-card-title(primary-title)
                div.headline Rented Shops
            v-flex
              v-progress-circular(:size="80",:width="10",:value="shopPercent" color="cyan lighten-4" rotate="180") {{shopsNo}}/{{maxShops}}
              
      v-flex()
        v-card(color="blue-grey darken-1").white--text.mb-3
          v-layout(row wrap)
            v-flex(xs7)
              v-card-title(primary-title)
                div.headline Tenants
            v-flex
              v-progress-circular(:size="80",:width="10",value="100" color="pink lighten-4" rotate="180") {{tenantsNo}}
      v-flex()
        v-card(color="blue-grey darken-1").white--text.mb-3
          v-layout(row wrap)
            v-flex(xs7)
              v-card-title(primary-title)
                div.headline Companies
            v-flex
              v-progress-circular(:size="80",:width="10",value="100" color="green lighten-4" rotate="180") {{companies}}
  
  // The noticeboard
  v-container(grid-list-md)
    v-card(xs12)
      v-card-text
        h5 Notice
        v-list(subheader two-line)
          v-subheader Recent Events
          template(v-for="msg in messages")
            v-list-tile(avatar @click="")
              v-list-tile-avatar
                v-icon(:color="getColor(msg.type)") {{getIcon(msg.type)}}
              v-list-tile-content
                v-list-tile-title {{msg.content}}
                v-list-tile-sub-title {{msg.time}}
            v-divider
    
  // The Floor panel
  v-container(grid-list-md)
    v-card
      v-card-text
        h5 Floors
        v-expansion-panel(expand=true)
          v-expansion-panel-content
            div(slot="header") G/F
            v-divider
            v-card
              v-card-text
                a(href="#")
                  v-chip(color="grey lighten-3" v-for="shop in shops.ground" :key="shop" ) {{shop}}
        v-expansion-panel(expand)
          v-expansion-panel-content
            div(slot="header") B1/F
            v-divider
            v-card
              v-card-text
                a(href="#")
                  v-chip(color="grey lighten-3" v-for="shop in shops.b1" :key="shop" ) {{shop}}
        v-expansion-panel(expand)
          v-expansion-panel-content
            div(slot="header") B2/F
            v-divider
            v-card
              v-card-text
                a(href="#")
                  v-chip(color="grey lighten-3" v-for="shop in shops.b2" :key="shop" ) {{shop}}
</template>
<script>
export default {
  data() {
    return {
      //todo again, make this dynamic
      shopsNo: 80,
      maxShops: 175,
      tenantsNo: 5,
      companies: 8,
      messages: [
        {
          type: 'announce',
          content: 'Rent will increate by 10% later',
          time: '12:08AM 10/11/2017'
        },
        {
          type: 'announce',
          content: 'This announcement is a really long message, it contains so many word, but the content just doesn\'t matter. As long as there are words, it would be completely fine',
          time: '12:08AM 10/11/2017'
        },
        {
          type: 'warning',
          content: 'Someone is not doing their job',
          time: '12:08AM 10/11/2017'
        },
        {
          type: 'error',
          content: 'Rubbish flood at B2, please get to there ASAP',
          time: '12:08AM 10/11/2017'
        },
      ],
      shops:{
        ground: ["hahaha","abcdefg","sjsjsjs","poitttjj","slslslss","alskdjlsakdjsd","sdlkjlkj","This shop name is so fking long gg","muahahahah"],
        b1: ["a","s","o","0"],
        b2: ["ccc","pppp","098098"]
      }
    }
  },
  computed: {
    shopPercent: function() {
      return this.shopsNo / this.maxShops * 100
    }


  },
  methods: {
    getColor: function(type) {

      if (type == 'error') {
        return "red"
      } else if (type == 'warning') {
        return "amber"
      } else if (type == 'announce') {
        return "primary"
      }

    },
    getIcon: function(type) {

      if (type == 'error') {
        return "error"
      } else if (type == 'warning') {
        return "warning"
      } else if (type == 'announce') {
        return "announcement"
      }

    }
  }
}
</script>
<style lang="stylus" scoped>
// .list__tile__sub-title, 
// .list__tile__title {
//     white-space: normal
// }
</style>


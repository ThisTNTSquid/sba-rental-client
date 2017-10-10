<template lang="pug">
v-container(grid-list-lg fluid style='min-height:0;')
  v-layout(row wrap)
    v-flex()
      v-card(color="blue-grey darken-1").white--text.mb-3
        v-layout(row wrap)
          v-flex(xs7)
            v-card-title(primary-title)
              div.headline Rented Shops
          v-flex
            v-progress-circular(:size="80",:width="10",:value="shopPercent" color="cyan lighten-4" rotate="180") {{shops}}/{{maxShops}}
            
    v-flex()
      v-card(color="blue-grey darken-1").white--text.mb-3
        v-layout(row wrap)
          v-flex(xs7)
            v-card-title(primary-title)
              div.headline Tenants
          v-flex
            v-progress-circular(:size="80",:width="10",value="100" color="pink lighten-4" rotate="180") {{tenants}}
    v-flex()
      v-card(color="blue-grey darken-1").white--text.mb-3
        v-layout(row wrap)
          v-flex(xs7)
            v-card-title(primary-title)
              div.headline Companies
          v-flex
            v-progress-circular(:size="80",:width="10",value="100" color="green lighten-4" rotate="180") {{companies}}
        
</template>
<script>
export default {
  data(){
    return{
      //todo again, make this dynamic
      shops: 80,
      maxShops: 175,
      tenants: 5,
      companies: 8
    }
  },
  computed:{
    shopPercent: function(){
      return this.shops/this.maxShops*100
    }
  },
  methods:{

  }
}
</script>
<style lang="stylus" scoped>
  .headline.number{
    font-size 30px
  }
</style>


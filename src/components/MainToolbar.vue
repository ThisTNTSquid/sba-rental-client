<template lang="pug">
v-toolbar(fixed='', app='', clipped-left)
  v-toolbar-side-icon(@click.stop='toggleDrawer()', light='')
  v-toolbar-title(v-text='title' )
  v-spacer
</template>
<script>
export default {
  data(){
    return{
      title: 'Rental Manager'
    }
  },
  methods:{
    toggleDrawer: function(){
      this.$store.commit('SIDEBAR', !this.$store.state.sidebar)
    }
  }
}
</script>


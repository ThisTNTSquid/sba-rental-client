<template lang="pug">
v-toolbar(fixed='', app='', clipped-left dark).cyan
  v-toolbar-side-icon(@click.stop='toggleDrawer()', dark)
  v-toolbar-title(v-text='title' )
  v-spacer
  v-toolbar-title FUCK OFF WONG KA FAI, USE
  v-btn(icon dark)
    v-icon fa-github
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


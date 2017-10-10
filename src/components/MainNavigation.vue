<template lang="pug">
div
  v-navigation-drawer(persistent='' clipped v-model='isActive', enable-resize-watcher, app ,)
    v-list
      v-list-tile(v-for='(item, i) in items', :key='i' exact :to="item.to")
        v-list-tile-action
          v-icon(light='', v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
  </template>
<script>
export default {
  data(){
    return{
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
        to: '/'
      }],
    }
  },
  computed:{
    isActive:{
      get(){
        return this.$store.state.sidebar
      },
      set(val) {
        this.$store.commit('SIDEBAR', val)
      }
    }
  }
}
</script>


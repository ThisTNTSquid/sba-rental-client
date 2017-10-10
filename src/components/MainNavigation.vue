<template lang="pug">
div
  v-navigation-drawer(persistent='' clipped v-model='isActive', enable-resize-watcher, app)
    v-list
      v-list-tile(avatar @click="" ripple)
        v-list-tile-avatar
          img(src='../assets/user.png') 
          // TODO: Make this back to use dynamic content
        v-list-tile-content
          v-list-tile-title(v-html='user.name')
          v-list-tile-sub-title(v-if="user.isAdmin") Administrator
        v-list-tile-action
          v-icon keyboard_arrow_down
    v-divider
    
    v-list
      v-subheader Overview
      v-list-tile(v-for='(item, i) in overviewItems', :key='i' exact :to="item.to" ripple)
        v-list-tile-action
          v-icon(light='', v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
    v-list
      v-subheader Management
      v-list-tile(v-for='(item, i) in managementItems', :key='i' exact :to="item.to" ripple)
        v-list-tile-action
          v-icon(light='', v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')

    v-list
      v-subheader Mall Controls
      v-list-tile(v-for='(item, i) in mallItems', :key='i' exact :to="item.to" ripple)
        v-list-tile-action
          v-icon(light='', v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
  </template>
<script>
import Ripple from 'vuetify'
export default {
  components:{
    Ripple
  },
  data() {
    return {
      user: {
        //TODO: Make this part dynamic
        avatar: '',
        name: 'Demo User',
        username: 'demo',
        isAdmin: true
      },
      overviewItems: [
        {
          icon: 'apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'business',
          title: 'Companies',
          to: '/company'
        },
        {
          icon: 'shop',
          title: 'Shops',
          to: '/shop'
        },
        {
          icon: 'fa-cube',
          title: 'Merchandise',
          to: '/merchandise'
        }
      ],
      managementItems: [
        {
          icon: 'people',
          title: 'Staffs',
          to: '/staff'
        },
        {
          icon: 'receipt',
          title: 'Payment Records',
          to: '/payment-records'
        },
        {
          icon: 'fa-certificate',
          title: 'Rental Agreements',
          to: '/agreement'
        }
      ],
      mallItems: [
        {
          icon: 'list',
          title: 'Floors',
          to: '/mall/floors'
        },
        {
          icon: 'accessibility',
          title: 'Give me a hug',
          to: '/thanks'
        }
      ]
    }
  },
  computed: {
    isActive: {
      get() {
        return this.$store.state.sidebar
      },
      set(val) {
        this.$store.commit('SIDEBAR', val)
      }
    }
  }
}
</script>


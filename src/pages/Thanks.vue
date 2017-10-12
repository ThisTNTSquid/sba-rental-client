<template lang="pug">
  v-container
    span Slide This bar to unlock more middle finger Linus Torvalds
    v-slider(v-model="show" max="20" thumb-label)
    img(v-for="(item, index) in show, N" src="https://media.giphy.com/media/xT1XGKNn3Ym2qKDPKE/giphy.gif")
</template>
<script>
export default {
  data() {
    return {
      show: 0
    }
  },
  methods: {

  }
}
</script>


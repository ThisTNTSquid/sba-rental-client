<template lang="pug">
  v-container(grid-list-lg fluid style='min-height:0;')
    v-card.elevation-1
      v-card-text(style="height: 300px")
        v-btn(color="pink" absolute bottom right fab @click.native.stop="dialog=true")
          v-icon(dark) add
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

</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      form: {
        floors: ["G","B1","B2"],
        // The following is the v-model parts
        selectedFloor: null,
        flatNumber: "",
        flatSize: "",
        selectedShop: ""
      }
    }
  },
  computed:{
    //TODO Unfinished logic
    shops: ()=>{
      return 
    } //SELECT id,name from SHOP
  },
  methods: {
    saveForm: function() {

    }
  }
}
</script>


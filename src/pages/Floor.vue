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
                    v-text-field(label='Flat Number', required hint="64, 25, 155" persistent-hint mask="###" v-model="form.flatNumber")
                  v-flex(xs12='', sm6='')
                    v-select(label='Shop', required='', :items="shops" item-text="name" item-value="id" v-model="form.selectedShop")
                  v-flex(xs12='', sm6='')
                    v-text-field(label='Flat Size', required hint="390, 350, 155" persistent-hint mask="####" v-model="form.flatSize")
              small *indicates required field
            v-card-actions
              v-spacer
              v-btn(color='primary darken-1', flat='', @click.native='dialog = false') Close
              v-btn(color='primary darken-1', flat='', @click.native='saveForm') Save

</template>
<script>
import config from '../config/config'
import axios from 'axios'

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
      },
      shops: "",
      floorList: ""
    }
  },
  computed:{
    //TODO Unfinished logic
    shops: ()=>{
      return 
    } //
  },
  methods: {
    saveForm: async function() {
      let q1 = await axios(config.api.hostname+encodeURIComponent("INSERT INTO `rental_manager`.`location` (`floor`, `flat`, `size`) VALUES ('"+this.form.selectedFloor+"', '"+this.form.flatNumber+"', '"+this.form.flatSize+"')"))
      console.log(q1)
      this.dialog=false
    },
    async getInfo(){
      let q1 = await axios(config.api.hostname + encodeURIComponent("SELECT id,name from SHOP"))
      this.shops=q1.data

      //TODO q1= await axios(config.api.hostname + encodeURIComponent(""))

    }
  },
  mounted(){
    this.getInfo()
  }
}
</script>


<template>
    <div>
        <v-container v-if="track && track.id">
            <v-row
            align="center"
            justify="center"> 
                <v-col  cols="6">
                  <v-img
                  :src="track.album.images[0].url"
                  >
                  </v-img>
                  <!-- <v-btn @click="selectTrack">
                      play 
                  </v-btn> -->
                  <h1 v-if="trackTitle">
                      {{ trackTitle }}
                  </h1>
                  <ul v-for="(v, k) in track ">
                      <li>
                         <p>{{ k }}:nbsp;</p> 
                         <span>{{ v }}</span>
                      </li>
                  </ul>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters} from 'vuex'
import trackMixin from '@/mixins/track'
   
    export default {
        mixins:[ trackMixin  ] ,
        components:{
        },
        computed:{
            ...mapState(['track']),
            ...mapGetters(['trackTitle'])
        },
        created(){
            const id = this.$route.params.id
            if(!this.track || !this.track.id || this.track.id !== id)
            {
                this.getTrackById({ id })
                .then(() => {
                    console.log('loaded')
                })
            }
        },

        methods:{
         
         ...mapActions(['getTrackById'])
               
        },



   
}
    
</script>

<style lang="scss" scoped>

</style>
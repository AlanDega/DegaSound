<template>
  <div>
    <pm-notification v-show="showNotification"  />
      <v-container app>
        <v-row>
          <v-col cols="12">
            <v-text-field
            @keyup.enter="search"
            v-model="searchQuery"
            outlined
            label="Busca tú música favorita aquí"
            clearable
            clear-icon="mdi-close-circle-outline"
            ></v-text-field>
            <v-row 
            justify="end"
            >
              <v-btn @click="search" dark="">Buscar</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    <pm-loader v-show="isLoading" />
    <v-container v-show="!isLoading">
      <v-row>
        <v-col 
        cols="4"
        v-for="t in tracks"
        >
        <PmTrack 
        v-blur="t.preview_url"
        :class="{'isActive': t.id === selectedTrack }"
         :track="t"
          @select="setSelectedTrack"> </PmTrack>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import trackService from '@/services/track'
import PmTrack from  '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'
import { setTimeout } from 'timers';

  export default {
    name: 'App',
    components:{
      PmTrack,
      PmLoader,
      PmNotification
    },
    data() {
      return {
        searchQuery:'',
        tracks:[],
        isLoading: false,
        selectedTrack:'',
        showNotification: false,
        
      }
    },
    methods:{
      search(){
        if(!this.searchQuery){return}
         this.isLoading = true
        trackService.search(this.searchQuery)
        .then(res => {
           this.showNotification = res.tracks.total === 0;
          this.tracks = res.tracks.items
          this.isLoading = false
        })
      },

      setSelectedTrack (id) {
           this.selectedTrack = id
      }
    },
    
    computed:{
      searchMessage(){
        return `encontrados: ${this.tracks.length}
        resultados`
      }
    },

    watch:{
      showNotification(){
        if (this.showNotification){ 
          setTimeout(() =>{
            this.showNotification = false
          },3000 )
      }
    }
  }
  } 
</script>

<style lang="scss" scoped>

.buttonSearch{
  margin-top: 10px;

  .isActive{
    border: 3px rgb(0, 38, 255) solid;
  }
}
</style>
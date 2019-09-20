<template>
    <div>
        <v-container v-if="track && track.album">
            <v-row
            align="center"
            justify="center">
                <v-col cols="6" align="center" justify="center">
                    <v-img
                    class="img" 
                    :src="track.album.images[0].url"
                    ></v-img>
                    <p> {{track.name }}</p>
                    <p>{{track.duration_ms | ms-to-mm }}</p>
                    <p><audio controls :src="track.preview_url"></audio></p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'

   export default{
       computed:{
           ...mapState(['track'])
       }
   }  
    
</script>

<style lang="scss" scoped>
 .img{
    height: 150px;
    width:124px;
    border-radius:3%;
}
</style>
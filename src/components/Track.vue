<template>
    <div>
        <v-card v-if="track && track.album">
            <v-img 
            :src="track.album.images[0].url" 
            height="200">
            </v-img>
            <v-card-title>
            {{track.name}}
            </v-card-title>
            <v-card-text>
            {{track.artists[0].name}}
            </v-card-text>
            <v-card-text>
            {{track.duration_ms | ms-to-mm  }}
            </v-card-text>
            <v-card-actions>
                    <v-btn @click="selectTrack">
                <v-icon large >
                    mdi-music
                </v-icon>
                </v-btn>
                <v-btn @click="goToTrack(track.id)">
                <v-icon large >
                    mdi-arrow-right-drop-circle
                </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import trackMixin from '@/mixins/track'
    export default {
        mixins: [ trackMixin ],
        props:{
            track: {
                type: Object, required: true
            }
        },
        methods:{
         goToTrack(id){
            if(!this.track.preview_url) {return}
             this.$router.push({name: 'track', params: { id } })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
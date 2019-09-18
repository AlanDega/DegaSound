<template>
    <div>
<v-toolbar
dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
>
    <v-toolbar-title>
        <v-img src="https://res.cloudinary.com/dhzled9ox/image/upload/v1568768131/logo_transparent_arbzig.png" height="80px" width="80px"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-item>
        <v-icon>
            mdi-export
        </v-icon>
    </v-toolbar-item>
    </v-toolbar
>
<PmPlayer/>
    </div>
</template>

<script>
import PmPlayer from '@/components/Player.vue'
    export default {
        components:{
            PmPlayer
        }
    }
</script>

<style lang="scss" scoped>

</style>
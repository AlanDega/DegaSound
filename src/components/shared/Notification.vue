<template>
    <div>
        <v-container>
            <v-row
            align="center"
            justify="center"
            class="noti1"
            >
            <v-alert color="blue" >
                <slot name="body" > Algo anduvo mal  </slot>
            </v-alert>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.noti1{
    margin-top: 20px;
}

</style>

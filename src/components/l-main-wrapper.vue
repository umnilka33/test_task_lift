<template>
    <div class="l-main-wrapper">
        <div class="lift-shaft">
            <l-lift />
        </div>
        <div class="floors">
            <l-floor 
                v-for="floor in FLOORS"
                :key="floor.floor_number"
                :floor_data="floor"
            />
        </div>
    </div>
</template>

<script>
import lLift from './l-lift'
import lFloor from './l-floor'
import {mapGetters} from 'vuex'

    export default {
        name: 'l-main-wrapper',
        components: {
            lLift,
            lFloor
        },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'FLOORS'
            ]),
        },
        methods: {},
        watch: {},
        mounted() {}
    }
</script>

<style lang="scss">
    .l-main-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: absolute;
        width: 500px;
        top: 50%;
        left: 50%;
        margin-top: -250px;
        margin-left: -250px;
    }
    .lift-shaft {
        background-color: $bg-color-shaft;
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-radius: $border-radius-shaft;
    }
    .floors {
        height: 500px;
        width: calc( 100% - 120px);
        display: flex;
        flex-direction: column;
    }
</style>
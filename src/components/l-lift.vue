<template>
    <div class="l-lift">
      <div class="l-lift__screen">
        <div class="l-lift__arrow">
          <img
            v-if="LIFT.direction === 'up'" 
            class="arrow-img" 
            src="../assets/arrows/arrow-up.svg">
            <img
            v-else 
            class="arrow-img" 
            src="../assets/arrows/arrow-down.svg">
        </div>
        <div class="l-lift__floor-num">{{LIFT.current_floor}}
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        name: "l-lift",
        components: {},
        props: {},
        computed: {
            ...mapGetters([
                'LIFT',
                'FLOOR_QUEUE'
            ]),
        }, 
        watch: {
          'FLOOR_QUEUE': function () {
            console.log('что то изменилось')
          }
        }
    }
</script>
<style lang="scss">
    .l-lift {
      background-color: $bg-color-lift;
      width: 100px; 
      height: 100px;
      position: relative;
      top: 400px;

      &__screen {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80px;
        height: 20px;
        margin: 10px;
        background-color: $bg-color-screen;
      }
      .arrow-img {
        width: 20px;
        height: 20px;
      }
      &__floor-num {
        font-size: $font-size-floor-number;
      }
    }

    
</style>
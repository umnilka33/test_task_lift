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
      <div class="l-lift__timer"></div>
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
        }
    }
</script>
<style lang="scss">
    .l-lift {
      background-color: $bg-color-lift;
      width: $size-lift; 
      height: $size-lift;
      position: relative;
      top: 400px;
      border-radius: $border-radius-lift;
      border: $border-lift;

      &__screen {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 60px;
        height: 20px;
        margin: 10px;
        background-color: $bg-color-screen;
        border-radius: $border-radius-lift;
      }
      .arrow-img {
        width: $size-arrow;
        height: $size-arrow;
      }
      &__floor-num {
        font-size: $font-size-lift-floor-number;
      }
      &__timer {
        display: flex;
        justify-content: center;
      }
    }
    .screen-active {
      background-color: $bg-color-screen-active;
    }
    
</style>
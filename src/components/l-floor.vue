<template>
    <div class="l-floor">
        <div class="l-floor__button">
            <div class="l-floor__floor-num">
                {{floor_data.floor_number}}
            </div>
            <div 
            class="elevator-btn-container"
            @click="setCurrentFloorInQueue">
                <img class="elevator-btn-img" src="../assets/buttons/elevator-btn.svg">
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: "l-floor",
        components: {},
        props: {
            floor_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            ...mapActions([
                'SET_FLOOR_IN_QUEUE',
                'SET_LIFT_DATA_CHANGES'
            ]),
            setCurrentFloorInQueue() {
                let floorQueue = this.$store.state.floor_queue;
                let currentFloor = this.floor_data.floor_number;
                if(!(floorQueue.indexOf(currentFloor) != -1)||(floorQueue.length === 0)){
                    floorQueue.push(currentFloor);
                    this.SET_FLOOR_IN_QUEUE(floorQueue);
                }
                console.log('ochered', this.$store.state.floor_queue, this.$store.state.floor_queue != {})

               /* if(floorQueue.length != 0){
                    let temp_lift = { current_floor: floorQueue[0], direction: 'up'};
                    this.SET_LIFT_DATA_CHANGES(temp_lift);
                    setTimeout(() => {
                        floorQueue.shift();
                    this.SET_FLOOR_IN_QUEUE(floorQueue);
                    console.log('прошло 3 секунды')}, 3000);
                }*/
                //while(floorQueue.length != 0){
               /*for(let i = 0; i < floorQueue.length; i++){
                    let temp_lift = { current_floor: floorQueue[0], direction: 'up'};

                //запускаем лифт
                //меняем этаж и стрелочку
                this.SET_LIFT_DATA_CHANGES(temp_lift);
                //едем до этажа
                //ждем 3 секунды
                setTimeout(() => {
                    floorQueue.shift();
                this.SET_FLOOR_IN_QUEUE(floorQueue);
                console.log('прошло 3 секунды')}, 3000);
                //выкидываем число из массива
                
                }*/
            }
        }
    }

</script>

<style lang="scss">
    .l-floor {
      background-color: $bg-color-floor;
      width: 100%;
      height: 100px;
      box-shadow: $shadow-floor;
      margin-top: $margin-floor;

      &__button {
        display: flex;
        flex-direction: row;
        font-size: $font-size-floor-number;
      }
    }
    .elevator-btn-container {
        cursor: pointer;
    }
    .elevator-btn-img {
        width: 20px;
        height: 20px; 
    }
</style>
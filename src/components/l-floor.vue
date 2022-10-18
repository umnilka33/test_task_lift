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
let leavingFloor = false;
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

                leavingFloor = true;
/*
               if(floorQueue.length != 0){
                    let temp_lift = { current_floor: floorQueue[0], direction: 'up'};
                    this.SET_LIFT_DATA_CHANGES(temp_lift);
                    setTimeout(() => {
                        floorQueue.shift();
                    this.SET_FLOOR_IN_QUEUE(floorQueue);
                    console.log('прошло 3 секунды')}, 3000);
                }
*/
/*function test(floorQueue, this_){
                    console.log('прошло 3 секунды');
                    if(floorQueue.length != 0){
                        setTimeout(() => {test(floorQueue, this_)}, 3000);
                    }
                    else {
                        return;
                    }
                }
//где то flag изначально false
               /* if(flag == false){
                    while(floorQueue.length != 0){
                        flag = true;
                        //await test(floorQueue, this);




                        /*console.log('make FLAG true',floorQueue)
                        setTimeout(() => {
                        floorQueue.shift();
                        this.SET_FLOOR_IN_QUEUE(floorQueue);
                        console.log('прошло 3 секунды')}, 3000);*/




                        /*setTimeout(() => {
                            floorQueue.shift();
                            this.SET_FLOOR_IN_QUEUE(floorQueue);
                            console.log('прошло 3 секунды')}, 3000);*/
                /*    }
                    flag = false;
                    console.log('make FLAG true', floorQueue)
                }/*
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
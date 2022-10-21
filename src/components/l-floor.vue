<template>
    <div class="l-floor">
        <div class="l-floor__button"
            @click="setCurrentFloorInQueue">
            <div class="l-floor__floor-num">
                {{floor_data.floor_number}}
            </div>
            <div 
            class="lift-btn-container">
                <img class="lift-btn-img" src="../assets/buttons/lift-btn.svg">
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

var liftWaitingTime = 3000;
var liftWaitTime = 3000;
let flag = true;
let floorQueue = [];
let currentFloor, liftCurrentFloor = 0;
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
                floorQueue = this.$store.state.floor_queue;
                currentFloor = this.floor_data.floor_number;
                liftCurrentFloor = this.$store.state.lift.current_floor;
                if(!(floorQueue.indexOf(currentFloor) != -1)||(floorQueue.length === 0)){
                    if(liftCurrentFloor != currentFloor){
                        floorQueue.push(currentFloor);
                        this.SET_FLOOR_IN_QUEUE(floorQueue);
                    }
                }                
                var lift = document.querySelector(".l-lift");
                var floors = document.querySelectorAll(".l-floor");
                let buttons = document.querySelectorAll(".l-floor__button");
                let liftTimer = document.querySelector(".l-lift__timer");
                let liftScreen = document.querySelector(".l-lift__screen");
                
                var previousTime = new Date().getTime();
                var deltaTime = 0;
                let leavingFloor = false;
                var this_ = this;
                let liftStatus = 'moving';
                function updateLift() {
                    deltaTime = new Date().getTime() - previousTime;
                    previousTime = new Date().getTime();
                    requestAnimationFrame(updateLift);
                    var liftWithinFloor = false;
                    for (let i = 0; i < floors.length; i++) {
                        if (lift.offsetTop == floors[i].offsetTop) {
                            liftWithinFloor = true;
                            currentFloor = Math.abs(i - 5);
                            if (!leavingFloor) {
                                if (floorQueue[0] == currentFloor) {
                                    floorQueue.shift();
                                    this_.SET_FLOOR_IN_QUEUE(floorQueue);
                                    liftStatus = 'timer';
                                }
                            }
                        }
                    }

                    if (!liftWithinFloor) 
                        if (leavingFloor) 
                            leavingFloor = false;

                    if (liftStatus != 'moving') {
                        if (liftStatus == 'timer') {
                            if (liftWaitingTime > 0) {
                                liftWaitingTime -= deltaTime;
                                liftTimer.textContent = liftWaitingTime + " ms";
                                liftScreen.classList.add("screen-active");
                            } 
                            else {
                                liftTimer.textContent = "";
                                liftScreen.classList.remove("screen-active");
                                if (floorQueue.length == 0) {
                                    liftStatus = 'waiting';
                                } else {
                                    liftStatus = 'moving';
                                    liftWaitingTime = liftWaitTime;
                                }
                            }
                        }
                        if((liftStatus == 'waiting')&&(floorQueue.length != 0)){
                            liftStatus = 'moving';
                            liftWaitingTime = liftWaitTime;
                        }
                    }

                    if (floorQueue.length != 0 && liftStatus == 'moving') {
                        if ((Math.abs(floorQueue[0] - 5) * 100) < lift.offsetTop) {
                            lift.style.top = (lift.offsetTop - 2) + "px";
                            this_.SET_LIFT_DATA_CHANGES({ current_floor: floorQueue[0], direction: 'up'})
                        } else {
                            lift.style.top = (lift.offsetTop + 2) + "px";
                            this_.SET_LIFT_DATA_CHANGES({ current_floor: floorQueue[0], direction: 'down'})
                        }
                    }
                    buttons.forEach(button => {
                        if (floorQueue.indexOf(Number(button.children[0].firstChild.data)) != -1) {
                            button.classList.add("active");
                        } else {
                            button.classList.remove("active");
                        }
                    })
                }
                if (flag) {
                    updateLift();
                    flag = false;
                }
            }
        }
    }
    
</script>

<style lang="scss">
    .l-floor {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: $bg-color-floor;
        width: 100%;
        height: 100px;
        border: 1px inset rgb(31, 115, 148);
        border-radius: 5px;

        &__button {
            display: flex;
            flex-direction: row;
            font-size: $font-size-floor-number;
            justify-content: space-between;
            width: 35px;
            margin-left: 10px;
            color: $color-btn;
        }
    }
    .lift-btn-container {
        cursor: pointer;
    }
    .lift-btn-img {
        width: 20px;
        height: 20px; 
    }
    .active {
        font-size: $font-size-floor-number-active;
        color: $color-btn-active;
    }
</style>
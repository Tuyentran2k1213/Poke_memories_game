<template>
    <div class="card" :class="{disabled: disabled}" :style="`width: ${600 / cardSize}px; height: ${800 / cardSize}px;`">
        <div class="inner_card" :class="{ 'isRotate' : !cardFace }" @click="changeSurface">
            <div class="card_face card-front-face">
                <div class="card-title">
                    <img src="../../../assets/images/icon_back.png" alt="front face">
                </div>
            </div>
            <div class="card_face card-back-face isRotate">
                <div class="card-title">
                    <img :src="`/assets/images/${cardImg.cardId}.png`" alt="front face">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data(){
        return {
            cardFace: true,
            disabled: false
        }
    },
    props: {
        cardImg: {
            type: [String, Number, Array, Object],
            default: {
                cardId: 'icon_back',
                index: 0
            }
        },
        cardSize: {
            type: [String, Number],
            default: 4
        }
    }
    ,
    methods: {
        changeSurface() {
            if(this.disabled) return false;
            this.cardFace = !this.cardFace;
            setTimeout(() => {
                if(!this.cardFace){
                this.$emit("choose", this.cardImg);
            } else {
                this.$emit("choose", null);
            }
            }, 800);

        },
        onBackFlip() {
            this.cardFace = true;
        },
        onChoosen() {
            this.disabled = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        margin: auto;
        margin-bottom: 20px;
        display: inline-block;
    }
    .inner_card{
        position: relative;
        height: 100%;
        width: 100%;
        transform-style: preserve-3d;
        transition: 0.7s;
        cursor: pointer;
    }
    .card_face{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        backface-visibility: hidden;
        overflow: hidden;
        box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        .card-title{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            img{
                width: 40%;
                height: 30%;
            }
        }
    }
    .inner_card.isRotate{
        transform: rotateY(-180deg);
    }
    .card-back-face{
        background-color: var(--light);
        transform: rotateY(-180deg);
        .card-title{
            img{
                width: 80%;
                height: 70%;
            }
        }
    }
    .disabled{
        .inner_card{
            cursor: default;
        }
    }
</style>

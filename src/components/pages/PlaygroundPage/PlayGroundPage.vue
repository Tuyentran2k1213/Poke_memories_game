<template>
    <div class="play-ground">
        PlayGroundPage
        <div class="cardField" :style="`grid-template-columns: repeat(${$route.params.level}, 1fr);`">
            <card 
            v-for="(cardId, index) in arrCards" 
            @choose="chooseCard" 
            :key="index" 
            :cardImg="{ cardId, index }" 
            :cardSize="$route.params.level"
            :ref="`card_${index}`"/>
        </div>
    </div>
</template>
<script>
import shuffled from '../../suffled';

import Card from '../component/Card.vue';
import router from '../../../router';

export default {
    name: 'PlayGroundPage',
    components: {
        Card,
    },
    data(){
        return {
            arrCards: null,
            rules: []
        }
    },
    methods: {
        chooseCard(value){
            if(value){
                if(this.rules.length < 2){
                    this.rules.push(value);

                if(this.rules.length === 2 && this.rules[0].cardId === this.rules[1].cardId){

                    this.$refs[`card_${this.rules[0].index}`][0].onChoosen();
                    this.$refs[`card_${this.rules[1].index}`][0].onChoosen();
                    this.rules = [];

                    const done = document.querySelectorAll('.cardField .card.disabled')
                    if(done.length === Math.pow(this.$route.params.level, 2) - 2){
                        router.push('/result');
                    }

                } else if(this.rules.length === 2 && this.rules[0].cardId !== this.rules[1].cardId) {

                    this.$refs[`card_${this.rules[0].index}`][0].onBackFlip();
                    this.$refs[`card_${this.rules[1].index}`][0].onBackFlip();
                    this.rules = [];
                
                }
                }
            }
            if(!value){
                this.rules = [];
            }
        }
    },
    mounted(){
        const totalNumCard = Math.pow(this.$route.params.level, 2) / 2;
        const table = Array.from({ length: totalNumCard }, (_, x) => x + 1);
        const totalCard = [...table, ...table];
            
        this.arrCards = shuffled(shuffled(shuffled(shuffled(shuffled(totalCard)))));
    }
}
</script>

<style lang="scss" scoped>
.play-ground{
    color: var(--light);
    .cardField{
        width: 90vw;
        margin: auto;
        display: grid;
    }
}
</style>
<template>
    <div class="main">
        <div class="content">
            <h1>POKE MEMORIES</h1>
            <p>Select mode to start game</p>
        </div>
        <div class="gameLevel">

            <router-link v-for="(data, index) in dataLevel" class="card" :key="index" :to="`/play/${data.number}`">
                <h1>{{ data.number }} x {{ data.number }}</h1>
                <p>{{ data.level }}</p>
            </router-link>
        </div>
    </div>
</template>
<script>

const dataLevel = [
    {   
        number: 4,
        level: 'Easy'
    },
    {
        number: 6,
        level: 'Normal'
    },
    {
        number: 8,
        level: 'Hard'
    },
    {
        number: 10,
        level: 'Isane'
    },
    {
        number: 100,
        level: 'Asia'
    }
]

export default {
    name: 'MainPage',
    data(){
        return {
            dataLevel,
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        height: 100vh;
        width: 100vw;
        color: var(--light);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .content{
            text-align: center;
            h1{
                font-size: 5rem;
                margin-bottom: 0.5rem;
            }
            p{
                font-size: 4rem;
            }
        }
        .gameLevel{
            width: 60vw;
            display: flex;
            justify-content: space-around;
            .card{
                border: solid 1px var(--light);
                height: 150px;
                width: 150px;
                border-radius: 25px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: var(--light);
                cursor: pointer;
                transition: 0.3s;
                &:hover{
                    background-color: var(--light);
                    color: var(--dark);
                }
                p{
                    font-size: 20px;
                }
            }
        }
    @media only screen and (max-width: 868px) and (min-width: 640.5px) {
        .gameLevel{
            width: 80vw;
        }
    }
    @media only screen and (max-width: 640px) and (min-width: 480.0001px) {
        .gameLevel{
            width: 90vw;
        }
    }
    @media only screen and (max-width: 480px){
        .gameLevel{
            width: 98vw;
        }
    }
    }
</style>
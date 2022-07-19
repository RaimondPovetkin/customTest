<template>
    <div class="advantages-box">
        <img class="advantages-box__img" :src=getPic(advantage.pic) alt="">
        <div class="advantages-box__explanation">
            <div class="advantages-box__title">
                {{advantage.title}}
            </div>
            <div class="advantages-box__description">
                {{advantage.description}}
                <div v-if="advantage.points !== undefined">
                    <ul  v-for="item in advantage.points" :key = item>
                        <li>{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        advantage:{
            type: Object,
            required: true
        }
    },
    methods: {
        getPic(pic) {
            return require('./img/'+pic+'.svg')
        }
    }
}
</script>

<style lang="scss">

</style>
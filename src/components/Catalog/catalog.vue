<template>
    <div id="catalog" class="catalog">
        <div class="title">
            <div class="title__inner">
                ВСЕГДА В НАЛИЧИИ
            </div>
        </div>
        <div class="catalog-content">

            <catalogItem
                v-for="crab in crabs" :key = crab
                :crab="crab"
            />
            
        </div>
    </div>
</template>

<script>
import catalogItem from './catalogItem.vue'
export default {
  components: { catalogItem },
      data(){
        return{
            crabs:[
                {
                    pic:"crab1",
                    title:"Т-образная краб-система 20х20", 
                    price:"20 руб/комп"
                },
                {
                    pic:"crab2",
                    title:"Х-образная краб-система 20х20", 
                    price:"20 руб/комп"
                },
                {
                    pic:"crab3",
                    title:"Т-образная краб-система 25х25", 
                    price:"25 руб/комп"
                },
                {
                    pic:"crab4",
                    title:"X-образная краб-система 25х25", 
                    price:"25 руб/комп"
                },
            ],
        }
    },
    
}
</script>

<style lang="scss">

</style>
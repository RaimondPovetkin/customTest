<template>
    <div class="catalog-card">
        <div class="catalog-card__img-box">
            <img class="catalog-card__img" :src=getPic(crab.pic) @click="showPre" alt="" >
        </div>
        <div class="catalog-card__description-block">
            <div class="catalog-card__name">
                {{crab.title}}
            </div>
            <div class="catalog-card__package">
                <div class="catalog-card__price">
                    {{crab.price}}
                </div>
                <div class="catalog-card__compl-block">
                    <div class="catalog-card__count">
                        <input type="number" min="1" value="0">
                    </div>
                    <div class="catalog-card__compl">
                        комп.
                    </div>
                </div>
            </div>
            <div class="catalog-card__order">
                <div class="catalog-card__button">
                    <a href="#" @click="changeInner">Заказать</a>
                </div>
            </div>
        </div>
        <div>
            <div id="myModal" class="modal">
                <span class="close" @click="closePre">×</span>
                <img class="modal-content" id="img01">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        crab:{
            type: Object,
            required: true
        }
    },
    methods: {
        changeInner(e){
            e.preventDefault()
            if(e.target.innerHTML == "Заказать"){
                e.target.innerHTML ="Отменить"
            }
            else{
                e.target.innerHTML ="Заказать"
            }
        },
        getPic(pic) {
            return require('./img/'+pic+'.png')
        },
        showPre(e){

            let modal = document.querySelector('.modal');

            let modalImg=document.querySelector(".modal-content")


                modal.style.display = "block";
                modalImg.src = e.target.src;

        },
        closePre(){
            document.getElementById('myModal').style.display = "none";
        }
    }
}
</script>

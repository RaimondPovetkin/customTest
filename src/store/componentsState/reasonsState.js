export const reasonsState={
    state:()=>({
        reasons:[
            {
                pic:"factory",
                title:"Собственное производство",
                description:"Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству."
            },
            {
                pic:"truck",
                title:"Доставка по всей России",
                description:"Мы осуществляем доставку нашей продукции по всей России."
            },
            {
                pic:"rub",
                title:"Доступные цены",
                description:"Так как мы являемся производителем, мы предлагаем нашу продукцию без лишних наценок."
            },
            {
                pic:"like",
                title:"Гарантия качества",
                description:"Мы уделяем особое внимание качеству нашей продукции и дорожим нашими клиентами."
            },
        ],
        title: "ПОЧЕМУ МЫ?"
    }),
    getters:{
        allReasons(state) {
            return state.reasons
        },
        titleReasons(state) {
            return state.title
        }
    }
}
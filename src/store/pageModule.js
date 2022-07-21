export const pageModele={
    state:()=>({
        cities:[
            {
                city:"Москва", 
                address:" Москва, ул. Лениниа, д. 25", 
                contacts:"+7(196)930-48-26",
                coords:"[55.75883410610894,37.61350993115235]"
            },
            {
                city:"Сочи", 
                address:" Сочи, ул. Молодёжная, д. 5", 
                contacts:"+7(726)569-26-03",
                coords:"[43.5920414987932,39.72544772984929]"
            },
            {
                city:"Вологда", 
                address:" Вологда, ул. Лесная , д. 2", 
                contacts:"+7(050)406-07-53",
                coords:"[59.21763455782931,39.87796001826047]"
            },
            {
                city:"Череповец", 
                address:" Череповец, ул. Заречная , д. 7", 
                contacts:"+7(211)962-46-06",
                coords:"[59.128482224500445,37.90636654575727]"
            },
        ],
        index:2,
    }),
    getters:{
        allCitiesState(state) {
            return state.cities
        },
        cityIndex(state) {
            return state.index
        }
    },
    mutations: {
        changeIndex(state, i) {
            state.index = i
        }
    }
}
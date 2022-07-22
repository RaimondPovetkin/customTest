export const pageModele = {
    state: () => ({
        cities: [
            {
                city: "Москва",
                addresses: [
                    {
                        address: " Москва, ул. Лениниа, д. 25",
                        contacts: "+7(196)930-76-09",
                        coords: "[55.615354, 37.204608]"
                    },
                    {
                        address: " Москва, ул. Красноказарменная, 13с6",
                        contacts: "+7(196)930-48-26",
                        coords: "[55.757093, 37.704069]"
                    },
                    {
                        address: " Москва, ул. Угрешская, 2с89",
                        contacts: "+7(196)930-48-26",
                        coords: "[55.710940, 37.692758]"
                    },
                ],
            },
            {
                city: "Сочи",
                addresses: [
                    {
                        address: " Сочи, ул. Молодёжная, д. 5",
                        contacts: "+7(726)569-26-03",
                        coords: "[43.5920414987932,39.72544772984929]"
                    },
                    {
                        address: " Сочи, ул. Тоннельная, д. 19",
                        contacts: "+7(726)569-26-03",
                        coords: "[43.587988, 39.728515]"
                    },
                ],
            },
            {
                city: "Вологда",
                addresses: [
                    {
                        address: " Вологда, ул. Лесная , д. 2",
                        contacts: "+7(050)406-07-53",
                        coords: "[59.21763455782931,39.87796001826047]"
                    }
                ],
            },
            {
                city: "Череповец",
                addresses: [
                    {
                        address: " Череповец, ул. Заречная , д. 7",
                        contacts: "+7(211)962-46-06",
                        coords: "[59.128482224500445,37.90636654575727]"
                    }
                ],
            },
        ],
        images: {
            dir: null,
            logoImg:{
                ext: "svg",
                name: "logo"
            },
            mapImg:{
                ext: "svg",
                name: "map-marker"
            },
            phoneImg:{
                ext: "svg",
                name: "phone"
            },
            burgerImg:{
                ext: "svg",
                name: "burger"
            },
            closeCrossImg:{
                ext: "svg",
                name: "closeCross"
            }
        },
        index: 2,
    }),
    getters: {
        allCitiesState(state) {
            return state.cities;
        },
        cityIndex(state) {
            return state.index;
        },
        imagesPage(state) {
            return state.images;
        }
    },
    mutations: {
        changeIndex(state, i) {
            state.index = i;
        }
    },
};
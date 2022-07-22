export const catalogState = {
    state: () => ({
        crabs: [
            {
                pic: "crab1",
                title: "Т-образная краб-система 20х20",
                price: "20 руб/комп"
            },
            {
                pic: "crab2",
                title: "Х-образная краб-система 20х20",
                price: "20 руб/комп"
            },
            {
                pic: "crab3",
                title: "Т-образная краб-система 25х25",
                price: "25 руб/комп"
            },
            {
                pic: "crab4",
                title: "X-образная краб-система 25х25",
                price: "25 руб/комп"
            },
        ],
        images: {
            ext: "png",
            dir: "catalog"
        },
        title: "ВСЕГДА В НАЛИЧИИ"
    }),
    getters: {
        crabsCatalog(state) {
            return state.crabs;
        },
        titleCatalog(state) {
            return state.title;
        },
        imagesCatalog(state) {
            return state.images;
        }
    }
};
export const partnersState={
    state:()=>({
        title: "НАШИ ПАРТНЕРЫ",
        images: ["severst","zavod","gf1"],
    }),
    getters:{
        partnersStateTitle(state) {
            return state.title
        },
        partnersStateImages(state) {
            return state.images
        }
    }
}
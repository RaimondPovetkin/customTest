export const partnersState = {
    state: () => ({
        title: "НАШИ ПАРТНЕРЫ",
        imagesParnters: ["severst", "zavod", "gf1"],
        imagesProp: {
            ext: "png",
            dir: "partners"
        },
    }),
    getters: {
        partnersStateTitle(state) {
            return state.title;
        },
        partnersStateImages(state) {
            return state.imagesParnters;
        },
        partnersStateImagesProp(state) {
            return state.imagesProp;
        }
    }
};
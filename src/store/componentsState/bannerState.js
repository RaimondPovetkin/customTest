export const bannerState = {
    state: () => ({
        title: "КРАБ СИСТЕМА",
        description: "Для быстровозводимых каркасных конструкций",
        buttonText: "Получить консультацию"
    }),
    getters: {
        titleBanner(state) {
            return state.title;
        },
        descriptionBanner(state) {
            return state.description;
        },
        buttonTextBanner(state) {
            return state.buttonText;
        }
    }
};
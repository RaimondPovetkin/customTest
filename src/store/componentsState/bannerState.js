export const bannerState={
    state:()=>({

        title: "КРАБ СИСТЕМА",
        description: "Для быстровозводимых каркасных конструкций",
        buttonText: "Получить консультацию"


    }),
    getters:{
        bannerState(state) {
            return state
        }
    }
}
export const formState={
    state:()=>({
        title: "ОСТАВИТЬ ЗАЯВКУ",
        description: "НА РАСЧЁТ СТОИМОСТИ",
        buttonText: "Заказать расчёт цены",
        rulesText: "Соглашаюсь с",
        rulesLink: "условиями передачи данных"
    }),
    getters:{
        formStateTitle(state) {
            return state.title
        },
        formStateDescription(state) {
            return state.description
        },
        formStateButtonText(state) {
            return state.buttonText
        },
        formStateRulesText(state) {
            return state.rulesText
        },
        formStateRulesLink(state) {
            return state.rulesLink
        }
    }
}
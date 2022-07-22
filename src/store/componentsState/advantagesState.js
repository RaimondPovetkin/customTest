export const advantagesState={
    state:()=>({
        advantages:[
            {
                pic:"bodybuilding",
                title:"Высокая прочность, жёсткость и надёжность",
                description:"По прочности соединение с помощью краб-системы ничем не уступает сварке"
            },
            {
                pic:"piggy",
                title:"Низкая стоимость",
                description:"Цена конструкции относительна низка, так как:",
                points:[
                    "• Вам не нужно использовать сварочный аппарат;",
                    "• работу Вы можете сделать своими руками"
                ]
            },
            {
                pic:"cycle",
                title:"Возможность многоразового использования",
                description:"Система соединения позволяет перестроить конструкцию – уменьшить, увеличить размеры"
            },
            {
                pic:"montage",
                title:"Простота монтажа",
                description:"Для выполнения работ Вам не требуется специальных знаний, Краб-система закрепляется при помощи болтов и гаек"
            },
        ],
        images:{
            ext: "svg",
            dir: "advantages"
        },
        title: "ПРЕИМУЩЕСТВА СИСТЕМЫ"
    }),
    getters:{
        allAdvantages(state) {
            return state.advantages
        },
        titleAdvantage(state) {
            return state.title;
        },
        imagesAdvantage(state) {
            return state.images;
        },
    }
}
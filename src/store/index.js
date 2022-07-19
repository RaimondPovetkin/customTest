import { createStore } from "vuex";
import { pageModele } from "./pageModule";

export default createStore({
    modules:{
         page: pageModele
    }
})
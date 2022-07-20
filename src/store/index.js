import {createStore} from "vuex";
import {pageModele} from "./pageModule";
import {advantagesState} from "@/store/componentsState/advantagesState";
import {catalogState} from "@/store/componentsState/catalogState";
import {reasonsState} from "@/store/componentsState/reasonsState";
import {manufactureState} from "@/store/componentsState/manufactureState";
import {bannerState} from "@/store/componentsState/bannerState";
import {feedbackState} from "@/store/componentsState/feedbackState";

export default createStore({
    modules: {
        feedback: feedbackState,
        banner: bannerState,
        page: pageModele,
        advantages: advantagesState,
        catalog: catalogState,
        reasons: reasonsState,
        manufacture: manufactureState
}
});
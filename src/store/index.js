import {createStore} from "vuex";
import {pageModele} from "./pageModule";
import {advantagesState} from "@/store/componentsState/advantagesState";
import {catalogState} from "@/store/componentsState/catalogState";
import {reasonsState} from "@/store/componentsState/reasonsState";
import {manufactureState} from "@/store/componentsState/manufactureState";
import {bannerState} from "@/store/componentsState/bannerState";
import {feedbackState} from "@/store/componentsState/feedbackState";
import {partnersState} from "@/store/componentsState/partnersState";
import {formState} from "@/store/componentsState/formState";

export default createStore({
    modules: {
        feedback: feedbackState,
        banner: bannerState,
        page: pageModele,
        advantages: advantagesState,
        catalog: catalogState,
        form: formState,
        reasons: reasonsState,
        partners: partnersState,
        manufacture: manufactureState
}
});
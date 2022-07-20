export const manufactureState={
    state:()=>({
        title: "НАШЕ ПРОИЗВОДСТВО",
        linkVideo: "https://www.youtube.com/embed/_Gvcrme1WIY",
        titleVideo: "YouTube video player"
    }),
    getters:{
        manufactureTitle(state) {
            return state.title
        },
        manufactureLinkVideo(state) {
            return state.linkVideo
        },
        manufactureTitleVideo(state) {
            return state.titleVideo
        },
    }
}
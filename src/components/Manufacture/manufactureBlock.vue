<template>
  <div class="manufacture">
    <div class="title">
      <div class="title__inner">
        {{ manufactureTitle }}
      </div>
    </div>
    <div class="manufacture__content">
      <div class="video__preview">
        <div class="video" @click="setVideo">
        </div>
      </div>
    </div>
    <div class="hide"></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  methods: {
    setVideo(e) {
      e.target.insertAdjacentHTML("afterbegin", "<iframe src=\"\" id=\"manufactureVideo\" title=\"\" frameborder=\"0\"  allowfullscreen></iframe>");
      let manufactureVideo = document.getElementById("manufactureVideo")
      manufactureVideo.src = this.manufactureLinkVideo;
      manufactureVideo.title = this.manufactureTitleVideo;
    }
  },
  computed: mapGetters(["manufactureTitle", "manufactureLinkVideo","manufactureTitleVideo"])

};
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.manufacture {
  width: 100%;
  background-image: url(/src/assets/images/background_crab.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 0 auto;

  .manufacture__title {
    @include OpenSans700;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }

  .manufacture__content {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1280px;

    .video {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      background: url(/src/assets/images/play.svg) no-repeat center;
      background-size: 10%;

      &__preview {
        width: 100%;
        height: 100%;
        background: url(/src/assets/images/VideoPreview.png) no-repeat center;
        background-size: cover;
      }
    }

    .video:hover {
      cursor: pointer;
      background-size: 12%;
    }

    .video iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .hide {
    height: 40px;
    width: 10px;
  }
}
@media (min-width: 412px) {
  .manufacture {
    .manufacture__title {
      font-size: 25px;
      line-height: 29px;
      height: 100px;
    }

    .hide {
      height: 60px;
    }
  }
}
@media (min-width: 768px) {
  .manufacture {
    .manufacture__title {
      font-size: 29px;
      line-height: 33px;
      height: 120px;
    }

    .hide {
      height: 80px;
    }
  }
}
@media (min-width: 1024px) {
  .manufacture {
    .manufacture__title {
      font-size: 35px;
      line-height: 45px;
      height: 150px;
    }

    .hide {
      height: 100px;
    }
  }
}
@media (min-width: 1280px) {
  .manufacture {
    .manufacture__title {
      font-size: 40px;
      line-height: 54px;
      height: 170px;
    }

    .hide {
      height: 120px;
    }
  }
}
</style>
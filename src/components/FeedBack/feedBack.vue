<template>
  <div id="feedback" class="feedback">
    <div class="title">
      <div class="title__inner">
        {{ allCommentsTitle }}
      </div>
    </div>
    <div class="feedback-content">
      <feedBackItem
          v-for="comment in allComments" :key=comment
          :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import feedBackItem from "./feedBackItem.vue";
import {mapGetters} from "vuex";
export default {
  components: {feedBackItem},
  computed: mapGetters(["allCommentsTitle", "allComments"])
};
</script>

<style lang="scss">
@import "./src/assets/styles/style";
.feedback {
  background: url(/src/assets/images/background_feedback.png);
  .feedback-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: $padding-mobile-0;
  }
}
@media (min-width: 768px) {
  .feedback {
    display: flex;
    flex-direction: column;
    align-items: center;
    .feedback-content {
      margin-bottom: 40px;
      width: $width768px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  }
}
@media (min-width: 1024px) {
  .feedback {
    display: flex;
    flex-direction: column;
    align-items: center;
    .feedback-content {
      margin-bottom: 60px;
      width: $width1024px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  }
}
@media (min-width: 1280px) {
  .feedback {
    .feedback-content {
      width: $width1280px;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
  }
}
</style>
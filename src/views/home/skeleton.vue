<template>
  <div class="home-skeleton-index">
    <skeletor height="200"></skeletor>
    <div class="card__slim">
      <div class="card__avatar">
        <Skeletor circle size="48" class="post__avatar" />
      </div>

      <div class="card__meta">
        <h2>
          <Skeletor width="50%" />
        </h2>

        <p>
          <Skeletor width="75%" />
        </p>
      </div>
    </div>
    <div class="card__text">
      <Skeletor v-for="i in 5" :key="i" />
    </div>

    <div class="card__actions">
      <Skeletor width="96" height="36" pill style="margin-right: 4px" />
      <Skeletor width="96" height="36" pill />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import 'vue-skeletor/dist/vue-skeletor.css'
  import { Skeletor } from 'vue-skeletor'
  export default defineComponent({
    name: 'HomeSkeletor',
    components: {
      Skeletor
    },
    setup() {
      return {}
    }
  })
</script>
<style lang="scss" scoped>
  .home-skeleton-index {
    .card__slim {
      display: flex;
      margin-top: 16px;
      padding: 0 16px;
      box-sizing: border-box;
      .card__avatar {
        margin-right: 12px;
      }

      .card__meta {
        flex-grow: 1;
        p,
        h2 {
          margin: 0;
        }
      }
    }
    .card__text {
      margin: 16px 0;
      padding: 0 16px;
      box-sizing: border-box;
    }

    .card__actions {
      display: flex;
      justify-content: flex-end;
      padding: 0 16px;
      box-sizing: border-box;
    }
  }
</style>

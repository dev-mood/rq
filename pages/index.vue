<template>
  <div class="links">
    <nuxt-link
      type="button"
      v-for="(link, index) in links"
      :key="index"
      :to="link.type"
      class="button"
    >
      {{ link.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          title: '🔥 Caliente',
          type: 'nsfw',
        },
        {
          title: '😄 Amistad',
          type: 'friendship',
        },
        {
          title: '❤️ Amor',
          type: 'love',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.links {
  padding-top: 15px;
}
</style>

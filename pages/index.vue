<template>
  <div class="container">
    <div>
      <img src="/logo.png" alt="Logo" width="300" />
      <div class="links">
        <button v-for="(link, index) in links" :key="index" class="button">{{link.emoji}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          emoji: '🔥'
        },
        {
          emoji: '😄'
        },
        {
          emoji: '❤️'
        },
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.links {
  padding-top: 15px;
}
</style>

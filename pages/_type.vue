<template>
  <div class="_type">
    <div class="_type__view">
      <p class="question">{{ question }}</p>
      <button type="button" class="generate" @click="generateQuestion">
        Generar pregunta
      </button>
    </div>
    <div class="footer">
      <div class="btn-group">
        <button type="button" class="button" @click="copyToClipboard">
          Copiar
        </button>
      </div>
      <nuxt-link to="/" type="button" class="button">
        Elegir otra categoría
      </nuxt-link>
    </div>
    <notifications group="copy" position="top center" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params: { type } }) {
    const content = await $content('questions')
      .where({
        slug: type,
      })
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const questions = content[0].data.map(({ value }) => value)

    return { questions, type }
  },
  data: () => {
    return { question: null, chosenQuestions: [] }
  },
  methods: {
    generateQuestion() {
      const index = this.getRndInteger(0, this.questions.length - 1)
      if (!this.chosenQuestions.includes(index)) {
        this.question = this.questions[index]
        this.chosenQuestions.push(index)
      } else this.generateQuestion()
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    copyToClipboard() {
      const el = document.createElement('textarea')
      el.value = this.question.value
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.$notify({
        group: 'copy',
        type: 'success',
        text: 'Pregunta copiada!',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
._type {
  &__view {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.generate {
  font-family: 'Fredoka One';
  font-size: 4vmin;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: linear-gradient(to bottom, #f4e401e7, #e1d202);
  border: none;
  color: #fff;
  border-radius: 2em;
  padding: 0.6em 1.5em;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 1em rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.2s,
    -webkit-transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);
  transition: box-shadow 0.2s,
    -webkit-transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);
  transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1), box-shadow 0.2s;
  transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1), box-shadow 0.2s,
    -webkit-transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);
  outline: none;
  &:hover {
    box-shadow: 0 0 2em rgba(255, 255, 255, 0.3);
    outline: none;
  }
  &:active {
    -webkit-transform: scale(0.8) translateY(10%);
    transform: scale(0.8) translateY(10%);
    -webkit-transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    outline: none;
  }
  &:focus {
    outline: none;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.question {
  text-align: center;
  margin: 1rem 0;
  font-family: 'Fredoka One';
  font-size: 4vmin;
  color: var(--color);
}
.btn-group {
  margin: 1rem 0;
}
.footer {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
}
</style>

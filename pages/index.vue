<template>
  <div class="container">
    <img src="/logo.png" alt="Logo" width="300" />
    <div v-if="!type" class="links">
      <button
        type="button"
        v-for="(link, index) in links"
        :key="index"
        class="button"
        @click="selectType(link.type)"
      >
        {{ link.type }}
      </button>
    </div>
    <button v-else type="button" class="generate" @click="generateQuestion">
      Generar pregunta
    </button>
    <template v-if="type && question">
      <p class="question">{{ question.value }}</p>
      <div class="btn-group">
        <button type="button" class="button" @click="copyToClipboard">
          Copiar
        </button>
      </div>
      <button type="button" class="button" @click="clear">
        Elegir otra categoría
      </button>
    </template>
  </div>
</template>

<script>
import { questions } from '~/assets/js/questions.js'

export default {
  data: () => {
    return {
      links: [
        {
          type: '🔥',
        },
        {
          type: '😄',
        },
        {
          type: '❤️',
        },
      ],
      type: null,
      question: null,
      chosenQuestions: [],
    }
  },
  methods: {
    selectType(type) {
      this.type = type
    },
    generateQuestion() {
      const index = this.getRndInteger(0, this.questionsSelecteds.length - 1)
      if (!this.chosenQuestions.includes(index)) {
        this.question = this.questionsSelecteds[index]
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
      alert('Pregunta copiada!')
    },
    clear() {
      this.type = null
      this.question = null
    },
  },
  computed: {
    questionsSelecteds() {
      return this.type ? questions.filter((q) => q.type === this.type) : []
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: initial 1rem;
}
.links {
  padding-top: 15px;
}
.generate {
  font-family: 'Fascinate', cursive;
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
}
.question {
  text-align: center;
  margin: 1rem 0;
  font-family: 'Bebas Neue', cursive;
  font-size: 4vmin;
  color: #fff;
}
.btn-group {
  margin: 1rem 0;
}
</style>

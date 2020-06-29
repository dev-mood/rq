<template>
  <div>
    <div class="version">v1.0.0</div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.version {
  position: fixed;
  top: 1%;
  right: 1%;
  display: inline-block;
  font-weight: 500;
  font-family: inherit;
  line-height: inherit;
  text-align: center;
  -webkit-appearance: none;
  cursor: pointer;
  color: #fff;
  background-color: #ffdd09;
  box-shadow: inset 0 0 0 1px #ffdd09;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  margin: 0px 0px 0px 8px;
  text-decoration: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 6px;
  user-select: none;
}

.button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ffdd09;
  color: #ffdd09;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  margin-left: 0.3rem;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #ffdd09;
  }
}
</style>

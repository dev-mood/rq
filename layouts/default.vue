<template>
  <div class="container">
    <div class="version">v2.1.1</div>
    <picture>
      <source type="image/webp" srcset="~/assets/img/logo.webp" />
      <source type="image/png" srcset="~/assets/img/logo.png" />
      <img src="~/assets/img/logo.png" alt="Logo" class="logo" />
    </picture>
    <Nuxt />
  </div>
</template>

<style lang="scss">
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

.logo {
  max-width: 250px;
}

.container {
  text-align: center;
  padding: initial 1rem;
}

.button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ffdd09;
  color: #ffdd09;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  margin-left: 0.3rem;
  font-size: 1.3rem;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #ffdd09;
  }
}
</style>

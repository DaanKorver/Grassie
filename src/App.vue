<template>
<div>
  <div class="nav">
    <div class="nav-logo"></div>
    <div class="nav-items">
      <div class="nav-items-item">
        <router-link to="/" title="Home">Home</router-link>
      </div>
        <div class="nav-items-item">
        <router-link to="/products" title="Producten">Producten</router-link>
      </div>
      <div class="nav-items-item">
        <router-link to="/about" title="Over ons">Over Ons</router-link>
      </div>
      <div class="nav-items-item">
        <router-link to="/contact" title="Contact">Contact</router-link>
      </div>
    </div>
  </div>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
  </div>
</template>

<style>
* {
    margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100vw;
  height: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  height: 65px;
  background: #fffcff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

.nav-logo {
  position: relative;
  float: left;
  width: 10%;
  height: 100%;
  background: url("./assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.nav-items {
  float: right;
  width: 90%;
  height: 100%;
}

.nav-items-item {
  height: 100%;
  width: 100px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.nav-items-item a {
  color: black;
  text-decoration: none;
}

.nav-items-item a:hover {
  color: #777;
}

@media (max-width: 475px) {
  .nav-items-item {
    width: 80px;
    font-size: 13px;
  }
  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.page {
  margin-top: 65px;
  width: 100vw;
  height: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity transform;
  transition-timing-function: ease;
}

.fade-enter{
  opacity: 0;
  transform: translateX(-5vw);
}
.fade-leave-active {
  opacity: 0;
  transform: translateX(5vw);
}
::-webkit-scrollbar {
  width: 10px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #2c3e50;;
  border: 0px none #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #333;
}
::-webkit-scrollbar-track {
  background: white;
  border: 0px none #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>

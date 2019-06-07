<template>
<div>
  <div class="nav">
    <div class="nav-logo"></div>
    <div class="nav-items">
      <div class="nav-items-item">
        <router-link to="/">Home</router-link>
      </div>
        <div class="nav-items-item">
        <router-link to="/about">About</router-link>
      </div>
      <div class="nav-items-item">
        <router-link to="/products">Products</router-link>
      </div>
      <div class="nav-items-item">
        <router-link to="/contact">Contact</router-link>
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
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>

<template>
  <div class="nav-bar">
    <ul class="ul-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/donate">Donate</router-link>
      <router-link to="/vote">Where to Vote</router-link>
      <router-link to="/contact">Contact</router-link>
    </ul>
  </div>
</template>

<script></script>

<style>
.ul-nav {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}

@media (max-width: 550px) {
  .ul-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>

<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import pfp from './components/pfpInfo.vue'
import links from './components/links.vue'
import copyright from './components/copyright.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <pfp/>
    </div>
  </header>

  <main>
    <links/>
  </main>

  <p class="copyright">
    <copyright/>
  </p>
</template>

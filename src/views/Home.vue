<template>
  <div class="home">
    <h4 class="text-left mb-3">Infrastruktur</h4>
    <p class="text-left">Selvbetjente tjenester for å hjelpe utviklere i Oslo kommune med effektiv utvikling og forvaltning av digitale løsninger.</p>
    <tjenesteoversikt/>
  </div>
</template>

<script>
// @ is an alias to /src

import Tjenesteoversikt from "../components/Tjenesteoversikt";
export default {
  name: 'Home',
  components: {Tjenesteoversikt}
}
</script>

<style lang="scss" scoped>
p {
	font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
}
p.old {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

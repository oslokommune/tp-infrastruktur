<template>
  <div class="home">
    <h2 class="text-left mb-3">Infrastruktur</h2>
    <p class="text-left">Selvbetjente tjenester for å hjelpe utviklere i Oslo kommune med effektiv utvikling og forvaltning av digitale løsninger.</p>
    <tjenesteoversikt/>

    <h3 class="text-left">Spørsmål?</h3>
    <p class="text-left">Kontakt oss på Slack <a href="https://app.slack.com/client/T6W3G5A4C/C6XTG3FGW">#team-infrastruktur</a> eller spør vår chatbot Clippy!
      <TextInput style="display: inline-block; margin-right: 1em;" v-model="botQuestion" />
      <BaseButton primary style="margin: 1em 0 1em 0;">Spør Clippy!</BaseButton>
      <img alt="clippy" src="https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif" class="float-right"/>
    </p>

  </div>
</template>

<script>
// @ is an alias to /src

import { BaseButton } from '@oslokommune/vue/buttons' // Knappene finnes her
import { TextInput } from '@oslokommune/vue/forms' // Skjema-komponenter her

import Tjenesteoversikt from "../components/Tjenesteoversikt";

export default {
  name: 'Home',
  components: {
    BaseButton,
    TextInput,
    Tjenesteoversikt
  },
  data: () => ({
    botQuestion: "Spørsmål"
  })
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

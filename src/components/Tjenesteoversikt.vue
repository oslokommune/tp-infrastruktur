<template>
  <v-container>
    <v-row>
      <v-col v-for="tjeneste in tjenester">
        <v-card height="300px">
          <v-card-title>{{ tjeneste.overskrift }}</v-card-title>
          <v-card-text>{{ tjeneste.beskrivelse }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "Tjenesteoversikt",
    data() {
      return {
        tjenester: [
          {
            overskrift: 'Overskrift',
            illustrasjon: '',
            beskrivelse: 'Dette er beskrivelsen av tjenesten vår.'
          },
          {
            overskrift: 'Overskrift',
            illustrasjon: '',
            beskrivelse: 'Dette er beskrivelsen av tjenesten vår.'
          },
          {
            overskrift: 'Overskrift',
            illustrasjon: '',
            beskrivelse: 'Dette er beskrivelsen av tjenesten vår.'
          },
          {
            overskrift: 'Overskrift',
            illustrasjon: '',
            beskrivelse: 'Dette er beskrivelsen av tjenesten vår.'
          },
          {
            overskrift: 'Overskrift',
            illustrasjon: '',
            beskrivelse: 'Dette er beskrivelsen av tjenesten vår.'
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>

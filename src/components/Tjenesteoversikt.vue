<template>
  <v-container>
    <v-row>
      <v-col v-for="tjeneste in tjenester">
        <v-card height="300px" :to="tjeneste.side">
          <v-card-title>
            <v-icon large left>
              {{ tjeneste.illustrasjon }}
            </v-icon>
            <span>{{ tjeneste.overskrift }}</span>
          </v-card-title>
          <v-card-text class="text-left">{{ tjeneste.beskrivelse }}</v-card-text>
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
            overskrift: 'Bygg og deploy',
            illustrasjon: 'mdi-rocket',
            beskrivelse: 'Automatisere testing, pakking og utrulling av applikasjoner og tjenester.',
            side: {name: 'Bygg'}
          },
          {
            overskrift: 'Sikkerhet',
            illustrasjon: 'mdi-security',
            beskrivelse: 'Sikre applikasjonen med innlogging både for ansatte og innbyggere.',
            side: {name: 'Sikkerhet'}
          },
          {
            overskrift: 'Lagring',
            illustrasjon: 'mdi-database',
            beskrivelse: 'Enkel tilgang på sikker datalagring.',
            side: {name: 'Lagring'}
          },
          {
            overskrift: 'Integrasjoner',
            illustrasjon: 'mdi-math-integral',
            beskrivelse: 'Koble sammen applikasjoner og tjenester med meldingskøer.',
            side: {name: 'Integrasjoner'}
          },
          {
            overskrift: 'Overvåkning',
            illustrasjon: 'mdi-speedometer',
            beskrivelse: 'Bedre kontroll på hvordan applikasjonen din oppfører seg i sanntid med dashboards, varsling og logger.',
            side: {name: 'Overvakning'}
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>

<template>
  <v-container>
    <v-row>
      <v-col v-for="tjeneste in tjenester">
        <v-card height="300px">
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
            illustrasjon: '',
            beskrivelse: 'Automatisere testing, pakking og utrulling av applikasjoner og tjenester.'
          },
          {
            overskrift: 'Sikkerhet',
            illustrasjon: '',
            beskrivelse: 'Sikre applikasjonen med innlogging både for ansatte og innbyggere.'
          },
          {
            overskrift: 'Lagring',
            illustrasjon: '',
            beskrivelse: 'Enkel tilgang på sikker datalagring.'
          },
          {
            overskrift: 'Integrasjoner',
            illustrasjon: '',
            beskrivelse: 'Koble sammen applikasjoner og tjenester med meldingskøer.'
          },
          {
            overskrift: 'Overvåkning',
            illustrasjon: 'mdi-speedometer',
            beskrivelse: 'Bedre kontroll på hvordan applikasjonen din oppfører seg i sanntid med dashboards, varsling og logger.'
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>

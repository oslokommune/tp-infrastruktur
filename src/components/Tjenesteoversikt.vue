<template>
  <v-container class="pr-0 pl-0">
    <v-row no-gutters>
      <v-col v-for="(tjeneste, index) in tjenester">
        <v-card height="300px" :to="tjeneste.side" :key="`tjenesteboks-${index}`" :id="tjeneste.id" flat tile>
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
            id: 'bygg',
            overskrift: 'Bygg og deploy',
            illustrasjon: 'mdi-rocket',
            beskrivelse: 'Automatisere testing, pakking og utrulling av applikasjoner og tjenester.',
            side: {name: 'Bygg'}
          },
          {
            id: 'sikkerhet',
            overskrift: 'Sikkerhet',
            illustrasjon: 'mdi-security',
            beskrivelse: 'Sikre applikasjonen med innlogging både for ansatte og innbyggere.',
            side: {name: 'Sikkerhet'}
          },
          {
            id: 'lagring',
            overskrift: 'Lagring',
            illustrasjon: 'mdi-database',
            beskrivelse: 'Enkel tilgang på sikker datalagring.',
            side: {name: 'Lagring'}
          },
          {
            id: 'integrasjoner',
            overskrift: 'Integrasjoner',
            illustrasjon: 'mdi-math-integral',
            beskrivelse: 'Koble sammen applikasjoner og tjenester med meldingskøer.',
            side: {name: 'Integrasjoner'}
          },
          {
            id: 'overvakning',
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

<style scoped lang="scss">

  @import '~@tuuturu/styling/style';
  #bygg{
    background: $red;
  }
  #sikkerhet{
    background: $green-light
  }
  #lagring{
    background: $beige-dark
  }
  #integrasjoner{
    background: $yellow
  }
  #overvakning{
    background: $blue
  }

</style>

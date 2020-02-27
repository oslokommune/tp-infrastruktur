<template>
  <div class="home">
    <v-breadcrumbs class="pa-0" :items="items"></v-breadcrumbs>
    <h2 class="text-left"><v-icon large>mdi-security</v-icon> Sikkerhet</h2>

    <img class="float-right" src="../assets/add-mapper.png" width="300px">
    <h3 class="text-left mb-1">Ansattautentisering – Keycloak</h3>
    <p class="text-left">Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere.
      Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Om en
      ansatt skal logge inn må det kontrolleres organisasjonstilhørighet. Sjekken lages i appen og ikke Keycloak.</p>

    <img class="float-right" src="../assets/default-groups.png" width="300px">
    <h3 class="text-left mb-1">Innbyggerautentisering – Keycloak</h3>
    <p class="text-left">Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere.
      Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Innbyggere
      videresendes til ID-porten.</p>
  </div>
</template>

<script>
  export default {
    name: 'Sikkerhet',
    data: () => ({
      items: [
        {
          text: 'Infrastruktur',
          disabled: false,
          to: "/"
        },
        {
          text: 'Sikkerhet',
          disabled: true
        }
      ]
    })
  }
</script>

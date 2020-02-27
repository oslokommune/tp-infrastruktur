<template>
    <div class="home">
        <v-breadcrumbs :items="items"></v-breadcrumbs>

        <h1 class="text-left">Bygg og deploy</h1>

        <h2 class="text-left">Versjonskontroll - Github</h2>

        <p class="text-left">Git og GitHub er et verktøy for versjonskontroll der man kan behandle og ble gjennom kode
            og informasjon lastet opp av deg selv og andre. GitHub er nyttig når man jobber flere på samme prosjekt.
            Versjonskontrollen gjør det mulig å gå tilbake til tidligere versjoner dersom noe går galt.</p>

        <h2 class="text-left">Jenkins</h2>

        <p class="text-left">Det er installert en versjon av Jenkins i Kubernetes-clusteret k8s-test.
            En kan gå inn på Jenkins Dashboard for ITAS for å se på aktiviteten på byggserveren.
            Opplegget rundt bygg er bassert på at Github-organisajonene registreres i Jenkins, og at det opprettes en
            Jenkinsfile i rot-katalogen på de repositoriene som skal bygges. Trigging av bygg skjer ved hjelp av
            webhooks. Når det skjer endringer i et repository vil Jenkins bli varslet og et nytt bygg blir startet.</p>


        <h2 class="text-left">Mediebibliotek – Nexus</h2>

        <p class="text-left">Et verktøy for håndtering av kompilert kode, docker containere, artefakter mm. Nexus brukes
            bl. annet av jenkins for å laste opp docker containere og/eller kompilert kode etter automatisk bygg, og av
            kubernetes for å hente containere ved deploy.</p>

    </div>
</template>

<script>
    export default {
        name: 'Bygg',
        data: () => ({
            items: [
                {
                    text: 'Infrastruktur',
                    disabled: false,
                    to: "/"
                },
                {
                    text: 'Bygg og deploy',
                    disabled: true
                }
            ]
        })
    }
</script>

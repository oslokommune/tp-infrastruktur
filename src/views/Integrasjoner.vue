<template>
    <div class="home">
        <v-breadcrumbs class="pa-0" :items="items"></v-breadcrumbs>

        <h1 class="text-left">Integrasjoner</h1>

        <h2 class="text-left">Meldingshåndtering – ActiveMQ</h2>

        <p class="text-left">Meldingsbuss for tjenester som kommuniserer med komponenter driftet hos Oslo kommune.
            Løsningen har asynkron meldingsleveranse og er satt opp med feilhåndteringstiltak om noe skulle gå galt.
            Tjenesten kommer med en management konsoll i form av en webapplikasjon, hvor meldinger, køer og topics kan
            bli vedlikeholdt.</p>

    </div>
</template>

<script>
    export default {
        name: 'Integrasjoner',
        data: () => ({
            items: [
                {
                    text: 'Infrastruktur',
                    disabled: false,
                    to: "/"
                },
                {
                    text: 'Integrasjoner',
                    disabled: true
                }
            ]
        })
    }
</script>

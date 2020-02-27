<template>
    <div class="home">
        <v-breadcrumbs class="pa-0" :items="items"></v-breadcrumbs>
        <h2 class="text-left"><v-icon large>mdi-speedometer</v-icon> Overvåkning</h2>

        <h3 class="text-left">Dashboards - Grafana</h3>

        <p class="text-left">Overvåkningsløsning for komponenter som kjører på kjøremiljøene driftet av Oslo kommune.
            Løsningen består av et dashboard i Grafana, og en Slack-app som varsler om hendelser – både overvåkning- og
            loggvarsler. Målgruppen er utviklerteam i Oslo kommune, per i dag begrenset til team som benytter Oslo
            kommune sin tjenesteplattform. </p>

        <h3 class="text-left">Metrics - Prometheus</h3>

        <p class="text-left">Metrics er tallbaserte data som beskriver en egenskap ved et system på et gitt tidspunkt.
            Ved å undersøke ulike metrics om et system, og sjekke hvordan verdiene forandrer seg over tid, kan man få et
            godt innblikk i hvordan systemet oppfører seg.</p>

        <h3 class="text-left">Historiske besøksdata</h3>
        <p class="text-left"><a href="https://apis.k8s-test.oslo.kommune.no/katalog/data/besokshistorikk-tjenester">Datasett</a> med statistikk over unike besøk per tjeneste</p>
    </div>
</template>

<script>
    export default {
        name: 'Overvåkning',
        data: () => ({
            items: [
                {
                    text: 'Infrastruktur',
                    disabled: false,
                    to: "/"
                },
                {
                    text: 'Overvåkning',
                    disabled: true
                }
            ]
        })
    }
</script>

<template>
    <div class="home">
        <v-breadcrumbs class="pa-0" :items="items"></v-breadcrumbs>
        <h2 class="text-left"><v-icon large>mdi-database</v-icon> Lagring</h2>

        <h3 class="text-left">Fillagring – Minio</h3>

        <p class="text-left">En "komponent" vi tilbyr som skal gjøre det enkelt for hvert enkelt team å spinne opp en
            fillagringstjeneste i sine egne namespaces, basert på MinIO. Denne kan brukes i stedet for dokudb.</p>

    </div>
</template>

<script>
    export default {
        name: 'Lagring',
        data: () => ({
            items: [
                {
                    text: 'Infrastruktur',
                    disabled: false,
                    to: "/"
                },
                {
                    text: 'Lagring',
                    disabled: true
                }
            ]
        })
    }
</script>

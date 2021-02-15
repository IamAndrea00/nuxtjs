<template>
    <div>
        <div v-for="notizia in notizie" :key="notizia.id">
            <v-card elevation="2" outlined>
                {{notizia.titolo}}
                <br/>
                {{notizia.testo}}
                <v-img
                :lazy-src="`data/${notizia.immagine}`"
                max-height="150"
                max-width="250"
                :src="`data/${notizia.immagine}`"
                ></v-img>
            </v-card>
        </div>
    </div>
</template>

<script>
import notizieJSON from "../data/notizieMock.json"
export default {
    data () {
    return {
      regioni: [],
      notizie: notizieJSON
    }
  },
  methods: {
    async get() {
      this.regioni = await this.$axios.$get("https://sistemamusealenazionale.beniculturali.it/api/v1/anagraficamusei/unitaterritoriali/pubblica/regioni")    
    }
  }
}
</script>
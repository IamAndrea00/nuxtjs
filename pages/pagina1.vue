<template>
  <div>
      <v-btn
        elevation="2"
        @click="get()"
      >GET</v-btn>
      <br />
      <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Codice
            </th>
            <th class="text-left">
              Nome
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in regioni"
            :key="item.codice"
          >
            <td>{{ item.codice }}</td>
            <td>{{ item.nome }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
    data () {
    return {
      regioni: [],
    }
  },
  methods: {
    async get() {
      this.regioni = await this.$axios.$get("https://sistemamusealenazionale.beniculturali.it/api/v1/anagraficamusei/unitaterritoriali/pubblica/regioni")    
    }
  }
}
</script>
<template>
  <v-main>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
         <start-game />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import StartGame from "@/components/StartGame.vue";

@Component({
  components: {
    StartGame,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <v-main>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
         <game />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Game from "@/components/Game.vue";

@Component({
  components: {
    Game,
  },
})
export default class GameView extends Vue {}
</script>

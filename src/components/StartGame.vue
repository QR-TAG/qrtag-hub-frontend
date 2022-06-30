<template>
  <v-card>
    <v-card-title class="headline primary white--text">START GAME</v-card-title>
    <v-card-actions class="d-flex justify-center py-8">
      <v-btn @click="startGame" color="primary" x-large>START</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import socketService from "@/services/socket";

@Component
export default class StartGame extends Vue {
  /* DATA */

  private socketService = socketService;

  /* METHODS */

  public startGame(): void {
    this.socketService.startSetup();
  }

}
</script>

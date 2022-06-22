<template>
  <v-card>
    <v-card-title class="headline primary white--text">SETUP GAME</v-card-title>
    <span v-for="gun of guns" :key="gun">{{gun}}</span>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import socketService from "@/services/socket";

@Component
export default class Setup extends Vue {
  /* DATA */

  private socketService = socketService;

  /* GETTERS */

  public get guns(): string[] {
    return this.$store.state.guns;
  }

 
}
</script>

<template>
  <v-card>
    <v-card-title class="headline primary white--text">GAME</v-card-title>
    <v-container class="my-4">
      <v-row class="d-flex align-center" v-for="user of users" :key="user.gunId">
        <v-col :cols="6">
          <v-text-field :value="user.username" label="Username" />
        </v-col>
        <v-col :cols="6">
          <v-text-field :value="user.life" label="Vita" />
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center" v-if="gameFinished">
        <v-col :cols="12"> GAME FINISHED </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import socketService from "@/services/socket";

import { User } from "@/store";

@Component
export default class Game extends Vue {
  /* GETTERS */

  public get users(): User[] {
    return this.$store.state.users;
  }

  public get gameFinished(): boolean {
    return this.$store.state.gameFinished;
  }

  /* CREATED */

  public mounted(): void {
    const winner = this.users[0];
    const loser = this.users[1];

    setTimeout(() => {
      socketService.tshirtShot(winner.gunId, loser.tshirtId as string);
    }, 1000);
    setTimeout(() => {
      socketService.tshirtShot(winner.gunId, loser.tshirtId as string);
    }, 2000);
    setTimeout(() => {
      socketService.tshirtShot(winner.gunId, loser.tshirtId as string);
    }, 3000);
    setTimeout(() => {
      socketService.tshirtShot(winner.gunId, loser.tshirtId as string);
    }, 4000);
    setTimeout(() => {
      socketService.tshirtShot(loser.gunId, winner.tshirtId as string);
    }, 4500);
    setTimeout(() => {
      socketService.tshirtShot(winner.gunId, loser.tshirtId as string);
    }, 5000);
  }
}
</script>

<template>
  <v-card>
    <v-card-title class="headline primary white--text">GAME</v-card-title>
    <v-container class="my-4">
      <v-row class="d-flex align-center" v-for="user of users" :key="user.taggerId">
        <v-col :cols="6">
          <v-text-field :value="user.username" label="Username" />
        </v-col>
        <v-col :cols="6">
          <v-text-field :value="user.life" label="Vita" />
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center" v-if="gameFinished">
        <v-col :cols="12">GAME FINISHED</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { User } from "@/types";

@Component
export default class Game extends Vue {
  /* GETTERS */

  public get users(): User[] {
    return this.$store.state.users;
  }

  public get gameFinished(): boolean {
    return this.$store.state.gameFinished;
  }
}
</script>

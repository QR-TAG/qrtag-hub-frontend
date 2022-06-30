<template>
  <v-card>
    <v-card-title class="headline primary white--text">SETUP GAME</v-card-title>
    <v-container class="my-4">
      <v-row class="d-flex align-center" v-for="tagger of taggers" :key="`${tagger}_tagger`">
        <v-col :cols="10">
          <v-text-field :value="tagger" label="Tagger ID" />
        </v-col>
        <v-col :cols="2">
          <v-btn color="primary" @click="addTagger(tagger)">ADD</v-btn>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center" v-for="user of users" :key="`${user.taggerId}_user`">
        <v-col :cols="4">
          <v-text-field :value="user.taggerId" label="Tagger ID" />
        </v-col>
        <v-col :cols="4">
          <v-text-field :value="user.username" label="Username" />
        </v-col>
        <v-col :cols="4">
          <v-text-field :value="user.tshirtId" label="Tshirt" />
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="startGame">LET'S GO MARIO</v-btn>
    </v-card-actions>

    <v-dialog v-model="showDialog" width="500">
      <v-card>
        <v-card-title class="text-h5 accent lighten-2">Add username for {{ selectedTagger }}</v-card-title>

        <v-card-text>
          <v-text-field v-model="username" label="Username" />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="addUser">ADD</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import socketService from "@/services/socket";
import { User } from "@/types";

@Component
export default class Setup extends Vue {
  /* DATA */

  private socketService = socketService;
  private selectedTagger: string | null = null;
  private username = "";
  private showDialog = false;

  /* GETTERS */

  public get users(): User[] {
    return this.$store.state.users;
  }

  public get taggers(): string[] {
    return this.$store.state.taggers.filter((tagger: string) => !this.users.find((user) => user.taggerId === tagger));
  }

  /* METHODS */

  public addTagger(tagger: string): void {
    this.selectedTagger = tagger;
    this.showDialog = true;
  }

  public addUser(): void {
    const taggerId = this.selectedTagger as string;
    this.socketService.addUser(taggerId, this.username);
    this.selectedTagger = null;
    this.username = "";
    this.showDialog = false;
  }

  public startGame(): void {
    this.socketService.startGame();
  }
}
</script>

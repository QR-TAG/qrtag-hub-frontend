<template>
  <v-card>
    <v-card-title class="headline primary white--text">SETUP GAME</v-card-title>
    <v-container class="my-4">
      <v-row class="d-flex align-center" v-for="gun of guns" :key="`${gun}_gun`">
        <v-col :cols="10">
          <v-text-field :value="gun" label="Tagger ID" />
        </v-col>
        <v-col :cols="2">
          <v-btn color="primary" @click="addGun(gun)">ADD</v-btn>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center" v-for="user of users" :key="`${user.gunId}_user`">
        <v-col :cols="4">
          <v-text-field :value="user.gunId" label="Tagger ID" />
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
        <v-card-title class="text-h5 accent lighten-2">Add username for {{ selectedGun }}</v-card-title>

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
import { User } from "@/store";

@Component
export default class Setup extends Vue {
  /* DATA */

  private socketService = socketService;
  private selectedGun: string | null = null;
  private username = "";
  private showDialog = false;

  /* GETTERS */

  public get users(): User[] {
    return this.$store.state.users;
  }

  public get guns(): string[] {
    return this.$store.state.guns.filter((gun: string) => !this.users.find((user) => user.gunId === gun));
  }

  /* METHODS */

  public addGun(gun: string): void {
    this.selectedGun = gun;
    this.showDialog = true;
  }

  public addUser(): void {
    const gunId = this.selectedGun as string;

    this.socketService.addUser(gunId, this.username);
    this.selectedGun = null;
    this.username = "";
    this.showDialog = false;

    setTimeout(() => {
      this.socketService.announceTshirt(gunId, "" + Math.random());
    }, 2000);
  }

  public startGame(): void {
    this.$router.push('/game');
  }
}
</script>

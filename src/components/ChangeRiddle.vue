<template>
  <v-card>
    <v-card-title class="headline primary white--text">Configuration</v-card-title>

    <v-card-text>
      <div class="px-8 pt-16 pb-4">
        <v-text-field label="Riddle" v-model="riddle" />
        <v-text-field label="QR-Code" v-model="qrcode" />
      </div>
    </v-card-text>

    <v-card-actions class="d-flex justify-center py-8">
      <v-btn @click="updateRiddle" :disabled="!isValid" color="primary" x-large>SAVE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ChangeRiddle extends Vue {
  /* DATA */

  public riddle = "";
  public qrcode = "";

  /* GETTERS */

  get isValid(): boolean {
    return !!this.riddle && !!this.qrcode;
  }

  get body() {
    return {
      riddle: this.riddle,
      qrcode: this.qrcode,
    };
  }

  /* METHODS */

  public async updateRiddle(): Promise<void> {
    if (!this.isValid) {
      return;
    }

    await fetch("https://qrtag-tum.herokuapp.com/riddle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.body),
    });
  }

  /* LIFECYCLE */

  async created(): Promise<void> {
    const response = await fetch("https://qrtag-tum.herokuapp.com/riddle");
    const data = await response.json();
    this.riddle = data.riddle;
    this.qrcode = data.qrcode;
  }
}
</script>

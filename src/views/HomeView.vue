<template>
  <v-main>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
         <change-riddle />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ChangeRiddle from "@/components/ChangeRiddle.vue";

@Component({
  components: {
    ChangeRiddle,
  },
})
export default class HomeView extends Vue {}
</script>

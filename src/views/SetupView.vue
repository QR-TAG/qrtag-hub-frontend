<template>
  <v-main>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
         <setup />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Setup from "@/components/Setup.vue";

@Component({
  components: {
    Setup,
  },
})
export default class SetupView extends Vue {}
</script>

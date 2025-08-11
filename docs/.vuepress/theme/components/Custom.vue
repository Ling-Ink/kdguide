<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello World!')
</script>

<template>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZ3FP3K3"
    height="0" width="0" style="display:none;visibility:hidden">
    </iframe>
  </noscript>
  <div class="my-custom-content">
    {{ message }}
  </div>
</template>

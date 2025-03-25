<template>
    <div bg-black text-white>Hello Coffee</div>
    <div>{{ vitea }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const vitea = ref(import.meta.env.dev)
console.log()
console.log(import.meta.env.DB_PASSWORD) // undefined
</script>
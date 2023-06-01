<template>
  <main class="bg-xxx-base flex h-100">
    <section class="container mx-auto ">
      <div class="grid gap-4 grid-cols-4">
        <h1 class="my-4 col-span-4 font-bold">Colors</h1>
        <div class="rounded bg-xxx-primary p-5">Primary</div>
        <div class="rounded bg-xxx-secondary p-5">Secondary</div>
        <div class="rounded bg-xxx-success p-5">Success</div>
        <div class="rounded bg-xxx-danger p-5">Danger</div>
        <div class="rounded bg-xxx-warning p-5">Warning</div>
        <div class="rounded bg-xxx-info p-5">Info</div>
        <div class="rounded bg-xxx-light p-5">Light</div>
        <div class="rounded bg-xxx-dark p-5">Dark</div>
        <h1 class="my-4 col-span-4 font-bold">Logo</h1>
        <div class="col-span-4  ">
          <img :src="imgUrl" class="w-full" alt="Placeholder" />
        </div>

      </div>
      <div class="mt-5 flex justify-center ">
        <button @click="useDynamicTheme"
            class="block w-full shadow bg-xxx-primary font-bold rounded-2xl p-8 text-white">Change Theme
        </button>
      </div>
    </section>
  </main>


</template>

<script setup>


import {useDynamicTheme} from "~/composables/useDynamicTheme";

const {imgUrl} = useDynamicTheme()

</script>

<style lang="scss" scoped>

</style>

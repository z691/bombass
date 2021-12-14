<template>
  <v-app id ="sandbox">
  <v-app-bar app color="gray">
    <v-row class="align-center">
    <v-col class="align-content-center ma-1">
      <v-btn class="ma-1" @click="$router.push({name : 'Homepage'})" >Hello World</v-btn>
      <v-btn class="ma-1" @click="$router.push({name: 'About'})">About</v-btn>
    </v-col>
    </v-row>
  </v-app-bar>

  <v-main class="app">
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
    <v-footer color="gray" app >
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Bombass Army</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      //HelloWorld,
    },
  }
</script>

<template>
  <v-app id ="sandbox">
  <v-app-bar app color="gray" class="align-content-lg-center">
    <v-row justify="center" >
    <!--<v-col justify="center" class="align-content-center ma-1">-->
      <v-btn-toggle v-for="route in routes":key="route" mandatory class="ma-1">
      <v-btn  @click="$router.push({name: route.name})" >{{route.nameBtn}}</v-btn>
      </v-btn-toggle>

     <!-- <v-btn class="ma-1" @click="$router.push({name: 'About'})">About</v-btn>-->
   <!-- </v-col> -->
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
    data: () =>({
        routes:[
        {
          id: 1,
          name: 'Homepage',
          nameBtn: 'Домашня страница'
        },
      {
        id: 2,
        name: 'About',
        nameBtn: 'О проекте'
      }
    ]
    })
  }
</script>

<style scoped>
.appbar_btns{
  margin: 10px;
}
</style>

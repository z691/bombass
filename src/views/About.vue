<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2" v-for="post in posts":key="post.id" class="ma-0 pa-0">
        <v-card  class="ma-5" shaped  >
          <v-img
              justify="center"
              :src="post.img"
              height="400px"
              width="300px"
          ></v-img>
          <v-card-title v-text="post.name"></v-card-title>
          <v-divider></v-divider>
          <v-card-text >{{post.description}}</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
                text
                color="teal accent-4"
                @click="post.reveal = true"
            >
              Узнать больше
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card
                v-if="post.reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Информация  о {{post.name}}
                </p>
                <p>VK: {{post.vk}} </p>
                <p>Другая инфа: {{post.anotherInfo}} </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                    text
                    shaped
                    color="teal accent-4"
                    @click="post.reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    posts: [
        {
          id: 1,
          name: 'Никита',
          description: 'Иногда пукает',
          img: 'https://sun9-86.userapi.com/impf/c841136/v841136989/13fb8/nvH7-xvbLfg.jpg?size=780x1052&quality=96&sign=ba44c01062db0dece8d76d16329b890c&type=album',
          reveal: false,
          vk: 'https://vk.com/nikitosebasos',
          anotherInfo: 'bla bla bla'
        },
      {
        id: 2,
        name: 'Настя',
        description: 'Всегда жопит',
        img: 'https://sun9-84.userapi.com/impg/TLXTIx1B1dEwZCuUGJO0v3zKNT07bGrf4aqpmA/SztyP7L4HPU.jpg?size=828x1472&quality=96&sign=31b4b19cfd35b66d74e1ce457accdde0&type=album',
        reveal: false,
        vk: 'https://vk.com/ilyasovaanastasia',
        anotherInfo: 'bla bla bla'

      },
      {
        id: 3,
        name: 'Гера',
        description: 'Иногда мявкает',
        img: 'https://sun9-16.userapi.com/impg/DPFcrpV4Lx2zydt78ulyE3VDjQA-xAdf68Reww/GlHYjLsFbEc.jpg?size=1440x1920&quality=95&sign=d52f3191f8c9efe50260958a058731d2&type=album',
        reveal: false,
        vk: 'Нету',
        anotherInfo: 'bla bla bla'

      }
    ]
  })
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>


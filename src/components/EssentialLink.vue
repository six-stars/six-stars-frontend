<template>
  <q-item clickable tag="a" :to="link" exact class="q-mt-md">
    <!-- target="_blank" -->
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" class="text-blue" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user-store'
// import { useUserStore } from '../stores/user-store'

// export default defineComponent({
  const props = defineProps({
  title: {
    type: String,
    required: true
  },

  // caption: {
  //   type: String,
  //   default: ''
  // },

  link: {
    type: String,
    default: ''
    // default: '#'
  },

  icon: {
    type: String,
    default: ''
  }
  })
  name: 'EssentialLink'
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },

  //   // caption: {
  //   //   type: String,
  //   //   default: ''
  //   // },

  //   link: {
  //     type: String,
  //     default: ''
  //     // default: '#'
  //   },

  //   icon: {
  //     type: String,
  //     default= ''
  //   }
  // },
  // setup(){
    const useStore = useUserStore()
    let userType = ref("")

    const check = () => {
      userType.value = useStore.getUser_type
    }
  // },
  onMounted(()=>{
    check();
  })

  // return {
  //   check,

  // }
// })
</script>

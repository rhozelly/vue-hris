<script setup>


</script>

<template>
  <main>
    <div class="leading-normal tracking-normal" id="main-body">
      <div class="flex flex-wrap">
        <Sidebar />
  
        <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">
  
          <Navbar />
  
          <div class="p-6 bg-gray-100 mb-20">
            <Breadcrumbs></Breadcrumbs>
            <router-view></router-view>
          </div>
  
          <Footer />
  
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { mapState } from 'vuex'
  
  import Sidebar from './components/Sidebar.vue'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import Breadcrumbs from './components/Breadcrumbs.vue';

  export default {
    name: 'Dashboard',
    computed: {
      ...mapState(['sideBarOpen'])
    },
    components: {
      Sidebar,
      Navbar,
      Footer,
      Breadcrumbs
    }
  }
  </script>

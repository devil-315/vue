<template>
    <div class="container">
      <Search/>
      <List/>
    </div>
</template>

<script>
import Search from './components/search.vue';
import List from './components/List.vue';
export default {
  name: 'App',
  components:{Search,List}
}
</script>

<template>
  <div class="search-form">
    <input type="text" class="search-field" v-model="searchString" />
    <button class="btn-search" @click="$parent.$refs.catalogRef.filter(searchString)">
      <i class="fas fa-search"></i>
    </button>
    <button class="btn-clear" @click="$parent.$refs.catalogRef.clearFilter()">
      <i class="fas fa-times"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchString: "",
      // reg: /^[a-zа-я]+$/
    };
  }
};
</script>

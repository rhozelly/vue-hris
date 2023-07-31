<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <h1>Employee List</h1>
      {{ tableColumns }}
      <p>{{ toggle }}</p>
    </div>
  </div>
</template>

<script>

import store from '@/store'
import useEmployeeList from './EmployeeList';
import EmployeeStoreModule from '../employeeStoreModule';

export default {
  components: {
   
  },
  setup() {
    const {
      tableColumns,
      toggle
    } = useEmployeeList()
    
    return {
      tableColumns,
      toggle
    }
  },
}

</script>
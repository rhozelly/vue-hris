import store from '@/store'

export default function useEmployeeList() {
  //const userListTable = ref([])

  const tableColumns = [
    { text: 'USER', value: 'fullName' },
    { text: 'EMAIL', value: 'email' },
    { text: 'ROLE', value: 'role', sortable: false },
    { text: 'PLAN', value: 'currentPlan', sortable: false },
    { text: 'STATUS', value: 'status', sortable: false },
    {
      text: 'ACTIONS',
      value: 'actions',
      align: 'center',
      sortable: false,
    },
  ]

  const toggle = true;

  return {
    tableColumns,
    toggle
  }
}
<template>
  <div class="q-pa-md">
    <q-table :data="data" :columns="columns" row-key="name" />
    <br />
    <q-list bordered>
      <q-item
        v-for="singleLeave in leaves"
        :key="singleLeave.id"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section class="q-mr-sm">
          <q-item-label>{{ singleLeave.name }}</q-item-label>
        </q-item-section>

        <q-item-section class="q-ml-sm">
          <q-item-label>{{ singleLeave.leave_remain}}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ singleLeave.status }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <!-- <q-item-label>{{ singleLeave.remarks }}</q-item-label> -->
          <input type="text" v-model="singleLeave.remarks" />
        </q-item-section>

        <!-- <q-item-section side>
          <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
        </q-item-section> -->
      </q-item>

      <q-separator />
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "employee_id",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
          // classes: 'bg-grey-2',
          style: "max-width: 100px",
          headerClasses: "bg-primary text-white",
        },
        {
          name: "001",
          label: "leave_type",
          field: "leave_type",
          sortable: true,
          headerClasses: "bg-primary text-white",
        },
        {
          name: "status",
          label: "status",
          field: "status",
          sortable: true,
          headerClasses: "bg-primary text-white",
        },
      ],
      data: [
        {
          name: "001",
          leave_type: "sick leave",
          status: "pending",
        },
        {
          name: "002",
          leave_type: "casual leave",
          status: "pending",
        },
        {
          name: "004",
          leave_type: "earn leave",
          status: "pending",
        },
        {
          name: "005",
          leave_type: "sick leave",
          status: "pending",
        },
      ],
      leaves: [
        {
          name: "001",
          leave_remain: 15,
          remarks: "",
          user_id: 1,
          status: "pending",
        },
        {
          name: "002",
          leave_remain: 16,
          remarks: "",
          user_id: 1,
          status: "pending",
        },
      ],
    };
  },
};
</script>

<template>
  <q-page>
    <!-- view application  -->
    <q-list bordered>
      <q-item
        v-for="singleLeave in leaves"
        :key="singleLeave.id"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section class="q-mr-sm">
          <q-item-label>{{ singleLeave.date }}</q-item-label>
        </q-item-section>

        <q-item-section class="q-ml-sm">
          <q-item-label>{{ singleLeave.leave_type }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ singleLeave.status }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ singleLeave.remarks }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>
    <!-- dialoughr -->
    <div>
      <q-page-sticky position="bottom-right" :offset="[20,30]">
        <q-btn fab icon="add" color="accent" @click="icon = true" />
      </q-page-sticky>
      <q-dialog v-model="icon">
        <q-card style="width:500px">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Create leave</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input rounded filled v-model="leave_type" label="Leave type" />
              <q-input rounded filled v-model="remarks" label="remarks" />
              <q-input
                rounded
                filled
                v-model="allocate"
                label="allocate_leaves"
              />
              <q-input
                rounded
                filled
                v-model="max_leave"
                label="max-leave"
              />
              <q-input
                rounded
                filled
                v-model="user"
                label="Add user"
              />
              <!-- </q-input> -->
              <!-- <q-select v-model="model" :options="options" label="Standard" /> -->

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      leave_type: "",
      remarks: "",
      allocate: "",max_leave:'',
      user:'',
      leaves: [
        {
          date: "11/10/2020 to 13/10/2020",
          leave_type: "sick",
          remarks: "lorem epsam",
          user_id: 1,
          status: "pending",
        },
        {
          date: "11/10/2020 to 13/10/2020",
          leave_type: "sick",
          remarks: "lorem epsam",
          user_id: 1,
          status: "pending",
        },
      ],
      name: null,
      age: null,
      model: null,
      options: ["sick leave", "casual leave", "earn leave"],
      model1: { from: "2020/07/08", to: "2020/07/17" },
      accept: false,
      icon: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },
  },
};
</script>

<style></style>

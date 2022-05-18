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
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" color="accent" @click="icon = true" />
      </q-page-sticky>
      <q-dialog v-model="icon">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Create Application</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                :value="Object.values(model1).join(' to ')"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="model1" range>
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-select v-model="model" :options="options" label="Standard" />

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
// import { ref } from 'vue';
export default {
  data() {
    return {
      name: null,
      age: null,
      model: null,
      options: ["sick leave", "casual leave", "earn leave"],
      model1: { from: "2020/07/08", to: "2020/07/17" },
      accept: false,
      icon: false,
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

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
  },
};
</script>

<style></style>

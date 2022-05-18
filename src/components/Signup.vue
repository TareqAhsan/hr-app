<template>
  <q-page class='flex flex-center'>
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-primary q-my-md">Please SignUp</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="email"
              />
              <q-input
                square
                filled
                clearable
                v-model="password1"
                type="password"
                label="password"
              />
              <q-input
                square
                filled
                clearable
                v-model="password2"
                type="password"
                label="Retype Passowrd"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              class="full-width"
              label="SignUp"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <router-link to="/login"
              ><span class="text-grey-6"
                >Already have an account ? Login</span
              ></router-link
            >
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email:'',
      password1:'',
      password2:''
    };
  },
};
</script>

<style></style>

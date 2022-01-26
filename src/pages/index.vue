<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="max-w-2xl w-full m-4">
      <q-card-section>
        <div class="text-h6">Mehrwertseuer</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            filled
            v-model="price"
            label="Price (€)"
            lazy-rules
            :rules="[
              val => !isNaN(val) || 'Must be a number',
              val => val > 0 || 'Must at least 0'
            ]"
          />
          <q-toggle v-model="custom" label="Custom percentage" />
          <q-input
            filled
            v-model="percentage"
            label="Percentage (%)"
            lazy-rules
            :disable="!custom"
            :rules="[
              val => !isNaN(val) || 'Must be a number',
              val => val > 0 || 'Must be at least 0',
              val => val < 100 || 'Must be at most 100'
            ]"
          />

          <div>
            <q-btn :loading="loading" label="Calculate" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
      <q-card-section>
        <q-input readonly standout label="Mwst (€)" v-model="mwst">
          <template v-slot:append>
            <q-btn round dense flat icon="content_paste" @click="copy" />
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { mwstApi } from 'src/api/mwst';
import { ref } from 'vue';
import { copyToClipboard, Notify } from 'quasar'

const loading = ref(false);
const price = ref<number>();
const mwst = ref(0);
const custom = ref(false);
const percentage = ref(19);

const onSubmit = async () => {
  if (price.value) {
    try {
      loading.value = true;
      mwst.value = await mwstApi.getMwst(price.value, custom.value ? percentage.value : undefined);
    } catch (e) {
      Notify.create({
        type: 'negative',
        position: 'top',
        message: 'Something went wrong',
      })
    } finally {
      loading.value = false;
    }
  }
};

const copy = () => {
  copyToClipboard(mwst.value.toString());
};
</script>


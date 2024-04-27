<script setup>

import { onMounted, ref } from 'vue';
import useAPI from '@/composables/useAPI'
import { useRoute, useRouter } from 'vue-router';

const { api } = useAPI()
const route = useRoute()
const meal = ref({})

onMounted(() => {
    api.get('lookup.php?i?i=${route.params.id}')
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})

</script>

<template>
    <div class="">
        {{ meal }}

    </div>

</template>
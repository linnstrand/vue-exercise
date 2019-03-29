<template>
  <div class="flex-grow w-48 my-3 mx-1 p-1 border border-grey shadow">
    <h4 class="font-normal capitalize py-1">{{ group.name }}</h4>
    <ul class="text-xs list-reset">
      <li
        v-for="(exercise, index) in group.exercises"
        :key="index"
        class="exercise-label bg-grey-lighter border p-1 inline-block hover:bg-blue-lightest"
      >{{ exercise.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class ExerciseListGroup extends Vue {
  @Prop({ required: true }) readonly groupedOn!: string;
  @Prop({ required: true }) readonly group!: Object;
}
</script>

<style>
</style>

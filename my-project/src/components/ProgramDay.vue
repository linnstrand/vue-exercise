<template>
  <div class="week-day">
    <h4>{{day}}</h4>
    <div class="day-exercise" v-for="(exercise, index) in exercises" :key="id">{{exercise.name}}</div>
    <div class="empty-day"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Exercise } from '../models/Exercise';
@Component
export default class ProgramDay extends Vue {
  @Prop({ required: true }) readonly day!: string;
  @Prop() readonly exercises!: Exercise[];
}
</script>

<style scoped>
.empty-day {
  min-height: 3em;
  background-color: #cffced;
}
</style>

<template>
  <div>
    <h4 class="mb-3">Equipment Options</h4>
    <button @click="showEquipment = !showEquipment">
      <span v-show="!showEquipment">Show</span>
      <span v-show="showEquipment">Hide</span>
    </button>
    <div v-show="showEquipment">
      <form id="newEquipmentForm" class="mb-5" @submit="newFormCheck">
        <label class="block mb-2" for="new-equipment">New</label>
        <input
          id="new-equipment"
          v-model="newEquipment"
          class="border rounded py-2 px-4 leading-tight"
          type="text"
        >
        <button
          class="border rounded py-2 px-4 ml-2 leading-tight"
          type="submit"
          @click="newFormCheck($event)"
        >Add</button>
        <div
          v-if="saveSuccess"
          class="inline-block border rounded py-2 px-4 ml-2 leading-tight border border-green text-green"
        >Success!</div>
      </form>
      <div v-if="equipment.length > 0">
        <h4 class="block mb-2">Edit</h4>
        <div v-for="(item, index) in equipment" :key="index" class="mb-2">
          <input
            id="new-equipment"
            v-model="item.name"
            class="border rounded py-2 px-4 leading-tight"
            type="text"
          >
          <button
            class="border rounded py-2 px-4 ml-2 leading-tight"
            type="button"
            @click="editFormCheck(item)"
          >Edit</button>
          <button
            class="border rounded py-2 px-4 ml-2 leading-tight border-red text-red"
            type="button"
            @click="deleteItem(item)"
          >Delete</button>
          <div
            v-if="editSuccess === item.name"
            class="inline-block border rounded py-2 px-4 ml-2 leading-tight border border-green text-green"
          >Success!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class EquipmentEdit extends Vue {
  created() {
    this.$store.dispatch('equipment/getAll');
  }
  get equipment() {
    return this.$store.state.equipment.equipment || [];
  }

  private newEquipment = false;
  private editSuccess = false;
  private saveSuccess = false;
  private showEquipment = false;

  newFormCheck(e: Event) {
    // if (this.newEquipment && this.isUnique(this.newEquipment)) {
    //   this.saveSuccess = false;
    //   this.create({ name: this.newEquipment }).then(result => {
    //     if (result) {
    //       this.saveSuccess = true;
    //     }
    //   });
    // }
    // e.preventDefault();
    // this.newEquipment = false;
  }

  // editFormCheck(e) {
  // if (e.name && this.isNotDuplicate(e.name)) {
  //   this.editSuccess = false;
  //   this.edit(e).then(result => {
  //     if (result) {
  //       this.editSuccess = e.name;
  //     }
  //   });
  // }
  // }

  // deleteItem(equipment) {
  //   this.delete(equipment._id);
  // }

  // isUnique(equipment) {
  //   return !this.equipment.some(e => e.name === equipment);
  // }

  // isNotDuplicate(equipment) {
  //   return !this.equipment.find(e => e.name === equipment).length < 2;
  // }
}
</script>

<style>
</style>

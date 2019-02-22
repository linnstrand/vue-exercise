<template>
  <div>
    <h4 class="mb-3">Equipment Options</h4>
    <button @click="showEquipment = !showEquipment">
      <span v-show="!showEquipment">Show</span>
      <span v-show="showEquipment">Hide</span>
    </button>
    <div v-show="showEquipment">
      <form class="mb-5" id="newEquipmentForm" @submit="newFormCheck">
        <label class="block mb-2" for="new-equipment">New</label>
        <input class="border rounded py-2 px-4 leading-tight" id="new-equipment" type="text" v-model="newEquipment">
        <button class="border rounded py-2 px-4 ml-2 leading-tight" type="submit" @click="newFormCheck($event)">Add</button>
        <div class="inline-block border rounded py-2 px-4 ml-2 leading-tight border border-green text-green" v-if="saveSuccess">Success!</div>
      </form>
      <div v-if="equipment.length > 0">
        <h4 class="block mb-2">Edit</h4>
        <div class="mb-2" v-for="(item, index) in equipment" :key="index">
          <input class="border rounded py-2 px-4 leading-tight" id="new-equipment" type="text" v-model="item.name">
          <button class="border rounded py-2 px-4 ml-2 leading-tight" type="button" @click="editFormCheck(item)">Edit</button>
          <button class="border rounded py-2 px-4 ml-2 leading-tight border-red text-red" type="button" @click="deleteItem(item)">Delete</button>
          <div class="inline-block border rounded py-2 px-4 ml-2 leading-tight border border-green text-green" v-if="editSuccess === item.name">Success!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import equipmentMixin from '../get-equipment-mixin';

export default {
  data() {
    return {
      newEquipment: null,
      editSuccess: '',
      saveSuccess: null,
      showEquipment: false,
    };
  },
  mixins: [equipmentMixin],
  methods: {
    ...mapActions('equipment', ['create']),
    ...mapActions('equipment', ['edit']),
    ...mapActions('equipment', ['delete']),
    newFormCheck(e) {
      if (this.newEquipment && this.isUnique(this.newEquipment)) {
        this.saveSuccess = null;
        this.create({ name: this.newEquipment }).then((result) => {
          if (result) {
            this.saveSuccess = true;
          }
        });
      }
      e.preventDefault();
      this.newEquipment = '';
    },
    editFormCheck(e) {
      if (e.name && this.isNotDuplicate(e.name)) {
        this.editSuccess = '';
        this.edit(e).then((result) => {
          if (result) {
            this.editSuccess = e.name;
          }
        });
      }
    },
    deleteItem(equipment) {
      this.delete(equipment._id);
    },
    isUnique(equipment) {
      return !this.equipment.some(e => e.name === equipment);
    },
    isNotDuplicate(equipment) {
      return !this.equipment.find(e => e.name === equipment).length < 2;
    },
  },
};
</script>

<style>
</style>

<template>
  <div class="admin">
    <div class="content">
      <h4 class="mb-3">Admin Equipment Options</h4>
      <form class="mb-5" id="newEquipmentForm" @submit="newFormCheck">
        <label class="block mb-2" for="new-equipment">New</label>
        <input
          class="border rounded py-2 px-4 leading-tight"
          id="new-equipment"
          type="text"
          v-model="newEquipment"
        >
        <button
          class="border rounded py-2 px-4 ml-2 leading-tight"
          type="submit"
          @click="newFormCheck($event)"
        >Add</button>
      </form>
      <div v-if="equipment.length > 0">
        <h4 class="block mb-2">Edit</h4>
        <div class="mb-2" v-for="(item, index) in equipment" :key="index">
          <input
            class="border rounded py-2 px-4 leading-tight"
            id="new-equipment"
            type="text"
            v-model="item.name"
          >
          <button
            class="border rounded py-2 px-4 ml-2 leading-tight"
            type="button"
            @click="editFormCheck(item)"
          >Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'admin',
  data() {
    return {
      newEquipment: null,
    };
  },
  created() {
    this.$store.dispatch('exercises/getEquipment');
  },
  computed: {
    equipment() {
      return this.$store.state.exercises.equipment || [];
    },
  },

  methods: {
    ...mapActions('exercises', ['saveEquipment']),
    ...mapActions('exercises', ['editEquipment']),
    newFormCheck(e) {
      if (this.newEquipment && this.isUnique(this.newEquipment)) {
        this.saveEquipment({ name: this.newEquipment });
      } else {
        e.preventDefault();
      }
    },
    editFormCheck(e) {
      if (e.name && this.isNotDuplicate(e.name)) {
        this.editEquipment(e).then((result) => {
          debugger;
        });
      }
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

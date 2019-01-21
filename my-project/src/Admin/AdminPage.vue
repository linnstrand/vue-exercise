<template>
  <div class="admin">
    <h1>Site Administration</h1>
    <div class="flex content">
      <div class="flex-1">
        <EquipmentEdit></EquipmentEdit>
      </div>
      <div class="flex-1">
        <ExercisesEdit></ExercisesEdit>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ExercisesEdit from "./ExercisesEdit.vue";
import EquipmentEdit from "./EquipmentEdit.vue";

export default {
  name: "admin",
  components: { EquipmentEdit, ExercisesEdit },
  data() {
    return {
      newEquipment: null,
      editSuccess: "",
      saveSuccess: null,
      showEquipment: false,
      showExercises: false
    };
  },
  created() {
    this.$store.dispatch("equipment/getAll");
  },
  computed: {
    equipment() {
      return this.$store.state.equipment.equipment || [];
    }
  },

  methods: {
    ...mapActions("equipment", ["create"]),
    ...mapActions("equipment", ["edit"]),
    ...mapActions("equipment", ["delete"]),
    newFormCheck(e) {
      if (this.newEquipment && this.isUnique(this.newEquipment)) {
        this.saveSuccess = null;
        this.create({ name: this.newEquipment }).then(result => {
          if (result) {
            this.saveSuccess = true;
          }
        });
      }
      e.preventDefault();
      this.newEquipment = "";
    },
    editFormCheck(e) {
      if (e.name && this.isNotDuplicate(e.name)) {
        this.editSuccess = "";
        this.edit(e).then(result => {
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
    }
  }
};
</script>

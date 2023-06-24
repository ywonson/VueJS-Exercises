import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },
  template: `
  <section class="space-y-6">
  <AssignmentList :assignments_prop="filters.inprogress" title="In prograss"></AssignmentList>
  <AssignmentList :assignments_prop="filters.incomplete" title="in completance"></AssignmentList>

  <div class="border border-gray-600 text-black">
 <form @submit.prevent="add">
 <input v-model="newassignment" placeholder="New assignment.." class="p2"/>
 <button type="submit" class="bg-white p-2 border-l">Add</button>
 </form>
 </div>
  </section>
  `,

  data() {
    return {
      assignments: [
        { name: "vue js", complete: false, id: 1 },
        { name: "computer science", complete: false, id: 2 },
        { name: "cyber security", complete: false, id: 3 },
      ],
      newassignment: "helle",
    };
  },
  // computed: {
  //   completeAssignments() {
  //     return this.assignments.filter((a) => a.complete);
  //   },

  //   progressAssignments() {
  //     return this.assignments.filter((a) => !a.complete);
  //   },
  // },
  computed: {
    filters() {
      return {
        inprogress: this.assignments.filter((a) => !a.complete),
        incomplete: this.assignments.filter((a) => a.complete),
      };
    },
  },
  methods: {
    add() {
      //alert(this.newassignment);
      this.assignments.push({
        name: this.newassignment,
        complete: false,
        id: this.assignments.length + 1,
      });
      this.newassignment = "";
    },
  },
};

import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },
  template: `
  <section class="space-y-6">
  <AssignmentList :assignments_prop="filters.inprogress" title="In prograss"></AssignmentList>
  <AssignmentList :assignments_prop="filters.incomplete" title="in completance"></AssignmentList>
  </section>
  `,

  data() {
    return {
      assignments: [
        { name: "vue js", complete: false, id: 1 },
        { name: "computer science", complete: false, id: 2 },
        { name: "cyber security", complete: false, id: 3 },
      ],
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
        inprogress: this.assignments.filter((a) => a.complete),
        incomplete: this.assignments.filter((a) => !a.complete),
      };
    },
  },
};

export default {
        data() {
            return {
                assignments: [
                    { name: "vue js", complete: false, id: 1 },
                    { name: "computer science", complete: false, id: 2 },
                    { name: "cyber security", complete: false, id: 3 },
                ],
                
            }
        },
        computed: {
            completeAssignments() {
                return this.assignments.filter(a => a.complete);
            }, 

            progressAssignments() {
                return this.assignments.filter(a => ! a.complete);
            }, 
        }
    }


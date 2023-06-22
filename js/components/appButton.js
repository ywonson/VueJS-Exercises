export default {
template: `<button class="bg-green-200 hover:bg-green-400 border rounded px-4 py-2 disabled:cursor-not-allowed" :disabled="processing">
                        <slot />
                        </button>`,
data() {
                        return{
                            processing: false,
                        };
                    },

props: {
    type: {
        type: String,
        default: "normal",
    }
    
},
}
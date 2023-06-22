export default {
template: `<button 
            :class="{
                'px-4 py-2 disabled:cursor-not-allowed' : true,
                'bg-green-200 hover:bg-green-400 border rounded' : type === 'normal',
            }"
            :disabled="processing">
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
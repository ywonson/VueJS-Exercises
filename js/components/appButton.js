export default {
template: `<button 
            :class="{
                'px-4 py-2 disabled:cursor-not-allowed' : true,
                'is-loading' : processings,
                'bg-green-200 hover:bg-green-400 border rounded' : type === 'normal',
                
            }"
            :disabled="processings">
                <slot />
            </button>`,
// data() {
//                         return{
//                             waitforit: false,
//                         };
//                     },




props: {
    type: {
        type: String,
        default: "normal",
    },
    processings: {type: Boolean, default: false},
},
}
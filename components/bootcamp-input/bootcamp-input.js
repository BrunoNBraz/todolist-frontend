export default{
    name: "bootcamp-input",
    data(){
        return{
            valueInput: "",
            state: 'default',
            txtPlaceHolder: "type some funny tasks!",
            errorMessage: 'No more items, please!'
        }
    },
    props:{
        itemsList:{
            type: Array,
            required: true
        }
    },
    watch:{
        itemsList(newValue, oldValue){
            this.state = newValue.length > 6 ? 'warning' : 'default';
        }
    },
    computed:{
        getMessagePlaceHolder(){
            return this.state = 'default' ? this.txtPlaceHolder : this.errorMessage;
        }
    },
    methods: {
        addItemList(){
            this.$emit('addItemList', this.valueInput);
            this.valueInput = '';
        }
    }
}
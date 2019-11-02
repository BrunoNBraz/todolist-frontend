import BootcampInput from "~/components/bootcamp-input/bootcamp-input.vue";
import BootcampList from "~/components/bootcamp-list/bootcamp-list.vue";
export default{
    name: 'index-todolist',
    data(){
        return{
            itemsList: [], 
        }
    },
    components: {
        BootcampInput,
        BootcampList
    },

    methods:{
        addItemList(value){
            this.itemsList.push({
                _id: 1,
                description: value,
                cheked: true
            })
            console.log('registrando dados', this.itemsList);
        }
    }
}
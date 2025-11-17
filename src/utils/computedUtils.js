import { 
    computed 
} from 'vue';


export function myDemo(Message) {
    const dome = computed(() => {
        return '+++abcd+++' + Message.value;
    });
    return dome;
}
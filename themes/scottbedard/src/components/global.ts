import Vue, { VueConstructor } from 'vue';
import { Map } from '@/types';

//
// imports
//
import marginComponent from './containers/margin.vue';
import buttonComponent from './ui/button.vue';

//
// global components
//
const globalComponents: Map<VueConstructor<Vue>> = {
    'v-button': buttonComponent,
    'v-margin': marginComponent,
};

export default globalComponents;

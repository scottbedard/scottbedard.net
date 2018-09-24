import Vue, { VueConstructor } from 'vue';
import { Map } from '@/types';

//
// imports
//
import marginComponent from './containers/margin.vue';

//
// global component registration
//
const globalComponents: Map<VueConstructor<Vue>> = {
    'v-margin': marginComponent,
};

export default globalComponents;

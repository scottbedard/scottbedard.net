import buttonComponent from './ui/button.vue';
import cardComponent from './ui/card.vue';
import fadeTransitionComponent from './transitions/fade.vue';
import marginComponent from './containers/margin.vue';

//
// global components
//
export default {
    //
    // containers
    //
    'v-margin': marginComponent,

    //
    // transitions
    //
    'v-fade-transition': fadeTransitionComponent,

    //
    // ui
    //
    'v-button': buttonComponent,
    'v-card': cardComponent,
};

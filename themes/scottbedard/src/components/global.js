import buttonComponent from './ui/button.vue';
import cardComponent from './ui/card.vue';
import fadeTransitionComponent from './transitions/fade.vue';
import marginComponent from './containers/margin.vue';
import pageComponent from './containers/page.vue';

//
// global components
//
export default {
    //
    // containers
    //
    'v-margin': marginComponent,
    'v-page': pageComponent,

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

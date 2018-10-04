import axios from 'axios';

//
// boot up our application
//
import '@/app/boot';

//
// define global helpers
//
import './helpers';

//
// before each test
//
beforeEach(() => {
    // reset all axios stubs
    axios.reset();
});

import { createApp } from 'vue'
import App from './App.vue'
import routers from "./routes"


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAddressBook, faBed,  faContactBook, faDroplet, faHospital, faSearchLocation, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faHospital,faAddressBook,faBed,faContactBook,faDroplet,faSearchLocation)


createApp(App).use(routers).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import routers from "./routes"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAddressBook, faBed,  faContactBook, faDroplet, faHospital, faPhone, faSearchLocation, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faHospital,faAddressBook,faBed,faContactBook,faDroplet,faSearchLocation,faPhone)
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const app = createApp(App)
app.use(VueSidebarMenu)



createApp(App).use(routers).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

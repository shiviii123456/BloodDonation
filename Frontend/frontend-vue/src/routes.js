import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from "./components/LandingPage/LandingPage.vue";
import Home from "./components/patient-side/Home.vue"
import BloodPatient from "./components/patient-side/BloodPatient.vue"
import BedPatient from "./components/patient-side/BedPatient.vue"
const routes = [
    {
        name: "LandingPage",
        path: "/",
        component: LandingPage
    },
    {
        name: "Home",
        path: "/patient-home",
        component: Home
    },
    {
        name: "DonateBlood",
        path: "/donation-blood",
        component: BloodPatient
    },
    {
        name: "DonateBed",
        path: "/donation-bed",
        component: BedPatient
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from "./components/LandingPage/LandingPage.vue";
import Home from "./components/patient-side/Home.vue"
import BloodPatient from "./components/patient-side/BloodPatient.vue"
import BedPatient from "./components/patient-side/BedPatient.vue"
import Login from "./components/Auth/LoginUp.vue"
import SignUp from "./components/Auth/Signup.vue"
import HospitalSide from "./components/hospital-side/HospitalSide.vue"
import EditDetails from "./components/hospital-side/EditDetails.vue"
import BedDonor from "./components/hospital-side/BedDonor.vue"
import BloodDonor from "./components/hospital-side/BloodDonor.vue"
import HomeHosp from "./components/hospital-side/HomeHosp.vue"
import Logout from "./components/hospital-side/Logout.vue"
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
    },
    {
        name: "Login",
        path: "/login",
        component: Login
    },
    {
        name: "Register",
        path: "/register",
        component: SignUp
    },
    {
        name:"HospitalSide",
        path:"/hospital-side",
        component:HospitalSide
    },
    {
        name:"Bed Donors",
        path:"/bed-donors",
        component:BedDonor
    },
    {
        name:"Blood Donors",
        path:"/blood-donors",
        component:BloodDonor
    },
    {
        name:"Edit details",
        path:"/editDetails",
        component:EditDetails
    },
    {
        name:"Hospital Home",
        path:"/home-hosp",
        component:HomeHosp
    },
    {
        name:"Logout",
        path:"/logout",
        component:Logout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
<template>
    <v-app>
        <Navbar/>
        <v-main>
            <router-view/>
        </v-main>
        <Footer/>
    </v-app>
</template>


<script>
import Navbar from "./components/Part/Navbar";
import Footer from "./components/Part/Footer";
export default {
    components:{
        Navbar,Footer
    }
}
</script>

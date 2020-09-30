<template>
    <v-app>
        <Navbar/>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>


<script>
import Navbar from "./components/Part/Navbar";

export default {
    components:{
        Navbar
    }
}
</script>

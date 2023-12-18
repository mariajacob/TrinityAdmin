<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12">
                <intropage/>
                <discover/>
                <courses/>
                <gallery/>
                <testimonial/>
                <learnmore/>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import intropage from "../Homepage/IntroPage.vue"
import discover from "../Homepage/DiscoverPage.vue"
import courses from "../Homepage/CoursesPage.vue"
import gallery from "../Homepage/GalleryPage.vue"
import testimonial from "../Homepage/TestimonialPage.vue"
import learnmore from "../Homepage/LearnPage.vue"



export default{
    components :{
        intropage,
        discover,
        courses,
        gallery,
        testimonial,
        learnmore,



    },
};
</script>
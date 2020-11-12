<template>
<section>
    <div class="container">
        <base-card>
            <h2>Register as a babysitter!</h2>
            <sit-form @save-data="saveData"></sit-form>
        </base-card>
    </div>
</section>
</template>

<script>
import SitForm from "../../components/Babysitters/Form.vue"
export default {
    components: {
        SitForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('sitters/registerBabysitter', data);
            this.$router.replace('/list');
        }
    }
}
</script>
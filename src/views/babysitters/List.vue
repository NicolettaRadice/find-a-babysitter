<template>
   <div class="container">
       <base-dialog :show="!!error" title="An error occourred" @close="handleError">
        <p>{{error}}</p>
       </base-dialog>
       <sitter-filter @change-filter="setFilters"></sitter-filter>
       <section>
           <base-card>
           <div class="controls">
               <base-button mode="outline" @click="loadSitters(true)">Refresh</base-button>
               <base-button v-if="!isSitter && !isLoading" link to="/register">Register as a babysitter!</base-button>
           </div>
           <div v-if="isLoading">
               <base-spinner></base-spinner>
           </div>
           <ul v-else-if="hasSitted">
              <sitter-item 
                v-for="sitter in filteredBabysitters" 
                :key="sitter.id" 
                :id="sitter.id" 
                :first-name="sitter.firstName"
                :last-name="sitter.lastName"
                :rate="sitter.hourlyRate"
                :areas="sitter.areas"></sitter-item>
           </ul>
           <h3 v-else>No babysitters found </h3>
           </base-card>
       </section>
   </div>
</template>

<script>
import SitterItem from "../../components/Babysitters/Item.vue"
import SitterFilter from "../../components/Babysitters/Filter.vue"

export default {
    components: {
        SitterItem,
        SitterFilter
    },
    data(){
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                italian: true,
                dutch: true,
                english: true
            }
        }
    },
    computed: {
        filteredBabysitters() {
            const sitters = this.$store.getters['sitters/sitters'];
            return sitters.filter(sitter => {
                if(this.activeFilters.italian && sitter.areas.includes('italian')){
                    return true;
                }
                if(this.activeFilters.english && sitter.areas.includes('english')){
                    return true;
                }
                if(this.activeFilters.dutch && sitter.areas.includes('dutch')){
                    return true;
                }
                return false;
            })
        },
        hasSitted() {
            return !this.isLoading && this.$store.getters['sitters/hasSitted'];
        },

        isSitter() {
            return this.$store.getters['sitters/isSitter'];
        }
    },
    created(){
        this.loadSitters();
    },

    methods: {
        setFilters(updatedFilters){
            this.activeFilters = updatedFilters;
        },
        async loadSitters(refresh = false){
            this.isLoading = true;
            try{
                await this.$store.dispatch('sitters/loadSitters', {forceRefresh: refresh});
            } catch (error) {
                this.error = error.message || "Something went wrong"
            }
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

</style>
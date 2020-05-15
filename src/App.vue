<template>
  <div id="app" class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">

    <SiteHeader class="xl:flex-shrink-0" />

    <div class="xl:flex xl:flex-1 xl:overflow-y-hidden">
      <SearchFilters />

      <main class="py-6 xl:flex-1 xl:overflow-x-hidden">

        <div class="px-4">
          <h3 class="text-gray-900 text-xl">Los Angeles</h3>
          <p class="text-gray-600">live like the stars in these luxuries Southern California estates</p>
        </div>

        <div class="mt-6 sm:overflow-x-auto">
          <div class="px-4 sm:flex sm:-mx-2 sm:pb-8">

              <div v-for="(property, i) in properties" :key="i" :class="{'mt-10' : i > 0}"
                class="sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2">
                <PropertyCard :property="property"/>
              </div>

          </div>
        </div>

      </main>
    </div>

  </div>
</template>

<script>
  import SiteHeader from '@/components/SiteHeader'
  import SearchFilters from '@/components/SearchFilters'
  import PropertyCard from '@/components/PropertyCard'
  export default {
    name: 'App',
    data(){
      return{
        properties:[
          {
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            beds: 3,
            bath: 2,
            title: 'Modern home in city center',
            price: 140000,
            reviewCount: 34,
            rating: 4,
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            beds: 2,
            bath: 1,
            title: 'Modern home in city center',
            price: 1400,
            reviewCount: 3,
            rating: 2,
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            beds: 5,
            bath: 1,
            title: 'Modern home in city center',
            price: 134000,
            reviewCount: 4,
            rating: 3,
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            beds: 6,
            bath: 5,
            title: 'Modern home in city center',
            price: 198400,
            reviewCount: 11,
            rating: 22,
          },
        ]
      }
    },
    components: {
      SiteHeader,
      SearchFilters,
      PropertyCard,
    },
    
  }
</script>

<style src="./assets/css/tailwind.css"></style>
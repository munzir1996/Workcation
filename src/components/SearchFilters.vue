<template>

  <section class="bg-gray-800 xl:w-72">
    
    <div class="flex justify-between px-4 py-3 xl:hidden">
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-6 w-6 fill-current text-gray-600" id="Capa_1" enable-background="new 0 0 515.558 515.558"
            height="512" viewBox="0 0 515.558 515.558" width="512" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z" />
          </svg>
        </div>
        <input class="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg px-10 pr-4 py-3"
          placeholder="Search by keywords">
      </div>
      <button @click="toggle" type="button" :class="{'bg-gray-600' : isOpen, 'bg-gray-700': !isOpen}"
        class="ml-4 inline-flex rounded-lg shadow  focus:outline-none focus:shadow-outline pl-3 pr-4">
        <svg class="h-6 w-6 fill-current text-gray-500" height="512pt" viewBox="0 0 512 512" width="512pt"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m165.332031 448c-2.261719 0-4.542969-.46875-6.675781-1.472656-5.695312-2.601563-9.324219-8.277344-9.324219-14.527344v-168.980469c0-7.019531-2.855469-13.910156-7.808593-18.859375l-124.328126-124.246094c-11.09375-11.070312-17.195312-25.8125-17.195312-41.492187v-41.089844c0-20.585937 16.746094-37.332031 37.332031-37.332031h336c20.589844 0 37.335938 16.746094 37.335938 37.332031v40.640625c0 15.828125-6.53125 31.234375-17.921875 42.21875l-128.574219 124.054688c-5.207031 5.011718-8.171875 12.011718-8.171875 19.21875v84.910156c0 17.148438-7.464844 33.386719-20.480469 44.542969l-59.753906 51.21875c-2.964844 2.539062-6.675781 3.863281-10.433594 3.863281zm-128-416c-2.941406 0-5.332031 2.390625-5.332031 5.332031v41.089844c0 7.125 2.773438 13.824219 7.828125 18.878906l124.308594 124.222657c10.925781 10.902343 17.195312 26.027343 17.195312 41.496093v134.207031l33.34375-28.585937c5.910157-5.078125 9.324219-12.4375 9.324219-20.246094v-84.90625c0-15.828125 6.527344-31.230469 17.921875-42.21875l128.574219-124.054687c5.183594-4.992188 8.148437-11.988282 8.148437-19.199219v-40.683594c0-2.941406-2.386719-5.332031-5.332031-5.332031zm0 0" />
          <path
            d="m474.667969 512h-138.667969c-20.585938 0-37.332031-16.746094-37.332031-37.332031v-181.335938c0-20.585937 16.746093-37.332031 37.332031-37.332031h138.667969c20.585937 0 37.332031 16.746094 37.332031 37.332031v181.335938c0 20.585937-16.746094 37.332031-37.332031 37.332031zm-138.667969-224c-2.945312 0-5.332031 2.390625-5.332031 5.332031v181.335938c0 2.941406 2.386719 5.332031 5.332031 5.332031h138.667969c2.941406 0 5.332031-2.390625 5.332031-5.332031v-181.335938c0-2.941406-2.390625-5.332031-5.332031-5.332031zm0 0" />
          <path
            d="m432 368h-53.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h53.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path
            d="m432 432h-53.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h53.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
        <p class="text-white font-medium ml-1">Filters</p>
      </button>
    </div>

    <form v-show="isOpen" class="xl:h-full xl:flex xl:flex-col xl:justify-between">
      <div class="lg:flex xl:block xl:overflow-y-auto">
        <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full xl:border-t-0">
          <div class="flex flex-wrap -mx-2">
              <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2 xl:w-full">
                <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
                <select class="form-select text-white mt-1 block w-full">
                  <option>4</option>
                </select>
              </label>
              <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2 xl:w-full">
                <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
                <select class="form-select text-white mt-1 block w-full">
                  <option>2</option>
                </select>
              </label>
              <label class="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                <span class="text-sm font-semibold text-gray-500">Price Range</span>
                <select class="form-select text-white mt-1 block w-full">
                  <option>Up to $2,000/wk</option>
                </select>
              </label>
          </div>
        </div>
        <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full lg:border-l">
          <span class="block text-sm font-semibold text-gray-500">Property Type</span>
          <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:px-0 lg:w-full">
              <input type="radio" class="form-radio focus:bg-gray-700 bg-gray-900" name="propertyType" value="house">
              <span class="ml-2 text-white">House</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:px-0">
              <input type="radio" class="form-radio focus:bg-gray-700 bg-gray-900" name="propertyType" value="apartment">
              <span class="ml-2 text-white">Apartment</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:px-0">
              <input type="radio" class="form-radio focus:bg-gray-700 bg-gray-900" name="propertyType" value="loft">
              <span class="ml-2 text-white">Loft</span>
            </label>
            <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:px-0">
              <input type="radio" class="form-radio focus:bg-gray-700 bg-gray-900" name="propertyType" value="townHouse">
              <span class="ml-2 text-white">TownHouse</span>
            </label>
          </div>
        </div>
        <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full lg:border-l">
          <span class="block text-sm font-semibold text-gray-500">Amenities</span>
          <div class="sm:flex sm:-mt-2 sm:flex-wrap">
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox bg-gray-900" name="balcony">
              <span class="ml-2 text-white">Balcony</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox bg-gray-900" name="pool">
              <span class="ml-2 text-white">Pool</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full"> 
              <input type="checkbox" class="form-checkbox bg-gray-900" name="beach">
              <span class="ml-2 text-white">Beach</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox bg-gray-900" name="petFriendly">
              <span class="ml-2 text-white">Pet Friendly</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox bg-gray-900" name="kidFriendly">
              <span class="ml-2 text-white">Kid Friendly</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input type="checkbox" class="form-checkbox bg-gray-900" name="parking">
              <span class="ml-2 text-white">Parking</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
              <input type="checkbox" class="form-checkbox bg-gray-900" name="airConditioning">
              <span class="ml-2 text-white">Air conditioning</span>
            </label>
          </div>
        </div>
      </div>
      <div class="bg-gray-900 px-4 py-4 text-right">
        <button class="sm:w-auto sm:inline-block block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">Update Results</button>
      </div>
    </form>
  </section>

</template>

<script>
  export default {
    name: 'SearchFilters',
    props: {},
    data() {
      return {
        isOpen: false,
      }
    },
    methods: {
      toggle(){
        this.isOpen = !this.isOpen
      },
    },
  }
</script>
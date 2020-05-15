<template>

  <div>

    <div class="relative h-64 pb-5/6">
      <img class="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
        :src="property.imageUrl">
    </div>

    <div class="relative px-4 -mt-16">
      <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
        <div class="flex">
          <span
            class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
          <div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
            {{property.beds}} {{property.beds === 1 ? 'bed' : 'beds'}} &bull; {{property.baths}} {{property.baths === 1 ? 'bath' : 'baths'}}
          </div>
        </div>
        <h4 class="mt-1 text-gray-900 font-semibold text-lg">{{property.title}}</h4>
        <div class="mt-1">
          <span class="text-gray-900">{{formattedPrice}}</span>
          <span class="ml-1 text-sm text-gray-600">/wk</span>
        </div>
        <!-- -->
        <div class="mt-2 flex items-center text-sm text-gray-600">
          <svg v-for="(i, k) in 5" :key="k" class="h-4 w-4 fill-current" :class="property.rating >=i ? 'text-teal-500' : 'text-gray-400'" height="511pt" viewBox="0 -10 511.99143 511" width="511pt"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657" />
          </svg>
          <span class="ml-2">
            {{property.reviewCount}} reviews
          </span>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'PropertyCard',
    props: ['property'],
    data(){
      return{
        i: 1,
      }
    },
    computed:{
      formattedPrice(){
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        })

        return formatter.format(this.property.price / 100)
      }

    }

  }
</script>
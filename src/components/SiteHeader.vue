<template>

  <header class="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
    <div class="flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5">
      <div>
        <svg class="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">Workcation</svg>
      </div>
      <div class="flex sm:hidden">
        <button @click="toggle()" type="button"
          class="px-2 text-gray-400 hover:text-white focus:outline-none focus:text-white">
          <svg v-if="!isOpen" class="h-6 w-6 fill-current" id="Capa_1" enable-background="new 0 0 451.111 451.111" height="512"
            viewBox="0 0 451.111 451.111" width="512" xmlns="http://www.w3.org/2000/svg">
            <path id="path-1_10_" d="m0 0h451.111v64.444h-451.111z" transform="translate(1 1)" />
            <path id="path-1_9_" d="m0 193.333h451.111v64.444h-451.111z" transform="translate(1 7)" />
            <path id="path-1_8_" d="m0 386.667h451.111v64.444h-451.111z" transform="translate(1 13)" />
          </svg>
          <svg v-else class="h-6 w-6 fill-current" height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        </button>
      </div>
    </div>

    <nav class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between" :class="{'hidden' : !isOpen, 'block' : isOpen}">
        <div class="hidden xl:block xl:relative xl:max-w-sm xl:w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-6 w-6 fill-current text-gray-600" id="Capa_1" enable-background="new 0 0 515.558 515.558"
              height="512" viewBox="0 0 515.558 515.558" width="512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z" />
            </svg>
          </div>
          <input class="block w-full bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg px-10 pr-4 py-3"
            placeholder="Search by keywords">
        </div>
      <div class="sm:flex sm:items-center">
        <div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-0 sm:py-0 sm:px-0">
          <a href="#" class="block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900">List your property</a>
          <a href="#" class="mt-1 block px-3 py-1 rounded mt-3 font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 sm:mt-0 xl:text-gray-900">Trips</a>
          <a href="#" class="mt-1 block px-3 py-1 rounded mt-3 font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 sm:mt-0 xl:text-gray-900">Messages</a>
        </div>
        <div class="px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
          <div class="flex items-center">
            <img class="h-10 w-10 object-cover rounded-full brder-2 border-gray-600 sm:h-8 sm:w-8 xl:border-gray-300"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80">
            <span class="ml-4 font-semibold text-gray-200 sm:hidden">Isala Schoger</span>
          </div>
          <div class="mt-5 sm:hidden">
            <a href="#" class="block font-semibld text-gray-400 hover:text-white">Account settings</a>
            <a href="#" class="mt-3 block font-semibld text-gray-400 hover:text-white">Support</a>
            <a href="#" class="mt-3 block font-semibld text-gray-400 hover:text-white">Sign out</a>
          </div>
        </div>
      </div>
    </nav>

  </header>


</template>

<script>
  export default {
    name: 'SiteHeader',
    props: {},
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      }
    },
  }
</script>
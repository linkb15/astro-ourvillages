<script setup lang="ts">
import NavLink from '../NavLink.vue'

import IconFacebook from '~icons/mdi/facebook'
import IconInstagram from '~icons/mdi/instagram'
import IconArrowRight from '~icons/mdi/arrow-right'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="w-full flex flex-wrap space-y-6">
        <div
          class="w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-16 py-6 sm:py-12 sm:space-x-10 sm:border-r border-[#DDDDDD]"
        >
          <div class="mb-6 sm:mb-0 gap-6 flex flex-col">
            <a href="#">
              <img
                src="/img/logo/nefa.svg"
                class="w-24 -mt-2"
                alt="Nefa Logo"
              />
            </a>
            <ul class="space-y-2 font-normal text-xs text-gray-400">
              <li>City of Industry, Ca 91715</li>
              <li>P.O. Box 92397</li>
              <li>Tax-approved 501(c)3 Charity</li>
              <li>EIN #82-1958776</li>
            </ul>
            <ul class="space-x-2 flex font-normal text-xs text-gray-400">
              <li>
                <a
                  href="https://www.facebook.com/marysmissionariesinc"
                  class="hover:text-gray-600"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconFacebook style="font-size: 20px" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/marysmissionaries/"
                  class="hover:text-gray-600"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconInstagram style="font-size: 20px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 xl:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="Our Projects" url="#" />
            <NavLink name="Our Strategy" url="#" />
            <NavLink name="Our History" url="#" />
            <NavLink name="Our Patron" url="#" />
            <NavLink name="Annual Report" url="#" />
            <NavLink name="About Us" url="#" />
            <NavLink name="Blog" url="/blog" />
          </ul>
        </div>
        <div
          class="w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="Help Center" url="#" />
            <NavLink name="Contact Us" url="#" />
            <NavLink name="System Status" url="#" />
            <NavLink name="Area of Availability" url="#" />
            <NavLink name="Privacy Policy" url="#" />
          </ul>
        </div>
        <div
          class="sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 border-t sm:border-t-0 border-[#DDDDDD]"
        >
          <h5
            class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline"
          >
            Newsletter
          </h5>
          <p
            class="text-sm text-[#666666] focus:outline-none focus:shadow-outline"
          >
            Never miss anything crypto when <br class="sm:hidden" />you're on
            the go
          </p>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Enter your email"
            />
            <button
              class="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300"
            >
              <IconArrowRight style="font-size: 20px" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900"
    >
      &copy; Copyright {{ year }} Mary’s Missionaries Inc. All rights reserved
    </div>
  </footer>
</template>

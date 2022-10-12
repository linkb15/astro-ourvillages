<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div
      class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"
    >
      <div
        class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"
      >
        <div class="w-full flex flex-row items-center justify-between py-6">
          <a href="/">
            <img
              src="/img/logo/nefa.svg"
              class="w-24 xl:w-28"
              alt="Nefa Logo"
            />
          </a>
          <button
            class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <IconSegment v-if="!open" style="font-size: 24px" />
            <IconClose v-else style="font-size: 24px" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <NavLink name="Introduction" url="#intro" />
          <NavLink name="Blog" url="/blog" />
          <NavLink name="Villages" url="#" />
          <NavLink name="Testimony" url="#testimony" />
          <li class="relative group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownNavbar = !dropdownNavbar"
            >
              <span>Products</span>
              <IconChevronUp v-if="dropdownNavbar" font-size="20" />
              <IconChevronDown v-else font-size="20" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownNavbar"
                class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Exchange</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Wallet</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Explorer</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Charts</a
                  >
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <Button
          class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
        >
          Login
        </Button>
        <Button
          class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white"
        >
          Sign Up
        </Button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import NavLink from '../NavLink.vue'

import IconSegment from '~icons/mdi/segment'
import IconClose from '~icons/mdi/close'
import IconChevronUp from '~icons/mdi/chevron-up'
import IconChevronDown from '~icons/mdi/chevron-down'
import { ref } from 'vue'

const open = ref(false)
const dropdownNavbar = ref(false)
</script>

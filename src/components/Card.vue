<script setup>
import vector from '../assets/image-victor.jpg';
const data = [{ number: '80K', text: ' Followers' }, { number: '803K', text: 'Likes' }, { number: ' 1.4K', text: 'Photos' }];
</script>

<template>
  <div class="w-full h-full max-w-[21.9375rem] max-h-[23.4375rem]  bg-white rounded-[20px] flex flex-col justify-normal items-center shadow-lg">
    <div class="bg-pattern min-h-[8.71875rem] bg-cover w-full rounded-tl-xl rounded-tr-xl"></div>
    <div class=" w-full flex justify-center items-center -translate-y-1/2 -mb-10">
      <img :src="vector" class=" border-4 border-white rounded-full " alt="some guy named vector">
    </div>

    <div class="w-full  flex flex-col justify-center items-center mb-10">
      <span class=" text-desaturated-blue text-lg font-bold align-baseline">
        Victor Crest
        <span class=" text-dark-gray font-normal ml-2">
          26
        </span>
      </span>
      <span class=" text-dark-gray text-md">
        London
      </span>
    </div>

    <div class="p-4 flex w-full justify-around items-center border-t border-t-dark-gray/40">
      <div v-for="item in data" class=" flex flex-col justify-center items-center ">
        <span class="font-bold">{{ item.number }}</span>
        <span class=" font-normal text-sm text-dark-gray tracking-wide "> {{ item.text }}</span>
      </div>
    </div>

  </div>
</template>
<template>
    <div class="leading-normal tracking-normal" id="main-body">
      <div class="flex flex-wrap">
        <h1>Add Employee</h1>
      </div>
      <div class="flex flex-wrap items-stretch -mx-3">
        <div class="w-full xl:w-1/3 px-3">
            <div class="w-full bg-white border rounded-lg p-8 h-full">
                <div class="flex flex-wrap justify-space-between items-center">
                    <div class="profile-preview w-40 h-40 mr-12">
                        <img class="w-40 h-40 m-auto rounded-full shadow" src="../../../../public/profile/default-user.png" alt="" />
                    </div>
                    <div class="flex-1">
                        <label class="text-gray-700 mb-2">Choose Profile Picture</label>
                        <button type="button" class="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2">
            Select New Photo
        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full xl:w-2/3 px-3">
            <div class="w-full bg-white border rounded-lg p-8 h-full">
                <div class="flex flex-wrap -mx-3 mb-4">
                        <div class="flex flex-column flex-wrap w-1/3  px-3">
                            <label class="text-gray-700 mb-2">First Name</label>
                            <input class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none" />
                        </div>
                        <div class="flex flex-column flex-wrap w-1/3 px-3">
                            <label class="text-gray-700 mb-2">Middle Name</label>
                            <input class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none" />
                        </div>
                        <div class="flex flex-column flex-wrap w-1/3 px-3">
                            <label class="text-gray-700 mb-2">last Name</label>
                            <input class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none" />
                        </div>
                </div>
                <div class="flex flex-column flex-wrap w-full mb-4">
                        <label class="text-gray-700 mb-2">Email Address</label>
                        <input class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none" />
                    </div>
                    <div class="flex flex-column flex-wrap w-full mb-4">
                        <label class="text-gray-700 mb-2">Phone</label>
                        <input class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none" />
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-4">
                        <div class="flex flex-column flex-wrap w-1/3  px-3">
                            <label class="text-gray-700 mb-2">Age</label>
                            <input class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none" type="number" />
                        </div>
                        <div class="flex flex-column flex-wrap w-1/3 px-3">
                            <label class="text-gray-700 mb-2">Sex</label>
                            <select class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="flex flex-column flex-wrap w-1/3 px-3">
                            <label class="text-gray-700 mb-2">Status</label>
                            <select class="bg-white h-10 w-full px-5 rounded-lg border text-sm focus:outline-none">
                                <option>Single</option>
                                <option>Married</option>
                                <option>Widowed</option>
                                <option>Divorced</option>
                                <option>Separated</option>
                            </select>
                        </div>
                </div>
                <div class="flex flex-column flex-wrap w-full mb-4">
                        <label class="text-gray-700 mb-2">Address</label>
                        <textarea style="height: 100px;" class="bg-white w-full p-2 rounded-lg border text-sm focus:outline-none"></textarea>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import store from '@/store'
  
  export default {
    
  }
  
  </script>
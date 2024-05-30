<template>
    <div class="full-page min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div style="background-color:#f4dec9" class=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div class="flex justify-center">
                    <img src="../images/train.png" width="120" height="120" />

                </div>
                <div class="mt-6">
                    <label for="text" class="block text-sm font-medium leading-5  text-gray-700">
                        N° compte
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="text" name="text" placeholder="234324543543" type="number" required="" value=""
                            class="bg-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                ">
                    </div>
                </div>

                <div class="mt-6">
                    <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                        Password
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password" required=""
                            class="bg-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button type="submit" style="background-color:#e5ac77"
                            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Login
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import store from "@/store";

console.log();
</script>
<style scoped>
.full-page {
    background-image: url("../images/background.jpg");
    background-size: cover;
    background-position: center;
}
</style>
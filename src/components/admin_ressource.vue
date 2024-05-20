<template lang="">
        <button @click="drawer=true" class="md:hidden m-4">
    <v-icon icon="mdi-menu" end></v-icon>
  </button>
        <v-app>
    <v-navigation-drawer  v-model="drawer" :width="270">
        <v-list-item>
            <h1 class=" font-bold text-2xl m-3">Admin ressource</h1>
        </v-list-item>
      <v-list>
        <v-list-item @click="selected=1" prepend-icon="mdi-train">
          <v-list-item-content>
            <v-list-item-title>la gestion de trains</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="selected=2" prepend-icon="mdi-map-marker-path">
          <v-list-item-content>
            <v-list-item-title>la gestion de trajet</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="selected=3" prepend-icon="mdi-account-tie">
          <v-list-item-content>
            <v-list-item-title>la gestion des employés</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="selected=4" prepend-icon="mdi-message-text">
          <v-list-item-content>
            <v-list-item-title>contact employer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <v-container class=" flex items-start justify-start" >
      <!-- Train -->
      <div class="w-full" v-if="selected==1">
           <div>
            <div class="mb-4">
          <label for="state-depart" class="block text-sm font-medium text-gray-700"> nom de Train</label>
          <input v-model="stateDepart" type="text" id="state-depart" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="state-arrivee" class="block text-sm font-medium text-gray-700">la gare de Train</label>
          <input v-model="stateArrivee" type="text" id="state-arrivee" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="flex justify-center">
        <button @click="addTrajet" class="mb-4 w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter Train</button>
      </div>
           </div>
        <div class="mt-4">
          <table class="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Train</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom de Train</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">la gare de Train</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr >
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class=" md:px-0 py-2 flex justify-center items-center gap-2">
                    <button @click="modifier_train()" class="w-10 h-10"><img src="../images/edit.jpg"/> </button>
                    <button @click="supprimer_train()" class="w-6 h-6"><img src="../images/delete.png"/> </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Trajet -->
      <div class="w-full" v-if="selected==2">
           <div>
            <div class="mb-4">
          <label for="state-depart" class="block text-sm font-medium text-gray-700">State Depart</label>
          <input v-model="stateDepart" type="text" id="state-depart" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="state-arrivee" class="block text-sm font-medium text-gray-700">State Arrivee</label>
          <input v-model="stateArrivee" type="text" id="state-arrivee" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="flex justify-center">
        <button @click="addTrajet" class="mb-4 w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter Trajet</button>
      </div>
           </div>
        <div class="mt-4">
          <table class="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Trajet</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State Depart</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State Arrivee</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr >
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class=" md:px-0 py-2 flex justify-center items-center gap-2">
                    <button @click="modifier_trajet()" class="w-10 h-10"><img src="../images/edit.jpg"/> </button>
                    <button @click="supprimer_trajet()" class="w-6 h-6"><img src="../images/delete.png"/> </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Emplyee -->
      <div class="w-full" v-if="selected==3">
           <div>
            <div class="mb-4">
          <label for="state-depart" class="block text-sm font-medium text-gray-700">nom de employer</label>
          <input v-model="stateDepart" type="text" id="state-depart" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="state-arrivee" class="block text-sm font-medium text-gray-700">prenom de employer</label>
          <input v-model="stateArrivee" type="text" id="state-arrivee" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="flex justify-center">
  <button @click="addTrajet" class="mb-4 w-60 bg-blue-500 items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter un employé</button>
</div>

        
           </div>
        <div class="mt-4">
          <table class="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID employé</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom de l'employé</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prenom de l'employé</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr >
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class="px-6 py-4 whitespace-nowrap">hhh</td>
                <td class=" md:px-0 py-2 flex justify-center items-center gap-2">
                    <button @click="modifier_employee()" class="w-10 h-10"><img src="../images/edit.jpg"/> </button>
                    <button @click="supprimer_employee()" class="w-6 h-6"><img src="../images/delete.png"/> </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </v-container>
    </v-main>
  </v-app>
  <div v-if="dialog_train">
    <v-app>
    <div class="text-center items-center">
      <v-dialog v-model="dialog_train" max-width="600px" >
        
        <v-card >
          <v-card-text>
            <div class="flex items-start justify-center">
        <div class="bg-white rounded w-full mx-2 mt-4">
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <label for="nom" class="block text-sm font-medium text-gray-700">Nom de Train</label>
                    <input type="text"  id="nom" ref="nom" name="nom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="prenom" class="block text-sm font-medium text-gray-700">la gare de Train</label>
                    <input type="text" id="prenom"  name="prenom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div class="flex gap-3">
                  <button @click="Save" class="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enregistrer</button>
            <button @click="dialog_train = false" class="mt-3 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Annuler</button>
                </div>
            </div>
            
        </div>
    </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
  </div>

  <div v-if="dialog_trajet">
    <v-app>
    <div class="text-center items-center">
      <v-dialog v-model="dialog_trajet" max-width="600px" >
        
        <v-card >
          <v-card-text>
            <div class="flex items-start justify-center">
        <div class="bg-white rounded w-full mx-2 mt-4">
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <label for="nom" class="block text-sm font-medium text-gray-700">STATE DEPART</label>
                    <input type="text"  id="nom" ref="nom" name="nom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="prenom" class="block text-sm font-medium text-gray-700">STATE ARRIVEE</label>
                    <input type="text" id="prenom"  name="prenom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div class="flex gap-3">
                  <button @click="Save" class="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enregistrer</button>
            <button @click="dialog_trajet = false" class="mt-3 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Annuler</button>
                </div>
            </div>
            
        </div>
    </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
  </div>
  <div v-if="dialog_employee">
    <v-app>
    <div class="text-center items-center">
      <v-dialog v-model="dialog_employee" max-width="600px" >
        
        <v-card >
          <v-card-text>
            <div class="flex items-start justify-center">
        <div class="bg-white rounded w-full mx-2 mt-4">
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <label for="nom" class="block text-sm font-medium text-gray-700">Nom de employer</label>
                    <input type="text"  id="nom" ref="nom" name="nom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="prenom" class="block text-sm font-medium text-gray-700">Prenom de employer</label>
                    <input type="text" id="prenom"  name="prenom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div class="flex gap-3">
                  <button @click="Save" class="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enregistrer</button>
            <button @click="dialog_employee = false" class="mt-3 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Annuler</button>
                </div>
            </div>
            
        </div>
    </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let selected = ref(1);
const drawer = ref(true);
let dialog_train = ref(false);
let dialog_trajet = ref(false);
let dialog_employee = ref(false);

const modifier_train = (reservation) => {
  dialog_train.value = true;
};
const modifier_trajet = (reservation) => {
  dialog_trajet.value = true;
};
const modifier_employee = (reservation) => {
  dialog_employee.value = true;
};
</script>
<style lang="">

</style>
<template lang="">
    <div class="full-page">
     <button @click="drawer=true" class="md:hidden m-4">
    <v-icon icon="mdi-menu" end></v-icon>
  </button>
    <v-app class="full-page">
    <v-navigation-drawer full-page v-model="drawer" color="#e5ac77" :width="270">
        <v-list-item color="#fff" prepend-icon="mdi-account-circle">
            <h1 class=" font-bold text-lg my-2">Admin Reservation</h1>
        </v-list-item>
      <v-list>
        <v-list-item @click="selected=1" prepend-icon="mdi-format-list-numbered">
          <v-list-item-content>
            <v-list-item-title>La Liste de Réservation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="selected=2" prepend-icon="mdi-playlist-check">
          <v-list-item-content>
            <v-list-item-title>Réservation confirmée</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
        <v-container class="full-page h-full flex items-center justify-center" >
    <div v-if="selected==1" style="height:100%;width:100%">
    <div class=" w-full md:py-2" >
      <div class="overflow-y-auto" >
  <table class="w-full border bg-white">
    <thead>
      <tr class="bg-slate-700 text-white">
        <th class="px-2 py-2">ID Reservation</th>
        <th class="px-2 py-2">Client</th>
        <th class="px-2 py-2">Départ</th>
        <th class="px-2 py-2">Arrivée</th>
        <th class="w-fit">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reservation in reservations" :key="reservation.id">
        <td class="border px-2 py-2">{{ reservation.id }}</td>
        <td class="border px-2 py-2">{{ reservation.nom }} {{ reservation.nom }}</td>
        <td class="border px-2 py-2">{{ reservation.depart }}</td>
        <td class="border px-2 py-2">{{ reservation.arrivee }}</td>
        <td class="border md:px-0 py-2 flex justify-center items-center gap-2">
          <button @click="valide(reservation)" class="w-7 h-7"><img src="../images/valide.png"/></button>
          <button @click="modifier(reservation)" class="w-10 h-10"><img src="../images/edit.png"/> </button>
          <button @click="supprimer(reservation)" class="w-6 h-6"><img src="../images/delete.png"/> </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </div>
  <div v-if="selected==2" style="height:500px;width:100%">
    <div class=" w-full md:py-2" >
      <div class="overflow-y-auto" >
  <table class="w-full h-full border bg-white">
    <thead>
      <tr class="bg-slate-700 text-white">
        <th class="px-2 py-2">ID Reservation</th>
        <th class="px-2 py-2">Client</th>
        <th class="px-2 py-2">Départ</th>
        <th class="px-2 py-2">Arrivée</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reservation in reservations" :key="reservation.id">
        <td class="border px-2 py-2">{{ reservation.id }}</td>
        <td class="border px-2 py-2">{{ reservation.nom }} {{ reservation.nom }}</td>
        <td class="border px-2 py-2">{{ reservation.depart }}</td>
        <td class="border px-2 py-2">{{ reservation.arrivee }}</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </div>
  <div v-if="dialog">
    <v-app>
    <div class="text-center items-center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-text>
            <div class="flex items-start justify-center">
        <div class="bg-white rounded w-full mx-2">
            <div class="grid grid-cols-2 gap-3 mb-4">
                <div>
                    <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" v-model="user_modifier.nom" id="nom" ref="nom" name="nom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="prenom" class="block text-sm font-medium text-gray-700">Prenom</label>
                    <input type="text" id="prenom" v-model="user_modifier.prenom" name="prenom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email"  v-model="user_modifier.email" name="email"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="numero_compte" class="block text-sm font-medium text-gray-700">Numero Compte</label>
                    <input type="text" id="numero_compte" v-model="user_modifier.compte"  name="numero_compte"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="depart" class="block text-sm font-medium text-gray-700">Ville Depart</label>
                    <input type="text" id="depart" v-model="user_modifier.depart" name="depart"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="arrivee" class="block text-sm font-medium text-gray-700">Ville Arrivee</label>
                    <input type="text" id="arrivee" name="arrivee" v-model="user_modifier.arrivee"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="arrivee" class="block text-sm font-medium text-gray-700">Ville Arrivee</label>
                    <input type="text" id="arrivee" name="arrivee" v-model="user_modifier.arrivee"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="arrivee" class="block text-sm font-medium text-gray-700">Ville Arrivee</label>
                    <input type="text" id="arrivee" name="arrivee" v-model="user_modifier.arrivee"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
            </div>
            <button @click="Save" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Enregistrer</button>
        </div>
    </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
  </div>
        </v-container>
    </v-main>
</v-app>
</div>
</template>
<script setup>
import { ref } from 'vue';
let selected = ref(1);
const drawer = ref(true);

let user_modifier = ref({});
let modemodification = ref(false);
let nom = ref();
let dialog = ref(false);
const reservations = ref([
  { id: 1, nom: 'Doe', prenom: 'John', email: 'exemple@gm.xom', compte: 2344, depart: 'Paris', arrivee: 'New York' },
  { id: 2, nom: 'Smith', prenom: 'Emma', email: 'exemple@gm.xom', compte: 2344, depart: 'London', arrivee: 'Tokyo' },
  { id: 3, nom: 'Johnson', prenom: 'Michael', email: 'exemple@gm.xom', compte: 2344, depart: 'Berlin', arrivee: 'Sydney' },
  { id: 1, nom: 'Doe', prenom: 'John', email: 'exemple@gm.xom', compte: 2344, depart: 'Paris', arrivee: 'New York' },
  { id: 2, nom: 'Smith', prenom: 'Emma', email: 'exemple@gm.xom', compte: 2344, depart: 'London', arrivee: 'Tokyo' },
  { id: 1, nom: 'Doe', prenom: 'John', email: 'exemple@gm.xom', compte: 2344, depart: 'Paris', arrivee: 'New York' },
  { id: 2, nom: 'Smith', prenom: 'Emma', email: 'exemple@gm.xom', compte: 2344, depart: 'London', arrivee: 'Tokyo' },
  { id: 1, nom: 'Doe', prenom: 'John', email: 'exemple@gm.xom', compte: 2344, depart: 'Paris', arrivee: 'New York' },
  { id: 2, nom: 'Smith', prenom: 'Emma', email: 'exemple@gm.xom', compte: 2344, depart: 'London', arrivee: 'Tokyo' },
  { id: 1, nom: 'Doe', prenom: 'John', email: 'exemple@gm.xom', compte: 2344, depart: 'Paris', arrivee: 'New York' },
  { id: 2, nom: 'Smith', prenom: 'Emma', email: 'exemple@gm.xom', compte: 2344, depart: 'London', arrivee: 'Tokyo' },
  { id: 1, nom: 'Doe', prenom: 'John', email: 'exemple@gm.xom', compte: 2344, depart: 'Paris', arrivee: 'New York' },
  { id: 2, nom: 'Smith', prenom: 'Emma', email: 'exemple@gm.xom', compte: 2344, depart: 'London', arrivee: 'Tokyo' },

]);

const modifier = (reservation) => {
  dialog.value = true;
};
</script>
<style scoped>
.full-page {
  background-color: #f4dec9;
  display: flex;
  flex-direction: column;
}
</style>
<template lang="">
       <button @click="drawer=true" class="md:hidden m-4">
    <v-icon icon="mdi-menu" end></v-icon>
  </button>
  <v-app>
    <v-navigation-drawer   v-model="drawer" :width="270">
        <v-list-item prepend-icon="mdi-account-circle">
            <h1 class=" font-bold text-lg my-2">Client</h1>
        </v-list-item>
      <v-list>
        <v-list-item @click="selected=1" prepend-icon="mdi-plus-box">
          <v-list-item-content>
            <v-list-item-title>Ajouter une Réservation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="selected=2" prepend-icon="mdi-playlist-check">
          <v-list-item-content>
            <v-list-item-title>La Liste de Réservation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="selected=3" prepend-icon="mdi-ticket-confirmation">
          <v-list-item-content>
            <v-list-item-title>Ticket</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
        <v-container class="w-full flex items-center justify-center" >
          <div class="flex items-start justify-center" v-if="selected==1">
        <div class="bg-white rounded w-full">
          <v-row>
      <v-col cols="12" md="6">
        <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          id="nom"
          v-model="NewReservation.Nom"
          name="nom"
          class=" appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </v-col>
      <v-col cols="12" md="6">
        <label for="prenom" class="block text-sm font-medium text-gray-700">Prenom</label>
        <input
          type="text"
          id="prenom"
          v-model="NewReservation.Prenom"
          name="prenom"
          class="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </v-col>
      <v-col cols="12" md="6">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="NewReservation.Email"
          name="email"
          class="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </v-col>
      <v-col cols="12" md="6">
        <label for="numero_compte" class="block text-sm font-medium text-gray-700">Numero Compte</label>
        <input
          type="text"
          id="numero_compte"
          v-model="NewReservation.Numero_Compte"
          name="numero_compte"
          class="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </v-col>
      <v-col cols="12" md="6">
        <label for="depart" class="block text-sm font-medium text-gray-700">Ville Depart</label>
        <input
          type="text"
          id="depart"
          v-model="NewReservation.Ville_Depart"
          name="depart"
          class="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </v-col>
      <v-col cols="12" md="6">
        <label for="arrivee" class="block text-sm font-medium text-gray-700">Ville Arrivee</label>
        <input
          type="text"
          id="arrivee"
          v-model="NewReservation.Ville_Arrivee"
          name="arrivee"
          class="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </v-col>
      <v-col cols="12" md="6">
        <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          v-model="NewReservation.Date"
          name="date"
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </v-col>
    </v-row>
   <button @click="AjouterReservation" class="my-3 bg-blue-500 text-white py-2 px-24 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Reserve</button> </div>
    </div>
    <!--List Reservation-->
    <div v-if="selected==2" style="width:100%">
      <div class=" w-full md:py-2">
    <div>
      <div class="overflow-y-auto max-h-full">
  <table class="w-full border">
    <thead>
      <tr>
        <th class="px-2 py-2">ID Reservation</th>
        <th class="px-2 py-2">Départ</th>
        <th class="px-2 py-2">Arrivée</th>
        <th class="w-fit">Date</th>
        <th class="w-fit">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reservation in DataReservation" :key="reservation.id">
        <td class="border px-2 py-2">{{ reservation.id }}</td>
        <td class="border px-2 py-2">{{ reservation.Ville_Depart }}</td>
        <td class="border px-2 py-2">{{ reservation.Ville_Arrivee }}</td>
        <td class="border px-2 py-2">{{ reservation.Date }}</td>
        <td class="border md:px-0 py-2 flex justify-center items-center gap-2">
          <button @click="modifier(reservation)" class="w-10 h-10"><img src="../images/edit.jpg"/></button>
          <button @click="supprimer(reservation)" class="w-6 h-6"><img src="../images/delete.png"/> </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </div>
    </div>
    <!-- Ticket-->
    <div v-if="selected==3" style="width:100%">
      <div class=" w-full md:py-2">
    <div>
      <div class="overflow-y-auto max-h-full">
  <table class="w-full border">
    <thead>
      <tr>
        <th class="px-2 py-2">ID Reservation</th>
        <th class="px-2 py-2">Départ</th>
        <th class="px-2 py-2">Arrivée</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reservation in reservations" :key="counter">
        <td class="border px-2 py-2">{{ reservation.id }}</td>
        <td class="border px-2 py-2">{{ reservation.depart }}</td>
        <td class="border px-2 py-2">{{ reservation.arrivee }}</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </div>
    </div>
        </v-container>
      </v-main>
</v-app>
<div v-if="dialog">
    <v-app>
    <div class="text-center items-center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-text>
            <div class="flex items-start justify-center">
        <div class="bg-white rounded w-full mx-2 mt-4">
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" v-model="reservarion_modifier.Nom" id="nom" ref="nom" name="nom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="prenom" class="block text-sm font-medium text-gray-700">Prenom</label>
                    <input type="text" id="prenom" v-model="reservarion_modifier.Prenom" name="prenom"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email"  v-model="reservarion_modifier.Email" name="email"class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="numero_compte" class="block text-sm font-medium text-gray-700">Numero Compte</label>
                    <input type="text" id="numero_compte" v-model="reservarion_modifier.Numero_Compte"  name="numero_compte"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="depart" class="block text-sm font-medium text-gray-700">Ville Depart</label>
                    <input type="text" id="depart" v-model="reservarion_modifier.Ville_Depart" name="depart"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div>
                    <label for="arrivee" class="block text-sm font-medium text-gray-700">Ville Arrivee</label>
                    <input type="text" id="arrivee" name="arrivee" v-model="reservarion_modifier.Ville_Arrivee"
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                
                <div>
                  <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          v-model="reservarion_modifier.Date"
          name="date"
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />    
                </div>
            </div>
            <button @click="Save" class="mt-3 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Enregistrer</button>
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
</template>
<script setup>
import { ref, onMounted } from 'vue';
let selected = ref(1);
const drawer = ref(true);
const counter = ref(0);
let modemodification = ref(false);
let nom = ref();
let DataReservation = ref([])
let dialog = ref(false);
let NewReservation = ref({
  Nom: '',
  Prenom: '',
  Email: '',
  Numero_Compte: '',
  Ville_Depart: '',
  Ville_Arrivee: '',
  Date: ''
});
let reservarion_modifier = ref({
  Nom: '',
  Prenom: '',
  Email: '',
  Numero_Compte: '',
  Ville_Depart: '',
  Ville_Arrivee: '',
  Date: ''
});
onMounted(() => {
  affiche();
})
const affiche = async () => {
  const response = await fetch('http://localhost:4000/Reservation');
  DataReservation = await response.json();
  console.log(DataReservation);
};
const modifier = (reservation) => {
  dialog.value = true;
  reservarion_modifier.value = reservation;
};
const Enregistrer = async () => {
  const url = `http://localhost:4000/Reservation/${reservarion_modifier.value.id}`;
  console.log(url)
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservarion_modifier.value),
  });
  dialog.value = false;
};

const Save = () => {
  reservarion_modifier.value = {};
  modemodification.value = false;
}
const AjouterReservation = async () => {
  try {
    const response = await fetch("http://localhost:4000/Reservation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Sending data in JSON format
      },
      body: JSON.stringify(NewReservation.value) // Convert the item to JSON
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parse the response JSON
    const data = await response.json();
    console.log('Item added successfully:', data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }

  DataReservation.value = [];
  affiche();
  selected.value = 2;
}
</script>
<style lang="">

</style>
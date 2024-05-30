<template lang="">
  <button @click="drawer=true" class="md:hidden m-4">
    <v-icon icon="mdi-menu" end></v-icon>
  </button>
  <v-app>
    <v-navigation-drawer v-model="drawer" :width="270">
      <v-list-item>
        <h1 class="font-bold text-2xl m-3">Admin ressource</h1>
      </v-list-item>
      <v-list>
        <v-list-item @click="affichetrain()" prepend-icon="mdi-train">
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
      <v-container class="flex items-start justify-start">
        <!-- Train -->
        <div class="w-full" v-if="selected==1">
          <div>
            <div class="mb-4">
              <label for="state-arrivee" class="block text-sm font-medium text-gray-700">La gare de Train</label>
              <input v-model="newTrain.gare" type="text" id="state-arrivee" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            <div class="flex justify-center">
              <button @click="addTrain()" class="mb-4 w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter Train</button>
            </div>
          </div>
          <div class="mt-4">
            <table class="w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Train</th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">La gare de Train</th>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="train in trains" :key="train.idTrain">
                  <td class="px-6 py-4 whitespace-nowrap">{{ train.idTrain }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ train.gare }}</td>
                  <td class="md:px-0 py-2 flex justify-center items-center gap-2">
                    <button @click="modifier_train(train.idTrain)" class="w-10 h-10"><img src="../images/edit.png" /></button>
                    <button @click="supprimer_train(train.idTrain)" class="w-6 h-6"><img src="../images/delete.png" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Trajet -->
        <div class="w-full" v-if="selected==2">
          <!-- Trajet form and table -->
        </div>
        <!-- Employee -->
        <div class="w-full" v-if="selected==3">
          <!-- Employee form and table -->
        </div>
      </v-container>
    </v-main>
  </v-app>
  <div v-if="dialog_train">
    <v-app>
      <div class="text-center items-center">
        <v-dialog v-model="dialog_train" max-width="600px">
          <v-card>
            <v-card-text>
              <div class="flex items-start justify-center">
                <div class="bg-white rounded w-full mx-2 mt-4">
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label for="prenom" class="block text-sm font-medium text-gray-700" >La gare de Train</label>
                      <input type="text" id="prenom" name="prenom" v-model="OneTrain.gare" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                    </div>
                    <div class="flex gap-3">
                      <button @click="Enregister_train" class="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enregistrer</button>
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
  <!-- Dialogs for Trajet and Employee -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import store from "@/store";

let selected = ref(1);
const drawer = ref(true);
let dialog_train = ref(false);
let dialog_trajet = ref(false);
let dialog_employee = ref(false);

const trains = ref([]);
const modifier_id = ref(0);
const newTrain = ref({
  gare: ''
});
const OneTrain = ref({
  gare: ''
});

onMounted(() => {
  affichetrain();
});

const affichetrain = async () => {
  try {
    const response = await fetch(`http://localhost:8080/trains/all`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    trains.value = await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
  selected.value = 1;
};

const modifier_train = async (idTrain) => {
  try {
    const response = await fetch(`http://localhost:8080/trains/get/${idTrain}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    OneTrain.value = await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
  dialog_train.value = true;
  modifier_id.value = idTrain;
};
const Enregister_train = async () => {
  const url = `http://localhost:8080/trains/update/${modifier_id.value}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(OneTrain.value),
  });
  await affichetrain();
  dialog_train.value = false;
};
const addTrain = async () => {
  try {
    // Log the payload to ensure it is correct
    console.log("Sending new train data:", JSON.stringify(newTrain.value));

    const response = await fetch(`http://localhost:8080/trains/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTrain.value)
    });

    if (!response.ok) {
      const errorDetails = await response.json(); // Assuming the server sends a JSON response with error details
      console.error('Error details:', errorDetails);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const createdTrain = await response.json();
    trains.value.push(createdTrain);
    newTrain.value = { nom: '', gare: '' }; // Reset the form fields
    await affichetrain(); // Refresh the train list after adding
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};


const supprimer_train = async (idTrain) => {
  const confirmation = await Swal.fire({
    title: "Voulez-vous vraiment supprimer ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui",
    cancelButtonText: "Non",
  });

  if (confirmation.isConfirmed) {
    try {
      const url = `http://localhost:8080/trains/delete/${idTrain}`;
      await fetch(url, { method: "DELETE" });

      Swal.fire({
        icon: "success",
        title: "Suppression avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      affichetrain();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error.message);
      Swal.fire("Erreur lors de la suppression", "", "error");
    }
  }
};

</script>

<style lang="">
/* Add any additional styling here */
</style>

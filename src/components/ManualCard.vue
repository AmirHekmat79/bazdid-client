<template>
    <v-container class="mx-auto">
    <v-row>
      <v-col
        cols="12"
        class="mx-auto"
      >
      <v-dialog max-width="500">
         <template v-slot:activator="{ props: activatorProps }">
             <v-expansion-panels>
         <v-expansion-panel
             title="عنوان مرحله اول"
             v-bind="activatorProps"
             class="text-info"
         >
         </v-expansion-panel>
         </v-expansion-panels>
         </template>
 
         <template v-slot:default="{ isActive }">
             asdada
         </template>
         </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
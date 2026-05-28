<script setup lang="ts">
import type { NivelAcademico } from '@/models/nivel_academico'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { computed, ref, watch } from 'vue'

const ENDPOINT = 'niveles-academicos'
const props = defineProps({
  mostrar: Boolean,
  nivelAcademico: {
    type: Object as () => NivelAcademico,
    default: () => ({}) as NivelAcademico,
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  },
})

const nivelAcademico = ref<NivelAcademico>({ ...props.nivelAcademico })

watch(
  () => props.mostrar,
  (nuevoValor) => {
    if (nuevoValor) {
      nivelAcademico.value = props.nivelAcademico
        ? { ...props.nivelAcademico }
        : { id: 0, nombre: '', descripcion: '' }
    }
  },
)

async function handleSave() {
  try {
    const body = {
      nombre: nivelAcademico.value.nombre,
      descripcion: nivelAcademico.value.descripcion,
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${nivelAcademico.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Nivel Académico'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="nombre" class="font-semibold w-3">Nombre</label>
        <InputText
          id="nombre"
          v-model="nivelAcademico.nombre"
          class="flex-auto"
          autocomplete="off"
          maxlength="20"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="descripcion" class="font-semibold w-3">Descripción</label>
        <Textarea
          id="descripcion"
          v-model="nivelAcademico.descripcion"
          class="flex-auto"
          rows="4"
          maxlength="500"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          label="Cancelar"
          icon="pi pi-times"
          severity="secondary"
          @click="dialogVisible = false"
        />
        <Button label="Guardar" icon="pi pi-save" @click="handleSave" />
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import type { NivelAcademico } from '@/models/nivel_academico'
import http from '@/plugins/axios'
import { Column, DataTable, Dialog, InputGroup, InputGroupAddon, InputText } from 'primevue'
import Button from 'primevue/button'
import { computed, onMounted, ref } from 'vue'

const ENDPOINT = 'niveles-academicos'
const nivelesAcademicos = ref<NivelAcademico[]>([])
const emit = defineEmits(['edit'])
const nivelAcademicoDelete = ref<NivelAcademico | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)
const busqueda = ref<string>('')

async function obtenerLista() {
  nivelesAcademicos.value = await http.get(ENDPOINT).then((res) => res.data)
}

function emitirEdicion(nivelAcademico: NivelAcademico) {
  emit('edit', nivelAcademico)
}

function mostrarEliminarConfirm(nivelAcademico: NivelAcademico) {
  nivelAcademicoDelete.value = nivelAcademico
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${nivelAcademicoDelete.value?.id}`)
  obtenerLista()
  mostrarConfirmDialog.value = false
}

const nivelesAcademicosFiltrados = computed(() => {
  return nivelesAcademicos.value.filter(
    (n) =>
      n.nombre.toLowerCase().includes(busqueda.value.toLowerCase()) ||
      (n.descripcion ?? '').toLowerCase().includes(busqueda.value.toLowerCase()),
  )
})

onMounted(() => obtenerLista())
defineExpose({ obtenerLista })
</script>

<template>
  <div>
    <div class="col-7 pl-0 mt-3">
      <InputGroup>
        <InputGroupAddon><i class="pi pi-search"></i></InputGroupAddon>
        <InputText v-model="busqueda" type="text" placeholder="Buscar por nombre o descripción" />
      </InputGroup>
    </div>
    <DataTable
      :value="nivelesAcademicosFiltrados"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 25]"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} a {last} de {totalRecords}"
      scrollable
      scroll-height="flex"
      tableStyle="min-width: 30rem"
    >
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" text @click="obtenerLista" />
      </template>
      <Column field="nombre" header="Nombre" sortable />
      <Column field="descripcion" header="Descripción" sortable />
      <Column header="Acciones" frozen align-frozen="right" style="min-width: 120px">
        <template #body="{ data }">
          <Button icon="pi pi-pencil" aria-label="Editar" text @click="emitirEdicion(data)" />
          <Button
            icon="pi pi-trash"
            aria-label="Eliminar"
            text
            @click="mostrarEliminarConfirm(data)"
          />
        </template>
      </Column>
    </DataTable>

    <Dialog
      v-model:visible="mostrarConfirmDialog"
      header="Confirmar Eliminación"
      :style="{ width: '25rem' }"
    >
      <p>¿Estás seguro de que deseas eliminar este registro?</p>
      <div class="flex justify-end gap-2">
        <Button label="Cancelar" severity="secondary" @click="mostrarConfirmDialog = false" />
        <Button label="Eliminar" @click="eliminar" />
      </div>
    </Dialog>
  </div>
</template>

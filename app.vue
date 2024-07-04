<script
  setup
  lang="ts">
import Toaster from '~/components/ui/toast/Toaster.vue'
import {onMounted, ref} from "vue";
import {VisuallyHidden} from "radix-vue";

const isWarning = ref(true)

function setWarning() {
  isWarning.value = false
  localStorage.setItem('isWarning', 'false')
}

onMounted(() => {
  const isWarningStorage = localStorage.getItem('isWarning')

  if (isWarningStorage === 'false') {
    isWarning.value = false
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <Toaster/>
  <Dialog :open="isWarning">
    <DialogContent class="dialog-custom sm:max-w-[425px] w-[90%] bg-background grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
      <DialogHeader class="p-6 pb-0">
        <DialogTitle>Внимание!</DialogTitle>
        <VisuallyHidden>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </VisuallyHidden>
      </DialogHeader>
      <div class="grid gap-4 py-4 overflow-y-auto px-6">
        <div class="flex flex-col justify-between text-sm">
          <p>
            В соответствии с действующим законодательством Российской Федерации, доступ к данному сайту может быть
            предоставлен исключительно медицинским и фармацевтическим работникам.
          </p>
          <br>
          <p>
            Представленные на сайте материалы не являются рекламой, а представляют собой исключительно информацию
            о реализуемом компанией оборудовании, его ассортименте и характеристиках. Ничто на настоящем сайте не должно
            толковаться как гарантия положительного действия оборудования, его безопасности, эффективности и отсутствия
            побочных действий.
          </p>
          <br>
          <p>
            Если Вы согласны с вышеизложенной информацией, являетесь медицинским или фармацевтическим работником
            и принимаете на себя ответственность за несоблюдение указанного ограничения нажмите кнопку «Подтверждаю».
          </p>
        </div>
      </div>
      <DialogFooter class="p-6 pt-0">
        <Button
          type="submit"
          @click="setWarning">
          Потверждаю
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style>
.dialog-custom svg {
  @apply hidden
}
</style>
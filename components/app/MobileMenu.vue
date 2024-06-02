<script
  setup
  lang="ts">
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VisuallyHidden } from 'radix-vue';
import { useLocation } from '~/composables/useLocation';
import { ref } from 'vue';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle, DialogTrigger,
} from '~/components/ui/dialog';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useId, useRequestURL } from '#app';
import { SELECT_OPTIONS } from '~/data/constants';
import { toast } from '~/components/ui/toast';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useForm } from 'vee-validate';
import {FormControl, FormLabel, FormMessage} from "~/components/ui/form";
import {Checkbox} from "~/components/ui/checkbox";
import {RadioGroup} from "~/components/ui/radio-group";

const nameId = useId();
const phoneId = useId();
const emailId = useId();
const topicId = useId();
const questionId = useId();
const checkId = useId();

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?(-?\s?[0-9])+$/);

const formSchema = toTypedSchema(z.object({
  name: z
    .string({ message: 'Введите ФИО' })
    .min(2, { message: 'Мало символов' })
    .max(50, { message: 'Много символов' }),
  phone: z
    .string({ message: 'Введите телефон' })
    .min(5, 'Неправильный номер телефона')
    .regex(phoneRegex, 'Неправильный номер телефона'),
  email: z
    .string({ message: 'Введите e-mail' })
    .email('Неправильный e-mail')
    .min(5, 'Мало символов'),
  topic: z.enum(['Консультация по продукции', 'Сервисное обслуживание'], {
    required_error: 'Выберите тему вопроса',
  }),
  check: z.boolean({ message: 'Подтвердите согласие' }),
  question: z
    .string({ message: 'Напишите вопрос' })
    .min(5, { message: 'Мало символов' }),
}));

const form = useForm({
  validationSchema: formSchema,
});

const location = useLocation();

const URL = useRequestURL();

const isMenuOpen = ref(false);
const isDialogOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDialog() {
  isMenuOpen.value = false;
  isDialogOpen.value = !isDialogOpen.value;
}

const onSubmit = form.handleSubmit(async (values) => {
  try {
    const formData = {
      check: values.check,
      email: values.email,
      name: values.name,
      phone: values.phone,
      question: values.question,
      topic: values.topic,
    };

    const data = await $fetch('https://new-event.online/api/feedback', {
      method: 'POST',
      body: formData,
    });

    if (data === '200') {
      isDialogOpen.value = false;
      isMenuOpen.value = false;
      form.resetForm();
      toast({
        description: 'Заявка отправлена!',
        variant: 'success',
      });
    }
  } catch (e) {
    toast({
      description: 'Заявка не отправлена!',
      variant: 'destructive',
    });
  }
});
</script>

<template>
  <Sheet :open="isMenuOpen">
    <SheetTrigger
      as-child
      @click="toggleMenu">
      <Icon
        name="gg:menu-right-alt"
        color="#E4076D"
        size="32"/>
    </SheetTrigger>
    <SheetContent
      @close="toggleMenu"
      class="w-full h-[100dvh] bg-background flex flex-col justify-between p-0">
      <SheetHeader class="absolute top-[1rem] left-[1rem]">
        <SheetTitle>
          <SheetClose
            as-child
            @click="toggleMenu">
            <BaseLogo/>
          </SheetClose>
        </SheetTitle>
        <VisuallyHidden>
          <SheetDescription></SheetDescription>
        </VisuallyHidden>
      </SheetHeader>
      <div class="flex flex-col py-[64px]">
        <div class="grid grid-cols-1 items-center">
          <SheetClose as-child>
            <NuxtLink
              class="menu-item"
              @click="toggleMenu"
              :to="`/${location.currentLocation}/company`">
              о компании
            </NuxtLink>
          </SheetClose>
          <div class="accordion">
            <details class="group peer">
              <summary class="menu-item">
                <span class="accordion-title">продукция <Icon name="iconamoon:arrow-down-2"/></span>
              </summary>
            </details>
            <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 peer-open:grid-rows-[1fr]">
              <ul class="overflow-hidden">
                <li>
                  <SheetClose as-child>
                    <NuxtLink
                      class="menu-item menu-item__inner top-box"
                      @click="toggleMenu"
                      :to="`/${location.currentLocation}/production/klinicheskie-molokootsosy`">
                      Клинические молокоотсосы
                    </NuxtLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose as-child>
                    <NuxtLink
                      @click="toggleMenu"
                      class="menu-item menu-item__inner"
                      :to="`/${location.currentLocation}/production/bytovye-molokootsosy`">
                      Бытовые молокоотсосы
                    </NuxtLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose as-child>
                    <NuxtLink
                      @click="toggleMenu"
                      class="menu-item menu-item__inner"
                      :to="`/${location.currentLocation}/production/aksessuary`">
                      Аксессуары
                    </NuxtLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose as-child>
                    <NuxtLink
                      @click="toggleMenu"
                      class="menu-item menu-item__inner bottom-box"
                      :to="`/${location.currentLocation}/production/individualnyj-podbor-voronki`">
                      Индивидуальный подбор воронки
                    </NuxtLink>
                  </SheetClose>
                </li>
              </ul>
            </div>
          </div>
          <SheetClose as-child>
            <NuxtLink
              class="menu-item"
              @click="toggleMenu"
              :to="`/${location.currentLocation}/help-mom`">
              полезная информация
            </NuxtLink>
          </SheetClose>
          <SheetClose as-child>
            <NuxtLink
              class="menu-item border-none"
              @click="toggleMenu"
              :to="`/${location.currentLocation}/contacts`">
              контакты
            </NuxtLink>
          </SheetClose>
        </div>
      </div>
      <SheetFooter class="flex flex-row justify-between sm:justify-between px-[1rem] py-[16px] border-t">
        <div class="flex gap-x-[8px]">
          <SheetClose as-child>
            <Button
              as-child
              variant="outline">
              <NuxtLink :to="`/${location.newLocationPath}`">
                {{ location.newLocationText }} <img
                class="w-[20px] h-[16px] object-contain border rounded"
                :src="`${URL.origin}/${location.flag}`"
                :alt="location.newLocationPath"/>
              </NuxtLink>
            </Button>
          </SheetClose>
        </div>
        <Button
          class="uppercase"
          @click="toggleDialog">
          задать вопрос
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>

  <AlertDialog :open="isDialogOpen">
    <AlertDialogContent
      @close="toggleDialog"
      @openAutoFocus="(event) => event.preventDefault()"
      class="sm:max-w-[600px] w-[90%] bg-background p-8 rounded">
      <AlertDialogHeader>
        <AlertDialogTitle>Ваш вопрос</AlertDialogTitle>
        <VisuallyHidden>
          <AlertDialogDescription></AlertDialogDescription>
        </VisuallyHidden>
      </AlertDialogHeader>
      <div class="grid gap-4 py-4">
        <form @submit="onSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <div class="flex flex-col gap-[16px] w-full">
              <FormField
                v-slot="{ componentField }"
                name="name">
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      :id="nameId"
                      placeholder="ФИО"
                      v-bind="componentField"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              </FormField>

              <FormField
                v-slot="{ componentField }"
                name="phone">
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      :id="phoneId"
                      placeholder="Телефон"
                      v-bind="componentField"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              </FormField>

              <FormField
                v-slot="{ componentField }"
                name="email">
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      :id="emailId"
                      placeholder="E-mail"
                      v-bind="componentField"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              </FormField>

              <FormField
                v-slot="{ componentField }"
                type="radio"
                name="topic">
                <FormItem class="space-y-3">
                  <FormLabel>Тема обращения</FormLabel>

                  <FormControl>
                    <RadioGroup
                      class="flex flex-col space-y-1"
                      :id="topicId"
                      v-bind="componentField"
                    >
                      <FormItem
                        v-for="item in SELECT_OPTIONS"
                        :key="item.id"
                        class="flex items-center space-y-0 gap-x-3">
                        <FormControl>
                          <RadioGroupItem
                            :id="item.value"
                            :value="item.value"/>
                        </FormControl>
                        <FormLabel
                          :forId="item.value"
                          class="font-normal">
                          {{ item.value }}
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              </FormField>
            </div>

            <FormField
              v-slot="{ componentField }"
              name="question">
              <FormItem>
                <div class="flex flex-col h-full">
                  <FormControl>
                    <Textarea
                      placeholder="Ваш вопрос"
                      class="resize-none flex-auto flex"
                      :id="questionId"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage/>
                </div>
              </FormItem>
            </FormField>

            <Button
              type="submit"
              class="uppercase">
              отправить
            </Button>

            <FormField
              v-slot="{ value, handleChange }"
              type="checkbox"
              name="check">
              <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md">
                <FormControl :id="checkId">
                  <Checkbox
                    :checked="value"
                    @update:checked="handleChange"/>
                </FormControl>
                <div class="space-y-1 leading-none">
                  <FormLabel :forId="checkId">
                    Я согласен(на) на обработку персональных данных.
                    ООО "БиоЛайн" гарантирует конфиденциальность получаемой информации.
                  </FormLabel>
                  <FormMessage/>
                </div>
              </FormItem>
            </FormField>

          </div>
        </form>
      </div>
    </AlertDialogContent>
  </AlertDialog>

</template>

<style>
.menu-item {
  @apply flex justify-center uppercase font-display font-bold outline-none py-[16px] text-sm leading-none border-b;
}

.menu-item__inner {
  @apply bg-[#f5f5f5];
}

a.router-link-active.menu-item {
  background-color: #E4076D;
  color: white;
}

.top-box {
  box-shadow: inset 0 6px 8px -6px rgba(0, 0, 0, 0.4);
}

.bottom-box {
  box-shadow: inset 0 -6px 8px -6px rgba(0, 0, 0, 0.4);
}

.accordion-title {
  @apply relative;
}

.accordion-title svg {
  position: absolute;
  top: -1px;
  left: calc(100% + 8px);
}
</style>
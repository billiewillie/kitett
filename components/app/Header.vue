<script
  setup
  lang="ts">
import {ref} from 'vue';
import BaseNavigation from '~/components/base/Navigation.vue';
import {useLocation} from '~/composables/useLocation';
import {Button} from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle, DialogTrigger,
} from '~/components/ui/dialog';
import {toast} from '~/components/ui/toast';
import {Input} from '~/components/ui/input';
import {useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import * as z from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {useId, useRequestURL} from '#app';
import {SELECT_OPTIONS} from '~/data/constants';
import {VisuallyHidden} from 'radix-vue';

const location = useLocation();

const URL = useRequestURL();

const nameId = useId();
const phoneId = useId();
const emailId = useId();
const topicId = useId();
const questionId = useId();
const checkId = useId();

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?(-?\s?[0-9])+$/);

const formSchema = toTypedSchema(z.object({
  name: z
    .string({message: 'Введите ФИО'})
    .min(2, {message: 'Мало символов'})
    .max(50, {message: 'Много символов'}),
  phone: z
    .string({message: 'Введите телефон'})
    .min(5, 'Неправильный номер телефона')
    .regex(phoneRegex, 'Неправильный номер телефона'),
  email: z
    .string({message: 'Введите e-mail'})
    .email('Неправильный e-mail')
    .min(5, 'Мало символов'),
  topic: z.string({message: 'Выберите тему'}),
  check: z.boolean({message: 'Подтвердите согласие'}),
  question: z
    .string({message: 'Напишите вопрос'})
    .min(5, {message: 'Мало символов'}),
}));

const form = useForm({
  validationSchema: formSchema,
});

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
      isOpen.value = false;
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

const isOpen = ref(false);

const dialogToggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="shadow-lg py-[16px] xl:py-[32px]">
    <div class="relative container flex items-center justify-between">
      <BaseLogo :with-text="true"/>
      <BaseNavigation/>
<!--      <Dialog :open="isOpen">-->
<!--        <DialogTrigger as-child>-->
<!--          <Button-->
<!--            @click="isOpen = true"-->
<!--            class="uppercase hidden xl:block">-->
<!--            задать вопрос-->
<!--          </Button>-->
<!--        </DialogTrigger>-->
<!--        <DialogContent-->
<!--          @close="dialogToggle"-->
<!--          @openAutoFocus="(event) => event.preventDefault()"-->
<!--          class="w-[90%] sm:max-w-xl bg-background p-8 flex flex-col gap-y-8 rounded">-->
<!--          <DialogHeader>-->
<!--            <DialogTitle class="text-center">Ваш вопрос</DialogTitle>-->
<!--            <VisuallyHidden>-->
<!--              <DialogDescription>-->
<!--                Anyone who has this link will be able to view this.-->
<!--              </DialogDescription>-->
<!--            </VisuallyHidden>-->
<!--          </DialogHeader>-->
<!--          <div class="flex items-center space-x-2">-->
<!--            <form @submit="onSubmit">-->
<!--              <div class="grid grid-cols-1 md:grid-cols-2 gap-[16px]">-->
<!--                <div class="flex flex-col gap-[16px] w-full">-->
<!--                  <FormField-->
<!--                    v-slot="{ componentField }"-->
<!--                    name="name">-->
<!--                    <FormItem>-->
<!--                      <FormControl>-->
<!--                        <Input-->
<!--                          type="text"-->
<!--                          :id="nameId"-->
<!--                          placeholder="ФИО"-->
<!--                          v-bind="componentField"/>-->
<!--                      </FormControl>-->
<!--                      <FormMessage/>-->
<!--                    </FormItem>-->
<!--                  </FormField>-->

<!--                  <FormField-->
<!--                    v-slot="{ componentField }"-->
<!--                    name="phone">-->
<!--                    <FormItem>-->
<!--                      <FormControl>-->
<!--                        <Input-->
<!--                          type="tel"-->
<!--                          :id="phoneId"-->
<!--                          placeholder="Телефон"-->
<!--                          v-bind="componentField"/>-->
<!--                      </FormControl>-->
<!--                      <FormMessage/>-->
<!--                    </FormItem>-->
<!--                  </FormField>-->

<!--                  <FormField-->
<!--                    v-slot="{ componentField }"-->
<!--                    name="email">-->
<!--                    <FormItem>-->
<!--                      <FormControl>-->
<!--                        <Input-->
<!--                          type="email"-->
<!--                          :id="emailId"-->
<!--                          placeholder="E-mail"-->
<!--                          v-bind="componentField"/>-->
<!--                      </FormControl>-->
<!--                      <FormMessage/>-->
<!--                    </FormItem>-->
<!--                  </FormField>-->

<!--                  <FormField-->
<!--                    v-slot="{ componentField }"-->
<!--                    name="topic">-->
<!--                    <FormItem>-->
<!--                      <Select v-bind="componentField">-->
<!--                        <FormControl>-->
<!--                          <SelectTrigger :id="topicId">-->
<!--                            <SelectValue-->
<!--                              placeholder="Тема обращения"-->
<!--                              class="text-secondary"/>-->
<!--                          </SelectTrigger>-->
<!--                        </FormControl>-->
<!--                        <SelectContent>-->
<!--                          <SelectGroup>-->
<!--                            <SelectItem-->
<!--                              v-for="item in SELECT_OPTIONS"-->
<!--                              :key="item.id"-->
<!--                              :value="item.value">-->
<!--                              {{ item.value }}-->
<!--                            </SelectItem>-->
<!--                          </SelectGroup>-->
<!--                        </SelectContent>-->
<!--                      </Select>-->
<!--                      <FormMessage/>-->
<!--                    </FormItem>-->
<!--                  </FormField>-->

<!--                </div>-->

<!--                <FormField-->
<!--                  v-slot="{ componentField }"-->
<!--                  name="question">-->
<!--                  <FormItem>-->
<!--                    <div class="flex flex-col h-full">-->
<!--                      <FormControl>-->
<!--                      <Textarea-->
<!--                        placeholder="Ваш вопрос"-->
<!--                        class="resize-none flex-auto flex"-->
<!--                        :id="questionId"-->
<!--                        v-bind="componentField"-->
<!--                      />-->
<!--                      </FormControl>-->
<!--                      <FormMessage/>-->
<!--                    </div>-->
<!--                  </FormItem>-->
<!--                </FormField>-->

<!--                <Button-->
<!--                  type="submit"-->
<!--                  class="uppercase">отправить-->
<!--                </Button>-->

<!--                <FormField-->
<!--                  v-slot="{ value, handleChange }"-->
<!--                  type="checkbox"-->
<!--                  name="check">-->
<!--                  <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md">-->
<!--                    <FormControl :id="checkId">-->
<!--                      <Checkbox-->
<!--                        :checked="value"-->
<!--                        @update:checked="handleChange"/>-->
<!--                    </FormControl>-->
<!--                    <div class="space-y-1 leading-none">-->
<!--                      <FormLabel :forId="checkId">-->
<!--                        Я согласен(на) на обработку персональных данных.-->
<!--                        ООО "БиоЛайн" гарантирует конфиденциальность получаемой информации.-->
<!--                      </FormLabel>-->
<!--                      <FormMessage/>-->
<!--                    </div>-->
<!--                  </FormItem>-->
<!--                </FormField>-->
<!--              </div>-->
<!--            </form>-->
<!--          </div>-->
<!--        </DialogContent>-->
<!--      </Dialog>-->
      <Button
        as-child
        variant="outline">
        <NuxtLink
          class="hidden xl:flex absolute left-[calc(100%-135px)] items-end leading-none gap-1"
          :to="`/${location.newLocationPath}`">
          {{ location.newLocationText }} <img
          class="w-[20px] h-[16px] object-contain border rounded"
          :src="`${URL.origin}/${location.flag}`"
          :alt="location.newLocationPath"/>
        </NuxtLink>
      </Button>
      <div class="2xl:hidden">
        <AppMobileMenu/>
      </div>
    </div>
  </header>
</template>
<!--<script-->
<!--  setup-->
<!--  lang="ts">-->
<!--import { useForm } from 'vee-validate';-->
<!--import { toTypedSchema } from '@vee-validate/zod';-->
<!--import * as z from 'zod';-->
<!--import {-->
<!--  FormControl,-->
<!--  FormField,-->
<!--  FormItem,-->
<!--  FormLabel,-->
<!--  FormMessage,-->
<!--} from '@/components/ui/form';-->
<!--import { useId } from '#app';-->
<!--import { SELECT_OPTIONS } from '~/data/constants';-->
<!--import { toast } from '~/components/ui/toast';-->

<!--const nameId = useId();-->
<!--const phoneId = useId();-->
<!--const emailId = useId();-->
<!--const topicId = useId();-->
<!--const questionId = useId();-->
<!--const checkId = useId();-->

<!--const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?(-?\s?[0-9])+$/);-->

<!--const formSchema = toTypedSchema(z.object({-->
<!--  name: z-->
<!--    .string({ message: 'Введите ФИО' })-->
<!--    .min(2, { message: 'Мало символов' })-->
<!--    .max(50, { message: 'Много символов' }),-->
<!--  phone: z-->
<!--    .string({ message: 'Введите телефон' })-->
<!--    .min(5, 'Неправильный номер телефона')-->
<!--    .regex(phoneRegex, 'Неправильный номер телефона'),-->
<!--  email: z-->
<!--    .string({ message: 'Введите e-mail' })-->
<!--    .email('Неправильный e-mail')-->
<!--    .min(5, 'Мало символов'),-->
<!--  topic: z.string({ message: 'Выберите тему' }),-->
<!--  check: z.boolean({ message: 'Подтвердите согласие' }),-->
<!--  question: z-->
<!--    .string({ message: 'Напишите вопрос' })-->
<!--    .min(5, { message: 'Мало символов' }),-->
<!--}));-->

<!--const form = useForm({-->
<!--  validationSchema: formSchema,-->
<!--});-->

<!--const onSubmit = form.handleSubmit((values) => {-->
<!--  const data = {-->
<!--    check: values.check,-->
<!--    email: values.email,-->
<!--    name: values.name,-->
<!--    phone: values.phone,-->
<!--    question: values.question,-->
<!--    topic: values.topic,-->
<!--  };-->
<!--  setTimeout(() => {-->
<!--    form.resetForm();-->
<!--    toast({-->
<!--      description: 'Заявка отправлена!',-->
<!--    });-->
<!--  }, 500);-->
<!--});-->
<!--</script>-->

<template>
  <div></div>
<!--  <form @submit="onSubmit">-->
<!--    <div class="grid grid-cols-1 md:grid-cols-2 gap-[16px]">-->
<!--      <div class="flex flex-col gap-[16px] w-full">-->
<!--        <FormField-->
<!--          v-slot="{ componentField }"-->
<!--          name="name">-->
<!--          <FormItem>-->
<!--            <FormControl>-->
<!--              <Input-->
<!--                type="text"-->
<!--                :id="nameId"-->
<!--                placeholder="ФИО"-->
<!--                v-bind="componentField" />-->
<!--            </FormControl>-->
<!--            <FormMessage />-->
<!--          </FormItem>-->
<!--        </FormField>-->

<!--        <FormField-->
<!--          v-slot="{ componentField }"-->
<!--          name="phone">-->
<!--          <FormItem>-->
<!--            <FormControl>-->
<!--              <Input-->
<!--                type="tel"-->
<!--                :id="phoneId"-->
<!--                placeholder="Телефон"-->
<!--                v-bind="componentField" />-->
<!--            </FormControl>-->
<!--            <FormMessage />-->
<!--          </FormItem>-->
<!--        </FormField>-->

<!--        <FormField-->
<!--          v-slot="{ componentField }"-->
<!--          name="email">-->
<!--          <FormItem>-->
<!--            <FormControl>-->
<!--              <Input-->
<!--                type="email"-->
<!--                :id="emailId"-->
<!--                placeholder="E-mail"-->
<!--                v-bind="componentField" />-->
<!--            </FormControl>-->
<!--            <FormMessage />-->
<!--          </FormItem>-->
<!--        </FormField>-->

<!--        <FormField-->
<!--          v-slot="{ componentField }"-->
<!--          name="topic">-->
<!--          <FormItem>-->
<!--            <Select-->
<!--              v-bind="componentField">-->
<!--              <FormControl>-->
<!--                <SelectTrigger :id="topicId">-->
<!--                  <SelectValue-->
<!--                    placeholder="Тема обращения"-->
<!--                    class="text-secondary" />-->
<!--                </SelectTrigger>-->
<!--              </FormControl>-->
<!--              <SelectContent>-->
<!--                <SelectGroup>-->
<!--                  <SelectItem-->
<!--                    v-for="item in SELECT_OPTIONS"-->
<!--                    :key="item.id"-->
<!--                    :value="item.value">-->
<!--                    {{ item.value }}-->
<!--                  </SelectItem>-->
<!--                </SelectGroup>-->
<!--              </SelectContent>-->
<!--            </Select>-->
<!--            <FormMessage />-->
<!--          </FormItem>-->
<!--        </FormField>-->

<!--      </div>-->

<!--      <FormField-->
<!--        v-slot="{ componentField }"-->
<!--        name="question">-->
<!--        <FormItem>-->
<!--          <div class="flex flex-col h-full">-->
<!--            <FormControl>-->
<!--                <Textarea-->
<!--                  placeholder="Ваш вопрос"-->
<!--                  class="resize-none flex-auto flex"-->
<!--                  :id="questionId"-->
<!--                  v-bind="componentField"-->
<!--                />-->
<!--            </FormControl>-->
<!--            <FormMessage />-->
<!--          </div>-->
<!--        </FormItem>-->
<!--      </FormField>-->

<!--      <Button-->
<!--        type="submit"-->
<!--        class="uppercase">-->
<!--        отправить-->
<!--      </Button>-->

<!--      <FormField-->
<!--        v-slot="{ value, handleChange }"-->
<!--        type="checkbox"-->
<!--        name="check">-->
<!--        <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md">-->
<!--          <FormControl :id="checkId">-->
<!--            <Checkbox-->
<!--              :checked="value"-->
<!--              @update:checked="handleChange" />-->
<!--          </FormControl>-->
<!--          <div class="space-y-1 leading-none">-->
<!--            <FormLabel :forId="checkId">-->
<!--              Я согласен(на) на обработку персональных данных.-->
<!--              ООО "БиоЛайн" гарантирует конфиденциальность получаемой информации.-->
<!--            </FormLabel>-->
<!--            <FormMessage />-->
<!--          </div>-->
<!--        </FormItem>-->
<!--      </FormField>-->
<!--    </div>-->
<!--  </form>-->
</template>
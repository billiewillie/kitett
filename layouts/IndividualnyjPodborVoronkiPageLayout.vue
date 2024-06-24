<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';
import {COMMON_STATEMENTS, SELECT_OPTIONS} from '~/data/constants';
import Voronki21 from '../public/img/products/voronki/voronki-21.jpg';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '~/components/ui/form';
import {Button} from '~/components/ui/button';
import {Input} from '~/components/ui/input';
import {useId} from '#app';
import {toTypedSchema} from '@vee-validate/zod';
import * as z from 'zod';
import {useForm} from 'vee-validate';
import {toast} from '~/components/ui/toast';
import {ref} from 'vue';
import {VisuallyHidden} from 'radix-vue';

const VORONKI = ref([
  {
    id: 1,
    title: '21 мм',
    type: 'S',
    image: '/img/products/voronki/voronki-21.jpg',
  },
  {
    id: 2,
    title: '24 мм',
    type: 'S',
    image: '/img/products/voronki/voronki-24.jpg',
  },
  {
    id: 3,
    title: '26 мм',
    type: 'S',
    image: '/img/products/voronki/voronki-26.jpg',
  },
  {
    id: 4,
    title: '30 мм',
    type: 'S',
    image: '/img/products/voronki/voronki-30.jpg',
  },
]);
const selected_voronka = ref(VORONKI.value[0]);
const voronka = ref(selected_voronka.value.title);

const props = defineProps({
  category: {
    type: Object,
  },
});

const location = useLocation();

const nameId = useId();
const phoneId = useId();
const emailId = useId();
const questionId = useId();

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
  voronka: z.enum(
    ['21 мм', '24 мм', '26 мм', '30 мм'],
    {message: 'Выберите тип'},
  )
    .default(voronka.value),
  size: z.enum(
    ['S', 'L'],
    {message: 'Выберите размер'},
  )
    .default(selected_voronka.value.type),
  question: z
    .string({message: 'Напишите вопрос'})
    .optional(),
}));

const form = useForm({
  validationSchema: formSchema,
});

const isOpen = ref(false);

const onSubmit = form.handleSubmit(async (values) => {
  try {
    const formData = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      question: values.question ? values.question : '',
      voronka: voronka.value,
      size: selected_voronka.value.type,
    };

    const data = await $fetch('https://new-event.online/api/application-product', {
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

const dialogToggle = () => {
  isOpen.value = !isOpen.value;
};

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'Главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'Продукция',
    link: `/${location.value.currentLocation}/production`,
  },
  {
    id: 3,
    title: 'Индивидуальный подбор воронки',
  },
];
</script>

<template>
  <Dialog :open="isOpen">
    <DialogContent
      @close="dialogToggle"
      @openAutoFocus="(event) => event.preventDefault()"
      class="flex flex-col w-[90%] sm:max-w-lg bg-background p-8 rounded gap-y-8">
      <DialogHeader>
        <DialogTitle class="text-center">Заполните заявку</DialogTitle>
        <VisuallyHidden>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </VisuallyHidden>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <form
          @submit="onSubmit"
          class="grid grid-cols-1 gap-4 w-full">
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

          <!--selects-->
          <div class="flex gap-2 w-full">
            <!--title-->
            <FormField
              v-slot="{ componentField }"
              name="voronka">
              <FormItem class="flex flex-auto">
                <Select
                  v-bind="componentField"
                  v-model="voronka"
                  :defaultValue="voronka">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Воронка"
                        class="text-secondary"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="item in VORONKI"
                        :key="item.id"
                        :value="item.title">
                        {{ item.title }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage/>
              </FormItem>
            </FormField>

            <!--size-->
            <FormField
              v-slot="{ componentField }"
              name="size">
              <FormItem class="flex basis-1/3">
                <Select
                  v-bind="componentField"
                  v-model="selected_voronka.type"
                  :defaultValue="selected_voronka.type">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Размер"
                        class="text-secondary"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="item in ['S', 'L']"
                        :key="item"
                        :value="item">
                        {{ item }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage/>
              </FormItem>
            </FormField>
          </div>

          <!--question-->
          <FormField
            v-slot="{ componentField }"
            name="question">
            <FormItem>
              <div class="flex flex-col h-full">
                <FormControl>
                  <Textarea
                    placeholder="Дополнительно можете задать вопрос"
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
        </form>
      </div>
    </DialogContent>
  </Dialog>

  <section class="first-screen mb-[75px]">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>

      <BaseTitle
        :title="props.category?.title"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="self-start pl-0 lg:pl-0"/>

      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        <li
          class="group p-4 border rounded-lg flex flex-col gap-y-8 shadow-lg lg:shadow-none lg:hover:shadow-md lg:border-background lg:hover:border-accent transition"
          v-for="product in VORONKI"
          :key="product.id"
        >
          <NuxtPicture
            :src="product.image"
            :img-attrs="{class: 'flex w-full h-full'}"
            class="flex flex-auto justify-center items-center w-full"/>

          <Separator class="h-[5px] bg-separator-pattern"/>

          <div class="flex items-center justify-between">
            <span class="text-[24px] 2xl:text-[30px] text-secondary">{{ product.title }}</span>
            <div>
              <Select
                defaultValue='S'
                v-model="product.type">
                <SelectTrigger class="w-[100px]">
                  <SelectValue
                    placeholder="S"
                    class="text-secondary text-[20px]"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      v-for="item in ['S', 'L']"
                      class="text-secondary text-[20px]"
                      :key="item"
                      :value="item">
                      {{ item }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            class="uppercase"
            @click="isOpen = true;selected_voronka = product;voronka = product.title;">
            оставить заявку
          </Button>
        </li>
      </ul>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="title text-[24px] lg:text-[30px]">общие положения</h2>
      <Separator class="bg-separator-pattern h-[5px] my-4 lg:my-6"/>
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
        <li
          class="lg:basis-1/2 grid grid-cols-[42px_1fr] gap-4"
          v-for="statement in COMMON_STATEMENTS"
          :key="statement.id">
          <Icon
            name="lets-icons:check-ring-light"
            size="42"
            color="#e4076d"/>
          <p v-html="statement.text"></p>
        </li>
      </ul>
      <Separator class="bg-separator-pattern h-[5px] my-6"/>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
        <div class="lg:basis-1/2">
          <p>Для определения правильного размера воронки, подходящего только Вам, необходимо измерить диаметр соска
            и определить полноту груди.</p>
        </div>
        <div class="lg:basis-1/2">
          <p>Для определения диаметра воронки воспользуйтесь линейкой KOLORAMA.</p>
        </div>
        <div class="lg:basis-1/2">
          <h3 class="text-primary font-bold text-[28px]">Обратите внимание!</h3>
          <br>
          <p>Измерения необходимо проводить непосредственно после кормления или сцеживания.</p>
          <br>
          <p>Если Вы проводите измерения в состоянии покоя или ДО родов, то к полученному диаметру необходимо прибавить
            2 мм.</p>
        </div>
        <div class="lg:basis-1/2">
          <p>Для определения полноты груди – посмотрите на форму Вашей груди. Размер S подойдёт для небольшой груди
            конусовидой формы, для груди шарообразной формы и большого размера выбирайте размер L.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="title text-[24px] lg:text-[30px]">подобрать воронку легко с помощью специальной линейки KOLORAMA</h2>
      <Separator class="bg-separator-pattern h-[5px] my-4 lg:my-6"/>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <NuxtPicture
            :img-attrs="{class: 'w-full object-scale-down'}"
            src="/img/products/podbor-voronki/podbor-voronki-1.jpg"/>
        </div>
        <div class="shadow-[0_2px_14px_0_rgba(0,0,0,0.15)] flex items-center justify-center rounded-3xl p-4">
          <NuxtPicture
            class="w-full"
            :img-attrs="{class: 'w-full object-scale-down'}"
            src="/img/products/podbor-voronki/podbor-voronki-2.jpg"/>
        </div>
        <div>
          <p class="font-bold">Размеры воронок KOLOR® отличаются по внутреннему диаметру (21 / 24 / 26 / 30 мм)
            и по полноте груди (S / L).</p>
          <Separator class="bg-separator-pattern h-[5px] my-4"/>
          <p>Выбор размера воронки производится непосредственно после грудного вскармливания или сцеживания. Если замер
            производится в состоянии покоя, то необходимо прибавить 2 мм к полученному размеру для того, чтобы подобрать
            правильный размер воронки KOLOR</p>
          <br>
          <NuxtLink to="/img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf">
            <b class="underline hover:no-underline underline-offset-4">Линейка KOLORAMA</b>
          </NuxtLink>
          <br>
          <br>
          <p>
            Если у Вас нет линейки KOLORAMA - на листе бумаги начертите и вырежьте 4 круга диаметрами 21мм, 24мм, 26мм и
            30мм. Приложите к груди и определите правильное положение (см. схему выше)
          </p>
        </div>
        <div class="flex gap-x-6 justify-between">
          <div class="relative shadow-[0_2px_14px_0_rgba(0,0,0,0.15)] flex basis-1/3 items-center justify-center rounded-3xl py-4 px-2">
            <div class="bg-primary rounded-full w-[32px] md:w-[40px] h-[32px] md:h-[40px] flex items-center justify-center absolute left-0 top-0">
              <Icon
                name="material-symbols:thumb-up-outline"
                size="20"
                color="#fff"/>
            </div>
            <NuxtPicture
              src="/img/products/podbor-voronki/podbor-voronki-3.jpg"
              class="max-h-[185px] flex"/>
          </div>
          <div class="relative shadow-[0_2px_14px_0_rgba(0,0,0,0.15)] flex basis-2/3 items-center justify-center rounded-3xl py-4 px-2">
            <div class="bg-secondary rounded-full w-[32px] md:w-[40px] h-[32px] md:h-[40px] flex items-center justify-center absolute left-0 top-0">
              <Icon
                name="material-symbols:thumb-up-outline"
                style="transform: rotateX(180deg)"
                size="20"
                color="#fff"/>
            </div>
            <NuxtPicture
              src="/img/products/podbor-voronki/podbor-voronki-4.jpg"
              class="max-h-[185px] flex"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppAccessories/>

  <AppMarkets/>

</template>
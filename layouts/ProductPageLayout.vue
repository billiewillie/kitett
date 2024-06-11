<script
  setup
  lang="ts">
import {ref} from 'vue';
import {watchOnce} from '@vueuse/core';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {Card, CardContent} from '@/components/ui/card';
import type {Breadcrumb} from '~/types';
import {useLocation} from '~/composables/useLocation';
import DocumentPDF from '~/components/icon/DocumentPDF.vue';
import {SELECT_OPTIONS} from '~/data/constants';
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
import {VisuallyHidden} from 'radix-vue';
import {toTypedSchema} from '@vee-validate/zod';
import * as z from 'zod';
import {useForm} from 'vee-validate';
import {toast} from '~/components/ui/toast';

const location = useLocation();
const props = defineProps({
  product: {
    type: Object,
  },
  category: {
    type: Object,
  },
});
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
    title: props.category?.title,
    link: `/${location.value.currentLocation}/production/${props.category?.slug}`,
  },
  {
    id: 4,
    title: props.product?.title,
  },
];
const emblaMainApi = ref<CarouselApi>();
const emblaMainApiDialog = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const emblaThumbnailApiDialog = ref<CarouselApi>();
const selectedIndex = ref(0);
const selectedIndexDialog = ref(0);

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
  product: z
    .string()
    .default(props.product?.fullTitle),
  question: z
    .string()
    .optional(),
}));

const form = useForm({
  validationSchema: formSchema,
});

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) {
    return;
  }
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onSelectDialog() {
  if (!emblaMainApiDialog.value || !emblaThumbnailApiDialog.value) {
    return;
  }
  selectedIndexDialog.value = emblaMainApiDialog.value.selectedScrollSnap();
  emblaThumbnailApiDialog.value.scrollTo(emblaMainApiDialog.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) {
    return;
  }
  emblaMainApi.value.scrollTo(index);
}

function onThumbClickDialog(index: number) {
  if (!emblaMainApiDialog.value || !emblaThumbnailApiDialog.value) {
    return;
  }
  emblaMainApiDialog.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return;

  onSelect();
  emblaMainApi.on('select', onSelect);
  emblaMainApi.on('reInit', onSelect);
});

watchOnce(emblaMainApiDialog, (emblaMainApiDialog) => {
  if (!emblaMainApiDialog)
    return;

  onSelectDialog();
  emblaMainApiDialog.on('select', onSelectDialog);
  emblaMainApiDialog.on('reInit', onSelectDialog);
});

const isOpen = ref(false);
const isDialogCarouselOpen = ref(false);
const popupGallery = ref([]);

const dialogToggle = () => {
  isOpen.value = !isOpen.value;
};

const dialogCarouselToggle = (element) => {
  popupGallery.value = [element, ...props.product?.gallery.filter((item) => item.id !== element.id)];
  isDialogCarouselOpen.value = !isDialogCarouselOpen.value;
};

const onSubmit = form.handleSubmit(async (values) => {
  try {
    const formData = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      question: values.question ? values.question : '',
      product: props.product?.fullTitle,
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

function scrollToMap() {
  const location = document.querySelector('.map');
  window.scrollTo({
    behavior: 'smooth',
    top: location.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 100,
  });
}
</script>

<template>
  <section class="first-screen mb-[75px]">
    <div class="container m-auto">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        :title="props.product?.fullTitle"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="self-start pl-0 lg:pl-0"/>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:mb-[75px]">
        <div>
          <div class="flex flex-col xl:flex-row w-full gap-4">
            <Carousel
              class="relative xl:order-2 w-full xl:w-5/6 flex"
              @init-api="(val) => emblaMainApi = val"
            >
              <CarouselContent>
                <CarouselItem
                  v-for="image in props.product?.gallery"
                  :key="image.id"
                >
                  <div class="p-1 relative">
                    <Card class="border-none shadow-none">
                      <CardContent class="flex aspect-square items-center justify-center p-1">
                        <NuxtPicture
                          v-if="image.type === 'image'"
                          class="flex w-full items-center justify-center transition-opacity"
                          preload
                          :img-attrs="{class:`w-full object-scale-down`}"
                          :src="image.link"/>
                        <div
                          v-else
                          class="w-full aspect-video">
                          <iframe
                            class="w-full h-full"
                            :src="image.link"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          />
                        </div>
                        <Button
                          variant="outline"
                          class="absolute bottom-4 right-4 rounded-full w-[44px] h-[44px] p-0 shadow-[0_2px_14px_0_rgba(0,0,0,0.15)]"
                          @click="dialogCarouselToggle(image)">
                          <Icon
                            name="pepicons-pencil:loop-plus"
                            width="24"
                            height="24"
                            class="text-[#cfcfcf] transition"/>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious class="left-4"/>
              <CarouselNext class="right-4"/>
            </Carousel>

            <Carousel
              orientation="vertical"
              class="hidden 2xl:flex relative w-1/6 xl:order-1"
              @init-api="(val) => emblaThumbnailApi = val"
            >
              <CarouselContent class="flex gap-1 ml-0 h-[640px]">
                <CarouselItem
                  v-for="(image, index) in props.product?.gallery"
                  :key="image.id"
                  class="pl-0 basis-1/6 cursor-pointer"
                  @click="onThumbClick(index)">
                  <div
                    class="p-1"
                    :class="index === selectedIndex ? '' : 'opacity-50'">
                    <Card class="overflow-hidden border-none shadow-none">
                      <CardContent class="relative flex aspect-square items-center justify-center p-0">
                        <NuxtPicture
                          v-if="image.type === 'image'"
                          class="flex h-full w-full items-center justify-center transition-opacity"
                          preload
                          :img-attrs="{class:`w-full h-full object-scale-down`}"
                          :src="image.link"/>
                        <NuxtPicture
                          v-else
                          class="flex h-full w-full items-center justify-center transition-opacity"
                          preload
                          :img-attrs="{class:`w-full h-full object-cover`}"
                          :src="image.cover"/>
                        <Icon
                          v-if="image.type === 'video'"
                          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          width="40"
                          height="40"
                          color="#E4076D"
                          name="icon-park-solid:play"/>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div>
          <h2 class="title font-display font-bold text-[24px] xl:text-[30px]">характеристики</h2>
          <Separator class="bg-separator-pattern h-[5px] mt-[16px] mb-[24px]"/>
          <p
            class="mb-[24px]"
            v-if="props.product?.description && props.product.description.length > 0">
            {{ props.product.description }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="flex flex-col gap-[16px] xl:gap-[32px]">
              <div class="flex flex-col">
                <span class="text-secondary font-bold">
                  Страна изготовления:
                </span>
                <span>{{ props.product?.country }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-secondary font-bold">Материал:</span>
                <span>{{ props.product?.material }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-secondary font-bold">
                  Размер:
                </span>
                <template v-if="props.product?.size.length < 2">
                  <span
                    v-for="(item, index) in props.product?.size"
                    :key="`${props.product?.id}_${index}`">
                    <template v-if="item.volume">{{ item.volume }} {{ item.unit }}</template>
                    <template v-else>
                    {{ item.width }} x {{ item.height }} x {{ item.length }} {{ item.unit }}
                    </template>
                  </span>
                </template>
                <ul v-else>
                  <li
                    v-for="(product, index) in props.product?.size"
                    :key="`${product.id}_${index}`">
                    <p>{{ product.title }}:<br>
                      <span
                        v-for="(variant, index) in product.variants"
                        :key="variant">
                        {{ variant }}<template v-if="index !== product.variants.length - 1">, </template>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div
                class="flex flex-col"
                v-if="props.product?.weight.digit > 0">
                <span class="text-secondary font-bold">Вес:</span>
                <span>{{ props.product.weight.digit }} {{ props.product.weight.unit }}</span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="text-secondary font-bold">В комплекте:</span>
              <div
                v-html="props.product?.set"
                class="set-list"></div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-4">
            <Dialog :open="isOpen">
              <DialogTrigger as-child>
                <Button
                  @click="dialogToggle"
                  class="uppercase">
                  оставить заявку
                </Button>
              </DialogTrigger>
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
            <Button
              @click="scrollToMap"
              class="uppercase">
              <template v-if="props.product?.installed.length > 0">
                где установлены
              </template>
              <template v-else>
                где купить
              </template>
            </Button>
          </div>
        </div>
        <div>
          <h2 class="title font-display font-bold text-[24px] xl:text-[30px]">описание</h2>
          <Separator class="bg-separator-pattern h-[5px] mt-[16px] mb-[24px]"/>
          <div
            v-html="props.product?.review"
            class="description"/>
        </div>
        <div>
          <h2 class="title font-display font-bold text-[24px] xl:text-[30px]">инструкции и сертификаты</h2>
          <Separator class="bg-separator-pattern h-[5px] mt-[16px] mb-[24px]"/>
          <div class="flex items-stretch gap-2 xl:gap-4 flex-wrap md:flex-nowrap">
            <template v-if="props.product?.instructions[0].link">
              <div
                class="group basis-full md:basis-1/2 lg:basis-1/3"
                v-for="instruction in props.product?.instructions"
                :key="`${instruction}`"
              >
                <a
                  v-if="instruction.link"
                  class="flex flex-col gap-[16px] items-center text-center justify-between h-full hover:shadow-md border border-accent lg:border-background hover:border-accent rounded p-4 transition-shadow"
                  :href="instruction.link"
                  target="_blank">
                  <DocumentPDF/>
                  <span class="flex-auto flex items-start">{{ instruction.title }}</span>
                  <Button class="uppercase">
                    скачать
                  </Button>
                </a>
              </div>
            </template>

            <div
              v-else
              v-html="props.product?.instructions[0].text"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppAccessories :categoryId="props.category?.id"/>

  <section
    v-if="props.product?.installed.length > 0"
    class="mb-[75px] map">
    <div class="container">
      <BaseTitle
        title="Где установлены"
        tag="h2"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="self-start pl-0 lg:pl-0"/>
      <iframe
        v-if="location.currentLocation === 'ru-ru'"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c7e83f98252ffda2b2691789485d795d9b7f5d07b7f6c8b065f85981bfdbc94&amp;source=constructor"
        width="100%"
        class="rounded shadow-[0_2px_14px_0_rgba(0,0,0,0.15)] mb-16 h-[200px] xl:h-[450px]"></iframe>
      <iframe
        v-else
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A2d82afa861c51e356af762df6da3682fecc5b262a8a9a81f4985bab7d019bc96&amp;source=constructor"
        width="100%"
        class="rounded shadow-[0_2px_14px_0_rgba(0,0,0,0.15)] mb-16 h-[200px] xl:h-[450px]"></iframe>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:gap-[72px]">
        <template
          v-for="item in props.product?.installed"
          :key="item"
        >
          <div
            v-if="item?.country === location.currentLocation"
            class="card"
          >
            <Separator class="hidden xl:block h-[5px] bg-separator-pattern mb-4"/>
            <p class="font-bold">{{ item.title }}</p>
            <br>
            <p>{{ item.address }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>

  <AppMarkets
    class="map"
    v-else/>

  <Dialog :open="isDialogCarouselOpen">
    <DialogContent
      @close="isDialogCarouselOpen = false"
      @openAutoFocus="(event) => event.preventDefault()"
      class="flex flex-col w-[100%] h-full max-w-[100%] bg-background p-4 xl:p-8 gap-y-8">
      <DialogHeader>
        <VisuallyHidden>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </VisuallyHidden>
      </DialogHeader>
      <div class="flex flex-col xl:flex-row w-full h-[94%] gap-4">
        <Carousel
          class="relative w-full h-full xl:order-2"
          @init-api="(val) => emblaMainApiDialog = val"
        >
          <CarouselContent class="h-full">
            <CarouselItem
              v-for="image in popupGallery"
              :key="`${image.id}1`"
            >
              <div class="p-1 h-full">
                <Card class="h-full border-none shadow-none p-0">
                  <CardContent class="flex items-center justify-center aspect-auto h-full p-0">
                    <NuxtPicture
                      v-if="image.type === 'image'"
                      class="flex w-full h-full items-center justify-center transition-opacity"
                      preload
                      :img-attrs="{class:`w-full h-full object-scale-down`}"
                      :src="image.link"/>
                    <div
                      v-else
                      class="w-full aspect-video">
                      <iframe
                        class="w-full aspect-video h-[92%]"
                        :src="image.link"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="left-4"/>
          <CarouselNext class="right-4"/>
        </Carousel>

        <Carousel
          orientation="vertical"
          class="hidden xl:flex relative w-full max-w-[100px] xl:order-1"
          @init-api="(val) => emblaThumbnailApiDialog = val"
        >
          <CarouselContent class="flex gap-1 ml-0 h-full">
            <CarouselItem
              v-for="(image, index) in popupGallery"
              :key="image.id"
              class="pl-0 basis-1/8 cursor-pointer"
              @click="onThumbClickDialog(index)">
              <div
                class="p-1"
                :class="index === selectedIndexDialog ? '' : 'opacity-50'">
                <Card class="overflow-hidden border-none shadow-none">
                  <CardContent class="relative flex aspect-square items-center justify-center p-0">
                    <NuxtPicture
                      v-if="image.type === 'image'"
                      class="flex h-full w-full items-center justify-center transition-opacity"
                      preload
                      :img-attrs="{class:`w-full h-full object-scale-down`}"
                      :src="image.link"/>
                    <NuxtPicture
                      v-else
                      class="flex h-full w-full items-center justify-center transition-opacity"
                      preload
                      :img-attrs="{class:`w-full h-full object-scale-down`}"
                      :src="image.cover"/>
                    <Icon
                      v-if="image.type === 'video'"
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      width="40"
                      height="40"
                      color="#E4076D"
                      name="icon-park-solid:play"/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </DialogContent>
  </Dialog>

</template>

<style>
.set-list ul {
  padding-left: 20px;
  list-style-type: disc;
  line-height: 1.6;
}

.set-list ul ul {
  list-style-type: circle;
  margin-top: 0;
}

.description ul {
  padding-left: 20px;
  list-style-type: disc;
}

a.decorated {
  @apply underline hover:no-underline underline-offset-4;
}
</style>

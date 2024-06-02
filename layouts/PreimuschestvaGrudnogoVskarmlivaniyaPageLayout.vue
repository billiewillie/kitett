<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';
import HelpMomNavigation from '~/components/base/HelpMomNavigation.vue';

const location = useLocation();

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'полезная информация',
    link: `/${location.value.currentLocation}/help-mom`,
  },
  {
    id: 3,
    title: 'преимущества грудного вскармливания',
  },
];
</script>

<template>
  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="преимущества грудного вскармливания"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
    </div>
  </section>

  <section class="pb-[75px] pt-[75px] -mt-[75px] overflow-hidden">
    <div class="container relative">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <div class="relative z-10 col-span-2 w-full xl:min-h-[660px]">
          <BaseImage
            image="/img/help-mom-articles/article-4-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg
            src="/img/cell-decorator.svg"
            class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            Главная ценность грудного молока заключается в том, что его состав подстраивается под потребности малыша
            в течение всего периода грудного вскармливания.
          </p>
          <br>
          <p>
            <b>
              Выделяют несколько видов молока в зависимости от возраста малыша: 
            </b>
          </p>
          <br>
          <ul class="list-disc pl-6">
            <li><b>молозиво</b> (1 - 4 дня)</li>
            <li><b>переходное молоко</b> (4 дня — 3 недели)</li>
            <li><b>зрелое молоко</b> (3 недели — до конца лактации)</li>
          </ul>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="/img/cell-decorator.svg"
            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]"/>
          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>
        </div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="text-center title text-[20px] lg:text-[30px]">Молозиво</h2>
      <Separator class="bg-separator-pattern h-[5px] my-4 lg:my-6"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[72px]">
        <div>
          <p>
            В зависимости от того, насколько активно малыш ведет себя у груди, переходное молоко может прийти на 4-6
            день после родов.
          </p>
          <br>
          <p>
            Переходного молока поступает больше, чем молозива. Его цель – удовлетворить растущие потребности в воде и
            пище меняющегося в разме
          </p>
        </div>
        <ul>
          <li><b>Углеводы</b> — обеспечивают энергией быстрорастущий мозг ребенка</li>
          <li><b>Эссенциальные жирные кислоты</b> — развитие мозга, глаз, кровеносных сосудов</li>
          <li><b>Лактоферин</b> — способствует росту иммунитета, убивает вредные бактерии</li>
          <li><b>Бифидобактерии</b> — способствуют становлению работы кишечника</li>
          <li><b>Кальций</b> — формирует и укрепляет костные ткани</li>
          <li><b>Железо А</b> — предотвращает анемию</li>
          <li><b>Витамины группы В</b> — способствуют поступлению питательных веществ ко всем органам и системам
            организма малыша, участники всех метаболических процессов
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="text-center title text-[20px] lg:text-[30px]">переходное молоко</h2>
      <Separator class="bg-separator-pattern h-[5px] my-4 lg:my-6"/>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[72px]">
        <div>
          <p>
            Молозиво может появиться в последние дни перед родами или в первые часы после рождения малыша. Молозиво
            адаптирует детский желудок к новому типу питания, освобождает кишечник от первородного кала (мекония),
            а также очищает организм от избытка билирубина, предотвращая развитие желтухи.
          </p>
          <p>
            Молозиво: Желтоватая, густая, немного вязкая жидкость с солоноватым вкусом и специфическим запахом.
            Выделяется в небольшом количестве, так как желудок новорожденного в первые несколько дней вмещает не более
            5-7 мл пищи.
            Поэтому даже нескольких капель концентрированного продукта малышу будет достаточно для поддержания сил.
          </p>
        </div>
        <ul>
          <li><b>Белок</b> — способствует установлению процесса пищеварения</li>
          <li><b>Аскорбиновая кислота</b> — поддержание иммунной системы малыша</li>
          <li><b>Антитела</b> — защищают от инфекций слабые места организма — слизистые оболочки</li>
          <li><b>Лейкоциты</b> — разрушают патогенные вещества и вирусы</li>
          <li><b>Пребиотики</b> — защищают от кишечной инфекции и пищевых аллергий</li>
          <li><b>Витамин А</b> — способствует развитию нервной системы, мышечной ткани, сетчатки глаз</li>
          <li><b>Бета-казеин</b> — влияет на интеллект, нервную систему и психику ребенка</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">Зрелое молоко</h2>
      <Separator class="h-[5px] bg-separator-pattern mt-4 mb-6"/>
      <div class="bg-notice max-w-[1180px] m-auto rounded p-4 lg:p-8 text-[18px] lg:text-[24px]">
        <p>
          <b>Когда малышу исполняется три недели, происходит очередная смена состава грудного молока </b>— переходное
          меняется на зрелое. Зрелое молоко останется с малышом до окончания лактации. Зрелое молоко, в свою очередь,
          делится на «переднее» и «заднее».
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[72px]">
        <div class="flex flex-col">
          <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">переднее молоко</h2>
          <Separator class="h-[5px] bg-separator-pattern mt-4 mb-6"/>
          <p class="flex-auto">
            Переднее» молоко призвано удовлетворить потребность малыша в жидкости. Это слегка голубоватая,
            полупрозрачная жидкость со сладким вкусом, выделяющаяся в первые 20-30 минут
            кормления малыша одной грудью.
          </p>
          <Separator class="h-[5px] bg-separator-pattern mt-6 mb-6"/>
        </div>
        <div class="flex flex-col">
          <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">заднее молоко</h2>
          <Separator class="h-[5px] bg-separator-pattern mt-4 mb-6"/>
          <p class="flex-auto">
            «Заднее» молоко способствует утолению голода малыша, именно с ним он получает запас сытости. Внешний вид:
            Бело-желтое, более плотное и насыщенное, чем «переднее» молоко.<br>Поступает в таком же количестве, что
            и «переднее», малыш получает его после 20-30 минут сосания одной груди.
          </p>
          <Separator class="h-[5px] bg-separator-pattern mt-6 mb-6"/>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 xl:gap-x-[72px]">
        <li>
          <b>Лактоза (молочный сахар)</b> — источник энергии, используется для синтеза элементов, необходимых для
          развития центральной нервной системы
        </li>
        <li>
          <b>Витамин D</b> — помогает организму малыша усваивать кальций, необходимый для развития костных тканей
        </li>
        <li>
          <b>Вода</b> — на 90% составляет переходное молоко, обеспечивает постоянство внутренней среды организма,
          обеспечивает теплообмен
        </li>
        <li>
          <b>Никотиновая кислота</b> — имеет важное значение для правильного пищеварения, нормальной деятельности
          нервной системы, желез внутренней секреции, для работы костного мозга
        </li>
        <li>
          <b>Фолиевая кислота</b> — помогает организму малыша усваивать железо
        </li>
        <li>
          <b>Водорастворимые витамины</b> — обеспечивают нормальную работу органов и тканей, регулируют обмен веществ,
          работу нервной системы
        </li>
        <li>
          <b>Жиры</b> — основной источник энергии малыша, регулятор насыщения малыша, предотвращает переедание
        </li>
        <li>
          <b>Жирорастворимые витамины</b> — влияют на обменные процесс организма, способствуют усвоению кальция,
          стимулируют процессы роста и развития, повышают устойчивость к инфекциям
        </li>
      </ul>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <div class="bg-notice max-w-[1180px] m-auto rounded p-4 lg:p-8 text-[18px] lg:text-[24px]">
        <p>
          Для того, чтобы малыш получал всю пользу грудного молока, важно чувствовать его потребности и правильно
          отвечать им.
        </p>
        <br>
        <p>
          Если ребенок пробыл у груди 10-15 минут и отворачивается, значит, он хотел пить. Попробуйте снова предложить
          ему эту же грудь спустя некоторое время.
        </p>
      </div>
    </div>
  </section>

  <HelpMomNavigation/>

</template>
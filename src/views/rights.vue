<template>
  <Navbar />
  <section class="my-5 container mx-auto px-10 right">
    <h2 class="rightBold text-center text-2xl">سياسة الخصوصية</h2>
    <div class="flex w-full txt-right">
      <div class="w-[80%] flex justify-end text-right flex-col">
        <div class="my-3" v-for="right in allRights" :key="right">
          <h3 class="text-xl rightBold">{{ right.title }}</h3>
          <p class="text-lg">
            {{ right.desc }}
          </p>
        </div>
      </div>
    </div>
    <h2 class="rightBold text-center text-2xl">Privacy Policy</h2>
    <div class="flex w-full txt-left">
      <div class="w-[80%] flex flex-col text-left">
        <div class="my-3" v-for="right in allRightsEN" :key="right">
          <h3 class="text-xl rightBold">{{ right.title }}</h3>
          <p class="text-lg">
            {{ right.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="mt-5">
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

const allRights = ref([
  {
    title: "سياسة خصوصية وأمن البيانات",
    desc: "تعني هذه السياسة بخصوصية زوار موقع www.yemendirectory.net. وهي تحدد نوع البيانات والمعلومات التي نقوم في (دليل اليمن) بجمعها من الزوار، وكيف نستخدمها ونعرضها، والخطوات التي نتخذها لحماية خصوصيتك.",
  },
  {
    title: "جمع المعلومات",
    desc: "تقوم دليل اليمن بجمع المعلومات الشخصية عندما تصبح مستخدما مسجلا في www.yemendirectory.net، وعندما تستخدم منتجات وخدمات www.yemendirectory.net، وعندما تزور www.yemendirectory.net، وعندما تشترك في الدعاية أو المسابقات.",
  },
  {
    title: "",
    desc: "قد نقوم كذلك بجمع معلومات غير شخصية عن زيارتك للموقع مثل عنوان واسم الموقع الذي دخلت منه إلى موقعنا، وكم الوقت الذي استغرقته في كل صفحة، وعنوان الـ IP الخاص بجهازك. تُستخدم هذه المعلومات لتحسين أداء الموقع والعمليات التي تجري عليه.",
  },
  {
    title: "",
    desc: "عندما تصبح مستخدما مسجلا لدينا، نسألك عن معلومات مثل: اسمك، وتاريخ ميلادك، وجنسك (ذكر/أنثى)، ودولتك، ومدينتك، وأرقام تليفوناتك، وبريدك الإلكتروني. ولتوصيل منتجات (دليل اليمن) إليك، قد نسألك عن عنوانك كذلك.",
  },
  {
    title: "",
    desc: "يتلقى موقع www.yemendirectory.net المعلومات من متصفحك (البرنامج الذي تستخدمه لتصفح الإنترنت)، ويقوم بتسجيلها أوتوماتيكيا على الخادم (السيرفر)، بما في ذلك عنوان الـ IP الخاص بك، والمعلومات التي تتضمنها ملفات الكوكي (cookie) الخاصة بـ www.yemendirectory.net، وأية صفحة تدخل عليها في الموقع.",
  },
  {
    title: "",
    desc: "يستخدم موقع www.yemendirectory.net هذه المعلومات في الأغراض العامة التالية: لمواءمة الإعلانات والمحتوى الذي تراه، أو استكمال طلباتك من منتجاتنا وخدماتنا، أو تطوير خدماتنا، أو الاتصال بك، أو توفير تقارير إحصائية لعملاء داخليين أو خارجيين.",
  },
  {
    title: "معلومات حسابك",
    desc: "تستطيع تعديل بيانات حسابك  على موقع www.yemendirectory.net في أي وقت. إن قيامك بالتسجيل في موقع www.yemendirectory.net، يعني موافقتك على تلقي معلومات معينة من (دليل اليمن) وشركائها.",
  },
  {
    title: "ملفات الكوكي Cookies والتقنيات ذات الصلة",
    desc: "قد نستخدم ملفات الكوكي Cookies لتحسين المحتوى المقدم لك خلال تصفحك لموقعنا. إن هذه الملفات لا تتضمن أية معلومات شخصية ولا تقوم بجمع مثل هذه المعلومات، لكنها قد تقوم بجمع معلومات عن جهازك. إن رفضك لنزول ملفات الكوكي Cookies من موقع www.yemendirectory.net على جهازك لن يمنعك من تصفح موقعنا، ولكنه قد يحد من قدرتك على الاستفادة من بعض المميزات المتقدمة التي توفرها.",
  },
  {
    title: "",
    desc: "تستخدم بعض صفحات الموقع أكواد تسمى one-pixel gifs أو clear gifs أو web beacons تُدرج في الصفحات لمراقبة النشاط القائم على موقعنا. وهذه التكنولوجيا لا تتضمن أيا من معلوماتك الشخصية، ولا تقوم بجمع مثل هذه المعلومات.",
  },
  {
    title: "الإعلانات والروابط الخارجية",
    desc: "يتضمن موقع www.yemendirectory.net إعلانات خارجية أو روابط لمواقع خارجية. وشركة (دليل اليمن) غير مسئولة عن محتوى أو ممارسات الخصوصية التي تتضمنها المواقع الأخرى. قد يستخدم شركاؤنا أو المعلنون معنا مواد خارجية لخدمة أو عرض الإعلانات التي تظهر على موقعنا. وقد تقوم هذه المواد الخارجية بتنزيل ملفات الكوكي cookies على جهازك عند زيارة موقعنا. إن أية ملفات كوكي cookies خارجية تخضع لسياسة الخصوصية الخاصة بموقع الشركة التي تقوم بتنزيلها.",
  },
  {
    title: "عرض المعلومات لجهات خارجية",
    desc: "قد تستخدم (دليل اليمن)المعلومات المجموعة عن زوار موقعنا أو تعرضها على شركائنا أو جهات خارجية ذات صلة؛ لتحسين موقعنا وجذب المزيد من المعلنين والإدراجات الإعلانية. فمثلا، قد نكشف لغيرنا عن عدد زوار موقعنا ومعدل مكوثهم في كل صفحة. إن مثل هذا الاستخدام أو المشاركة في المعلومات المجموعة لا يكشف عن أي من معلوماتك الشخصية لجهات خارجية.",
  },
  {
    title: "",
    desc: "تستخدم بعض صفحات الموقع أكواد تسمى one-pixel gifs أو clear gifs أو web beacons تُدرج في الصفحات لمراقبة النشاط القائم على موقعنا. وهذه التكنولوجيا لا تتضمن أيا من معلوماتك الشخصية، ولا تقوم بجمع مثل هذه المعلومات.",
  },
]);
const allRightsEN = ref([
  {
    title: "",
    desc: "This Privacy Policy is prepared by Yemen Directory and whose registered address is Yemen Directory, Sanaa - Republic of Yemen (“We”) are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us.This policy sets out how we process any personal data we collect from you or that you provide to us through our website and social media sites. We confirm that we will keep your information secure and comply fully with all applicable Yemen Data Protection legislation and regulations. Please read the following carefully to understand what happens to personal data that you choose to provide to us, or that we collect from you when you visit our sites. By submitting information you are accepting and consenting to the practices described in this policy.",
  },
  {
    title: "Types of information we may collect from you",
    desc: "We may collect, store and use the following kinds of personal information about individuals who visit and use our website and social media sites: Information you supply to us. You may supply us with information about you by filling in forms on our website or social media. This includes information you provide when you submit a contact/inquiry form. The information you give us may include but is not limited to, your name, address, e-mail address, and phone number.",
  },
  {
    title: "How we may use the information ",
    desc: "we collect We use the information in the following ways: Information you supply to us. We will use this information: to provide you with information and/or services that you request from us; To contact you to provide the information requested.Disclosure of your information Any information you provide to us will either be emailed directly to us or may be stored on a secure server.We do not rent, sell or share personal information about you with other people or non-affiliated companies.We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities unless required by law or other regulations.",
  },
]);
</script>

<style scoped>
.txt-right {
  text-align: right;
  direction: rtl;
}
.txt-left {
  text-align: right;
  direction: ltr;
}
</style>

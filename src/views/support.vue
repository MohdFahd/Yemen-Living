<template>
  <section class="my-5">
    <p class="text-2xl w-[50%] leading-9 my-3 max-md:text-lg max-md:w-full">
      يُرجى استخدام نموذج الاتصال أدناه للتواصل معنا وسنعاود الاتصال بك.نتطلع
      قدماً إلى التواصل معكم!
    </p>
    <div
      class="grid grid-cols-12 my-5 gap-4 max-md:grid-cols-1 max-md:grid-rows-2"
    >
      <div class="col-span-4 flex flex-col max-md:row-span-2">
        <div class="flex items-center my-3">
          <img
            src="./assets/icons/locationPin.svg"
            class="me-1 self-start"
            alt=""
          />
          <span class="font-bold"
            >صنعاء - شارع القصر جوار البوابة الجنوبية
          </span>
        </div>
        <div class="flex items-center my-3">
          <img
            src="./assets/icons/smartphone.svg"
            class="me-1 self-start"
            alt=""
          />
          <span class="font-bold">7769777747 </span>
        </div>
        <div class="flex items-center my-3">
          <img src="./assets/icons/email.svg" class="me-1 self-start" alt="" />
          <span class="font-bold">admin@alsaifiasa.com </span>
        </div>
        <div class="flex items-center my-3">
          <img src="./assets/icons/global.svg" class="me-1 self-start" alt="" />
          <span class="font-bold">www.alsaifiasa.com </span>
        </div>
      </div>
      <div
        class="col-span-8 max-[1024px]:col-span-12 flex bg-[#F9F9F9] rounded-2xl p-7"
      >
        <form action="" method="post" class="w-full grid gap-2">
          <div class="flex flex-col col-span-12 my-2">
            <label for="" class="text-primary">
              يرجى اختيار نوع الاستفسار الخاص بك:
            </label>
            <select name="" id="" class="rounded-lg py-2 mt-2 px-2 bg-white">
              <option value="">المبيعات</option>
              <option value="">المبيعات</option>
              <option value="">المبيعات</option>
            </select>
          </div>
          <div class="flex flex-col my-2 col-span-6 max-md:col-span-12">
            <label for="" class="text-primary"> الاسم الاول </label>
            <input
              type="text"
              class="rounded-lg py-2 mt-2 px-2 bg-white"
              name=""
              id=""
              placeholder="ضع اسمك الأول"
              required
            />
          </div>
          <div class="flex flex-col my-2 col-span-6 max-md:col-span-12">
            <label for="" class="text-primary">الاسم الاخير </label>
            <input
              type="text"
              class="rounded-lg py-2 mt-2 px-2 bg-white"
              name=""
              id=""
              required
              placeholder="ضع اسمك الأخير"
            />
          </div>
          <div class="flex flex-col my-2 col-span-6 max-md:col-span-12">
            <label for="" class="text-primary">البريد الإلكتروني </label>
            <input
              type="email"
              class="rounded-lg py-2 mt-2 px-2 bg-white"
              name=""
              id=""
              required
              placeholder="example@gmail.com"
            />
          </div>
          <div class="flex flex-col my-3 col-span-6 max-md:col-span-12">
            <label for="" class="text-primary"> الهاتف </label>
            <input
              type="number"
              class="rounded-lg py-2 px-2 bg-white"
              name=""
              id=""
              pattern="[0-9]{9}"
              minlength="9"
              maxlength="9"
              placeholder="770000000"
              required
            />
          </div>
          <div class="flex flex-col my-3 col-span-12">
            <label for="" class="text-primary">الرسالة</label>
            <textarea
              name=""
              id=""
              rows="5"
              class="rounded-lg py-2 px-2 bg-white mt-1"
            ></textarea>
          </div>

          <!-- <button
              class="btn bg-secondary text-[#FFFFFF] font-bold text-lg rounded-2xl hover:bg-primary max-md:col-span-12 sendbtn hover:text-primary ">
              إرسال
              <img src="./assets/icons/send.svg" alt="" />
            </button> -->
          <button
            class="btn bg-secondary text-[#FFFFFF] font-bold text-lg rounded-2xl hover:bg-primary max-md:col-span-12 sendbtn overflow-hidden max-md:hover:text-primary"
          >
            <span>إرسال </span>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <img src="./assets/icons/send.svg" alt="" />
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

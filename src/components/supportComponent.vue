<template>
  <div class="w-[80%]" ref="support">
    <h2 class="bold text-xl my-2 text-center">Request to delete account</h2>
    <p class="text-lg my-2 text-center">
      At the time you decide to stop using the Yemen Guide application and
      cancel your membership in it, we respect your privacy and offer you the
      option to delete the account, which ensures that all your personal data is
      removed easily and without complications by filling out the following form
      :
    </p>
    <div class="bg-[#F9F9F9] rounded-sm p-7">
      <h3 class="bold text-xl">Applicant data</h3>

      <form action="" method="post" class="w-full grid gap-2 capitalize">
        <div class="flex flex-col my-2 col-span-6 max-md:col-span-12">
          <label for="" class="bold my-2"> user name</label>
          <input
            type="text"
            class="rounded-lg py-2 mt-2 px-2 bg-white"
            name=""
            id=""
            placeholder="Put your Name here"
            required
          />
        </div>
        <div class="flex flex-col my-2 col-span-6 max-md:col-span-12">
          <label for="" class="bold my-2"> user phone </label>
          <input
            type="text"
            class="rounded-lg py-2 mt-2 px-2 bg-white"
            name=""
            id=""
            required
            placeholder="Put your Phone here"
          />
        </div>
        <div class="flex flex-col my-2 col-span-12 max-md:col-span-12">
          <label for="" class="bold my-2"> Email </label>
          <input
            type="email"
            class="rounded-lg py-2 mt-2 px-2 bg-white"
            name=""
            id=""
            required
            placeholder="YemenLiving@example.com"
          />
        </div>
        <div class="flex flex-col my-3 col-span-12">
          <label for="" class="bold my-2">reason</label>
          <textarea
            name=""
            id=""
            rows="3"
            class="rounded-lg py-2 px-2 bg-white mt-1"
          ></textarea>
        </div>
        <div class="flex flex-col my-3 col-span-11 max-md:col-span-12">
          <label for="" class="bold my-2"> Verification code </label>
          <input
            type="number"
            class="rounded-lg py-2 px-2 bg-white"
            name=""
            id=""
            pattern="[0-9]{9}"
            minlength="9"
            maxlength="9"
            placeholder="000000"
            required
          />
        </div>

        <div class="flex justify-center items-center md:mt-10">
          <p
            class="bg-[#A09E9E] text-white font-bold text-base rounded-sm max-md:col-span-12 p-2 hover:bold"
          >
            7721233
          </p>
        </div>

        <button
          class="btn bg-black text-[#FFFFFF] font-bold text-lg rounded-sm hover:bg-primary max-md:col-span-12 overflow-hidden max-md:hover:bold sendbtn flex flex-row-reverse justify-center p-2"
        >
          <span class="hover:hidden">Send </span>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <img src="../assets/imgs/send.svg" alt="" />
            </div>
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script script>
import { onMounted, ref } from "vue";
import gsap from "gsap";

const support = ref(null);
onMounted(() => {
  gsap.fromTo(
    support.value,
    { y: 100, opacity: 0 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.inOut",
    }
  );
});
</script>

<style scoped>
.sendbtn span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

.sendbtn img {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

.sendbtn:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

.sendbtn:hover img {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}
.sendbtn:hover span {
  transform: translateX(5em);
  visibility: hidden;
}

.sendbtn:active {
  transform: scale(0.95);
}
span {
  overflow: hidden;
  display: block;
}
@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}
</style>

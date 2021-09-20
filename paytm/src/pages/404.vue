<template>
  <div>
    <div class="">
      <div class="w-full font-mono flex flex-col items-center">
        <h1
          class="
            font-extrabold
            text-xl text-center text-red-500
            leading-tight
            mt-4
          "
        >
          Route : {{ $route.params.pathMatch }} Not Matched
        </h1>
        <h1
          class="
            font-extrabold
            text-5xl text-center text-white
            leading-tight
            mt-4
          "
        >
          You&#x27;re alone here
        </h1>
        <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
          404
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

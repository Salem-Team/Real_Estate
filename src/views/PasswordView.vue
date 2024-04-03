<template>
  <div class="pass_view position-relative">
    <div class="over_lay position-absolute"></div>
    <div class="lay_out">
      <div
        class="log-hom"
        style="
          width: fit-content;
          height: fit-content;
          padding: 9px 16px 9px 16px;
          gap: 10px;
          opacity: 0px;
          display: flex;
          color: #b16642;

          background: linear-gradient(
            270deg,
            #f3d1c1 -3.75%,
            rgba(255, 178, 141, 0) 108.58%
          );
        "
      >
        <svg
          width="27"
          height="24"
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9375 7.64679V0.857143H17.7188V3.98839L13.5 0L0 12.8571H3.375V24H10.9688V15.4286H16.0312V24H23.625V12.8571H27L21.9375 7.64679Z"
            fill="#B16642"
          />
        </svg>
        password
      </div>
      <input
        type="text"
        style="
          width: 50%;
          height: 40px;
          gap: 0px;
          border-radius: 5px;
          border: 1px solid rgba(199, 138, 108, 1);
          opacity: 0px;
          outline: none;
          padding: 10px;
        "
        placeholder="your password"
      />
      <v-btn style="background: rgba(59, 58, 93, 1); color: white"
        >Submit</v-btn
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "pass-view",
};
</script>
<style lang="scss">
.pass_view {
  background: url("../assets/Photo.png");
  background-size: cover;
  height: 100vh;
  .over_lay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #eab196 0%,
      rgba(255, 240, 233, 0) 100%
    );

    z-index: 1;
  }
  .lay_out {
    position: absolute;
    width: 25%;
    height: 30%;
    transform: translate(-50%, -50%);
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
    top: 50%;
    left: 50%;

    z-index: 10;
    gap: 10px;
    border-radius: 10px 0px 0px 0px;
    opacity: 1;
    background: rgba(255, 255, 255, 0.76);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
@media (max-width: 1200px) {
  .lay_out {
    width: 35% !important;
    height: 30% !important;
  }
}
@media (max-width: 992px) {
  .lay_out {
    width: 35% !important;
    height: 40% !important;
  }
}
@media (max-width: 768px) {
  .lay_out {
    width: 45% !important;
    height: 40% !important;
  }
}
@media (max-width: 600px) {
  .lay_out {
    width: 65% !important;
    height: 40% !important;
  }
}
</style>

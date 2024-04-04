<template>
  <div class="chang_view position-relative">
    <div class="over_lay position-absolute"></div>
    <div class="lay_out_2">
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
        Changelog
      </div>
      <h1
        style="
          font-family: Kufam;
          font-size: 65px;
          font-weight: 700;
          line-height: 77.02px;
          text-align: left;
          color: rgba(59, 58, 93, 1);
        "
      >
        Version 01
      </h1>
      <p
        style="
          font-family: Source Sans 3;
          font-size: 20px;
          font-weight: 400;
          line-height: 31.2px;
          text-align: left;
          color: rgba(177, 102, 66, 1);
        "
      >
        Initial
        <span style="color: #3b3a5d; font-weight: 700">Properland</span> Webflow
        Template Release
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "change-log",
};
</script>
<style lang="scss">
.chang_view {
  background: url("../assets/Background(1).png");
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
  .lay_out_2 {
    position: absolute;
    width: 45%;
    height: 40%;
    transform: translate(-50%, -50%);
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
    top: 50%;
    left: 50%;
    padding: 20px;
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
  .lay_out_2 {
    width: 55% !important;
    height: 45% !important;
  }
}
@media (max-width: 992px) {
  .lay_out_2 {
    width: 65% !important;
    height: 50% !important;
  }
}
@media (max-width: 768px) {
  .lay_out_2 {
    width: 55% !important;
    height: 40% !important;

    h1 {
      font-size: 40px !important;
    }
    p {
      font-size: 20px !important;
      text-align: center !important;
    }
  }
}
@media (max-width: 600px) {
  .lay_out_2 {
    width: 65% !important;
    height: 40% !important;
  }
}
@media (max-width: 400px) {
  .lay_out_2 {
    width: 65% !important;
    height: 40% !important;
    left: 40% !important;
    h1 {
      font-size: 30px !important;
    }
    p {
      font-size: 18px !important;
      text-align: center !important;
    }
  }
}
</style>

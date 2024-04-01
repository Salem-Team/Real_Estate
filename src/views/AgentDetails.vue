<template>
  <div class="parent">
    <div class="agent-bannner">
      <!-- Navbar component her -->
      <div class="navbar" style="width: 100%; height: 200px"></div>
      <v-container class="mt-14">
        <v-row class="mt-16">
          <!-- Start left column contain  agent information and contact buttons -->
          <!-- 
            1- this column contain Two Row, the first Row  for Agent Information and
            The Second one For details Card
           -->
          <v-col cols="6" class="position-realtive d-flex flex-wrap">
            <!-- Start The First Row -->
            <v-row>
              <v-card variant="flat" style="background-color: transparent">
                <!-- Contain home svg and title -->
                <v-card-title
                  class="pa-0"
                  style="
                    background-color: #f3d1c1;
                    width: fit-content;
                    height: 35px;
                  "
                >
                  <!-- home Svg -->
                  <v-icon
                    ><svg
                      width="18"
                      height="18"
                      viewBox="0 0 27 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9375 7.64679V0.857143H17.7188V3.98839L13.5 0L0 12.8571H3.375V24H10.9688V15.4286H16.0312V24H23.625V12.8571H27L21.9375 7.64679Z"
                        fill="#B16642"
                      />
                    </svg>
                  </v-icon>
                  <!-- Title -->
                  <span
                    class="text-subtitle-1 font-weight-light text-uppercase mt-2"
                    style="
                      color: #b16642;
                      letter-spacing: 6px !important;
                      font-family: kufam;
                    "
                    >SELLING AGENT</span
                  >
                </v-card-title>
                <!-- agent name -->
                <v-card-text
                  class="agent_name font-weight-bold py-12 px-0"
                  style="font-size: 60px; color: #3b3a5d !important"
                >
                  Elena Gilberts
                </v-card-text>
                <!-- First pragraph -->
                <v-card-text
                  class="px-1 pt-0"
                  style="
                    color: #b16642;
                    font-size: 18px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  "
                  >Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto
                </v-card-text>
                <!-- seconed pragraph -->
                <v-card-text
                  class="px-1 py-4"
                  style="
                    color: #b16642;
                    font-size: 17px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  "
                >
                  Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</v-card-text
                >
                <!-- Contact info  -->
                <v-card-text class="pl-0">
                  <div class="contact" style="color: #b16642; font-size: 18px">
                    <p class="d-flex py-0 pl-0">
                      <span
                        ><svg
                          width="30"
                          height="20"
                          viewBox="0 0 37 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.375 0H4.625C3.39878 0.00126336 2.22315 0.470986 1.35608 1.3061C0.489008 2.14122 0.0013117 3.27351 0 4.45455V23.5455C0.0013117 24.7265 0.489008 25.8588 1.35608 26.6939C2.22315 27.529 3.39878 27.9987 4.625 28H32.375C33.6012 27.9987 34.7768 27.529 35.6439 26.6939C36.511 25.8588 36.9987 24.7265 37 23.5455V4.45455C36.9987 3.27351 36.511 2.14122 35.6439 1.3061C34.7768 0.470986 33.6012 0.00126336 32.375 0ZM31.2039 7.3683L19.311 16.2774C19.0791 16.451 18.7937 16.5453 18.5 16.5453C18.2063 16.5453 17.9209 16.451 17.689 16.2774L5.79612 7.3683C5.65639 7.26666 5.53902 7.1393 5.45084 6.9936C5.36266 6.84791 5.30542 6.68678 5.28245 6.51959C5.25948 6.35241 5.27124 6.18249 5.31704 6.01972C5.36285 5.85695 5.44178 5.70457 5.54926 5.57143C5.65673 5.43829 5.79061 5.32706 5.94311 5.24418C6.09561 5.16131 6.26368 5.10846 6.43757 5.08869C6.61146 5.06892 6.7877 5.08264 6.95604 5.12904C7.12438 5.17544 7.28146 5.2536 7.41817 5.35898L18.5 13.6603L29.5818 5.35898C29.8589 5.15743 30.2073 5.06903 30.5515 5.1129C30.8958 5.15677 31.2082 5.32939 31.4214 5.59342C31.6345 5.85745 31.7312 6.19167 31.6905 6.52381C31.6498 6.85595 31.475 7.15931 31.2039 7.3683Z"
                            fill="#BE7E5E"
                          />
                        </svg>
                      </span>
                      <span class="px-3 font-weight-regular"
                        >dwilliam@mail.com</span
                      >
                    </p>
                    <p class="d-flex py-5">
                      <span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2372 28.9998C21.9734 28.9998 20.1981 28.5427 17.5396 27.0578C14.3069 25.2452 11.8064 23.5719 8.59118 20.3657C5.49117 17.2682 3.9826 15.2628 1.87126 11.4215C-0.513962 7.08442 -0.107361 4.811 0.347152 3.83936C0.888423 2.67805 1.68738 1.98346 2.72007 1.29406C3.30663 0.909826 3.92736 0.580453 4.57438 0.310117C4.63912 0.282282 4.69934 0.255742 4.75308 0.231791C5.07357 0.0874362 5.55915 -0.130714 6.17424 0.102325C6.58472 0.256389 6.95118 0.571639 7.52483 1.13805C8.70125 2.29807 10.3089 4.88156 10.9019 6.15032C11.3001 7.00544 11.5636 7.56991 11.5643 8.203C11.5643 8.94419 11.1914 9.51579 10.7388 10.1327C10.654 10.2486 10.5698 10.3593 10.4882 10.4667C9.99551 11.114 9.88738 11.3011 9.9586 11.6351C10.103 12.3064 11.1797 14.3047 12.9492 16.07C14.7187 17.8353 16.6597 18.8438 17.3337 18.9875C17.6821 19.062 17.8731 18.9493 18.5413 18.4392C18.6371 18.3661 18.7355 18.2903 18.8384 18.2146C19.5286 17.7013 20.0738 17.3381 20.7976 17.3381H20.8015C21.4315 17.3381 21.9708 17.6113 22.8643 18.0618C24.0297 18.6496 26.6914 20.2362 27.8588 21.4137C28.4266 21.9859 28.7432 22.351 28.8979 22.7608C29.131 23.3777 28.9115 23.8612 28.7684 24.1849C28.7445 24.2386 28.7179 24.2976 28.6901 24.3629C28.4176 25.0087 28.0862 25.628 27.7001 26.213C27.0119 27.2423 26.3146 28.0391 25.1505 28.5809C24.5527 28.8636 23.8985 29.0068 23.2372 28.9998Z"
                            fill="#BE7E5E"
                          />
                        </svg>
                      </span>
                      <span class="py-1 px-3 font-weight-regular"
                        >+ 716 - 560 - 1920</span
                      >
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-row>
            <!-- The Seconed  Row-->
            <v-row class="justify-end">
              <v-col class="mt-16">
                <v-card
                  variant="flat"
                  class="details pt-1 text-center d-flex justify-end position-absolute"
                >
                  <v-card variant="flat">
                    <v-card-title
                      class="font-weight-bold"
                      style="font-size: 25px; color: #3b3a5d"
                    >
                      6,180
                    </v-card-title>
                    <v-card-text style="color: #c78a6c">
                      In property sales</v-card-text
                    >
                  </v-card>
                  <v-card variant="flat">
                    <v-card-title
                      class="font-weight-bold"
                      style="font-size: 25px; color: #3b3a5d"
                    >
                      99%
                    </v-card-title>
                    <v-card-text style="color: #c78a6c">
                      Customer satisfaction</v-card-text
                    >
                  </v-card>
                  <v-card variant="flat">
                    <v-card-title
                      class="font-weight-bold"
                      style="font-size: 25px; color: #3b3a5d"
                    >
                      25K+
                    </v-card-title>
                    <v-card-text style="color: #c78a6c">
                      Property Transaction</v-card-text
                    >
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <!-- End left column -->
          <!-- Start Column contain img -->
          <v-col cols="6">
            <div class="agent_img" style="display: inline-block">
              <img
                src="../assets/agent_details/agaent.png"
                alt=""
                style="width: 100%; height: 100%"
              />
            </div>
          </v-col>
        </v-row>
        <!-- Start Property Row -->
        <v-row>
          <v-col
            cols="12"
            md="12"
            sm="12"
            class="property d-flex justify-center mt-md-16"
            ><v-card variant="flat" class="text-center">
              <v-card-title
                class="title"
                style="letter-spacing: 5px; font-size: 14px"
              >
                <p
                  style="
                    font-family: source-sans-3 !important;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  <span style="color: #ffbb50">04</span>
                  <span> about us</span>
                </p>
              </v-card-title>
              <v-card-text
                class="sale_text"
                style="
                  padding: 12px;
                  font-size: 45px;
                  font-weight: 900;
                  line-height: 1.2;
                  font-family: Kufam sans-serif !important;
                  color: #3b3a5d;
                "
              >
                <div>
                  Properties for sale in your
                  <pre>favorite area</pre>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="jstify-space-between">
          <!-- 
            this Card contain 4 Divs :
            1- thumbnail
            2- sale & button
            3- title & subtitle
            4- buttons
           -->
          <v-col cols="12" sm="12" md="6" lg="6">
            <!-- Div Overlay -->
            <div
              class="Pro_cont"
              style="
                background-color: #f5f1ef;
                height: 590px;
                position: relative;
              "
            >
              <v-card
                variant="flat"
                width="90%"
                height="90%"
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: transparent;
                "
              >
                <!-- the First >> Thum -->
                <div class="thumbnail">
                  <v-img height="80%">
                    <img
                      src="../assets/agent_details/thum1.svg"
                      alt=""
                      width="100%"
                    />
                  </v-img>
                </div>
                <!-- The Second -->
                <div class="sale d-flex justify-between py-5">
                  <v-card-text
                    style="color: #ffbb50; font-size: 35px; padding-left: 0"
                    >$2500/Mo
                  </v-card-text>
                  <v-btn
                    class="pa-1 font-weight-medium"
                    variant="tonal"
                    size="large"
                    rounded="0"
                    style="
                      font-size: 14px;
                      font-family: sans-serif !important;
                      background: #ffbb50;
                      color: #3b3a5d;
                      width: 120px;
                    "
                    >For Sale</v-btn
                  >
                </div>
                <!-- The Third -->
                <div class="titles">
                  <v-card-title class="pa-0">
                    Comefortable Appartment</v-card-title
                  >
                  <v-card-subtitle class="d-flex align-center px-0 py-2">
                    <span
                      ><svg
                        width="18"
                        height="26"
                        viewBox="0 0 18 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C4.03144 0 0 3.74388 0 8.35714C0 15.7857 9 26 9 26C9 26 18 15.7857 18 8.35714C18 3.74388 13.9686 0 9 0ZM9 13C8.28799 13 7.59196 12.7822 6.99995 12.374C6.40793 11.9659 5.94651 11.3858 5.67403 10.7071C5.40156 10.0284 5.33027 9.28159 5.46917 8.56109C5.60808 7.84059 5.95095 7.17877 6.45442 6.65932C6.95788 6.13986 7.59934 5.78611 8.29768 5.6428C8.99601 5.49948 9.71985 5.57304 10.3777 5.85416C11.0355 6.13529 11.5977 6.61136 11.9933 7.22217C12.3889 7.83298 12.6 8.5511 12.6 9.28571C12.599 10.2705 12.2193 11.2146 11.5444 11.9109C10.8695 12.6073 9.95446 12.9989 9 13Z"
                          fill="#FFBB50"
                        />
                      </svg>
                    </span>
                    <span class="pl-2">709 West Drive Chicago, IL 60606</span>
                  </v-card-subtitle>
                </div>
                <!-- The Fourth -->
                <div class="parent_chips d-flex justify-center">
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.69999 11.5002V3.80017M8.69999 3.80017H17.8C18.5426 3.80017 19.2548 4.09517 19.7799 4.62027C20.305 5.14537 20.6 5.85756 20.6 6.60017V11.5002M8.69999 3.80017H1M20.6 11.5002L1 11.5M20.6 11.5002L20.6 15M1 15V1"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">3 beads</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.6001 8V2.94444C4.6001 2.42875 4.75813 1.93417 5.03944 1.56951C5.32074 1.20486 5.70227 1 6.1001 1C6.49792 1 6.87945 1.20486 7.16076 1.56951C7.44206 1.93417 7.6001 2.42875 7.6001 2.94444"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6001 7H11.6001V10H16.6001V7Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.3858 8H18.9572C19.1277 8 19.2913 8.06705 19.4118 8.18639C19.5324 8.30573 19.6001 8.46759 19.6001 8.63636V11.1818C19.6001 12.1945 19.1937 13.1656 18.4704 13.8817C17.747 14.5977 16.7659 15 15.743 15H5.45724C4.43426 15 3.45318 14.5977 2.72983 13.8817C2.00647 13.1656 1.6001 12.1945 1.6001 11.1818V8.63636C1.6001 8.46759 1.66783 8.30573 1.78839 8.18639C1.90895 8.06705 2.07246 8 2.24295 8H11.243"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">2 Baths</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.6001 6.83325H20.2668"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1001 12.6667V14.4167C19.1001 14.5715 19.0263 14.7198 18.8951 14.8292C18.7638 14.9386 18.5857 15.0001 18.4001 15.0001H16.3001C16.1144 15.0001 15.9364 14.9386 15.8051 14.8292C15.6738 14.7198 15.6001 14.5715 15.6001 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.26685 12.6667V14.4167C6.26685 14.5715 6.1931 14.7198 6.06182 14.8292C5.93054 14.9386 5.7525 15.0001 5.56685 15.0001H3.46685C3.28119 15.0001 3.10315 14.9386 2.97187 14.8292C2.8406 14.7198 2.76685 14.5715 2.76685 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.1001 9.16675H7.43343"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.4333 9.16675H16.7667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1002 7.17647L16.5566 1.41176C16.5038 1.28981 16.417 1.18596 16.3068 1.11285C16.1965 1.03974 16.0676 1.00053 15.9356 1H5.93143C5.79947 1.00053 5.67052 1.03974 5.56026 1.11285C5.45001 1.18596 5.3632 1.28981 5.31042 1.41176L2.76685 7.17647V12.6667H19.1002V7.17647Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name mr-1" style="font-size: 15px">
                      1barking
                    </div>
                  </div>
                  <div class="chip text-center">
                    <div class="svg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2544 1.47756L1.7569 12.975C1.48612 13.2458 1.48612 13.6848 1.7569 13.9556L6.32341 18.5221C6.59419 18.7929 7.03322 18.7929 7.304 18.5221L18.8015 7.02466C19.0723 6.75388 19.0723 6.31485 18.8015 6.04407L14.235 1.47756C13.9642 1.20678 13.5252 1.20678 13.2544 1.47756Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.1099 4.26855L13.5707 6.72935"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.82861 7.5498L11.1097 10.8309"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.54761 10.8308L7.0084 13.2916"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">120sqft</div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
          <!--  -->
          <v-col cols="12" sm="12" md="6" lg="6">
            <div
              class="Pro_cont"
              style="
                background-color: #f5f1ef;
                height: 590px;
                position: relative;
              "
            >
              <v-card
                variant="flat"
                width="90%"
                height="90%"
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: transparent;
                "
              >
                <!-- the First >> Thum -->
                <div class="thumbnail">
                  <v-img height="80%">
                    <img src="../assets/agent_details/thumb.svg" />
                  </v-img>
                </div>
                <!-- The Second -->
                <div class="sale d-flex justify-between py-5">
                  <v-card-text
                    style="color: #ffbb50; font-size: 35px; padding-left: 0"
                    >$2500/Mo
                  </v-card-text>
                  <v-btn
                    class="pa-1 font-weight-medium"
                    variant="tonal"
                    size="large"
                    rounded="0"
                    style="
                      font-size: 14px;
                      font-family: sans-serif !important;
                      background: #ffbb50;
                      color: #3b3a5d;
                      width: 120px;
                    "
                    >For Sale</v-btn
                  >
                </div>
                <!-- The Third -->
                <div class="titles">
                  <v-card-title class="pa-0">
                    Comefortable Appartment</v-card-title
                  >
                  <v-card-subtitle class="d-flex align-center px-0 py-2">
                    <span
                      ><svg
                        width="18"
                        height="26"
                        viewBox="0 0 18 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C4.03144 0 0 3.74388 0 8.35714C0 15.7857 9 26 9 26C9 26 18 15.7857 18 8.35714C18 3.74388 13.9686 0 9 0ZM9 13C8.28799 13 7.59196 12.7822 6.99995 12.374C6.40793 11.9659 5.94651 11.3858 5.67403 10.7071C5.40156 10.0284 5.33027 9.28159 5.46917 8.56109C5.60808 7.84059 5.95095 7.17877 6.45442 6.65932C6.95788 6.13986 7.59934 5.78611 8.29768 5.6428C8.99601 5.49948 9.71985 5.57304 10.3777 5.85416C11.0355 6.13529 11.5977 6.61136 11.9933 7.22217C12.3889 7.83298 12.6 8.5511 12.6 9.28571C12.599 10.2705 12.2193 11.2146 11.5444 11.9109C10.8695 12.6073 9.95446 12.9989 9 13Z"
                          fill="#FFBB50"
                        />
                      </svg>
                    </span>
                    <span class="pl-2">709 West Drive Chicago, IL 60606</span>
                  </v-card-subtitle>
                </div>
                <!-- The Fourth -->
                <div class="parent_chips d-flex justify-center">
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.69999 11.5002V3.80017M8.69999 3.80017H17.8C18.5426 3.80017 19.2548 4.09517 19.7799 4.62027C20.305 5.14537 20.6 5.85756 20.6 6.60017V11.5002M8.69999 3.80017H1M20.6 11.5002L1 11.5M20.6 11.5002L20.6 15M1 15V1"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">3 beads</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.6001 8V2.94444C4.6001 2.42875 4.75813 1.93417 5.03944 1.56951C5.32074 1.20486 5.70227 1 6.1001 1C6.49792 1 6.87945 1.20486 7.16076 1.56951C7.44206 1.93417 7.6001 2.42875 7.6001 2.94444"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6001 7H11.6001V10H16.6001V7Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.3858 8H18.9572C19.1277 8 19.2913 8.06705 19.4118 8.18639C19.5324 8.30573 19.6001 8.46759 19.6001 8.63636V11.1818C19.6001 12.1945 19.1937 13.1656 18.4704 13.8817C17.747 14.5977 16.7659 15 15.743 15H5.45724C4.43426 15 3.45318 14.5977 2.72983 13.8817C2.00647 13.1656 1.6001 12.1945 1.6001 11.1818V8.63636C1.6001 8.46759 1.66783 8.30573 1.78839 8.18639C1.90895 8.06705 2.07246 8 2.24295 8H11.243"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">2 Baths</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.6001 6.83325H20.2668"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1001 12.6667V14.4167C19.1001 14.5715 19.0263 14.7198 18.8951 14.8292C18.7638 14.9386 18.5857 15.0001 18.4001 15.0001H16.3001C16.1144 15.0001 15.9364 14.9386 15.8051 14.8292C15.6738 14.7198 15.6001 14.5715 15.6001 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.26685 12.6667V14.4167C6.26685 14.5715 6.1931 14.7198 6.06182 14.8292C5.93054 14.9386 5.7525 15.0001 5.56685 15.0001H3.46685C3.28119 15.0001 3.10315 14.9386 2.97187 14.8292C2.8406 14.7198 2.76685 14.5715 2.76685 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.1001 9.16675H7.43343"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.4333 9.16675H16.7667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1002 7.17647L16.5566 1.41176C16.5038 1.28981 16.417 1.18596 16.3068 1.11285C16.1965 1.03974 16.0676 1.00053 15.9356 1H5.93143C5.79947 1.00053 5.67052 1.03974 5.56026 1.11285C5.45001 1.18596 5.3632 1.28981 5.31042 1.41176L2.76685 7.17647V12.6667H19.1002V7.17647Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name mr-1" style="font-size: 15px">
                      1barking
                    </div>
                  </div>
                  <div class="chip text-center">
                    <div class="svg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2544 1.47756L1.7569 12.975C1.48612 13.2458 1.48612 13.6848 1.7569 13.9556L6.32341 18.5221C6.59419 18.7929 7.03322 18.7929 7.304 18.5221L18.8015 7.02466C19.0723 6.75388 19.0723 6.31485 18.8015 6.04407L14.235 1.47756C13.9642 1.20678 13.5252 1.20678 13.2544 1.47756Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.1099 4.26855L13.5707 6.72935"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.82861 7.5498L11.1097 10.8309"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.54761 10.8308L7.0084 13.2916"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">120sqft</div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <!-- Div Overlay -->
            <div
              class="Pro_cont"
              style="
                background-color: #f5f1ef;
                height: 590px;
                position: relative;
              "
            >
              <v-card
                variant="flat"
                width="90%"
                height="90%"
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: transparent;
                "
              >
                <!-- the First >> Thum -->
                <div class="thumbnail">
                  <v-img height="80%">
                    <img src="../assets/agent_details/thum3.svg" alt="" />
                  </v-img>
                </div>
                <!-- The Second -->
                <div class="sale d-flex justify-between py-5">
                  <v-card-text
                    style="color: #ffbb50; font-size: 35px; padding-left: 0"
                    >$2500/Mo
                  </v-card-text>
                  <v-btn
                    class="pa-1 font-weight-medium"
                    variant="tonal"
                    size="large"
                    rounded="0"
                    style="
                      font-size: 14px;
                      font-family: sans-serif !important;
                      background: #ffbb50;
                      color: #3b3a5d;
                      width: 120px;
                    "
                    >For Sale</v-btn
                  >
                </div>
                <!-- The Third -->
                <div class="titles">
                  <v-card-title class="pa-0">
                    Comefortable Appartment</v-card-title
                  >
                  <v-card-subtitle class="d-flex align-center px-0 py-2">
                    <span
                      ><svg
                        width="18"
                        height="26"
                        viewBox="0 0 18 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C4.03144 0 0 3.74388 0 8.35714C0 15.7857 9 26 9 26C9 26 18 15.7857 18 8.35714C18 3.74388 13.9686 0 9 0ZM9 13C8.28799 13 7.59196 12.7822 6.99995 12.374C6.40793 11.9659 5.94651 11.3858 5.67403 10.7071C5.40156 10.0284 5.33027 9.28159 5.46917 8.56109C5.60808 7.84059 5.95095 7.17877 6.45442 6.65932C6.95788 6.13986 7.59934 5.78611 8.29768 5.6428C8.99601 5.49948 9.71985 5.57304 10.3777 5.85416C11.0355 6.13529 11.5977 6.61136 11.9933 7.22217C12.3889 7.83298 12.6 8.5511 12.6 9.28571C12.599 10.2705 12.2193 11.2146 11.5444 11.9109C10.8695 12.6073 9.95446 12.9989 9 13Z"
                          fill="#FFBB50"
                        />
                      </svg>
                    </span>
                    <span class="pl-2">709 West Drive Chicago, IL 60606</span>
                  </v-card-subtitle>
                </div>
                <!-- The Fourth -->
                <div class="parent_chips d-flex justify-center">
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.69999 11.5002V3.80017M8.69999 3.80017H17.8C18.5426 3.80017 19.2548 4.09517 19.7799 4.62027C20.305 5.14537 20.6 5.85756 20.6 6.60017V11.5002M8.69999 3.80017H1M20.6 11.5002L1 11.5M20.6 11.5002L20.6 15M1 15V1"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">3 beads</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.6001 8V2.94444C4.6001 2.42875 4.75813 1.93417 5.03944 1.56951C5.32074 1.20486 5.70227 1 6.1001 1C6.49792 1 6.87945 1.20486 7.16076 1.56951C7.44206 1.93417 7.6001 2.42875 7.6001 2.94444"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6001 7H11.6001V10H16.6001V7Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.3858 8H18.9572C19.1277 8 19.2913 8.06705 19.4118 8.18639C19.5324 8.30573 19.6001 8.46759 19.6001 8.63636V11.1818C19.6001 12.1945 19.1937 13.1656 18.4704 13.8817C17.747 14.5977 16.7659 15 15.743 15H5.45724C4.43426 15 3.45318 14.5977 2.72983 13.8817C2.00647 13.1656 1.6001 12.1945 1.6001 11.1818V8.63636C1.6001 8.46759 1.66783 8.30573 1.78839 8.18639C1.90895 8.06705 2.07246 8 2.24295 8H11.243"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">2 Baths</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.6001 6.83325H20.2668"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1001 12.6667V14.4167C19.1001 14.5715 19.0263 14.7198 18.8951 14.8292C18.7638 14.9386 18.5857 15.0001 18.4001 15.0001H16.3001C16.1144 15.0001 15.9364 14.9386 15.8051 14.8292C15.6738 14.7198 15.6001 14.5715 15.6001 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.26685 12.6667V14.4167C6.26685 14.5715 6.1931 14.7198 6.06182 14.8292C5.93054 14.9386 5.7525 15.0001 5.56685 15.0001H3.46685C3.28119 15.0001 3.10315 14.9386 2.97187 14.8292C2.8406 14.7198 2.76685 14.5715 2.76685 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.1001 9.16675H7.43343"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.4333 9.16675H16.7667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1002 7.17647L16.5566 1.41176C16.5038 1.28981 16.417 1.18596 16.3068 1.11285C16.1965 1.03974 16.0676 1.00053 15.9356 1H5.93143C5.79947 1.00053 5.67052 1.03974 5.56026 1.11285C5.45001 1.18596 5.3632 1.28981 5.31042 1.41176L2.76685 7.17647V12.6667H19.1002V7.17647Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name mr-1" style="font-size: 15px">
                      1barking
                    </div>
                  </div>
                  <div class="chip text-center">
                    <div class="svg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2544 1.47756L1.7569 12.975C1.48612 13.2458 1.48612 13.6848 1.7569 13.9556L6.32341 18.5221C6.59419 18.7929 7.03322 18.7929 7.304 18.5221L18.8015 7.02466C19.0723 6.75388 19.0723 6.31485 18.8015 6.04407L14.235 1.47756C13.9642 1.20678 13.5252 1.20678 13.2544 1.47756Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.1099 4.26855L13.5707 6.72935"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.82861 7.5498L11.1097 10.8309"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.54761 10.8308L7.0084 13.2916"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">120sqft</div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
          <!--  -->
          <v-col cols="12" sm="12" md="6" lg="6">
            <div
              class="Pro_cont"
              style="
                background-color: #f5f1ef;
                height: 590px;
                position: relative;
              "
            >
              <v-card
                variant="flat"
                width="90%"
                height="90%"
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: transparent;
                "
              >
                <!-- the First >> Thum -->
                <div class="thumbnail">
                  <v-img height="80%">
                    <img src="../assets/agent_details/thum4.svg" />
                  </v-img>
                </div>
                <!-- The Second -->
                <div class="sale d-flex justify-between py-5">
                  <v-card-text
                    style="color: #ffbb50; font-size: 35px; padding-left: 0"
                    >$2500/Mo
                  </v-card-text>
                  <v-btn
                    class="pa-1 font-weight-medium"
                    variant="tonal"
                    size="large"
                    rounded="0"
                    style="
                      font-size: 14px;
                      font-family: sans-serif !important;
                      background: #ffbb50;
                      color: #3b3a5d;
                      width: 120px;
                    "
                    >For Sale</v-btn
                  >
                </div>
                <!-- The Third -->
                <div class="titles">
                  <v-card-title class="pa-0">
                    Comefortable Appartment</v-card-title
                  >
                  <v-card-subtitle class="d-flex align-center px-0 py-2">
                    <span
                      ><svg
                        width="18"
                        height="26"
                        viewBox="0 0 18 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0C4.03144 0 0 3.74388 0 8.35714C0 15.7857 9 26 9 26C9 26 18 15.7857 18 8.35714C18 3.74388 13.9686 0 9 0ZM9 13C8.28799 13 7.59196 12.7822 6.99995 12.374C6.40793 11.9659 5.94651 11.3858 5.67403 10.7071C5.40156 10.0284 5.33027 9.28159 5.46917 8.56109C5.60808 7.84059 5.95095 7.17877 6.45442 6.65932C6.95788 6.13986 7.59934 5.78611 8.29768 5.6428C8.99601 5.49948 9.71985 5.57304 10.3777 5.85416C11.0355 6.13529 11.5977 6.61136 11.9933 7.22217C12.3889 7.83298 12.6 8.5511 12.6 9.28571C12.599 10.2705 12.2193 11.2146 11.5444 11.9109C10.8695 12.6073 9.95446 12.9989 9 13Z"
                          fill="#FFBB50"
                        />
                      </svg>
                    </span>
                    <span class="pl-2">709 West Drive Chicago, IL 60606</span>
                  </v-card-subtitle>
                </div>
                <!-- The Fourth -->
                <div class="parent_chips d-flex justify-center">
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.69999 11.5002V3.80017M8.69999 3.80017H17.8C18.5426 3.80017 19.2548 4.09517 19.7799 4.62027C20.305 5.14537 20.6 5.85756 20.6 6.60017V11.5002M8.69999 3.80017H1M20.6 11.5002L1 11.5M20.6 11.5002L20.6 15M1 15V1"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">3 beads</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6001 15V17"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.6001 8V2.94444C4.6001 2.42875 4.75813 1.93417 5.03944 1.56951C5.32074 1.20486 5.70227 1 6.1001 1C6.49792 1 6.87945 1.20486 7.16076 1.56951C7.44206 1.93417 7.6001 2.42875 7.6001 2.94444"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6001 7H11.6001V10H16.6001V7Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.3858 8H18.9572C19.1277 8 19.2913 8.06705 19.4118 8.18639C19.5324 8.30573 19.6001 8.46759 19.6001 8.63636V11.1818C19.6001 12.1945 19.1937 13.1656 18.4704 13.8817C17.747 14.5977 16.7659 15 15.743 15H5.45724C4.43426 15 3.45318 14.5977 2.72983 13.8817C2.00647 13.1656 1.6001 12.1945 1.6001 11.1818V8.63636C1.6001 8.46759 1.66783 8.30573 1.78839 8.18639C1.90895 8.06705 2.07246 8 2.24295 8H11.243"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">2 Baths</div>
                  </div>
                  <div class="chip">
                    <div class="svg">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.6001 6.83325H20.2668"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1001 12.6667V14.4167C19.1001 14.5715 19.0263 14.7198 18.8951 14.8292C18.7638 14.9386 18.5857 15.0001 18.4001 15.0001H16.3001C16.1144 15.0001 15.9364 14.9386 15.8051 14.8292C15.6738 14.7198 15.6001 14.5715 15.6001 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.26685 12.6667V14.4167C6.26685 14.5715 6.1931 14.7198 6.06182 14.8292C5.93054 14.9386 5.7525 15.0001 5.56685 15.0001H3.46685C3.28119 15.0001 3.10315 14.9386 2.97187 14.8292C2.8406 14.7198 2.76685 14.5715 2.76685 14.4167V12.6667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.1001 9.16675H7.43343"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.4333 9.16675H16.7667"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.1002 7.17647L16.5566 1.41176C16.5038 1.28981 16.417 1.18596 16.3068 1.11285C16.1965 1.03974 16.0676 1.00053 15.9356 1H5.93143C5.79947 1.00053 5.67052 1.03974 5.56026 1.11285C5.45001 1.18596 5.3632 1.28981 5.31042 1.41176L2.76685 7.17647V12.6667H19.1002V7.17647Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name mr-1" style="font-size: 15px">
                      1barking
                    </div>
                  </div>
                  <div class="chip text-center">
                    <div class="svg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2544 1.47756L1.7569 12.975C1.48612 13.2458 1.48612 13.6848 1.7569 13.9556L6.32341 18.5221C6.59419 18.7929 7.03322 18.7929 7.304 18.5221L18.8015 7.02466C19.0723 6.75388 19.0723 6.31485 18.8015 6.04407L14.235 1.47756C13.9642 1.20678 13.5252 1.20678 13.2544 1.47756Z"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.1099 4.26855L13.5707 6.72935"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.82861 7.5498L11.1097 10.8309"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.54761 10.8308L7.0084 13.2916"
                          stroke="#3B3A5D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="name">120sqft</div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <div class="overlay">
              <div class="over_btn mt-10">
                <v-btn color="#3B3A5D" size="large"
                  >Touch With Us
                  <span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style="margin-left: 2px"
                    >
                      <path
                        d="M17 8C17 3.58192 13.1942 0 8.5 0C3.80579 0 0 3.58192 0 8C0 12.4181 3.80579 16 8.5 16C13.1942 16 17 12.4181 17 8ZM8.30998 11.5138C8.249 11.4569 8.20054 11.3893 8.16736 11.3147C8.13417 11.2402 8.11692 11.1602 8.11658 11.0794C8.11623 10.9985 8.13281 10.9184 8.16537 10.8437C8.19792 10.7689 8.24581 10.7008 8.3063 10.6435L10.4444 8.61539H4.98558C4.81217 8.61539 4.64586 8.55055 4.52324 8.43514C4.40062 8.31974 4.33173 8.16321 4.33173 8C4.33173 7.83679 4.40062 7.68026 4.52324 7.56486C4.64586 7.44945 4.81217 7.38462 4.98558 7.38462H10.4444L8.3063 5.35654C8.24582 5.29911 8.19795 5.23103 8.16542 5.15619C8.13289 5.08135 8.11635 5.00122 8.11673 4.92036C8.11711 4.8395 8.1344 4.7595 8.16763 4.68494C8.20086 4.61037 8.24937 4.54269 8.31038 4.48577C8.3714 4.42885 8.44374 4.38379 8.52325 4.35318C8.60277 4.32257 8.68791 4.30699 8.77383 4.30735C8.94733 4.30807 9.11343 4.37363 9.23558 4.48962L12.4799 7.56654C12.6014 7.68181 12.6696 7.83761 12.6696 8C12.6696 8.16239 12.6014 8.31819 12.4799 8.43346L9.23558 11.5104C9.17509 11.5679 9.10314 11.6136 9.02386 11.6449C8.94458 11.6762 8.85951 11.6925 8.77354 11.6928C8.68756 11.6931 8.60237 11.6775 8.52282 11.6468C8.44328 11.6161 8.37095 11.5709 8.30998 11.5138Z"
                        fill="#FFBB50"
                      />
                    </svg>
                  </span>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "agent-details",
};
</script>
<style lang="scss" scoped>
.parent {
  height: 3000px;
}
.agent-bannner {
  background-image: url("../assets/agent_details/Background.svg");
  background-size: cover;
  background-position: left top;
  height: 930px;
}
.title p {
  position: relative;
}
.title::after,
.title::before {
  position: absolute;
  content: "";
  width: 2px;
  height: 15px;
  font-weight: bold;
  background-color: #3b3a5d;
}
.title::after {
  top: 15px;
  left: 195px;
}
.title::before {
  top: 15px;
  left: 345px;
}
.parent_chips {
  position: relative;
  margin-top: 10px;
  .chip {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 25%;
    border: 1px solid #d7d7d7;
    margin: 5px;
    padding: 3px;
    position: relative;
    font-size: 14px;
    .svg {
      margin-right: 1px;
      width: 30% !important;
    }
    .name {
      padding: 4px;
      padding-left: 0;
      font-size: 14px !important;
      // margin-left: px;
    }
    .svg::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 12px;
      color: red;
      background: #3b3a5d;
      top: 12px;
      left: 39px;
    }
  }
}
// Overlay Div
.overlay {
  position: relative;
  &::after {
    position: absolute;
    content: " ";
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #fae2d6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -9999;
  }
}

// Start Media Queries
@media (max-width: 870px) {
  .v-card-text.agent_name.font-weight-bold.py-12.px-0 {
    font-size: 35px !important;
  }
}
// Screen 590px
@media (max-width: 590px) {
  .v-card-text.agent_name.font-weight-bold.py-12.px-0 {
    font-size: 25px !important;
  }
  .v-card-text.sale_text {
    font-size: 30px !important;
  }
  .v-card-text.px-1.pt-0 {
    font-size: 16px !important;
  }
  .v-card-text.px-1.py-4 {
    font-size: 16px !important;
  }
}
@media (max-width: 960px) {
  .v-card-text.agent_name.font-weight-bold.py-12.px-0 {
    font-size: 30px !important;
  }
  .v-col-sm-12.v-col-md-12.v-col-12.property.d-flex.justify-center.mt-md-16 {
    margin-top: 100px !important;
  }
  .title::after,
  .title::before {
    width: 0;
    height: 0;
  }
}
@media (max-width: 720px) {
  .v-col-sm-12.v-col-md-12.v-col-12.property.d-flex.justify-center.mt-md-16[data-v-68f2b237] {
    width: fit-content;
  }
  .title::after,
  .title::before {
    width: 0;
    height: 0;
  }
}
@media (max-width: 1279px) {
  .svg::after {
    top: 9px !important;
    left: 26px !important;
  }
  .chip {
    padding: 0 !important;
    margin: 0 !important;
  }
}
@media (max-width: 959px) {
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat {
    width: 80% !important;
    min-width: 0 !important;
  }
  .svg::after {
    top: 9px !important;
    left: 38px !important;
  }
}

@media (max-width: 660px) {
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat {
    width: 100% !important;
  }
  .sale.d-flex.justify-between.py-5 {
    margin: 0 15px;
  }
  .overlay::after {
    width: 400px !important;
    height: 400px !important;
  }
}
@media (max-width: 1280px) {
  .Pro_cont .v-card {
    height: 600px !important;
  }
  img {
    margin-top: 30px !important;
  }
}
</style>

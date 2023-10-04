import { Htag } from "@/elements";
import { Technology } from "@/components";
import { withLayout } from "@/layout/Layout";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.firstScreen}>
        <div className={styles.main}></div>
        <div className={styles.titleH1}>
          <Htag tag="h1">Самая технологичная онлайн-библиотека</Htag>
        </div>
        <div className={styles.arrowDown}>
          <a className={styles.about} href="#about">
            {" "}
            <svg width="24" fillсв="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0001 21.2501C11.8101 21.2501 11.6201 21.1801 11.4701 21.0301L5.40012 14.9601C5.11012 14.6701 5.11012 14.1901 5.40012 13.9001C5.69012 13.6101 6.17012 13.6101 6.46012 13.9001L12.0001 19.4401L17.5401 13.9001C17.8301 13.6101 18.3101 13.6101 18.6001 13.9001C18.8901 14.1901 18.8901 14.6701 18.6001 14.9601L12.5301 21.0301C12.3801 21.1801 12.1901 21.2501 12.0001 21.2501Z"
                fill="#fff"
              />
              <path
                d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>
      <section id="about" className={styles.secondScreen}>
        <Htag tag="h2">Акутальный стек библиотеки</Htag>
        <div className={styles.techonologyWrapper}>
          <Technology link="https://nextjs.org/" desc="Client">
            <svg
              aria-label="Next.js logotype"
              height="100"
              role="img"
              viewBox="0 0 394 79"
              width="200"
            >
              <path
                d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                clipRule="evenodd"
                d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                fill="var(--geist-foreground)"
                fillRule="evenodd"
              ></path>
              <path
                d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                fill="var(--geist-foreground)"
              ></path>
              <path
                d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                fill="var(--geist-foreground)"
              ></path>
            </svg>
          </Technology>
          <Technology link="https://expressjs.com/" desc="Server">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="200"
              height="100"
            >
              <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
            </svg>
          </Technology>
          <Technology link="https://www.mongodb.com/" desc="Database">
            <svg
              width="200"
              height="100"
              viewBox="0 0 1102 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M82.3229 28.6444C71.5367 15.8469 62.2485 2.84945 60.351 0.149971C60.1512 -0.0499903 59.8515 -0.0499903 59.6518 0.149971C57.7542 2.84945 48.4661 15.8469 37.6798 28.6444C-54.9019 146.721 52.2613 226.406 52.2613 226.406L53.1601 227.006C53.959 239.303 55.9565 257 55.9565 257H59.9514H63.9463C63.9463 257 65.9438 239.403 66.7428 227.006L67.6416 226.306C67.7414 226.406 174.905 146.721 82.3229 28.6444ZM59.9514 224.606C59.9514 224.606 55.1576 220.507 53.8592 218.408V218.207L59.6518 89.6326C59.6518 89.2326 60.2511 89.2326 60.2511 89.6326L66.0436 218.207V218.408C64.7453 220.507 59.9514 224.606 59.9514 224.606Z"
                fill="#001E2B"
              />
              <path
                d="M260.501 198.369L215.845 89.3012L215.745 89H181.001V96.3314H186.608C188.31 96.3314 189.912 97.0344 191.114 98.2396C192.315 99.4447 192.916 101.052 192.916 102.759L191.915 212.53C191.915 215.944 189.112 218.756 185.707 218.857L180 218.957V226.188H213.843V218.957L210.338 218.857C206.934 218.756 204.13 215.944 204.13 212.53V109.086L252.792 226.188C253.492 227.895 255.094 229 256.897 229C258.699 229 260.301 227.895 261.002 226.188L308.562 111.697L309.263 212.53C309.263 216.045 306.459 218.857 302.955 218.957H299.35V226.188H339V218.957H333.593C330.189 218.957 327.385 216.045 327.285 212.63L326.985 102.859C326.985 99.3443 329.788 96.5322 333.193 96.4318L339 96.3314V89H305.157L260.501 198.369Z"
                fill="#001E2B"
              />
              <path
                d="M571.869 217.046C570.764 215.94 570.162 214.431 570.162 212.62V158.696C570.162 148.435 567.151 140.386 561.127 134.652C555.205 128.917 546.973 126 536.734 126C522.378 126 511.035 131.835 503.104 143.304C503.004 143.505 502.703 143.606 502.402 143.606C502.1 143.606 501.9 143.404 501.9 143.103L498.185 128.716H491.961L476 137.871V142.901H480.116C482.023 142.901 483.629 143.404 484.734 144.411C485.838 145.417 486.44 146.926 486.44 149.038V212.519C486.44 214.33 485.838 215.839 484.734 216.946C483.629 218.052 482.124 218.656 480.317 218.656H476.301V226H513.042V218.656H509.027C507.22 218.656 505.714 218.052 504.61 216.946C503.506 215.839 502.903 214.33 502.903 212.519V170.467C502.903 165.135 504.108 159.803 506.317 154.571C508.625 149.441 512.038 145.115 516.556 141.795C521.073 138.475 526.494 136.865 532.718 136.865C539.745 136.865 545.066 139.078 548.378 143.505C551.691 147.932 553.398 153.666 553.398 160.507V212.419C553.398 214.229 552.795 215.738 551.691 216.845C550.587 217.952 549.081 218.555 547.274 218.555H543.259V225.899H580V218.555H575.985C574.479 218.757 573.073 218.153 571.869 217.046Z"
                fill="#001E2B"
              />
              <path
                d="M907.546 97.2119C897.39 91.804 886.039 89 873.792 89H826V96.3106H830.68C832.472 96.3106 834.065 97.0117 835.658 98.614C837.152 100.116 837.948 101.819 837.948 103.621V211.379C837.948 213.181 837.152 214.884 835.658 216.386C834.165 217.888 832.472 218.689 830.68 218.689H826V226H873.792C886.039 226 897.39 223.196 907.546 217.788C917.701 212.38 925.966 204.368 931.94 194.154C937.914 183.939 941 171.621 941 157.6C941 143.58 937.914 131.362 931.94 121.047C925.866 110.632 917.701 102.72 907.546 97.2119ZM921.784 157.4C921.784 170.219 919.494 181.034 915.013 189.747C910.533 198.46 904.558 204.969 897.19 209.176C889.823 213.382 881.658 215.485 872.896 215.485H863.238C861.446 215.485 859.853 214.784 858.26 213.181C856.766 211.679 855.97 209.977 855.97 208.174V106.526C855.97 104.723 856.667 103.121 858.26 101.518C859.753 100.016 861.446 99.2149 863.238 99.2149H872.896C881.658 99.2149 889.823 101.318 897.19 105.524C904.558 109.73 910.533 116.24 915.013 124.952C919.494 133.765 921.784 144.681 921.784 157.4Z"
                fill="#001E2B"
              />
              <path
                d="M1053.97 164.711C1049.55 159.603 1041.02 155.297 1030.99 152.993C1044.84 146.083 1051.96 136.369 1051.96 123.851C1051.96 117.041 1050.16 110.932 1046.54 105.724C1042.93 100.517 1037.81 96.3106 1031.29 93.4063C1024.76 90.5021 1017.13 89 1008.5 89H954.402V96.3106H958.718C960.524 96.3106 962.13 97.0117 963.736 98.614C965.242 100.116 966.045 101.819 966.045 103.621V211.379C966.045 213.181 965.242 214.884 963.736 216.386C962.231 217.888 960.524 218.689 958.718 218.689H954V226H1012.72C1021.65 226 1029.98 224.498 1037.51 221.493C1045.04 218.489 1051.06 214.083 1055.38 208.274C1059.79 202.466 1062 195.355 1062 187.143C1061.9 178.33 1059.29 170.819 1053.97 164.711ZM986.621 213.281C985.115 211.779 984.312 210.077 984.312 208.274V159.903H1012.22C1022.05 159.903 1029.58 162.407 1034.8 167.414C1040.02 172.422 1042.63 178.931 1042.63 186.943C1042.63 191.75 1041.42 196.457 1039.22 200.763C1036.91 205.17 1033.49 208.675 1028.88 211.379C1024.36 214.083 1018.74 215.485 1012.22 215.485H991.639C989.833 215.485 988.227 214.784 986.621 213.281ZM984.413 149.588V106.626C984.413 104.823 985.115 103.221 986.721 101.618C988.227 100.116 989.933 99.315 991.74 99.315H1004.99C1014.52 99.315 1021.55 101.719 1025.97 106.325C1030.38 111.032 1032.59 117.041 1032.59 124.452C1032.59 132.063 1030.48 138.172 1026.37 142.778C1022.25 147.285 1016.03 149.588 1007.8 149.588H984.413Z"
                fill="#001E2B"
              />
              <path
                d="M431.999 132.388C424.329 128.196 415.763 126 406.5 126C397.237 126 388.571 128.096 381.001 132.388C373.331 136.579 367.255 142.667 362.773 150.352C358.291 158.037 356 167.02 356 177C356 186.98 358.291 195.963 362.773 203.648C367.255 211.333 373.331 217.421 381.001 221.613C388.671 225.804 397.237 228 406.5 228C415.763 228 424.429 225.904 431.999 221.613C439.669 217.421 445.745 211.333 450.227 203.648C454.709 195.963 457 186.98 457 177C457 167.02 454.709 158.037 450.227 150.352C445.745 142.667 439.669 136.579 431.999 132.388ZM439.37 177C439.37 189.276 436.382 199.256 430.405 206.442C424.529 213.628 416.461 217.321 406.5 217.321C396.54 217.321 388.471 213.628 382.595 206.442C376.618 199.256 373.63 189.276 373.63 177C373.63 164.724 376.618 154.744 382.595 147.558C388.471 140.372 396.54 136.679 406.5 136.679C416.461 136.679 424.529 140.372 430.405 147.558C436.382 154.744 439.37 164.724 439.37 177Z"
                fill="#001E2B"
              />
              <path
                d="M784.999 132.388C777.329 128.196 768.763 126 759.5 126C750.237 126 741.571 128.096 734.001 132.388C726.331 136.579 720.255 142.667 715.773 150.352C711.291 158.037 709 167.02 709 177C709 186.98 711.291 195.963 715.773 203.648C720.255 211.333 726.331 217.421 734.001 221.613C741.671 225.804 750.237 228 759.5 228C768.763 228 777.429 225.904 784.999 221.613C792.669 217.421 798.745 211.333 803.227 203.648C807.709 195.963 810 186.98 810 177C810 167.02 807.709 158.037 803.227 150.352C798.745 142.667 792.569 136.579 784.999 132.388ZM792.37 177C792.37 189.276 789.381 199.256 783.405 206.442C777.528 213.628 769.46 217.321 759.5 217.321C749.539 217.321 741.471 213.628 735.595 206.442C729.618 199.256 726.63 189.276 726.63 177C726.63 164.624 729.618 154.744 735.595 147.558C741.471 140.372 749.539 136.679 759.5 136.679C769.46 136.679 777.528 140.372 783.405 147.558C789.282 154.744 792.37 164.724 792.37 177Z"
                fill="#001E2B"
              />
              <path
                d="M642.64 126C634.614 126 627.292 127.704 620.671 131.113C614.05 134.522 608.834 139.135 605.122 145.05C601.411 150.865 599.505 157.383 599.505 164.301C599.505 170.517 600.909 176.232 603.818 181.346C606.627 186.259 610.439 190.369 615.254 193.778L600.909 213.23C599.103 215.636 598.903 218.844 600.207 221.451C601.611 224.158 604.219 225.763 607.229 225.763H611.342C607.329 228.47 604.119 231.678 601.912 235.488C599.304 239.799 598 244.311 598 248.923C598 257.546 601.812 264.665 609.335 269.979C616.759 275.293 627.191 278 640.332 278C649.461 278 658.188 276.496 666.113 273.588C674.138 270.681 680.658 266.369 685.473 260.755C690.389 255.14 692.897 248.322 692.897 240.501C692.897 232.28 689.887 226.464 682.865 220.85C676.847 216.137 667.417 213.631 655.68 213.631H615.555C615.455 213.631 615.354 213.53 615.354 213.53C615.354 213.53 615.254 213.33 615.354 213.23L625.787 199.193C628.596 200.496 631.204 201.298 633.511 201.799C635.918 202.301 638.627 202.501 641.636 202.501C650.063 202.501 657.687 200.797 664.307 197.388C670.928 193.979 676.245 189.367 680.057 183.451C683.868 177.636 685.774 171.119 685.774 164.201C685.774 156.781 682.163 143.245 672.332 136.327C672.332 136.227 672.433 136.227 672.433 136.227L694 138.633V128.707H659.492C654.075 127.003 648.458 126 642.64 126ZM654.677 188.765C650.865 190.77 646.752 191.873 642.64 191.873C635.919 191.873 630 189.467 624.984 184.755C619.969 180.042 617.461 173.124 617.461 164.301C617.461 155.478 619.969 148.559 624.984 143.847C630 139.135 635.919 136.728 642.64 136.728C646.853 136.728 650.865 137.731 654.677 139.836C658.489 141.842 661.599 144.95 664.107 149.061C666.514 153.172 667.818 158.285 667.818 164.301C667.818 170.417 666.614 175.53 664.107 179.541C661.699 183.652 658.489 186.76 654.677 188.765ZM627.492 225.662H654.677C662.201 225.662 667.016 227.166 670.226 230.375C673.436 233.583 675.041 237.894 675.041 242.908C675.041 250.227 672.132 256.243 666.314 260.755C660.495 265.267 652.671 267.573 643.041 267.573C634.614 267.573 627.592 265.668 622.476 262.058C617.36 258.449 614.752 252.934 614.752 245.916C614.752 241.504 615.956 237.393 618.364 233.784C620.771 230.174 623.68 227.567 627.492 225.662Z"
                fill="#001E2B"
              />
              <path
                d="M1082.35 224.327C1080.37 223.244 1078.88 221.669 1077.69 219.799C1076.6 217.831 1076 215.764 1076 213.5C1076 211.236 1076.6 209.071 1077.69 207.201C1078.78 205.232 1080.37 203.756 1082.35 202.673C1084.34 201.591 1086.52 201 1089 201C1091.48 201 1093.66 201.591 1095.65 202.673C1097.63 203.756 1099.12 205.331 1100.31 207.201C1101.4 209.169 1102 211.236 1102 213.5C1102 215.764 1101.4 217.929 1100.31 219.799C1099.22 221.768 1097.63 223.244 1095.65 224.327C1093.66 225.409 1091.48 226 1089 226C1086.62 226 1084.34 225.508 1082.35 224.327ZM1094.56 222.949C1096.24 222.063 1097.44 220.685 1098.43 219.11C1099.32 217.437 1099.82 215.567 1099.82 213.5C1099.82 211.433 1099.32 209.563 1098.43 207.89C1097.53 206.217 1096.24 204.937 1094.56 204.051C1092.87 203.165 1091.08 202.673 1089 202.673C1086.92 202.673 1085.13 203.165 1083.44 204.051C1081.76 204.937 1080.56 206.315 1079.57 207.89C1078.68 209.563 1078.18 211.433 1078.18 213.5C1078.18 215.567 1078.68 217.437 1079.57 219.11C1080.47 220.783 1081.76 222.063 1083.44 222.949C1085.13 223.835 1086.92 224.327 1089 224.327C1091.08 224.327 1092.97 223.835 1094.56 222.949ZM1083.64 219.504V218.618L1083.84 218.52H1084.44C1084.63 218.52 1084.83 218.421 1084.93 218.323C1085.13 218.126 1085.13 218.028 1085.13 217.831V208.677C1085.13 208.48 1085.03 208.284 1084.93 208.185C1084.73 207.988 1084.63 207.988 1084.44 207.988H1083.84L1083.64 207.89V207.004L1083.84 206.906H1089C1090.49 206.906 1091.58 207.201 1092.47 207.89C1093.37 208.579 1093.76 209.465 1093.76 210.646C1093.76 211.532 1093.47 212.417 1092.77 213.008C1092.08 213.697 1091.28 214.091 1090.29 214.189L1091.48 214.583L1093.76 218.224C1093.96 218.52 1094.16 218.618 1094.46 218.618H1095.05L1095.15 218.717V219.602L1095.05 219.701H1091.98L1091.78 219.602L1088.6 214.287H1087.81V217.831C1087.81 218.028 1087.91 218.224 1088.01 218.323C1088.21 218.52 1088.31 218.52 1088.5 218.52H1089.1L1089.3 218.618V219.504L1089.1 219.602H1083.84L1083.64 219.504ZM1088.7 213.008C1089.5 213.008 1090.19 212.811 1090.59 212.319C1090.98 211.925 1091.28 211.236 1091.28 210.449C1091.28 209.661 1091.08 209.071 1090.69 208.579C1090.29 208.087 1089.69 207.89 1089 207.89H1088.6C1088.4 207.89 1088.21 207.988 1088.11 208.087C1087.91 208.283 1087.91 208.382 1087.91 208.579V213.008H1088.7Z"
                fill="#001E2B"
              />
            </svg>
          </Technology>
          <Technology link="https://vercel.com/" desc="Deployment">
            <svg
              width="200"
              height="100"
              viewBox="0 0 76 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000" />
            </svg>
          </Technology>
        </div>
      </section>
    </>
  );
}

export default withLayout(Home);

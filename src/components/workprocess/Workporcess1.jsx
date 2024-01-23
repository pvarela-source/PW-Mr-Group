import React from "react";

function Workporcess1() {
  return (
    <div className="working-process-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-60">
          <div className="col-lg-10">
            <div className="section-title-one">
              <div className="section-subtitle d-flex justify-content-center">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                Working Process
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h2>
                Our Working <span>Process</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="work-process-wrapper">
          <div className="work-process-one">
            <span className="serial-number">01</span>
            <div className="work-process-icon">
              <div className="rotate-arrow">
                <svg
                  width={70}
                  height={70}
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.94368 54.2064C2.63143 53.0642 3.02741 51.7187 3.35045 50.3471C8.78476 60.809 19.3668 68.1417 31.1316 69.7115C44.7929 71.5369 57.7769 64.4076 64.8473 52.7826C72.1104 40.8395 71.7561 26.0333 63.3728 14.7682C55.4792 4.16021 42.0263 -2.0721 28.8495 0.629439C14.3129 3.60739 2.4647 16.3015 0.953724 31.1078C0.87036 31.9213 2.27192 32.1195 2.38655 31.3007C4.15804 19.0812 12.9373 8.45242 24.5198 4.21236C36.4878 -0.16329 49.5291 3.70648 58.199 12.7916C66.9418 21.9497 69.6355 35.0923 64.6076 46.8006C59.6735 58.29 48.4506 66.9631 35.7167 66.9839C23.2797 67.01 11.1815 59.5208 5.74717 48.36C7.08621 48.626 8.42525 48.8972 9.7695 49.1632C12.3173 49.6743 13.3385 45.6794 10.8324 45.3039C8.22726 44.9127 5.61692 44.5163 3.01178 44.1304C2.08956 43.9948 1.01104 44.3494 0.786995 45.3925C0.203445 48.1462 -0.552045 51.5153 0.604636 54.2012C0.844308 54.7644 1.67274 54.6601 1.94368 54.2064Z" />
                </svg>
              </div>
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.631578 12.7742C0.464073 12.7742 0.303429 12.8354 0.184985 12.9443C0.066541 13.0532 0 13.2008 0 13.3548V15.6774C0 15.8314 0.066541 15.9791 0.184985 16.088C0.303429 16.1969 0.464073 16.2581 0.631578 16.2581H2.00866C2.20671 17.0472 2.53516 17.8037 2.98255 18.5013L1.44813 19.912C1.38948 19.9659 1.34295 20.0299 1.31121 20.1004C1.27947 20.1708 1.26313 20.2463 1.26313 20.3226C1.26313 20.3988 1.27947 20.4743 1.31121 20.5448C1.34295 20.6152 1.38948 20.6792 1.44813 20.7332L3.34286 22.4751C3.40151 22.529 3.47114 22.5718 3.54777 22.601C3.6244 22.6302 3.70653 22.6452 3.78947 22.6452C3.87241 22.6452 3.95454 22.6302 4.03117 22.601C4.1078 22.5718 4.17742 22.529 4.23607 22.4751L5.77049 21.0644C6.5293 21.4757 7.35219 21.7777 8.21052 21.9598V23.8064C8.21052 23.9604 8.27706 24.1081 8.3955 24.217C8.51394 24.3259 8.67459 24.3871 8.84209 24.3871H11.0566C11.4611 25.8296 12.2371 27.1614 13.3192 28.2702C14.4013 29.379 15.7577 30.2321 17.2738 30.7577C18.79 31.2832 20.4214 31.4657 22.0304 31.2897C23.6393 31.1138 25.1787 30.5845 26.5184 29.7467L32.7654 35.4898C32.9413 35.6516 33.1502 35.7799 33.3801 35.8674C33.61 35.955 33.8564 36 34.1052 36C34.354 36 34.6004 35.955 34.8303 35.8674C35.0602 35.7799 35.2691 35.6516 35.445 35.4898C35.621 35.328 35.7605 35.136 35.8558 34.9247C35.951 34.7133 36 34.4868 36 34.258C36 34.0293 35.951 33.8028 35.8558 33.5914C35.7605 33.3801 35.621 33.188 35.445 33.0263L29.198 27.2831C30.583 25.413 31.1766 23.142 30.8673 20.8976C30.5579 18.6532 29.3668 16.5901 27.5183 15.0968H28.421C28.5885 15.0968 28.7492 15.0356 28.8676 14.9267C28.9861 14.8178 29.0526 14.6701 29.0526 14.5161V12.2995C29.1771 11.9961 30.9473 7.67353 30.9473 7.5484C30.9473 6.27156 30.5557 5.26414 29.7833 4.55401C29.011 3.84389 27.9151 3.48389 26.5263 3.48389C25.1374 3.48389 24.0417 3.84396 23.2692 4.55401C22.4968 5.26407 22.1052 6.27156 22.1052 7.5484C22.1052 7.618 24 12.2988 24 12.2988V13.2392C22.981 12.9305 21.9149 12.7735 20.8421 12.7742H18.2018C18.0038 11.9851 17.6753 11.2286 17.2279 10.531L18.7624 9.12027C18.821 9.06636 18.8675 9.00235 18.8993 8.9319C18.931 8.86145 18.9474 8.78594 18.9474 8.70969C18.9474 8.63343 18.931 8.55793 18.8993 8.48748C18.8675 8.41703 18.821 8.35302 18.7624 8.2991L16.8676 6.55717C16.809 6.50324 16.7394 6.46047 16.6627 6.43129C16.5861 6.40211 16.504 6.38709 16.421 6.38709C16.3381 6.38709 16.256 6.40211 16.1793 6.43129C16.1027 6.46047 16.0331 6.50324 15.9744 6.55717L14.44 7.96784C13.6812 7.55653 12.8583 7.25457 12 7.07249V5.22582C12 5.07182 11.9334 4.92413 11.815 4.81524C11.6966 4.70635 11.5359 4.64518 11.3684 4.64518H8.84209C8.67459 4.64518 8.51394 4.70635 8.3955 4.81524C8.27706 4.92413 8.21052 5.07182 8.21052 5.22582V7.07249C7.35219 7.25457 6.5293 7.55653 5.77049 7.96784L4.23607 6.55717C4.17742 6.50324 4.1078 6.46047 4.03117 6.43129C3.95454 6.40211 3.87241 6.38709 3.78947 6.38709C3.70653 6.38709 3.6244 6.40211 3.54777 6.43129C3.47114 6.46047 3.40151 6.50324 3.34286 6.55717L1.44813 8.2991C1.38948 8.35302 1.34295 8.41703 1.31121 8.48748C1.27947 8.55793 1.26313 8.63343 1.26313 8.70969C1.26313 8.78594 1.27947 8.86145 1.31121 8.9319C1.34295 9.00235 1.38948 9.06636 1.44813 9.12027L2.98255 10.531C2.53516 11.2286 2.20671 11.9851 2.00866 12.7742H0.631578ZM34.5518 33.8475C34.6119 33.9011 34.6597 33.9652 34.6926 34.036C34.7255 34.1068 34.7427 34.1829 34.7433 34.2598C34.744 34.3368 34.7279 34.4131 34.6962 34.4843C34.6644 34.5555 34.6176 34.6202 34.5584 34.6746C34.4992 34.7291 34.4288 34.7721 34.3513 34.8013C34.2739 34.8305 34.1909 34.8452 34.1071 34.8447C34.0234 34.8441 33.9407 34.8282 33.8637 34.798C33.7867 34.7678 33.717 34.7238 33.6587 34.6686L27.5232 29.028C27.8391 28.7716 28.1374 28.4973 28.4164 28.2069L34.5518 33.8475ZM23.3694 7.44562C23.4068 5.5872 24.4685 4.64518 26.5263 4.64518C28.5868 4.64518 29.6483 5.58945 29.6832 7.45237C29.5057 7.9007 28.6425 10.0091 27.9844 11.6129H25.0692L23.3694 7.44562ZM25.2631 12.7742H27.7894V13.9355H25.7295C25.5765 13.8574 25.421 13.7828 25.2631 13.7117V12.7742ZM29.6842 22.0645C29.6842 23.672 29.1657 25.2435 28.1944 26.5802C27.2231 27.9169 25.8425 28.9588 24.2272 29.5742C22.6119 30.1896 20.8343 30.3509 19.1193 30.0377C17.4043 29.7245 15.8288 28.9509 14.5919 27.8146C13.3551 26.6783 12.5125 25.2303 12.1706 23.6538C11.8288 22.0773 12.003 20.443 12.6713 18.9575C13.3396 17.4721 14.472 16.2021 15.9253 15.3082C17.3785 14.4143 19.0875 13.9366 20.836 13.9355H20.8421C23.1863 13.9379 25.4338 14.7952 27.0915 16.3191C28.7491 17.8431 29.6815 19.9093 29.6842 22.0645ZM10.1052 17.4194C9.48068 17.4194 8.87013 17.2491 8.35082 16.9301C7.83151 16.6111 7.42675 16.1576 7.18774 15.6271C6.94873 15.0967 6.88619 14.5129 7.00804 13.9497C7.12988 13.3866 7.43064 12.8693 7.87228 12.4632C8.31392 12.0572 8.8766 11.7807 9.48917 11.6687C10.1017 11.5567 10.7367 11.6142 11.3137 11.8339C11.8908 12.0536 12.3839 12.4258 12.7309 12.9032C13.0779 13.3806 13.2631 13.9419 13.2631 14.5161C13.2622 15.2858 12.9292 16.0238 12.3372 16.5681C11.7452 17.1123 10.9425 17.4185 10.1052 17.4194ZM3.14929 13.4504C3.32283 12.4956 3.71774 11.5863 4.3072 10.7842C4.3922 10.6724 4.43166 10.5366 4.41867 10.4007C4.40568 10.2648 4.34106 10.1375 4.23615 10.041L2.78786 8.70969L3.78947 7.78886L5.2376 9.12027C5.34253 9.21672 5.48104 9.27613 5.62885 9.28807C5.77666 9.30002 5.92432 9.26374 6.04594 9.1856C6.91843 8.64367 7.90751 8.28061 8.94607 8.12106C9.0935 8.09844 9.22742 8.02848 9.32403 7.92362C9.42063 7.81877 9.47366 7.68581 9.47367 7.5484V5.80646H10.7368V7.5484C10.7368 7.68582 10.7898 7.8188 10.8864 7.92367C10.9831 8.02854 11.117 8.09851 11.2644 8.12113C12.303 8.28068 13.2921 8.64374 14.1646 9.18567C14.2862 9.26381 14.4338 9.30009 14.5817 9.28815C14.7295 9.2762 14.868 9.2168 14.9729 9.12035L16.421 7.78886L17.4226 8.70969L15.9744 10.041C15.8695 10.1375 15.8049 10.2648 15.7919 10.4007C15.7789 10.5366 15.8184 10.6724 15.9034 10.7842C16.4926 11.586 16.8874 12.4948 17.0611 13.4492C16.1424 13.7915 15.2835 14.2562 14.5119 14.8282C14.5205 14.7249 14.5263 14.621 14.5263 14.5158C14.5267 13.6523 14.2281 12.8112 13.6738 12.1142C13.1195 11.4171 12.3383 10.9004 11.4433 10.6389C10.5482 10.3773 9.58583 10.3844 8.6955 10.6593C7.80517 10.9341 7.03312 11.4624 6.49115 12.1675C5.94918 12.8727 5.66544 13.7182 5.68102 14.5815C5.6966 15.4448 6.0107 16.2812 6.57781 16.9694C7.14493 17.6577 7.93562 18.1621 8.83538 18.4096C9.73513 18.6571 10.6972 18.6349 11.5824 18.3462C11.0233 19.5184 10.7354 20.7846 10.7368 22.0645C10.7369 22.4527 10.7633 22.8406 10.8158 23.2258H9.47367V21.4839C9.47367 21.3464 9.42066 21.2135 9.32405 21.1086C9.22744 21.0037 9.09351 20.9338 8.94607 20.9111C7.90751 20.7516 6.91843 20.3885 6.04594 19.8466C5.92432 19.7684 5.77666 19.7322 5.62885 19.7441C5.48104 19.7561 5.34253 19.8155 5.2376 19.9119L3.78947 21.2434L2.78786 20.3226L4.23607 18.9912C4.34098 18.8948 4.4056 18.7674 4.41859 18.6315C4.43158 18.4956 4.39212 18.3599 4.30713 18.2481C3.71766 17.4459 3.32276 16.5366 3.14921 15.5818C3.1246 15.4463 3.0485 15.3232 2.93445 15.2344C2.8204 15.1455 2.67578 15.0968 2.52631 15.0968H1.26316V13.9355H2.52631C2.67579 13.9355 2.82043 13.8867 2.9345 13.7979C3.04857 13.7091 3.12468 13.586 3.14929 13.4504Z" />
                <path d="M19.6457 3.22425C19.5708 3.36198 19.5584 3.52143 19.6114 3.66752C19.6643 3.81361 19.7783 3.93438 19.9281 4.00326L21.1912 4.5839C21.2655 4.61871 21.3465 4.63966 21.4296 4.64554C21.5127 4.65143 21.5963 4.64213 21.6754 4.61818C21.7546 4.59423 21.8279 4.55612 21.8909 4.50602C21.954 4.45593 22.0057 4.39485 22.043 4.32631C22.0803 4.25777 22.1024 4.18313 22.1082 4.10668C22.1139 4.03023 22.1032 3.95349 22.0765 3.88088C22.0498 3.80827 22.0078 3.74124 21.9528 3.68364C21.8978 3.62604 21.831 3.57901 21.7562 3.54527L20.493 2.96463C20.3432 2.89576 20.1698 2.88442 20.0109 2.93311C19.8519 2.9818 19.7206 3.08652 19.6457 3.22425Z" />
                <path d="M25.8947 0.580644V1.74193C25.8947 1.89593 25.9613 2.04362 26.0797 2.15251C26.1981 2.2614 26.3588 2.32258 26.5263 2.32258C26.6938 2.32258 26.8544 2.2614 26.9729 2.15251C27.0913 2.04362 27.1579 1.89593 27.1579 1.74193V0.580644C27.1579 0.426648 27.0913 0.278959 26.9729 0.170067C26.8544 0.0611749 26.6938 0 26.5263 0C26.3588 0 26.1981 0.0611749 26.0797 0.170067C25.9613 0.278959 25.8947 0.426648 25.8947 0.580644Z" />
                <path d="M22.4543 0.641874C22.3045 0.710752 22.1906 0.83152 22.1376 0.97761C22.0847 1.1237 22.097 1.28315 22.1719 1.42088L22.8035 2.58217C22.8402 2.65097 22.8913 2.71242 22.954 2.76297C23.0166 2.81351 23.0896 2.85215 23.1685 2.87666C23.2475 2.90118 23.331 2.91107 23.4141 2.90579C23.4973 2.9005 23.5785 2.88013 23.653 2.84586C23.7276 2.81158 23.794 2.76408 23.8485 2.70608C23.903 2.64809 23.9445 2.58076 23.9705 2.50796C23.9966 2.43517 24.0067 2.35835 24.0003 2.28195C23.9939 2.20554 23.9711 2.13105 23.9332 2.06278L23.3016 0.901494C23.2267 0.763767 23.0954 0.659041 22.9365 0.610353C22.7776 0.561666 22.6041 0.573004 22.4543 0.641874Z" />
                <path d="M29.7509 0.901661L29.1193 2.06295C29.0815 2.13122 29.0587 2.20571 29.0523 2.28211C29.0459 2.35852 29.056 2.43533 29.082 2.50813C29.1081 2.58092 29.1495 2.64826 29.204 2.70625C29.2585 2.76424 29.325 2.81175 29.3995 2.84602C29.4741 2.8803 29.5553 2.90067 29.6384 2.90595C29.7216 2.91124 29.805 2.90134 29.884 2.87683C29.963 2.85232 30.0359 2.81368 30.0986 2.76313C30.1612 2.71259 30.2124 2.65114 30.2491 2.58234L30.8806 1.42105C30.9185 1.35278 30.9413 1.27829 30.9477 1.20188C30.9541 1.12548 30.944 1.04866 30.9179 0.975869C30.8919 0.903074 30.8504 0.835738 30.7959 0.777746C30.7414 0.719753 30.675 0.67225 30.6005 0.637975C30.5259 0.6037 30.4447 0.583332 30.3616 0.578044C30.2784 0.572756 30.1949 0.582654 30.116 0.607167C30.037 0.631679 29.9641 0.670321 29.9014 0.720865C29.8388 0.771409 29.7876 0.832856 29.7509 0.901661Z" />
                <path d="M32.5596 2.96472L31.2964 3.54537C31.2216 3.57911 31.1548 3.62613 31.0998 3.68373C31.0448 3.74133 31.0028 3.80837 30.9761 3.88097C30.9495 3.95358 30.9387 4.03032 30.9444 4.10677C30.9502 4.18322 30.9723 4.25787 31.0096 4.32641C31.0469 4.39495 31.0986 4.45602 31.1617 4.50612C31.2247 4.55621 31.298 4.59433 31.3772 4.61828C31.4563 4.64222 31.5399 4.65152 31.623 4.64564C31.7061 4.63975 31.7871 4.6188 31.8614 4.58399L33.1245 4.00335C33.1994 3.96961 33.2662 3.92259 33.3212 3.86499C33.3762 3.80738 33.4182 3.74035 33.4449 3.66774C33.4715 3.59514 33.4823 3.5184 33.4765 3.44195C33.4708 3.3655 33.4486 3.29085 33.4114 3.22231C33.3741 3.15377 33.3224 3.09269 33.2593 3.0426C33.1962 2.99251 33.123 2.95439 33.0438 2.93044C32.9646 2.9065 32.8811 2.8972 32.798 2.90308C32.7149 2.90896 32.6339 2.92991 32.5596 2.96472Z" />
                <path d="M13.2631 22.0644C13.2631 23.4425 13.7076 24.7896 14.5404 25.9355C15.3732 27.0813 16.5569 27.9744 17.9417 28.5018C19.3266 29.0291 20.8505 29.1671 22.3206 28.8983C23.7908 28.6294 25.1412 27.9658 26.2012 26.9913C27.2611 26.0169 27.9829 24.7754 28.2754 23.4238C28.5678 22.0721 28.4177 20.6712 27.8441 19.398C27.2705 18.1248 26.299 17.0366 25.0527 16.271C23.8063 15.5053 22.341 15.0967 20.8421 15.0967C18.8327 15.0988 16.9063 15.8335 15.4854 17.1398C14.0646 18.446 13.2654 20.2171 13.2631 22.0644ZM27.1578 22.0644C27.1578 23.2128 26.7874 24.3354 26.0934 25.2903C25.3995 26.2452 24.4131 26.9894 23.259 27.4289C22.1049 27.8683 20.8351 27.9833 19.6099 27.7593C18.3848 27.5352 17.2594 26.9822 16.3761 26.1702C15.4929 25.3581 14.8913 24.3235 14.6476 23.1972C14.4039 22.0709 14.529 20.9034 15.007 19.8424C15.4851 18.7814 16.2946 17.8746 17.3332 17.2365C18.3718 16.5985 19.5929 16.258 20.8421 16.258C22.5165 16.2597 24.1219 16.872 25.3059 17.9606C26.4899 19.0491 27.1559 20.525 27.1578 22.0644Z" />
                <path d="M17.0526 22.0645C17.0526 21.9105 16.9861 21.7628 16.8677 21.654C16.7492 21.5451 16.5886 21.4839 16.4211 21.4839C16.2536 21.4839 16.0929 21.5451 15.9745 21.654C15.856 21.7628 15.7895 21.9105 15.7895 22.0645C15.791 23.2961 16.3238 24.4768 17.271 25.3476C18.2183 26.2185 19.5025 26.7083 20.8421 26.7097C21.0096 26.7097 21.1703 26.6485 21.2887 26.5396C21.4072 26.4307 21.4737 26.283 21.4737 26.129C21.4737 25.975 21.4072 25.8274 21.2887 25.7185C21.1703 25.6096 21.0096 25.5484 20.8421 25.5484C19.8374 25.5474 18.8742 25.18 18.1638 24.5269C17.4534 23.8737 17.0538 22.9882 17.0526 22.0645Z" />
              </svg>
            </div>
            <h4 className="work-process-title">Research</h4>
          </div>
          <div className="work-process-one">
            <span className="serial-number">02</span>
            <div className="work-process-icon">
              <div className="rotate-arrow">
                <svg
                  width={70}
                  height={70}
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.94368 54.2064C2.63143 53.0642 3.02741 51.7187 3.35045 50.3471C8.78476 60.809 19.3668 68.1417 31.1316 69.7115C44.7929 71.5369 57.7769 64.4076 64.8473 52.7826C72.1104 40.8395 71.7561 26.0333 63.3728 14.7682C55.4792 4.16021 42.0263 -2.0721 28.8495 0.629439C14.3129 3.60739 2.4647 16.3015 0.953724 31.1078C0.87036 31.9213 2.27192 32.1195 2.38655 31.3007C4.15804 19.0812 12.9373 8.45242 24.5198 4.21236C36.4878 -0.16329 49.5291 3.70648 58.199 12.7916C66.9418 21.9497 69.6355 35.0923 64.6076 46.8006C59.6735 58.29 48.4506 66.9631 35.7167 66.9839C23.2797 67.01 11.1815 59.5208 5.74717 48.36C7.08621 48.626 8.42525 48.8972 9.7695 49.1632C12.3173 49.6743 13.3385 45.6794 10.8324 45.3039C8.22726 44.9127 5.61692 44.5163 3.01178 44.1304C2.08956 43.9948 1.01104 44.3494 0.786995 45.3925C0.203445 48.1462 -0.552045 51.5153 0.604636 54.2012C0.844308 54.7644 1.67274 54.6601 1.94368 54.2064Z" />
                </svg>
              </div>
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.70972 34.3219C7.85713 34.8065 8.15587 35.231 8.56207 35.5331C8.96828 35.8351 9.46052 35.9988 9.9665 36C10.1958 36.0002 10.4239 35.9675 10.6439 35.9031L25.9807 31.2797L28.7407 30.9192C29.0476 30.8796 29.3437 30.7797 29.612 30.6253C29.8803 30.471 30.1156 30.2652 30.3043 30.0197C30.4931 29.7742 30.6316 29.4938 30.7121 29.1946C30.7925 28.8955 30.8132 28.5834 30.773 28.2762L29.3175 17.1535L33.9007 10.1157L35.031 8.40658L35.573 7.55785C35.9533 6.97506 36.0869 6.26487 35.9442 5.5835C35.8016 4.90213 35.3944 4.3054 34.8123 3.92459C34.2302 3.54377 33.5208 3.41007 32.8403 3.55288C32.1597 3.6957 31.5636 4.10333 31.1833 4.68612L30.6259 5.5426L29.511 7.24781L28.2607 9.1623L27.3278 2.05079C27.2877 1.74387 27.1876 1.44787 27.0332 1.17969C26.8788 0.911509 26.6732 0.67641 26.428 0.487824C26.1829 0.299238 25.903 0.16086 25.6044 0.0805966C25.3058 0.000333005 24.9943 -0.0202437 24.6878 0.0200423L8.39876 2.16318C7.80618 2.2398 7.26513 2.53991 6.88603 3.00227C6.50693 3.46464 6.31834 4.05442 6.35876 4.65124L1.67488 6.06192C1.07753 6.24202 0.57604 6.6522 0.280618 7.20231C-0.0148041 7.75242 -0.0799847 8.39745 0.0994001 8.99565L7.70972 34.3219ZM31.2801 6.66261L32.5033 7.46096L33.7226 8.25931L33.2426 8.99565L30.8001 7.39896L31.2801 6.66261ZM32.1549 5.31782C32.3669 4.99303 32.6991 4.76585 33.0784 4.68626C33.4577 4.60668 33.8531 4.68121 34.1775 4.89346C34.5019 5.10571 34.7288 5.43829 34.8083 5.81804C34.8878 6.19779 34.8133 6.5936 34.6013 6.9184L34.3613 7.28657L31.9342 5.68599L32.1549 5.31782ZM30.1652 8.3717L31.3884 9.17005L32.6078 9.9684L25.1562 21.3933L23.933 20.595L22.7136 19.7966L30.1652 8.3717ZM21.262 23.9938L21.4942 23.2497C21.8835 23.3505 22.229 23.5765 22.4775 23.893L21.8891 24.4046C21.8256 24.4623 21.7448 24.4973 21.6593 24.5041C21.5739 24.5109 21.4885 24.4891 21.4168 24.4421C21.345 24.3951 21.2909 24.3255 21.2629 24.2444C21.2349 24.1633 21.2345 24.0751 21.262 23.9938ZM23.3523 23.1295C22.9625 22.6482 22.4318 22.3012 21.8349 22.1374L22.222 20.8701L24.3471 22.2614L23.3523 23.1295ZM7.75618 3.77151C7.85197 3.64684 7.97136 3.54229 8.10751 3.46382C8.24367 3.38536 8.39394 3.33452 8.54972 3.3142L24.8388 1.17494C24.8916 1.17109 24.9446 1.17109 24.9975 1.17494C25.283 1.18074 25.5571 1.28865 25.7701 1.47915C25.983 1.66964 26.1209 1.93015 26.1588 2.21356L27.2891 10.6582L24.3239 15.1964L18.4942 15.9715C18.3402 15.9813 18.1964 16.0519 18.0944 16.1678C17.9924 16.2837 17.9406 16.4355 17.9504 16.5897C17.9601 16.7438 18.0307 16.8878 18.1464 16.9899C18.2622 17.092 18.4138 17.1439 18.5678 17.1342H18.6452L23.4878 16.4715L21.4246 19.6377C21.4239 19.6506 21.4239 19.6636 21.4246 19.6765C21.4098 19.7008 21.3981 19.7268 21.3897 19.754L21.0297 20.9166L12.7768 22.0289C12.7006 22.034 12.6261 22.0541 12.5576 22.088C12.4891 22.1219 12.4279 22.169 12.3776 22.2266C12.3273 22.2841 12.2888 22.3511 12.2643 22.4236C12.2398 22.496 12.2298 22.5726 12.2349 22.649C12.24 22.7253 12.26 22.7999 12.2939 22.8685C12.3278 22.9371 12.3748 22.9983 12.4323 23.0487C12.4898 23.0991 12.5567 23.1376 12.6291 23.1621C12.7015 23.1866 12.778 23.1966 12.8542 23.1915H12.9278L20.6194 22.1839L20.1626 23.6643C20.0632 23.9859 20.0709 24.3311 20.1848 24.6478C20.2986 24.9645 20.5123 25.2356 20.7936 25.4199C21.0453 25.586 21.3399 25.6749 21.6413 25.6757C22.015 25.6733 22.3753 25.5357 22.6555 25.2882L25.7059 22.6451L25.7368 22.6102C25.7604 22.5883 25.7813 22.5636 25.7988 22.5366L28.3226 18.6611L29.6117 28.4273C29.6325 28.5829 29.6223 28.7411 29.5818 28.8927C29.5413 29.0444 29.4712 29.1865 29.3755 29.3109C29.283 29.4341 29.1668 29.5376 29.0339 29.6155C28.901 29.6933 28.754 29.7439 28.6013 29.7644L12.2968 31.9075C12.1415 31.9276 11.9838 31.9169 11.8326 31.876C11.6814 31.8351 11.5398 31.7647 11.4158 31.669C11.2918 31.5733 11.1878 31.454 11.1098 31.3181C11.0319 31.1821 10.9814 31.0321 10.9613 30.8766L7.52005 4.65512C7.47888 4.3409 7.56379 4.02316 7.75618 3.77151ZM2.01166 7.1703L6.50198 5.81776L9.80779 31.0278C9.88254 31.5926 10.1589 32.1113 10.5857 32.4881C11.0126 32.8649 11.5613 33.0744 12.1304 33.0779C12.234 33.0778 12.3375 33.0701 12.44 33.0546L18.8194 32.2175L10.3033 34.7831C10.002 34.8736 9.6771 34.8408 9.39991 34.6918C9.12272 34.5429 8.91582 34.29 8.82456 33.9886L1.21037 8.66236C1.16508 8.51172 1.14988 8.35362 1.16564 8.19709C1.1814 8.04056 1.22782 7.88868 1.30223 7.75012C1.37664 7.61156 1.4776 7.48903 1.59932 7.38954C1.72105 7.29006 1.86116 7.21556 2.01166 7.1703ZM13.7175 6.55023C13.6977 6.39763 13.7391 6.24341 13.8327 6.12136C13.9263 5.99932 14.0645 5.91941 14.2168 5.89915L23.5071 4.67449C23.5834 4.66457 23.6609 4.66978 23.7351 4.68982C23.8093 4.70987 23.8789 4.74436 23.9398 4.79132C24.0008 4.83828 24.0519 4.8968 24.0902 4.96353C24.1285 5.03027 24.1534 5.1039 24.1633 5.18024C24.1732 5.25658 24.168 5.33413 24.148 5.40846C24.1279 5.48279 24.0935 5.55244 24.0466 5.61344C23.9997 5.67443 23.9412 5.72558 23.8746 5.76397C23.8079 5.80235 23.7344 5.82721 23.6581 5.83714L14.3678 7.05791H14.2942C14.1531 7.05729 14.0169 7.00553 13.9109 6.91221C13.8049 6.81889 13.7362 6.69031 13.7175 6.55023ZM10.9071 12.2317C10.8974 12.1553 10.903 12.0777 10.9235 12.0034C10.944 11.9291 10.979 11.8597 11.0266 11.7991C11.0741 11.7385 11.1332 11.688 11.2004 11.6505C11.2676 11.613 11.3416 11.5892 11.4181 11.5806L24.1923 9.88314C24.3463 9.8631 24.5019 9.90512 24.625 9.99997C24.748 10.0948 24.8284 10.2347 24.8484 10.3889C24.8685 10.5431 24.8265 10.6989 24.7317 10.8221C24.637 10.9453 24.4973 11.0257 24.3433 11.0458L11.5575 12.7355H11.4839C11.3433 12.735 11.2076 12.6838 11.1017 12.5913C10.9958 12.4987 10.9267 12.3711 10.9071 12.2317ZM15.2465 16.9753C15.2574 17.0514 15.2531 17.129 15.2338 17.2034C15.2146 17.2779 15.1807 17.3478 15.1343 17.4091C15.0878 17.4704 15.0297 17.5218 14.9632 17.5605C14.8968 17.5991 14.8233 17.6241 14.7471 17.6341L12.2426 17.9635H12.1691C12.0151 17.9738 11.8633 17.9224 11.7472 17.8207C11.631 17.7189 11.56 17.5751 11.5497 17.4209C11.5395 17.2668 11.5908 17.1148 11.6924 16.9985C11.7941 16.8823 11.9377 16.8111 12.0917 16.8009L14.5962 16.4715C14.6719 16.4617 14.7489 16.467 14.8226 16.487C14.8963 16.507 14.9654 16.5415 15.0258 16.5883C15.0862 16.6351 15.1368 16.6933 15.1746 16.7597C15.2125 16.8262 15.2369 16.8994 15.2465 16.9753ZM12.9665 27.9041C12.9467 27.7515 12.9882 27.5973 13.0818 27.4753C13.1754 27.3532 13.3135 27.2733 13.4659 27.253L17.9213 26.6678C17.9976 26.6577 18.0751 26.6626 18.1494 26.6824C18.2238 26.7022 18.2935 26.7365 18.3546 26.7833C18.4157 26.8301 18.467 26.8885 18.5056 26.9551C18.5442 27.0217 18.5692 27.0953 18.5794 27.1717C18.5896 27.248 18.5846 27.3256 18.5648 27.4C18.545 27.4744 18.5108 27.5442 18.4641 27.6054C18.4174 27.6666 18.359 27.718 18.2925 27.7566C18.2259 27.7952 18.1524 27.8203 18.0762 27.8305L13.613 28.4041H13.5394C13.3998 28.4036 13.2651 28.3528 13.1599 28.261C13.0547 28.1692 12.986 28.0425 12.9665 27.9041Z" />
              </svg>
            </div>
            <h4 className="work-process-title">Note</h4>
          </div>
          <div className="work-process-one">
            <span className="serial-number">03</span>
            <div className="work-process-icon">
              <div className="rotate-arrow">
                <svg
                  width={70}
                  height={70}
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.94368 54.2064C2.63143 53.0642 3.02741 51.7187 3.35045 50.3471C8.78476 60.809 19.3668 68.1417 31.1316 69.7115C44.7929 71.5369 57.7769 64.4076 64.8473 52.7826C72.1104 40.8395 71.7561 26.0333 63.3728 14.7682C55.4792 4.16021 42.0263 -2.0721 28.8495 0.629439C14.3129 3.60739 2.4647 16.3015 0.953724 31.1078C0.87036 31.9213 2.27192 32.1195 2.38655 31.3007C4.15804 19.0812 12.9373 8.45242 24.5198 4.21236C36.4878 -0.16329 49.5291 3.70648 58.199 12.7916C66.9418 21.9497 69.6355 35.0923 64.6076 46.8006C59.6735 58.29 48.4506 66.9631 35.7167 66.9839C23.2797 67.01 11.1815 59.5208 5.74717 48.36C7.08621 48.626 8.42525 48.8972 9.7695 49.1632C12.3173 49.6743 13.3385 45.6794 10.8324 45.3039C8.22726 44.9127 5.61692 44.5163 3.01178 44.1304C2.08956 43.9948 1.01104 44.3494 0.786995 45.3925C0.203445 48.1462 -0.552045 51.5153 0.604636 54.2012C0.844308 54.7644 1.67274 54.6601 1.94368 54.2064Z" />
                </svg>
              </div>
              <svg
                width={37}
                height={37}
                viewBox="0 0 37 37"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.318306 26.2015L4.00831 24.3565L6.35674 18.2477C6.38439 18.1755 6.42663 18.1097 6.48083 18.0546C6.53503 17.9994 6.60002 17.956 6.67174 17.9271L21.2433 12.1024C21.3452 12.0618 21.4567 12.0519 21.5641 12.0739C21.6716 12.0959 21.7702 12.1488 21.848 12.2261L23.7914 14.1696C23.8677 14.2474 23.9198 14.3457 23.9412 14.4526C23.9627 14.5594 23.9527 14.6702 23.9124 14.7715L18.0877 29.343C18.0588 29.4147 18.0154 29.4797 17.9602 29.5339C17.905 29.5881 17.8393 29.6304 17.7671 29.658L11.6583 32.0065L9.81331 35.6965C9.77446 35.7778 9.71662 35.8486 9.64467 35.903C9.57271 35.9573 9.48876 35.9935 9.39987 36.0086C9.36993 36.0114 9.3398 36.0114 9.30987 36.0086C9.16093 36.008 9.01831 35.9483 8.91331 35.8427L0.172054 27.1015C0.107719 27.0394 0.0591087 26.9629 0.0302505 26.8782C0.00139427 26.7936 -0.00687981 26.7033 0.00611877 26.6149C0.0212116 26.526 0.0574512 26.442 0.111782 26.3701C0.166113 26.2981 0.236944 26.2403 0.318306 26.2015ZM22.7339 14.6983L22.4217 14.389L15.1683 21.6424C15.6463 22.3198 15.8528 23.1518 15.7468 23.9741C15.6409 24.7964 15.2303 25.5489 14.5962 26.083C13.9621 26.6171 13.1506 26.8938 12.3223 26.8584C11.494 26.823 10.7092 26.4781 10.1229 25.8918C9.5367 25.3056 9.19178 24.5207 9.15638 23.6924C9.12098 22.8641 9.39767 22.0527 9.93175 21.4186C10.4658 20.7845 11.2184 20.3739 12.0407 20.2679C12.8629 20.162 13.695 20.3684 14.3724 20.8465L21.6258 13.593L21.3164 13.2808L7.31862 18.8805L5.11081 24.6236L11.3911 30.904L17.1342 28.6961L22.7339 14.6983ZM12.4655 21.364C11.96 21.3647 11.4703 21.5407 11.08 21.862C10.6896 22.1833 10.4228 22.6299 10.3248 23.1259C10.2269 23.6219 10.3039 24.1364 10.5428 24.582C10.7817 25.0275 11.1677 25.3764 11.635 25.5693C12.1023 25.7622 12.6221 25.787 13.1056 25.6397C13.5892 25.4924 14.0068 25.1819 14.2872 24.7613C14.5676 24.3406 14.6934 23.8357 14.6433 23.3327C14.5932 22.8296 14.3702 22.3595 14.0124 22.0024C13.6017 21.593 13.0453 21.3634 12.4655 21.364ZM9.15518 34.4955L10.5614 31.683L4.33737 25.459L1.52487 26.8652L9.15518 34.4955Z" />
                <path d="M25.2483 30.1025C25.3558 30.0008 25.4982 29.9442 25.6462 29.9442C25.7942 29.9442 25.9366 30.0008 26.0442 30.1025L26.7586 30.8169C28.665 28.2295 29.7166 25.1118 29.767 21.8984C29.8175 18.685 28.8641 15.5359 27.0398 12.89C26.4933 13.1907 25.864 13.3062 25.2463 13.2192C24.6285 13.1322 24.0556 12.8474 23.6134 12.4074C23.1712 11.9674 22.8834 11.3959 22.7933 10.7786C22.7032 10.1613 22.8156 9.53147 23.1136 8.98342C20.4677 7.15915 17.3186 6.20579 14.1052 6.2562C10.8917 6.30662 7.77407 7.35829 5.18671 9.26467L5.91233 9.9706C6.01694 10.0761 6.07558 10.2186 6.07546 10.3672C6.07589 10.4412 6.0617 10.5146 6.0337 10.5831C6.00571 10.6516 5.96447 10.714 5.91233 10.7665L3.43171 13.2275C3.32632 13.3322 3.18375 13.391 3.03514 13.391C2.88654 13.391 2.74397 13.3322 2.63858 13.2275L0.17202 10.7609C0.11972 10.7087 0.0782318 10.6466 0.0499268 10.5784C0.0216179 10.5101 0.00704575 10.4369 0.00704575 10.3629C0.00704575 10.289 0.0216179 10.2158 0.0499268 10.1475C0.0782318 10.0793 0.11972 10.0172 0.17202 9.96498L2.63858 7.49842C2.74397 7.39365 2.88654 7.33485 3.03514 7.33485C3.18375 7.33485 3.32632 7.39365 3.43171 7.49842L4.38515 8.44623C6.73497 6.678 9.51309 5.56706 12.4342 5.2275C15.3554 4.88794 18.3142 5.33198 21.007 6.51404L17.7642 3.27967C17.3965 3.45536 16.9785 3.49512 16.5843 3.39192C16.19 3.28871 15.8451 3.0492 15.6107 2.71587C15.3763 2.38254 15.2675 1.97695 15.3036 1.57105C15.3398 1.16516 15.5186 0.785186 15.8083 0.498558C16.0979 0.21193 16.4798 0.0371718 16.886 0.00528763C17.2923 -0.0265965 17.6967 0.0864543 18.0275 0.324384C18.3584 0.562314 18.5942 0.909741 18.6933 1.30503C18.7923 1.70032 18.7481 2.11791 18.5686 2.48373L24.0417 7.96529C24.5974 7.59252 25.2653 7.42426 25.9313 7.48925C26.5973 7.55424 27.22 7.84844 27.6932 8.3216C28.1664 8.79476 28.4606 9.41753 28.5256 10.0835C28.5905 10.7495 28.4223 11.4174 28.0495 11.9731L33.5311 17.4462C33.8983 17.2673 34.3171 17.2243 34.7131 17.325C35.109 17.4257 35.4564 17.6634 35.6936 17.9961C35.9308 18.3287 36.0423 18.7346 36.0085 19.1418C35.9746 19.5489 35.7975 19.9308 35.5086 20.2197C35.2197 20.5086 34.8378 20.6857 34.4307 20.7195C34.0236 20.7534 33.6176 20.6418 33.285 20.4047C32.9523 20.1675 32.7146 19.8201 32.6139 19.4241C32.5132 19.0282 32.5562 18.6094 32.7351 18.2422L29.4923 15.0078C30.6756 17.6998 31.121 20.6583 30.7829 23.5794C30.4449 26.5005 29.3354 29.279 27.5686 31.6297L28.5192 32.5831C28.624 32.6885 28.6828 32.8311 28.6828 32.9797C28.6828 33.1283 28.624 33.2708 28.5192 33.3762L26.0526 35.8428C25.9476 35.9484 25.805 36.0081 25.6561 36.0087C25.5819 36.0088 25.5084 35.9942 25.4398 35.9657C25.3713 35.9372 25.309 35.8954 25.2567 35.8428L22.7873 33.3762C22.6826 33.2708 22.6238 33.1283 22.6238 32.9797C22.6238 32.8311 22.6826 32.6885 22.7873 32.5831L25.2483 30.1025ZM3.02952 8.68529L1.35889 10.3559L3.02952 12.0265L4.70015 10.3559L3.02952 8.68529ZM17.4436 1.31092C17.36 1.22665 17.2533 1.16911 17.1369 1.1456C17.0206 1.12209 16.8999 1.13367 16.7901 1.17886C16.6804 1.22406 16.5865 1.30084 16.5205 1.39946C16.4545 1.49808 16.4192 1.6141 16.4192 1.73279C16.4192 1.85148 16.4545 1.9675 16.5205 2.06612C16.5865 2.16474 16.6804 2.24152 16.7901 2.28672C16.8999 2.33192 17.0206 2.34349 17.1369 2.31998C17.2533 2.29647 17.36 2.23893 17.4436 2.15467C17.499 2.09929 17.543 2.03353 17.573 1.96114C17.603 1.88875 17.6185 1.81115 17.6185 1.73279C17.6185 1.65443 17.603 1.57683 17.573 1.50444C17.543 1.43206 17.499 1.36629 17.4436 1.31092ZM26.8936 9.12123C26.7302 8.95711 26.5361 8.82687 26.3223 8.73801C26.1085 8.64914 25.8792 8.60339 25.6476 8.60339C25.4161 8.60339 25.1868 8.64914 24.973 8.73801C24.7592 8.82687 24.565 8.95711 24.4017 9.12123C24.1548 9.36774 23.9866 9.68195 23.9183 10.0241C23.85 10.3662 23.8848 10.721 24.0182 11.0434C24.1516 11.3657 24.3776 11.6413 24.6676 11.8352C24.9577 12.0291 25.2987 12.1326 25.6476 12.1326C25.9965 12.1326 26.3376 12.0291 26.6277 11.8352C26.9177 11.6413 27.1437 11.3657 27.2771 11.0434C27.4105 10.721 27.4453 10.3662 27.377 10.0241C27.3087 9.68195 27.1405 9.36774 26.8936 9.12123ZM33.8573 19.415C33.9722 19.5107 34.1187 19.5601 34.268 19.5534C34.4174 19.5466 34.5589 19.4842 34.6646 19.3785C34.7703 19.2728 34.8327 19.1313 34.8395 18.9819C34.8462 18.8326 34.7968 18.6861 34.7011 18.5712C34.5885 18.4606 34.437 18.3986 34.2792 18.3986C34.1214 18.3986 33.9699 18.4606 33.8573 18.5712C33.8019 18.6266 33.7579 18.6924 33.7279 18.7648C33.6979 18.8371 33.6824 18.9147 33.6824 18.9931C33.6824 19.0715 33.6979 19.1491 33.7279 19.2215C33.7579 19.2938 33.8019 19.3596 33.8573 19.415ZM25.6476 34.639L27.3183 32.9684L25.6476 31.2978L23.977 32.9684L25.6476 34.639Z" />
              </svg>
            </div>
            <h4 className="work-process-title">Plan</h4>
          </div>
          <div className="work-process-one">
            <span className="serial-number">04</span>
            <div className="work-process-icon">
              <div className="rotate-arrow">
                <svg
                  width={70}
                  height={70}
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.94368 54.2064C2.63143 53.0642 3.02741 51.7187 3.35045 50.3471C8.78476 60.809 19.3668 68.1417 31.1316 69.7115C44.7929 71.5369 57.7769 64.4076 64.8473 52.7826C72.1104 40.8395 71.7561 26.0333 63.3728 14.7682C55.4792 4.16021 42.0263 -2.0721 28.8495 0.629439C14.3129 3.60739 2.4647 16.3015 0.953724 31.1078C0.87036 31.9213 2.27192 32.1195 2.38655 31.3007C4.15804 19.0812 12.9373 8.45242 24.5198 4.21236C36.4878 -0.16329 49.5291 3.70648 58.199 12.7916C66.9418 21.9497 69.6355 35.0923 64.6076 46.8006C59.6735 58.29 48.4506 66.9631 35.7167 66.9839C23.2797 67.01 11.1815 59.5208 5.74717 48.36C7.08621 48.626 8.42525 48.8972 9.7695 49.1632C12.3173 49.6743 13.3385 45.6794 10.8324 45.3039C8.22726 44.9127 5.61692 44.5163 3.01178 44.1304C2.08956 43.9948 1.01104 44.3494 0.786995 45.3925C0.203445 48.1462 -0.552045 51.5153 0.604636 54.2012C0.844308 54.7644 1.67274 54.6601 1.94368 54.2064Z" />
                </svg>
              </div>
              <svg
                width={35}
                height={35}
                viewBox="0 0 35 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30.375 24.7534V22.5C30.3741 21.7544 30.0775 21.0395 29.5503 20.5122C29.023 19.985 28.3081 19.6884 27.5625 19.6875H22.8274C23.348 18.7271 23.768 17.7154 24.0806 16.6686L26.2181 14.958C26.5504 14.6927 26.7933 14.332 26.914 13.9243C27.0348 13.5167 27.0276 13.0818 26.8934 12.6784C26.7592 12.275 26.5046 11.9224 26.1637 11.6683C25.8229 11.4142 25.4123 11.2707 24.9874 11.2573L26.2406 7.81144C26.5604 6.93203 26.6635 5.98851 26.5412 5.0608C26.4188 4.13309 26.0747 3.24853 25.5379 2.48207C25.0011 1.71562 24.2875 1.08985 23.4574 0.657779C22.6274 0.225712 21.7055 7.98567e-05 20.7698 5.92673e-07H15.9941C12.4207 -0.000890628 8.91914 1.00335 5.88938 2.898C5.79834 2.95439 5.7253 3.03559 5.67882 3.13206C5.63235 3.22853 5.61438 3.33626 5.62702 3.4426C5.63966 3.54893 5.68239 3.64945 5.75019 3.73233C5.81799 3.81522 5.90803 3.87703 6.00975 3.9105L7.36594 4.3605C7.5526 4.42277 7.72457 4.52252 7.8713 4.65362C8.01803 4.78473 8.13642 4.94444 8.21922 5.12294C8.30202 5.30144 8.34748 5.49498 8.3528 5.69168C8.35813 5.88838 8.32321 6.08409 8.25019 6.26681C8.11541 6.60367 8.0535 6.96524 8.06853 7.32774C8.08355 7.69025 8.17518 8.04546 8.33737 8.37L9.7875 11.2674C9.37265 11.3005 8.97732 11.4575 8.65284 11.718C8.32837 11.9786 8.08974 12.3307 7.96795 12.7287C7.84616 13.1266 7.84684 13.552 7.96989 13.9495C8.09295 14.3471 8.3327 14.6985 8.658 14.958L10.7955 16.6686C11.1078 17.7153 11.5274 18.727 12.0476 19.6875H7.3125C6.56685 19.6884 5.852 19.985 5.32475 20.5122C4.7975 21.0395 4.50089 21.7544 4.5 22.5V24.7534C3.1687 25.3095 2.03136 26.2466 1.23076 27.4469C0.430167 28.6472 0.00199487 30.0572 0 31.5V34.3125C0 34.4617 0.0592632 34.6048 0.164752 34.7102C0.270242 34.8157 0.413316 34.875 0.5625 34.875H34.3125C34.4617 34.875 34.6048 34.8157 34.7102 34.7102C34.8157 34.6048 34.875 34.4617 34.875 34.3125V31.5C34.873 30.0572 34.4448 28.6472 33.6442 27.4469C32.8436 26.2466 31.7063 25.3095 30.375 24.7534ZM21.9375 11.25H18.5625C18.4133 11.25 18.2702 11.3093 18.1648 11.4148C18.0593 11.5202 18 11.6633 18 11.8125V12.375H16.875V11.8125C16.875 11.6633 16.8157 11.5202 16.7102 11.4148C16.6048 11.3093 16.4617 11.25 16.3125 11.25H11.25V10.4259L14.7611 8.08537C15.5167 7.58062 16.4051 7.31162 17.3138 7.3125C18.6137 7.31098 19.8747 6.86857 20.8907 6.05756L21.8098 5.32238L22.7745 6.77025C23.3299 7.60133 23.6259 8.57866 23.625 9.57825V11.25H21.9375ZM21.375 12.375V14.0625C21.375 14.2117 21.3157 14.3548 21.2102 14.4602C21.1048 14.5657 20.9617 14.625 20.8125 14.625H19.6875C19.5383 14.625 19.3952 14.5657 19.2898 14.4602C19.1843 14.3548 19.125 14.2117 19.125 14.0625V12.375H21.375ZM15.75 12.375V14.0625C15.75 14.2117 15.6907 14.3548 15.5852 14.4602C15.4798 14.5657 15.3367 14.625 15.1875 14.625H14.0625C13.9133 14.625 13.7702 14.5657 13.6648 14.4602C13.5593 14.3548 13.5 14.2117 13.5 14.0625V12.375H15.75ZM25.875 13.3313C25.8753 13.4748 25.8432 13.6165 25.781 13.7458C25.7189 13.8752 25.6283 13.9888 25.5161 14.0783L24.4963 14.8939C24.645 14.0621 24.7268 13.2198 24.741 12.375H24.9187C25.0443 12.375 25.1687 12.3997 25.2847 12.4478C25.4007 12.4958 25.5061 12.5663 25.5949 12.6551C25.6837 12.7439 25.7542 12.8493 25.8022 12.9653C25.8503 13.0813 25.875 13.2057 25.875 13.3313ZM9.29419 6.68475C9.42415 6.35975 9.48634 6.01163 9.47694 5.66173C9.46754 5.31184 9.38676 4.96756 9.23954 4.65C9.09232 4.33245 8.88178 4.04832 8.62083 3.81504C8.35987 3.58177 8.05401 3.40427 7.722 3.29344L7.54987 3.23719C10.1483 1.84994 13.0486 1.12448 15.9941 1.125H20.7698C21.5245 1.12514 22.268 1.30714 22.9375 1.6556C23.6069 2.00405 24.1825 2.50869 24.6156 3.12678C25.0486 3.74488 25.3264 4.45822 25.4252 5.20642C25.5241 5.95461 25.4413 6.71562 25.1837 7.425L24.6949 8.76938C24.5727 7.83016 24.2359 6.93169 23.7105 6.14363L22.4055 4.18556C22.3622 4.12071 22.3059 4.06557 22.2401 4.02364C22.1744 3.98171 22.1006 3.95391 22.0236 3.942C21.9465 3.93037 21.8679 3.9347 21.7926 3.95473C21.7174 3.97476 21.647 4.01006 21.5859 4.05844L20.1881 5.1795C19.3715 5.8307 18.3583 6.18602 17.3138 6.1875C16.1829 6.18647 15.0771 6.52124 14.1368 7.14938L10.3753 9.657C10.3404 9.68068 10.3084 9.70823 10.2797 9.73913L9.34369 7.86656C9.25247 7.68423 9.2009 7.48465 9.19237 7.28096C9.18384 7.07726 9.21854 6.87407 9.29419 6.68475ZM9.35944 14.0794C9.20418 13.9558 9.09122 13.7869 9.03623 13.5963C8.98123 13.4056 8.98692 13.2025 9.0525 13.0152C9.11809 12.8279 9.24032 12.6657 9.40226 12.551C9.56419 12.4362 9.7578 12.3747 9.95625 12.375H10.1329C10.147 13.2202 10.2288 14.0629 10.3776 14.895L9.35944 14.0794ZM11.259 12.375H12.375V14.0625C12.375 14.5101 12.5528 14.9393 12.8693 15.2557C13.1857 15.5722 13.6149 15.75 14.0625 15.75H15.1875C15.6351 15.75 16.0643 15.5722 16.3807 15.2557C16.6972 14.9393 16.875 14.5101 16.875 14.0625V13.5H18V14.0625C18 14.5101 18.1778 14.9393 18.4943 15.2557C18.8107 15.5722 19.2399 15.75 19.6875 15.75H20.8125C21.2601 15.75 21.6893 15.5722 22.0057 15.2557C22.3222 14.9393 22.5 14.5101 22.5 14.0625V12.375H23.616C23.5723 14.9532 22.8525 17.4748 21.5286 19.6875H13.3464C12.0225 17.4748 11.3027 14.9532 11.259 12.375ZM7.3125 20.8125H27.5625C28.0101 20.8125 28.4393 20.9903 28.7557 21.3068C29.0722 21.6232 29.25 22.0524 29.25 22.5V33.75H5.625V22.5C5.625 22.0524 5.80279 21.6232 6.11926 21.3068C6.43572 20.9903 6.86495 20.8125 7.3125 20.8125ZM1.125 31.5C1.12653 30.3602 1.44239 29.243 2.03783 28.2711C2.63328 27.2992 3.48524 26.5104 4.5 25.9914V33.75H1.125V31.5ZM33.75 33.75H30.375V25.9914C31.3897 26.5105 32.2416 27.2993 32.8371 28.2711C33.4325 29.243 33.7484 30.3602 33.75 31.5V33.75Z" />
                <path d="M17.4375 32.0625C17.8825 32.0625 18.3175 31.9305 18.6875 31.6833C19.0575 31.4361 19.3459 31.0847 19.5162 30.6735C19.6865 30.2624 19.7311 29.81 19.6443 29.3735C19.5575 28.9371 19.3432 28.5362 19.0285 28.2215C18.7138 27.9068 18.3129 27.6926 17.8765 27.6057C17.44 27.5189 16.9876 27.5635 16.5765 27.7338C16.1653 27.9041 15.8139 28.1925 15.5667 28.5625C15.3195 28.9325 15.1875 29.3675 15.1875 29.8125C15.1875 30.4092 15.4246 30.9815 15.8465 31.4035C16.2685 31.8254 16.8408 32.0625 17.4375 32.0625ZM17.4375 28.6875C17.66 28.6875 17.8775 28.7535 18.0625 28.8771C18.2475 29.0007 18.3917 29.1764 18.4769 29.382C18.562 29.5875 18.5843 29.8138 18.5409 30.032C18.4975 30.2502 18.3903 30.4507 18.233 30.608C18.0757 30.7653 17.8752 30.8725 17.657 30.9159C17.4387 30.9593 17.2125 30.937 17.007 30.8519C16.8014 30.7667 16.6257 30.6225 16.5021 30.4375C16.3785 30.2525 16.3125 30.035 16.3125 29.8125C16.3125 29.5141 16.431 29.228 16.642 29.017C16.853 28.806 17.1391 28.6875 17.4375 28.6875Z" />
                <path d="M13.6648 26.8352L14.4602 26.0398L12.6079 24.1875L14.4602 22.3352L13.6648 21.5398L11.4148 23.7898C11.3094 23.8953 11.2501 24.0383 11.2501 24.1875C11.2501 24.3366 11.3094 24.4797 11.4148 24.5852L13.6648 26.8352Z" />
                <path d="M21.2102 26.8352L23.4602 24.5852C23.5656 24.4797 23.6249 24.3366 23.6249 24.1875C23.6249 24.0383 23.5656 23.8953 23.4602 23.7898L21.2102 21.5398L20.4148 22.3352L22.2671 24.1875L20.4148 26.0398L21.2102 26.8352Z" />
                <path d="M18.6754 21.6L15.2996 26.0994L16.1994 26.7745L19.5753 22.2752L18.6754 21.6Z" />
              </svg>
            </div>
            <h4 className="work-process-title">Impliment</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workporcess1;

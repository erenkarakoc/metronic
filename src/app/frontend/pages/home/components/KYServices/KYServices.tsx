import "./KYServices.css"

import { Link } from "react-router-dom"

import { KYBGPattern } from "../../../../components/KYBGPattern/KYBGPattern"
import { KYText } from "../../../../components/KYText/KYText"

import { motion } from "framer-motion"

const KYServices = () => {
  const servicesHidden = { opacity: 0, y: 30 }
  const servicesVisible = { opacity: 1, y: 0 }

  return (
    <section className="ky-services-section">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className="ky-services-wrapper">
          <KYText variant="subtitle">
            Gayrimenkule dair <span className="ky-text-highlight">her şey</span>{" "}
            Keya'da!
          </KYText>
          <KYText variant="paragraph" fontSize={16} fontWeight={500}>
            Her talebe uygun mülk çeşitliliği sunarak sizin için ideal
            gayrimenkulu bulma konusunda yanınızdayız.
          </KYText>

          <div className="ky-services">
            <motion.div
              initial={servicesHidden}
              whileInView={servicesVisible}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="ky-services-item">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.16"
                    d="M16.5136 20.8999H5.5135C4.93002 20.8999 4.37043 20.6682 3.95785 20.2556C3.54526 19.843 3.31348 19.2834 3.31348 18.6999V8.79981L11.0136 1.09973L18.7136 8.79981V18.6999C18.7136 19.2834 18.4819 19.843 18.0693 20.2556C17.6567 20.6682 17.0971 20.8999 16.5136 20.8999Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.8137 8.79986C19.8137 8.50812 19.6978 8.22832 19.4915 8.02203C19.2853 7.81574 19.0055 7.69985 18.7137 7.69985C18.422 7.69985 18.1422 7.81574 17.9359 8.02203C17.7296 8.22832 17.6137 8.50812 17.6137 8.79986H19.8137ZM4.41356 8.79986C4.41356 8.50812 4.29767 8.22832 4.09138 8.02203C3.88509 7.81574 3.60529 7.69985 3.31355 7.69985C3.02181 7.69985 2.74202 7.81574 2.53573 8.02203C2.32943 8.22832 2.21354 8.50812 2.21354 8.79986H4.41356ZM20.136 11.7776C20.3435 11.978 20.6214 12.0888 20.9098 12.0863C21.1982 12.0838 21.4741 11.9681 21.6781 11.7642C21.882 11.5602 21.9977 11.2843 22.0002 10.9959C22.0027 10.7075 21.8918 10.4296 21.6915 10.2222L20.136 11.7776ZM11.0136 1.09978L11.7913 0.322068C11.5851 0.115848 11.3053 0 11.0136 0C10.722 0 10.4422 0.115848 10.2359 0.322068L11.0136 1.09978ZM0.335821 10.2222C0.230758 10.3236 0.146957 10.445 0.0893065 10.5792C0.031656 10.7134 0.00131074 10.8578 4.15328e-05 11.0038C-0.00122768 11.1499 0.0266045 11.2947 0.0819141 11.4299C0.137224 11.5651 0.218903 11.6879 0.322186 11.7912C0.425469 11.8945 0.548287 11.9762 0.683475 12.0315C0.818662 12.0868 0.963512 12.1146 1.10957 12.1134C1.25563 12.1121 1.39997 12.0818 1.53418 12.0241C1.66838 11.9665 1.78976 11.8827 1.89124 11.7776L0.335821 10.2222ZM5.51358 22H16.5137V19.8H5.51358V22ZM19.8137 18.7V8.79986H17.6137V18.7H19.8137ZM4.41356 18.7V8.79986H2.21354V18.7H4.41356ZM21.6915 10.2222L11.7913 0.322068L10.2359 1.87749L20.136 11.7776L21.6915 10.2222ZM10.2359 0.322068L0.335821 10.2222L1.89124 11.7776L11.7913 1.87749L10.2359 0.322068ZM16.5137 22C17.3889 22 18.2283 21.6523 18.8472 21.0334C19.466 20.4146 19.8137 19.5752 19.8137 18.7H17.6137C17.6137 18.9917 17.4978 19.2715 17.2915 19.4778C17.0852 19.6841 16.8054 19.8 16.5137 19.8V22ZM5.51358 19.8C5.22183 19.8 4.94204 19.6841 4.73575 19.4778C4.52946 19.2715 4.41356 18.9917 4.41356 18.7H2.21354C2.21354 19.5752 2.56122 20.4146 3.1801 21.0334C3.79898 21.6523 4.63835 22 5.51358 22V19.8Z"
                    fill="currentColor"
                  />
                </svg>
                <Link to="/ilanlar&search?=konut">Konut</Link>
              </div>
            </motion.div>
            <motion.div
              initial={servicesHidden}
              whileInView={servicesVisible}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="ky-services-item">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M18.0708 3.92847V14.9281H2.35706V3.92847H18.0708Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.28551 10.9996V9.42826C6.28551 9.21988 6.36828 9.02004 6.51563 8.87269C6.66297 8.72535 6.86282 8.64257 7.07119 8.64257C7.27957 8.64257 7.47941 8.72535 7.62676 8.87269C7.77411 9.02004 7.85688 9.21988 7.85688 9.42826V10.9996C7.85688 11.208 7.77411 11.4079 7.62676 11.5552C7.47941 11.7025 7.27957 11.7853 7.07119 11.7853C6.86282 11.7853 6.66297 11.7025 6.51563 11.5552C6.36828 11.4079 6.28551 11.208 6.28551 10.9996ZM10.2139 11.7853C10.4223 11.7853 10.6222 11.7025 10.7695 11.5552C10.9169 11.4079 10.9996 11.208 10.9996 10.9996V8.64257C10.9996 8.43419 10.9169 8.23435 10.7695 8.08701C10.6222 7.93966 10.4223 7.85688 10.2139 7.85688C10.0056 7.85688 9.80573 7.93966 9.65838 8.08701C9.51104 8.23435 9.42826 8.43419 9.42826 8.64257V10.9996C9.42826 11.208 9.51104 11.4079 9.65838 11.5552C9.80573 11.7025 10.0056 11.7853 10.2139 11.7853ZM13.3567 11.7853C13.5651 11.7853 13.7649 11.7025 13.9123 11.5552C14.0596 11.4079 14.1424 11.208 14.1424 10.9996V7.85688C14.1424 7.64851 14.0596 7.44866 13.9123 7.30132C13.7649 7.15397 13.5651 7.07119 13.3567 7.07119C13.1483 7.07119 12.9485 7.15397 12.8011 7.30132C12.6538 7.44866 12.571 7.64851 12.571 7.85688V10.9996C12.571 11.208 12.6538 11.4079 12.8011 11.5552C12.9485 11.7025 13.1483 11.7853 13.3567 11.7853ZM18.8565 4.71413V14.1424H19.6422C19.8506 14.1424 20.0504 14.2252 20.1978 14.3725C20.3451 14.5199 20.4279 14.7197 20.4279 14.9281C20.4279 15.1365 20.3451 15.3363 20.1978 15.4836C20.0504 15.631 19.8506 15.7138 19.6422 15.7138H10.9996V17.4207C11.5239 17.606 11.9657 17.9707 12.247 18.4503C12.5284 18.9299 12.6311 19.4935 12.5371 20.0415C12.443 20.5895 12.1583 21.0867 11.7332 21.4451C11.3081 21.8034 10.77 22 10.2139 22C9.65793 22 9.11981 21.8034 8.69469 21.4451C8.26958 21.0867 7.98485 20.5895 7.89083 20.0415C7.7968 19.4935 7.89954 18.9299 8.18088 18.4503C8.46221 17.9707 8.90404 17.606 9.42826 17.4207V15.7138H0.785688C0.577311 15.7138 0.377468 15.631 0.230123 15.4836C0.0827776 15.3363 0 15.1365 0 14.9281C0 14.7197 0.0827776 14.5199 0.230123 14.3725C0.377468 14.2252 0.577311 14.1424 0.785688 14.1424H1.57138V4.71413C1.15462 4.71413 0.754936 4.54857 0.460245 4.25388C0.165555 3.95919 0 3.55951 0 3.14275V1.57138C0 1.15462 0.165555 0.754936 0.460245 0.460245C0.754936 0.165555 1.15462 0 1.57138 0H18.8565C19.2733 0 19.673 0.165555 19.9676 0.460245C20.2623 0.754936 20.4279 1.15462 20.4279 1.57138V3.14275C20.4279 3.55951 20.2623 3.95919 19.9676 4.25388C19.673 4.54857 19.2733 4.71413 18.8565 4.71413ZM10.9996 19.6422C10.9996 19.4868 10.9536 19.3349 10.8672 19.2057C10.7809 19.0765 10.6582 18.9758 10.5146 18.9163C10.3711 18.8569 10.2131 18.8413 10.0607 18.8716C9.90826 18.9019 9.76826 18.9768 9.65838 19.0866C9.5485 19.1965 9.47367 19.3365 9.44336 19.4889C9.41304 19.6413 9.4286 19.7993 9.48807 19.9429C9.54753 20.0864 9.64824 20.2092 9.77744 20.2955C9.90665 20.3818 10.0586 20.4279 10.2139 20.4279C10.4223 20.4279 10.6222 20.3451 10.7695 20.1978C10.9169 20.0504 10.9996 19.8506 10.9996 19.6422ZM1.57138 3.14275H18.8565V1.57138H1.57138V3.14275ZM17.2851 4.71413H3.14275V14.1424H17.2851V4.71413Z"
                    fill="currentColor"
                  />
                </svg>
                <Link to="/ilanlar&search?=proje">Proje</Link>
              </div>
            </motion.div>
            <motion.div
              initial={servicesHidden}
              whileInView={servicesVisible}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="ky-services-item">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M1.55278 4.20192L2.37228 2.15225C2.50839 1.81208 2.74331 1.5205 3.04672 1.31512C3.35014 1.10973 3.70813 0.999975 4.07453 1H14.4255C14.7919 0.999975 15.1499 1.10973 15.4533 1.31512C15.7567 1.5205 15.9917 1.81208 16.1278 2.15225L16.9473 4.20192C17.1036 4.59243 17.1208 5.02482 16.9962 5.42655C16.8715 5.82828 16.6125 6.17492 16.2625 6.40833L15.7675 6.73833C15.4662 6.93922 15.1122 7.04642 14.75 7.04642C14.3879 7.04642 14.0338 6.93922 13.7325 6.73833L12 5.58333L10.2675 6.73833C9.96625 6.93934 9.6122 7.04661 9.25003 7.04661C8.88786 7.04661 8.5338 6.93934 8.23253 6.73833L6.50003 5.58333L4.76753 6.73833C4.46625 6.93934 4.1122 7.04661 3.75003 7.04661C3.38786 7.04661 3.0338 6.93934 2.73253 6.73833L2.23753 6.40833C1.88759 6.17492 1.62857 5.82828 1.50389 5.42655C1.37922 5.02482 1.39648 4.59243 1.55278 4.20192Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.1668 7.66661L16.1658 7.66721L16.1647 7.66781L15.6667 6.80067L16.1668 7.66661Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.0745 2.66603e-09C3.50828 -2.45544e-05 2.95504 0.169601 2.48615 0.486996C2.01723 0.804404 1.65418 1.25503 1.44382 1.78075L0.62435 3.83033C0.38292 4.43377 0.356157 5.10221 0.548801 5.72295C0.741482 6.34381 1.1418 6.87953 1.6826 7.24025L1.83333 7.34074V16.5H1C0.447715 16.5 0 16.9477 0 17.5C0 18.0523 0.447715 18.5 1 18.5H17.5C18.0523 18.5 18.5 18.0523 18.5 17.5C18.5 16.9477 18.0523 16.5 17.5 16.5H16.6667V7.34074L16.8172 7.24038C17.358 6.87966 17.7585 6.34381 17.9512 5.72295C18.1438 5.10221 18.1172 4.4341 17.8758 3.83067L17.0563 1.781C16.8459 1.25529 16.4828 0.804404 16.0139 0.486996C15.545 0.1696 14.9917 -2.45544e-05 14.4255 2.66603e-09H4.0745ZM4.07443 2C3.90789 1.99999 3.74517 2.04988 3.60725 2.14323C3.46941 2.23654 3.36267 2.36898 3.30078 2.5235L2.48128 4.57316C2.41024 4.75067 2.40226 4.94755 2.45893 5.13015C2.5156 5.31276 2.63334 5.47032 2.7924 5.57642L3.28553 5.90517C3.30031 5.91496 3.31602 5.9247 3.33139 5.93353L3.33348 5.93472C3.46808 6.01246 3.62174 6.05101 3.7771 6.046C3.93246 6.041 4.08332 5.99264 4.21264 5.90639L5.9453 4.75128C6.2812 4.52735 6.7188 4.52735 7.0547 4.75128L8.7872 5.90628C8.92414 5.99765 9.08538 6.04661 9.25 6.04661C9.41462 6.04661 9.57556 5.99785 9.7125 5.90648L11.4453 4.75128C11.7812 4.52735 12.2188 4.52735 12.5547 4.75128L14.2872 5.90628C14.4165 5.99253 14.5675 6.041 14.7229 6.046C14.8783 6.05101 15.0319 6.01246 15.1665 5.93472L15.1686 5.93353C15.184 5.9247 15.199 5.91539 15.2138 5.90562L15.7076 5.57642C15.8666 5.47032 15.9844 5.31268 16.0411 5.13015C16.0977 4.94755 16.0899 4.75101 16.0188 4.5735L15.1993 2.52375C15.1374 2.36924 15.0306 2.23654 14.8927 2.14323C14.7548 2.04988 14.5921 1.99999 14.4256 2H4.07443ZM14.6667 16.5V8.04522L14.6585 8.04497C14.1303 8.02794 13.6173 7.86345 13.1776 7.57028L12 6.78518L10.8225 7.57018C10.3569 7.88083 9.80972 8.04661 9.25 8.04661C8.6904 8.04661 8.14304 7.8807 7.6775 7.57018L6.5 6.78518L5.3222 7.57038C4.88256 7.86356 4.36968 8.02794 3.84152 8.04497L3.83333 8.04522V16.5H14.6667ZM16.1668 7.66661L16.1658 7.66721L16.1647 7.66781L15.6667 6.80067L16.1668 7.66661Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.24655 10.9132C7.7779 10.3818 8.49857 10.0833 9.25002 10.0833C10.0015 10.0833 10.7221 10.3818 11.2535 10.9132C11.7848 11.4445 12.0834 12.1652 12.0834 12.9166V17.5H10.0834V12.9166C10.0834 12.6956 9.99556 12.4837 9.83928 12.3274C9.68299 12.1711 9.47103 12.0833 9.25002 12.0833C9.02901 12.0833 8.81705 12.1711 8.66077 12.3274C8.50448 12.4837 8.41669 12.6956 8.41669 12.9166V17.5H6.41669V12.9166C6.41669 12.1652 6.7152 11.4445 7.24655 10.9132Z"
                    fill="currentColor"
                  />
                </svg>
                <Link to="/ilanlar&search?=ticari">Ticari</Link>
              </div>
            </motion.div>
            <motion.div
              initial={servicesHidden}
              whileInView={servicesVisible}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="ky-services-item">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M2.4444 18.7123L6.11106 17.2945V2.99451L2.4444 4.22895V18.7123ZM15.8888 19.0056L19.5555 17.7712V3.28784L15.8888 4.71784V19.0056Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.3889 0L21.1933 0.0366666L14.6667 2.56667L7.33333 0L0.44 2.32222C0.183333 2.40778 0 2.62778 0 2.90889V21.3889C0 21.7311 0.268889 22 0.611111 22L0.806667 21.9633L7.33333 19.4333L14.6667 22L21.56 19.6778C21.8167 19.5922 22 19.3722 22 19.0911V0.611111C22 0.268889 21.7311 0 21.3889 0ZM6.11111 17.2944L2.44444 18.7122V4.22889L6.11111 2.99444V17.2944ZM13.4444 18.9811L8.55556 17.27V3.01889L13.4444 4.73V18.9811ZM19.5556 17.7711L15.8889 19.0056V4.71778L19.5556 3.3V17.7711Z"
                    fill="currentColor"
                  />
                </svg>
                <Link to="/ilanlar&search?=arsa">Arsa</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="ky-services-note"
      >
        <KYText variant="caption" fontSize={12}>
          Aradığın şeyi bulamadıysan,{" "}
          <Link to="/iletisim" style={{ fontSize: 12 }}>
            iletişime geç
          </Link>
          .
        </KYText>
      </motion.div>

      <KYBGPattern type={8} />
    </section>
  )
}

export { KYServices }

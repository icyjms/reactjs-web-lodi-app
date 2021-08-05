import {
  EnvironmentOutlined,
  GiftOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Icon } from '@chakra-ui/icon';
import { TimeIcon } from '@chakra-ui/icons';

const sections = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About Us',
    link: '/about',
  },
  // {
  //   name: 'How It Works',
  //   link: '#how-it-works',
  // },
  // {
  //   name: 'Be a LODI RIder',
  //   link: '#lodi-rider',
  // },
  // {
  //   name: 'Contact Us',
  //   link: '#contact-us',
  // },
];

const features = [
  {
    title: 'Fast and Easy Booking',
    bg: 'cyan',
    icon: (
      <Icon
        width="59"
        height="39"
        viewBox="0 0 59 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.6373 14.7647C26.5096 14.7361 27.3417 14.6074 28.1425 14.7161C28.7316 14.7933 29.2263 14.7647 29.7813 14.5616C31.194 14.044 32.5009 14.4043 33.7478 15.165C34.0766 15.3681 34.497 15.5197 34.8774 15.5225C41.9467 15.5425 49.0189 15.5368 56.0883 15.5397C56.4229 15.5425 56.7746 15.5454 57.0863 15.6455C57.6468 15.8257 57.8785 16.2718 57.8413 16.8523C57.8041 17.4014 57.4238 17.8132 56.8718 17.8933C56.6373 17.9304 56.3971 17.9304 56.1598 17.9304C48.7501 17.9304 41.3433 17.9276 33.9365 17.9362C33.5104 17.9362 33.2073 17.8304 32.9013 17.5072C31.7116 16.2546 30.3017 16.3661 29.3808 17.6244C28.6201 17.3785 27.9194 17.0039 27.1988 16.9581C26.3637 16.9095 25.8489 17.6073 25.3885 18.3022C24.6307 17.8818 23.8471 17.7045 23.0121 18.0649C22.2285 18.3994 21.6537 18.9342 21.3448 19.8493C20.913 19.2259 20.5326 18.6826 20.158 18.1335C19.1256 16.6264 18.1018 15.1136 17.0609 13.6151C16.7892 13.2261 16.4918 12.8486 16.1572 12.5112C15.6081 11.9592 15.0905 11.8677 14.4871 12.148C13.6606 12.5283 13.1716 13.1518 13.326 13.8896C13.4576 14.513 13.7092 15.1507 14.0638 15.6769C16.8149 19.7578 19.6032 23.813 22.3829 27.8767C22.4716 28.0083 22.5602 28.1398 22.646 28.2742C23.0807 28.9405 23.0035 29.6297 22.4573 30.0129C21.8796 30.4162 21.2018 30.2474 20.7242 29.5582C20.1694 28.7604 19.629 27.9539 19.077 27.1503C18.9998 27.0388 18.914 26.933 18.771 26.7471C18.4479 27.5536 18.4507 28.3228 18.6738 29.0435C19.8063 32.704 22.2628 35.0175 25.9834 35.8898C28.3827 36.4503 30.6564 36.027 32.6067 34.4484C33.742 33.5276 34.8774 32.5753 35.8554 31.4972C37.0365 30.1931 37.5856 28.5745 37.5398 26.7871C37.537 26.6899 37.557 26.5927 37.5713 26.4497H39.7447C39.9592 27.525 39.9592 27.525 41.0802 27.5221C43.98 27.5221 46.8798 27.5192 49.7796 27.525C50.5918 27.5278 51.0694 27.9053 51.1351 28.5631C51.2095 29.3352 50.6804 29.8928 49.8225 29.8985C47.8378 29.91 45.8503 29.9043 43.8656 29.9043C42.533 29.9043 41.2032 29.8957 39.8734 29.9128C39.6875 29.9157 39.4072 29.9872 39.3329 30.1216C38.7095 31.214 38.1232 32.3322 37.5055 33.479C37.6285 33.4847 37.8315 33.499 38.0346 33.499C40.717 33.5018 43.3966 33.5018 46.0791 33.5047C46.977 33.5047 47.4718 33.9308 47.4718 34.6829C47.4718 35.4322 46.9685 35.8697 46.0791 35.8697C42.5644 35.8726 39.0498 35.884 35.5323 35.864C34.9317 35.8612 34.4312 35.9755 33.9422 36.3502C27.8393 41.0345 18.5308 37.2539 16.4403 29.6669C16.0371 28.2084 16.1972 26.7614 16.7921 25.26C16.5118 25.26 16.3059 25.26 16.0971 25.26C12.8227 25.26 9.54541 25.26 6.26812 25.26C3.17386 25.26 0.95468 23.0866 0.943241 19.9981C0.926083 15.2709 0.983278 10.5437 0.920363 5.81933C0.883186 2.80798 3.1996 0.514455 6.21664 0.523034C10.9839 0.537333 15.7511 0.514455 20.5155 0.531613C23.5268 0.543052 25.6345 2.69073 25.6373 5.70208C25.6402 8.52181 25.6373 11.3415 25.6373 14.1613C25.6373 14.3986 25.6373 14.6331 25.6373 14.7647ZM23.2408 15.5511C23.2494 15.3795 23.2666 15.2051 23.2666 15.0278C23.2694 11.9307 23.2752 8.83352 23.2666 5.73639C23.2609 4.01767 22.2657 2.94811 20.5527 2.93667C15.7282 2.90808 10.9038 2.90808 6.07937 2.93954C4.35207 2.94812 3.32829 4.05771 3.32543 5.77357C3.32257 10.4607 3.32257 15.1479 3.32543 19.8322C3.32543 21.7597 4.42071 22.8778 6.33961 22.8836C9.35666 22.8921 12.3766 22.8836 15.3936 22.8807C15.5824 22.8807 15.7711 22.8578 16.0685 22.8407C15.8855 22.5518 15.7568 22.3373 15.6196 22.1314C14.4356 20.3898 13.2517 18.654 12.0677 16.9124C11.2613 15.7256 10.7751 14.4387 11.0611 12.9888C11.3957 11.2901 12.5653 10.3206 14.1325 9.823C15.6539 9.33684 16.9379 9.91452 17.9245 11.0413C18.771 12.0079 19.4745 13.0974 20.2266 14.1441C20.6985 14.8019 21.1446 15.4768 21.5907 16.1259C22.177 15.92 22.6946 15.7399 23.2408 15.5511ZM34.986 20.4213C35.8297 20.4213 36.5847 20.3813 37.3282 20.4442C37.5484 20.4642 37.8201 20.7359 37.9287 20.9589C38.1432 21.3993 38.4292 21.5309 38.9068 21.528C43.3938 21.5109 47.8807 21.5166 52.3677 21.5194C52.6623 21.5194 52.9654 21.5195 53.2542 21.5738C53.8205 21.6825 54.2065 22.1629 54.2123 22.7063C54.218 23.2496 53.8405 23.7329 53.28 23.8645C53.0512 23.9159 52.8081 23.9245 52.5736 23.9245C47.529 23.9274 42.4872 23.9245 37.4454 23.936C37.0365 23.936 36.8249 23.8244 36.6333 23.4412C36.1414 22.4489 35.578 21.4937 34.986 20.4213Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="57.1954"
              height="38.0349"
              fill="white"
              transform="translate(0.919922 0.52301)"
            />
          </clipPath>
        </defs>
      </Icon>
    ),
    content: (
      <>Book through our website or call our customer service hotlines.</>
    ),
  },
  {
    title: 'Delivers in 45 minutes or less',
    bg: 'yellow',
    icon: (
      <Icon
        width="59"
        height="39"
        viewBox="0 0 59 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.6373 14.7647C26.5096 14.7361 27.3417 14.6074 28.1425 14.7161C28.7316 14.7933 29.2263 14.7647 29.7813 14.5616C31.194 14.044 32.5009 14.4043 33.7478 15.165C34.0766 15.3681 34.497 15.5197 34.8774 15.5225C41.9467 15.5425 49.0189 15.5368 56.0883 15.5397C56.4229 15.5425 56.7746 15.5454 57.0863 15.6455C57.6468 15.8257 57.8785 16.2718 57.8413 16.8523C57.8041 17.4014 57.4238 17.8132 56.8718 17.8933C56.6373 17.9304 56.3971 17.9304 56.1598 17.9304C48.7501 17.9304 41.3433 17.9276 33.9365 17.9362C33.5104 17.9362 33.2073 17.8304 32.9013 17.5072C31.7116 16.2546 30.3017 16.3661 29.3808 17.6244C28.6201 17.3785 27.9194 17.0039 27.1988 16.9581C26.3637 16.9095 25.8489 17.6073 25.3885 18.3022C24.6307 17.8818 23.8471 17.7045 23.0121 18.0649C22.2285 18.3994 21.6537 18.9342 21.3448 19.8493C20.913 19.2259 20.5326 18.6826 20.158 18.1335C19.1256 16.6264 18.1018 15.1136 17.0609 13.6151C16.7892 13.2261 16.4918 12.8486 16.1572 12.5112C15.6081 11.9592 15.0905 11.8677 14.4871 12.148C13.6606 12.5283 13.1716 13.1518 13.326 13.8896C13.4576 14.513 13.7092 15.1507 14.0638 15.6769C16.8149 19.7578 19.6032 23.813 22.3829 27.8767C22.4716 28.0083 22.5602 28.1398 22.646 28.2742C23.0807 28.9405 23.0035 29.6297 22.4573 30.0129C21.8796 30.4162 21.2018 30.2474 20.7242 29.5582C20.1694 28.7604 19.629 27.9539 19.077 27.1503C18.9998 27.0388 18.914 26.933 18.771 26.7471C18.4479 27.5536 18.4507 28.3228 18.6738 29.0435C19.8063 32.704 22.2628 35.0175 25.9834 35.8898C28.3827 36.4503 30.6564 36.027 32.6067 34.4484C33.742 33.5276 34.8774 32.5753 35.8554 31.4972C37.0365 30.1931 37.5856 28.5745 37.5398 26.7871C37.537 26.6899 37.557 26.5927 37.5713 26.4497H39.7447C39.9592 27.525 39.9592 27.525 41.0802 27.5221C43.98 27.5221 46.8798 27.5192 49.7796 27.525C50.5918 27.5278 51.0694 27.9053 51.1351 28.5631C51.2095 29.3352 50.6804 29.8928 49.8225 29.8985C47.8378 29.91 45.8503 29.9043 43.8656 29.9043C42.533 29.9043 41.2032 29.8957 39.8734 29.9128C39.6875 29.9157 39.4072 29.9872 39.3329 30.1216C38.7095 31.214 38.1232 32.3322 37.5055 33.479C37.6285 33.4847 37.8315 33.499 38.0346 33.499C40.717 33.5018 43.3966 33.5018 46.0791 33.5047C46.977 33.5047 47.4718 33.9308 47.4718 34.6829C47.4718 35.4322 46.9685 35.8697 46.0791 35.8697C42.5644 35.8726 39.0498 35.884 35.5323 35.864C34.9317 35.8612 34.4312 35.9755 33.9422 36.3502C27.8393 41.0345 18.5308 37.2539 16.4403 29.6669C16.0371 28.2084 16.1972 26.7614 16.7921 25.26C16.5118 25.26 16.3059 25.26 16.0971 25.26C12.8227 25.26 9.54541 25.26 6.26812 25.26C3.17386 25.26 0.95468 23.0866 0.943241 19.9981C0.926083 15.2709 0.983278 10.5437 0.920363 5.81933C0.883186 2.80798 3.1996 0.514455 6.21664 0.523034C10.9839 0.537333 15.7511 0.514455 20.5155 0.531613C23.5268 0.543052 25.6345 2.69073 25.6373 5.70208C25.6402 8.52181 25.6373 11.3415 25.6373 14.1613C25.6373 14.3986 25.6373 14.6331 25.6373 14.7647ZM23.2408 15.5511C23.2494 15.3795 23.2666 15.2051 23.2666 15.0278C23.2694 11.9307 23.2752 8.83352 23.2666 5.73639C23.2609 4.01767 22.2657 2.94811 20.5527 2.93667C15.7282 2.90808 10.9038 2.90808 6.07937 2.93954C4.35207 2.94812 3.32829 4.05771 3.32543 5.77357C3.32257 10.4607 3.32257 15.1479 3.32543 19.8322C3.32543 21.7597 4.42071 22.8778 6.33961 22.8836C9.35666 22.8921 12.3766 22.8836 15.3936 22.8807C15.5824 22.8807 15.7711 22.8578 16.0685 22.8407C15.8855 22.5518 15.7568 22.3373 15.6196 22.1314C14.4356 20.3898 13.2517 18.654 12.0677 16.9124C11.2613 15.7256 10.7751 14.4387 11.0611 12.9888C11.3957 11.2901 12.5653 10.3206 14.1325 9.823C15.6539 9.33684 16.9379 9.91452 17.9245 11.0413C18.771 12.0079 19.4745 13.0974 20.2266 14.1441C20.6985 14.8019 21.1446 15.4768 21.5907 16.1259C22.177 15.92 22.6946 15.7399 23.2408 15.5511ZM34.986 20.4213C35.8297 20.4213 36.5847 20.3813 37.3282 20.4442C37.5484 20.4642 37.8201 20.7359 37.9287 20.9589C38.1432 21.3993 38.4292 21.5309 38.9068 21.528C43.3938 21.5109 47.8807 21.5166 52.3677 21.5194C52.6623 21.5194 52.9654 21.5195 53.2542 21.5738C53.8205 21.6825 54.2065 22.1629 54.2123 22.7063C54.218 23.2496 53.8405 23.7329 53.28 23.8645C53.0512 23.9159 52.8081 23.9245 52.5736 23.9245C47.529 23.9274 42.4872 23.9245 37.4454 23.936C37.0365 23.936 36.8249 23.8244 36.6333 23.4412C36.1414 22.4489 35.578 21.4937 34.986 20.4213Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="57.1954"
              height="38.0349"
              fill="white"
              transform="translate(0.919922 0.52301)"
            />
          </clipPath>
        </defs>
      </Icon>
    ),
    content: (
      <>
        We fulfill deliveries in 45 minutes or less in our pilot areas, and
        within a 10km radius from seller to customer.
      </>
    ),
  },
  {
    title: 'Straightforward Delivery Rates',
    bg: 'orange',
    icon: (
      <Icon
        width="59"
        height="39"
        viewBox="0 0 59 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.6373 14.7647C26.5096 14.7361 27.3417 14.6074 28.1425 14.7161C28.7316 14.7933 29.2263 14.7647 29.7813 14.5616C31.194 14.044 32.5009 14.4043 33.7478 15.165C34.0766 15.3681 34.497 15.5197 34.8774 15.5225C41.9467 15.5425 49.0189 15.5368 56.0883 15.5397C56.4229 15.5425 56.7746 15.5454 57.0863 15.6455C57.6468 15.8257 57.8785 16.2718 57.8413 16.8523C57.8041 17.4014 57.4238 17.8132 56.8718 17.8933C56.6373 17.9304 56.3971 17.9304 56.1598 17.9304C48.7501 17.9304 41.3433 17.9276 33.9365 17.9362C33.5104 17.9362 33.2073 17.8304 32.9013 17.5072C31.7116 16.2546 30.3017 16.3661 29.3808 17.6244C28.6201 17.3785 27.9194 17.0039 27.1988 16.9581C26.3637 16.9095 25.8489 17.6073 25.3885 18.3022C24.6307 17.8818 23.8471 17.7045 23.0121 18.0649C22.2285 18.3994 21.6537 18.9342 21.3448 19.8493C20.913 19.2259 20.5326 18.6826 20.158 18.1335C19.1256 16.6264 18.1018 15.1136 17.0609 13.6151C16.7892 13.2261 16.4918 12.8486 16.1572 12.5112C15.6081 11.9592 15.0905 11.8677 14.4871 12.148C13.6606 12.5283 13.1716 13.1518 13.326 13.8896C13.4576 14.513 13.7092 15.1507 14.0638 15.6769C16.8149 19.7578 19.6032 23.813 22.3829 27.8767C22.4716 28.0083 22.5602 28.1398 22.646 28.2742C23.0807 28.9405 23.0035 29.6297 22.4573 30.0129C21.8796 30.4162 21.2018 30.2474 20.7242 29.5582C20.1694 28.7604 19.629 27.9539 19.077 27.1503C18.9998 27.0388 18.914 26.933 18.771 26.7471C18.4479 27.5536 18.4507 28.3228 18.6738 29.0435C19.8063 32.704 22.2628 35.0175 25.9834 35.8898C28.3827 36.4503 30.6564 36.027 32.6067 34.4484C33.742 33.5276 34.8774 32.5753 35.8554 31.4972C37.0365 30.1931 37.5856 28.5745 37.5398 26.7871C37.537 26.6899 37.557 26.5927 37.5713 26.4497H39.7447C39.9592 27.525 39.9592 27.525 41.0802 27.5221C43.98 27.5221 46.8798 27.5192 49.7796 27.525C50.5918 27.5278 51.0694 27.9053 51.1351 28.5631C51.2095 29.3352 50.6804 29.8928 49.8225 29.8985C47.8378 29.91 45.8503 29.9043 43.8656 29.9043C42.533 29.9043 41.2032 29.8957 39.8734 29.9128C39.6875 29.9157 39.4072 29.9872 39.3329 30.1216C38.7095 31.214 38.1232 32.3322 37.5055 33.479C37.6285 33.4847 37.8315 33.499 38.0346 33.499C40.717 33.5018 43.3966 33.5018 46.0791 33.5047C46.977 33.5047 47.4718 33.9308 47.4718 34.6829C47.4718 35.4322 46.9685 35.8697 46.0791 35.8697C42.5644 35.8726 39.0498 35.884 35.5323 35.864C34.9317 35.8612 34.4312 35.9755 33.9422 36.3502C27.8393 41.0345 18.5308 37.2539 16.4403 29.6669C16.0371 28.2084 16.1972 26.7614 16.7921 25.26C16.5118 25.26 16.3059 25.26 16.0971 25.26C12.8227 25.26 9.54541 25.26 6.26812 25.26C3.17386 25.26 0.95468 23.0866 0.943241 19.9981C0.926083 15.2709 0.983278 10.5437 0.920363 5.81933C0.883186 2.80798 3.1996 0.514455 6.21664 0.523034C10.9839 0.537333 15.7511 0.514455 20.5155 0.531613C23.5268 0.543052 25.6345 2.69073 25.6373 5.70208C25.6402 8.52181 25.6373 11.3415 25.6373 14.1613C25.6373 14.3986 25.6373 14.6331 25.6373 14.7647ZM23.2408 15.5511C23.2494 15.3795 23.2666 15.2051 23.2666 15.0278C23.2694 11.9307 23.2752 8.83352 23.2666 5.73639C23.2609 4.01767 22.2657 2.94811 20.5527 2.93667C15.7282 2.90808 10.9038 2.90808 6.07937 2.93954C4.35207 2.94812 3.32829 4.05771 3.32543 5.77357C3.32257 10.4607 3.32257 15.1479 3.32543 19.8322C3.32543 21.7597 4.42071 22.8778 6.33961 22.8836C9.35666 22.8921 12.3766 22.8836 15.3936 22.8807C15.5824 22.8807 15.7711 22.8578 16.0685 22.8407C15.8855 22.5518 15.7568 22.3373 15.6196 22.1314C14.4356 20.3898 13.2517 18.654 12.0677 16.9124C11.2613 15.7256 10.7751 14.4387 11.0611 12.9888C11.3957 11.2901 12.5653 10.3206 14.1325 9.823C15.6539 9.33684 16.9379 9.91452 17.9245 11.0413C18.771 12.0079 19.4745 13.0974 20.2266 14.1441C20.6985 14.8019 21.1446 15.4768 21.5907 16.1259C22.177 15.92 22.6946 15.7399 23.2408 15.5511ZM34.986 20.4213C35.8297 20.4213 36.5847 20.3813 37.3282 20.4442C37.5484 20.4642 37.8201 20.7359 37.9287 20.9589C38.1432 21.3993 38.4292 21.5309 38.9068 21.528C43.3938 21.5109 47.8807 21.5166 52.3677 21.5194C52.6623 21.5194 52.9654 21.5195 53.2542 21.5738C53.8205 21.6825 54.2065 22.1629 54.2123 22.7063C54.218 23.2496 53.8405 23.7329 53.28 23.8645C53.0512 23.9159 52.8081 23.9245 52.5736 23.9245C47.529 23.9274 42.4872 23.9245 37.4454 23.936C37.0365 23.936 36.8249 23.8244 36.6333 23.4412C36.1414 22.4489 35.578 21.4937 34.986 20.4213Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="57.1954"
              height="38.0349"
              fill="white"
              transform="translate(0.919922 0.52301)"
            />
          </clipPath>
        </defs>
      </Icon>
    ),
    content: (
      <>
        We charge a flat rate of P85 for the first 5 kms and P8 for every
        succeeding km. Package weight limit is 5kg.
      </>
    ),
  },
  {
    title: 'Cash on Delivery',
    bg: 'brand.100',
    icon: (
      <Icon
        width="59"
        height="39"
        viewBox="0 0 59 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.6373 14.7647C26.5096 14.7361 27.3417 14.6074 28.1425 14.7161C28.7316 14.7933 29.2263 14.7647 29.7813 14.5616C31.194 14.044 32.5009 14.4043 33.7478 15.165C34.0766 15.3681 34.497 15.5197 34.8774 15.5225C41.9467 15.5425 49.0189 15.5368 56.0883 15.5397C56.4229 15.5425 56.7746 15.5454 57.0863 15.6455C57.6468 15.8257 57.8785 16.2718 57.8413 16.8523C57.8041 17.4014 57.4238 17.8132 56.8718 17.8933C56.6373 17.9304 56.3971 17.9304 56.1598 17.9304C48.7501 17.9304 41.3433 17.9276 33.9365 17.9362C33.5104 17.9362 33.2073 17.8304 32.9013 17.5072C31.7116 16.2546 30.3017 16.3661 29.3808 17.6244C28.6201 17.3785 27.9194 17.0039 27.1988 16.9581C26.3637 16.9095 25.8489 17.6073 25.3885 18.3022C24.6307 17.8818 23.8471 17.7045 23.0121 18.0649C22.2285 18.3994 21.6537 18.9342 21.3448 19.8493C20.913 19.2259 20.5326 18.6826 20.158 18.1335C19.1256 16.6264 18.1018 15.1136 17.0609 13.6151C16.7892 13.2261 16.4918 12.8486 16.1572 12.5112C15.6081 11.9592 15.0905 11.8677 14.4871 12.148C13.6606 12.5283 13.1716 13.1518 13.326 13.8896C13.4576 14.513 13.7092 15.1507 14.0638 15.6769C16.8149 19.7578 19.6032 23.813 22.3829 27.8767C22.4716 28.0083 22.5602 28.1398 22.646 28.2742C23.0807 28.9405 23.0035 29.6297 22.4573 30.0129C21.8796 30.4162 21.2018 30.2474 20.7242 29.5582C20.1694 28.7604 19.629 27.9539 19.077 27.1503C18.9998 27.0388 18.914 26.933 18.771 26.7471C18.4479 27.5536 18.4507 28.3228 18.6738 29.0435C19.8063 32.704 22.2628 35.0175 25.9834 35.8898C28.3827 36.4503 30.6564 36.027 32.6067 34.4484C33.742 33.5276 34.8774 32.5753 35.8554 31.4972C37.0365 30.1931 37.5856 28.5745 37.5398 26.7871C37.537 26.6899 37.557 26.5927 37.5713 26.4497H39.7447C39.9592 27.525 39.9592 27.525 41.0802 27.5221C43.98 27.5221 46.8798 27.5192 49.7796 27.525C50.5918 27.5278 51.0694 27.9053 51.1351 28.5631C51.2095 29.3352 50.6804 29.8928 49.8225 29.8985C47.8378 29.91 45.8503 29.9043 43.8656 29.9043C42.533 29.9043 41.2032 29.8957 39.8734 29.9128C39.6875 29.9157 39.4072 29.9872 39.3329 30.1216C38.7095 31.214 38.1232 32.3322 37.5055 33.479C37.6285 33.4847 37.8315 33.499 38.0346 33.499C40.717 33.5018 43.3966 33.5018 46.0791 33.5047C46.977 33.5047 47.4718 33.9308 47.4718 34.6829C47.4718 35.4322 46.9685 35.8697 46.0791 35.8697C42.5644 35.8726 39.0498 35.884 35.5323 35.864C34.9317 35.8612 34.4312 35.9755 33.9422 36.3502C27.8393 41.0345 18.5308 37.2539 16.4403 29.6669C16.0371 28.2084 16.1972 26.7614 16.7921 25.26C16.5118 25.26 16.3059 25.26 16.0971 25.26C12.8227 25.26 9.54541 25.26 6.26812 25.26C3.17386 25.26 0.95468 23.0866 0.943241 19.9981C0.926083 15.2709 0.983278 10.5437 0.920363 5.81933C0.883186 2.80798 3.1996 0.514455 6.21664 0.523034C10.9839 0.537333 15.7511 0.514455 20.5155 0.531613C23.5268 0.543052 25.6345 2.69073 25.6373 5.70208C25.6402 8.52181 25.6373 11.3415 25.6373 14.1613C25.6373 14.3986 25.6373 14.6331 25.6373 14.7647ZM23.2408 15.5511C23.2494 15.3795 23.2666 15.2051 23.2666 15.0278C23.2694 11.9307 23.2752 8.83352 23.2666 5.73639C23.2609 4.01767 22.2657 2.94811 20.5527 2.93667C15.7282 2.90808 10.9038 2.90808 6.07937 2.93954C4.35207 2.94812 3.32829 4.05771 3.32543 5.77357C3.32257 10.4607 3.32257 15.1479 3.32543 19.8322C3.32543 21.7597 4.42071 22.8778 6.33961 22.8836C9.35666 22.8921 12.3766 22.8836 15.3936 22.8807C15.5824 22.8807 15.7711 22.8578 16.0685 22.8407C15.8855 22.5518 15.7568 22.3373 15.6196 22.1314C14.4356 20.3898 13.2517 18.654 12.0677 16.9124C11.2613 15.7256 10.7751 14.4387 11.0611 12.9888C11.3957 11.2901 12.5653 10.3206 14.1325 9.823C15.6539 9.33684 16.9379 9.91452 17.9245 11.0413C18.771 12.0079 19.4745 13.0974 20.2266 14.1441C20.6985 14.8019 21.1446 15.4768 21.5907 16.1259C22.177 15.92 22.6946 15.7399 23.2408 15.5511ZM34.986 20.4213C35.8297 20.4213 36.5847 20.3813 37.3282 20.4442C37.5484 20.4642 37.8201 20.7359 37.9287 20.9589C38.1432 21.3993 38.4292 21.5309 38.9068 21.528C43.3938 21.5109 47.8807 21.5166 52.3677 21.5194C52.6623 21.5194 52.9654 21.5195 53.2542 21.5738C53.8205 21.6825 54.2065 22.1629 54.2123 22.7063C54.218 23.2496 53.8405 23.7329 53.28 23.8645C53.0512 23.9159 52.8081 23.9245 52.5736 23.9245C47.529 23.9274 42.4872 23.9245 37.4454 23.936C37.0365 23.936 36.8249 23.8244 36.6333 23.4412C36.1414 22.4489 35.578 21.4937 34.986 20.4213Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="57.1954"
              height="38.0349"
              fill="white"
              transform="translate(0.919922 0.52301)"
            />
          </clipPath>
        </defs>
      </Icon>
    ),
    content: <>We accept COD payments with a minimal service fee of 2.5%.</>,
  },
];

const offers = [
  'Purely delivery charge',
  'No percentage from your sales',
  'No additional manpower for in-house delivery service',
  'Manage your deliveries',
  'Easy order tracking',
  'Single booking, multiple deliveries',
];

const contactNumbers = [
  '(02) 8246 6800',
  /*  '8818 5893 (LODI)',
  '0917 111 5893 (LODI)',
  '0908 890 5893 (LODI)',
  '0916 432 6265',
  '0961 126 0133', */
];

const officeAddress = [
  'Office Address: Logistikus Express Philippines,',
  'Inc. 20th Floor, Inoza Tower 40th Avenue,',
  'Bonifacio Global City Taguig City, Philippines',
];

const HIWdata = [
  {
    title: 'Book a delivery',
    description: 'Provide the necessary information for the delivery',
    icon: <UnorderedListOutlined />,
  },
  {
    title: 'Wait for a Rider',
    description:
      'Wait for a Rider to be assigned, and to arrive at the pickup location',
    icon: <TimeIcon />,
  },
  {
    title: 'Handover your packages',
    description: 'Let the Rider handle and deliver your packages',
    icon: <GiftOutlined />,
  },
  {
    title: 'Track your package',
    description: 'Track the progress of your booking in real-time',
    icon: <EnvironmentOutlined />,
  },
];

const benefitsData = [
  {
    title: 'Fast and Easy Booking',
    description:
      'Book through our website or call our customer service hotlines.',
  },
  {
    title: 'Delivers in 45 minutes or less',
    description:
      'We fulfill deliveries in 45 minutes or less in our pilot areas, and within a 10km radius from seller to customer.',
  },
  {
    title: 'Straightforward Delivery Rates',
    description:
      'We charge a flat rate of P85 for the first 5 kms and P8 for every succeeding km. Package weight limit is 5kg.',
  },
  {
    title: 'Cash on Delivery',
    description: 'We accept COD payments with a minimal service fee of 2.5%.',
  },
];

export {
  sections,
  features,
  offers,
  contactNumbers,
  officeAddress,
  HIWdata,
  benefitsData,
};

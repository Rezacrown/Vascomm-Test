const activeList = "#FFFFFF";
const falseList = "#1A1111";
const primaryFill = "#41A0E4";

type isActive = { isActive?: boolean };

//
export const HouseIcon = ({ isActive }: isActive) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={isActive ? primaryFill : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M14.2495 19.4993V14.9992C14.2495 14.8003 14.1704 14.6095 14.0298 14.4689C13.8891 14.3282 13.6984 14.2492 13.4995 14.2492H10.4995C10.3005 14.2492 10.1098 14.3282 9.96912 14.4689C9.82847 14.6095 9.74945 14.8003 9.74945 14.9992V19.4993C9.74945 19.6982 9.67045 19.8889 9.52981 20.0296C9.38918 20.1702 9.19844 20.2492 8.99954 20.2493L4.50009 20.2499C4.40159 20.2499 4.30406 20.2305 4.21305 20.1928C4.12205 20.1551 4.03936 20.0999 3.9697 20.0302C3.90005 19.9606 3.8448 19.8779 3.8071 19.7869C3.7694 19.6959 3.75 19.5984 3.75 19.4999V10.8317C3.75 10.7272 3.77183 10.6239 3.8141 10.5283C3.85637 10.4328 3.91814 10.3471 3.99545 10.2768L11.4949 3.45791C11.633 3.33238 11.8129 3.26282 11.9995 3.26282C12.186 3.26281 12.3659 3.33236 12.504 3.45787L20.0045 10.2768C20.0818 10.3471 20.1436 10.4328 20.1859 10.5283C20.2282 10.6239 20.25 10.7272 20.25 10.8317V19.4999C20.25 19.5984 20.2306 19.6959 20.1929 19.7869C20.1552 19.8779 20.1 19.9606 20.0303 20.0302C19.9606 20.0999 19.878 20.1551 19.7869 20.1928C19.6959 20.2305 19.5984 20.2499 19.4999 20.2499L14.9994 20.2493C14.8005 20.2493 14.6097 20.1702 14.4691 20.0296C14.3285 19.8889 14.2494 19.6982 14.2495 19.4993Z"
      fill={isActive ? primaryFill : "none"}
    />
    <path
      d="M14.2495 19.4993V14.9992C14.2495 14.8003 14.1704 14.6095 14.0298 14.4689C13.8891 14.3282 13.6984 14.2492 13.4995 14.2492H10.4995C10.3005 14.2492 10.1098 14.3282 9.96912 14.4689C9.82847 14.6095 9.74945 14.8003 9.74945 14.9992V19.4993C9.74945 19.6982 9.67045 19.8889 9.52981 20.0296C9.38918 20.1702 9.19844 20.2492 8.99954 20.2493L4.50009 20.2499C4.40159 20.2499 4.30406 20.2305 4.21305 20.1928C4.12205 20.1551 4.03936 20.0999 3.9697 20.0302C3.90005 19.9606 3.8448 19.8779 3.8071 19.7869C3.7694 19.6959 3.75 19.5984 3.75 19.4999V10.8317C3.75 10.7272 3.77183 10.6239 3.8141 10.5283C3.85637 10.4328 3.91814 10.3471 3.99545 10.2768L11.4949 3.45791C11.633 3.33238 11.8129 3.26282 11.9995 3.26282C12.186 3.26281 12.3659 3.33236 12.504 3.45787L20.0045 10.2768C20.0818 10.3471 20.1436 10.4328 20.1859 10.5283C20.2282 10.6239 20.25 10.7272 20.25 10.8317V19.4999C20.25 19.5984 20.2306 19.6959 20.1929 19.7869C20.1552 19.8779 20.1 19.9606 20.0303 20.0302C19.9606 20.0999 19.878 20.1551 19.7869 20.1928C19.6959 20.2305 19.5984 20.2499 19.4999 20.2499L14.9994 20.2493C14.8005 20.2493 14.6097 20.1702 14.4691 20.0296C14.3285 19.8889 14.2494 19.6982 14.2495 19.4993Z"
      stroke={isActive ? activeList : falseList}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const UserIcon = ({ isActive }: isActive) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={isActive ? primaryFill : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
      fill={isActive ? primaryFill : "none"}
    />
    <path
      d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
      stroke={isActive ? activeList : falseList}
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M2.90515 20.2491C3.82724 18.6531 5.1531 17.3278 6.74954 16.4064C8.34598 15.485 10.1568 15 12 15C13.8433 15 15.6541 15.4851 17.2505 16.4065C18.8469 17.3279 20.1728 18.6533 21.0948 20.2493"
      stroke={isActive ? activeList : falseList}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const NotebookIcon = ({ isActive }: isActive) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={isActive ? primaryFill : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M7.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H7.5V20.25Z"
      fill={isActive ? primaryFill : "none"}
    />
    <path
      d="M10.5 10.5H16.5"
      stroke={isActive ? activeList : falseList}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 13.5H16.5"
      stroke={isActive ? activeList : falseList}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
      stroke={isActive ? activeList : falseList}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 3.75V20.25"
      stroke={isActive ? activeList : falseList}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

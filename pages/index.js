export default function Home() {
  const words = [
    "urgent",
    "wall",
    "powerbank",
    "teacher",
    "dentist",
    "remember",
    "sugar",
    "camera",
    "plant",
    "suitcase",
    "heater",
  ];
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="list">
            <div className="background">
              <ul className="words">
                {words.map((item, id) => (
                  <li className="word" key={id}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="input">
            <input type="text" />
          </div>
          <div className="time">00:45</div>
          <div className="buttons">
            <div className="play">
              <svg
                width="198"
                height="72"
                viewBox="0 0 198 72"
                className="svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_9_7)">
                  <path
                    d="M2.00092 13.1228C1.88594 1.58945 12.6294 1.643 19.3895 2.1768C60.9914 2.85994 149.134 4.34965 168.889 4.84337C188.644 5.3371 193.248 18.0348 191.734 22.252L184.094 51.8753C182.322 58.6229 173.219 61.4366 168.889 62L27.5808 65.9839C16.3141 66.3043 9.85691 61.7568 8.03662 59.443C4.58765 58.2683 2.57575 28.0734 2.00092 13.1228Z"
                    className="svg1"
                    fill="#FEF2EA"
                  />
                </g>
                <path
                  d="M11.8661 15.7774C11.7632 5.90606 21.3758 5.95189 27.4243 6.40877C64.6472 6.99347 149.684 8.06618 167.359 8.48876C185.035 8.91133 186.746 16.236 185.392 19.8455L179.416 50C177.831 55.7752 169.686 58.1834 165.812 58.6656L34.578 62.5781C24.4973 62.8523 18.8951 57.4031 17.2664 55.4227C14.1805 54.4173 12.3804 28.5736 11.8661 15.7774Z"
                  fill="#FEBBBB"
                  className="svg2"
                />
                <g filter="url(#filter1_i_9_7)">
                  <path
                    d="M15.7808 18.6202C15.6836 9.68183 24.7662 9.72332 30.4812 10.137C65.6518 10.6665 149.553 11.576 166.254 11.9586C182.955 12.3412 181.557 18.7317 180.278 22L175.046 46.6717C173.548 51.9011 165.852 54.0817 162.192 54.5183L37.4062 59.5875C27.8813 59.8358 22.4223 56.3115 20.8834 54.5183C17.9677 53.608 16.2668 30.2069 15.7808 18.6202Z"
                    className="svg3"
                    fill="url(#paint0_linear_9_7)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_9_7"
                    x="0"
                    y="0"
                    width="198"
                    height="72"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.808333 0 0 0 0 0.767917 0 0 0 0 0.740972 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_9_7"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_9_7"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_9_7"
                    x="15.78"
                    y="10"
                    width="165.202"
                    height="49.6"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="-3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.384314 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_9_7"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_9_7"
                    x1="19.7904"
                    y1="9.99999"
                    x2="173.631"
                    y2="50.0624"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9999" />
                    <stop offset="1" stop-color="#620C0C" />
                  </linearGradient>
                </defs>
              </svg>
              <span>PLAY</span>
            </div>
            <div className="reset">
              <svg
                width="198"
                height="72"
                viewBox="0 0 198 72"
                fill="none"
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_3_268)">
                  <path
                    d="M195.999 13.1228C196.114 1.58945 185.371 1.643 178.611 2.1768C137.009 2.85994 48.866 4.34965 29.1112 4.84337C9.3564 5.3371 4.75232 18.0348 6.26569 22.252L13.9063 51.8753C15.678 58.6229 24.7811 61.4366 29.1112 62L170.419 65.9839C181.686 66.3043 188.143 61.7568 189.963 59.443C193.412 58.2683 195.424 28.0734 195.999 13.1228Z"
                    fill="#FEF2EA"
                    className="svg1"
                  />
                </g>
                <path
                  d="M186.134 15.7774C186.237 5.90606 176.624 5.95189 170.576 6.40877C133.353 6.99347 48.316 8.06618 30.6405 8.48876C12.9651 8.91133 11.2543 16.236 12.6084 19.8455L18.5835 50C20.1687 55.7752 28.3137 58.1834 32.188 58.6656L163.422 62.5781C173.503 62.8523 179.105 57.4031 180.734 55.4227C183.819 54.4173 185.62 28.5736 186.134 15.7774Z"
                  className="svg2"
                  fill="#FEBBBB"
                />
                <g filter="url(#filter1_i_3_268)">
                  <path
                    d="M182.219 18.6202C182.317 9.68189 173.234 9.72338 167.519 10.1371C132.348 10.6665 48.4468 11.576 31.7459 11.9587C15.045 12.3413 16.443 18.7317 17.7224 22.0001L22.9542 46.6718C24.452 51.9011 32.1479 54.0818 35.8086 54.5184L160.594 59.5876C170.119 59.8359 175.578 56.3116 177.117 54.5184C180.033 53.608 181.733 30.207 182.219 18.6202Z"
                    className="svg3"
                    fill="url(#paint0_linear_3_268)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3_268"
                    x="0"
                    y="0"
                    width="198"
                    height="72"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.808333 0 0 0 0 0.767917 0 0 0 0 0.740972 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3_268"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3_268"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_3_268"
                    x="17.0187"
                    y="10.0001"
                    width="165.202"
                    height="49.6"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="-3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.384314 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_3_268"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_3_268"
                    x1="178.21"
                    y1="10.0001"
                    x2="24.3692"
                    y2="50.0625"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9999" />
                    <stop offset="1" stop-color="#620C0C" />
                  </linearGradient>
                </defs>
              </svg>
              <span>RESET</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

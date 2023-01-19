import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const EmptyCircleOutlineIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
        stroke='currentcolor'
        strokeWidth='2'
        fill='#fff'
      />
    </SvgIcon>
  );
};

export const CheckboxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='4'
        y='4'
        width='16'
        height='16'
        rx='2'
        stroke='currentcolor'
        fill='#fff'
        strokeWidth='2'
      />
    </SvgIcon>
  );
};

export const CheckboxCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path fill='#fff' fillOpacity='.01' d='M0 0h24v24H0z' />
      <rect
        x='4'
        y='4'
        width='16'
        height='16'
        rx='2'
        fill='currentcolor'
        stroke='currentcolor'
        strokeWidth='2'
      />
      <path
        d='m16.5 9.281-6.188 6.188L7.5 12.656'
        stroke='#fff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
};

export const CheckboxIndeterminateIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path fill='#fff' fillOpacity='.01' d='M0 0h24v24H0z' />
      <rect
        x='4'
        y='4'
        width='16'
        height='16'
        rx='2'
        fill='currentcolor'
        stroke='currentcolor'
        strokeWidth='2'
      />
      <path
        d='M15.75 11h-7.5C7.56 11 7 11.448 7 12s.56 1 1.25 1h7.5c.69 0 1.25-.448 1.25-1s-.56-1-1.25-1z'
        fill='#FAFBFC'
      />
    </SvgIcon>
  );
};

export const NikeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='61'
      height='32'
      viewBox='0 0 61 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.287 16.382h4.181L24.611 0h-3.876l-2.754 7.35.475-7.35h-4.12L8.181 16.382h3.876l2.706-7.253-.476 7.253zM25.111 0l-6.143 16.382h3.876L28.987 0h-3.876zM7.742 10.738c-5.412 6.35-10.519 14.81-6.009 18.698 4.41 3.802 9.59 1.649 13.304.104l.25-.104c3.73-1.548 44.88-19.356 44.88-19.356.402-.195.329-.45-.171-.329l-17.227 4.687.43-1.2h-4.521l1.486-3.962h3.718l1.146-3.06H41.31l1.22-3.45 3.973-.023L47.55.013H35.728l-4.06 4.875L33.547.012H29.62l-6.094 16.382h3.876l2.596-6.85.183 6.85h5.394L15.19 21.94c-5.668 1.597-12.055-1.865-7.448-11.202zm26.036-3.973.243 8.532L39.628.329l-5.85 6.436z'
        fill='#fff'
      />
    </SvgIcon>
  );
};

export const BYBIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='257'
      height='179'
      viewBox='0 0 257 179'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path fill='url(#a)' d='M160 117h97v1h-97z' />
      <path fill='url(#b)' d='M0 117h71v1H0z' />
      <path fill='url(#c)' d='M85 154h72v1H85z' />
      <path fill='url(#d)' d='M123 154h134v1H123z' />
      <path fill='url(#e)' d='M0 154h134v1H0z' />
      <path
        transform='rotate(58.654 116.042 99.426)'
        fill='url(#f)'
        d='M116.042 99.426h52.381v1h-52.381z'
      />
      <path
        transform='rotate(122.152 119.446 121.531)'
        fill='url(#g)'
        d='M119.446 121.531h63.136v1h-63.136z'
      />
      <g filter='url(#h)'>
        <path
          d='M52.3 135.56c2.196.468 3.96 1.566 5.292 3.294 1.332 1.692 1.998 3.636 1.998 5.832 0 3.168-1.116 5.688-3.348 7.56-2.196 1.836-5.274 2.754-9.234 2.754H29.35v-37.908h17.064c3.852 0 6.858.882 9.018 2.646 2.196 1.764 3.294 4.158 3.294 7.182 0 2.232-.594 4.086-1.782 5.562-1.152 1.476-2.7 2.502-4.644 3.078zm-13.716-3.132h6.048c1.512 0 2.664-.324 3.456-.972.828-.684 1.242-1.674 1.242-2.97 0-1.296-.414-2.286-1.242-2.97-.792-.684-1.944-1.026-3.456-1.026h-6.048v7.938zm6.804 15.12c1.548 0 2.736-.342 3.564-1.026.864-.72 1.296-1.746 1.296-3.078 0-1.332-.45-2.376-1.35-3.132-.864-.756-2.07-1.134-3.618-1.134h-6.696v8.37h6.804zM85.358 155l-7.884-14.31H75.26V155h-9.234v-37.908h15.498c2.988 0 5.526.522 7.614 1.566 2.124 1.044 3.708 2.484 4.752 4.32 1.044 1.8 1.566 3.816 1.566 6.048 0 2.52-.72 4.77-2.16 6.75-1.404 1.98-3.492 3.384-6.264 4.212L95.78 155H85.358zM75.26 134.156h5.724c1.692 0 2.952-.414 3.78-1.242.864-.828 1.296-1.998 1.296-3.51 0-1.44-.432-2.574-1.296-3.402-.828-.828-2.088-1.242-3.78-1.242H75.26v9.396zM186.338 155h-9.234l-15.444-23.382V155h-9.234v-37.908h9.234l15.444 23.49v-23.49h9.234V155zm21.975-37.908c3.996 0 7.488.792 10.476 2.376 2.988 1.584 5.292 3.816 6.912 6.696 1.656 2.844 2.484 6.138 2.484 9.882 0 3.708-.828 7.002-2.484 9.882-1.62 2.88-3.942 5.112-6.966 6.696-2.988 1.584-6.462 2.376-10.422 2.376h-14.202v-37.908h14.202zm-.594 29.916c3.492 0 6.21-.954 8.154-2.862 1.944-1.908 2.916-4.608 2.916-8.1s-.972-6.21-2.916-8.154-4.662-2.916-8.154-2.916h-4.374v22.032h4.374z'
          fill='#345BFF'
        />
      </g>
      <g filter='url(#i)'>
        <path
          d='m76.026 69.092-13.122 25.38V107H53.67V94.472l-13.122-25.38h10.476l7.344 15.876 7.29-15.876h10.368zm29.208 38.286c-3.564 0-6.84-.828-9.828-2.484-2.952-1.656-5.31-3.96-7.074-6.912-1.728-2.988-2.592-6.336-2.592-10.044s.864-7.038 2.592-9.99c1.764-2.952 4.122-5.256 7.074-6.912 2.988-1.656 6.264-2.484 9.828-2.484 3.564 0 6.822.828 9.774 2.484 2.988 1.656 5.328 3.96 7.02 6.912 1.728 2.952 2.592 6.282 2.592 9.99s-.864 7.056-2.592 10.044c-1.728 2.952-4.068 5.256-7.02 6.912-2.952 1.656-6.21 2.484-9.774 2.484zm0-8.424c3.024 0 5.436-1.008 7.236-3.024 1.836-2.016 2.754-4.68 2.754-7.992 0-3.348-.918-6.012-2.754-7.992-1.8-2.016-4.212-3.024-7.236-3.024-3.06 0-5.508.99-7.344 2.97-1.8 1.98-2.7 4.662-2.7 8.046 0 3.348.9 6.03 2.7 8.046 1.836 1.98 4.284 2.97 7.344 2.97zm41.155-29.862v22.68c0 2.268.558 4.014 1.674 5.238 1.116 1.224 2.754 1.836 4.914 1.836 2.16 0 3.816-.612 4.968-1.836 1.152-1.224 1.728-2.97 1.728-5.238v-22.68h9.234v22.626c0 3.384-.72 6.246-2.16 8.586-1.44 2.34-3.384 4.104-5.832 5.292-2.412 1.188-5.112 1.782-8.1 1.782-2.988 0-5.67-.576-8.046-1.728-2.34-1.188-4.194-2.952-5.562-5.292-1.368-2.376-2.052-5.256-2.052-8.64V69.092h9.234zM202.284 107 194.4 92.69h-2.214V107h-9.234V69.092h15.498c2.988 0 5.526.522 7.614 1.566 2.124 1.044 3.708 2.484 4.752 4.32 1.044 1.8 1.566 3.816 1.566 6.048 0 2.52-.72 4.77-2.16 6.75-1.404 1.98-3.492 3.384-6.264 4.212L212.706 107h-10.422zm-10.098-20.844h5.724c1.692 0 2.952-.414 3.78-1.242.864-.828 1.296-1.998 1.296-3.51 0-1.44-.432-2.574-1.296-3.402-.828-.828-2.088-1.242-3.78-1.242h-5.724v9.396z'
          fill='#E6EBF1'
        />
      </g>
      <g filter='url(#j)'>
        <path
          d='M56.576 39.56c2.196.468 3.96 1.566 5.292 3.294 1.332 1.692 1.998 3.636 1.998 5.832 0 3.168-1.116 5.688-3.348 7.56C58.322 58.082 55.244 59 51.284 59H33.626V21.092H50.69c3.852 0 6.858.882 9.018 2.646 2.196 1.764 3.294 4.158 3.294 7.182 0 2.232-.594 4.086-1.782 5.562-1.152 1.476-2.7 2.502-4.644 3.078zM42.86 36.428h6.048c1.512 0 2.664-.324 3.456-.972.828-.684 1.242-1.674 1.242-2.97 0-1.296-.414-2.286-1.242-2.97-.792-.684-1.944-1.026-3.456-1.026H42.86v7.938zm6.804 15.12c1.548 0 2.736-.342 3.564-1.026.864-.72 1.296-1.746 1.296-3.078 0-1.332-.45-2.376-1.35-3.132-.864-.756-2.07-1.134-3.618-1.134H42.86v8.37h6.804zm38.35-30.456v22.68c0 2.268.558 4.014 1.674 5.238 1.115 1.224 2.754 1.836 4.913 1.836 2.16 0 3.817-.612 4.969-1.836 1.151-1.224 1.727-2.97 1.727-5.238v-22.68h9.234v22.626c0 3.384-.72 6.246-2.16 8.586-1.44 2.34-3.384 4.104-5.832 5.292-2.412 1.188-5.112 1.782-8.1 1.782-2.987 0-5.67-.576-8.045-1.728-2.34-1.188-4.195-2.952-5.563-5.292-1.368-2.376-2.052-5.256-2.052-8.64V21.092h9.234zm47.956 0V59h-9.234V21.092h9.234zm25.645 30.78h12.096V59h-21.33V21.092h9.234v30.78zm40.423-30.78c3.996 0 7.488.792 10.476 2.376 2.988 1.584 5.292 3.816 6.912 6.696 1.656 2.844 2.484 6.138 2.484 9.882 0 3.708-.828 7.002-2.484 9.882-1.62 2.88-3.942 5.112-6.966 6.696-2.988 1.584-6.462 2.376-10.422 2.376h-14.202V21.092h14.202zm-.594 29.916c3.492 0 6.21-.954 8.154-2.862 1.944-1.908 2.916-4.608 2.916-8.1s-.972-6.21-2.916-8.154-4.662-2.916-8.154-2.916h-4.374v22.032h4.374z'
          fill='#E6EBF1'
        />
      </g>
      <path
        d='m142.1 142.946.01-.02-5.76-9.472-2.102 2.105-2.25 2.244-2.994 3.058 3.866 3.872 6.038 6.027 3.014 3.009a4.201 4.201 0 0 0 2.964 1.231c2.003 0 3.242-2.204 2.191-3.912l-4.977-8.142zm-26.629-5.143-2.26-2.244-2.102-2.105-5.76 9.472.01.02-4.976 8.142c-1.051 1.718.188 3.912 2.191 3.912a4.16 4.16 0 0 0 2.964-1.231l3.014-3.009 6.037-6.027 3.867-3.872-2.985-3.058zm10.618-4.955 6.127-5.988-6.464-10.624c-1.001-1.648-3.39-1.648-4.382 0l-6.464 10.624 8.655 8.47 2.528-2.482zm-5.066 16.165L114.896 155h17.31l-8.655-8.47-2.528 2.483zM117.469 168.724l3.237 4.919c.306.464.829.751 1.391.751 1.313 0 2.103-1.442 1.412-2.549l-2.349-3.733a1.682 1.682 0 0 1 .02-1.807l2.309-3.477c.74-1.106-.059-2.588-1.382-2.588h-.01c-.552 0-1.075.277-1.381.741l-2.26 3.368-2.182-3.328a1.61 1.61 0 0 0-1.391-.8h-.069c-1.273 0-2.043 1.412-1.352 2.479l4.007 6.024zM114.814 174.382c.563 0 1.096-.286 1.402-.75l.848-1.284a1.7 1.7 0 0 0-.029-1.916 1.683 1.683 0 0 0-2.774.049l-.858 1.284c-.731 1.116.069 2.617 1.411 2.617zM101.727 174.385c.957 0 1.727-.77 1.727-1.728v-4.455c0-.76.208-1.353.612-1.777.405-.425.948-.633 1.639-.633.681 0 1.233.208 1.638.633.405.424.612 1.017.612 1.777v4.455c0 .958.77 1.728 1.727 1.728.957 0 1.727-.77 1.727-1.728v-4.919c0-1.511-.405-2.696-1.214-3.555-.809-.86-1.885-1.294-3.237-1.294-.76 0-1.441.148-2.043.434-.602.297-1.086.692-1.451 1.195v-.079c0-.958-.77-1.728-1.727-1.728-.967 0-1.737.78-1.737 1.728v8.218c0 .958.77 1.728 1.727 1.728zM140.228 162.68c-.76 0-1.431.494-1.648 1.215l-2.142 7.219-2.201-7.19a1.736 1.736 0 0 0-1.648-1.215h-.02a1.729 1.729 0 0 0-1.628 2.311l2.625 7.339a3.04 3.04 0 0 0 2.862 2.034 3.031 3.031 0 0 0 2.862-2.034l2.566-7.358a1.734 1.734 0 0 0-1.628-2.321zM129.006 172.656v-10.647c0-.948-.74-1.768-1.697-1.788a1.724 1.724 0 0 0-1.757 1.728v10.707c0 .958.77 1.728 1.727 1.728a1.73 1.73 0 0 0 1.727-1.728zM147.245 172.656v-10.647c0-.948-.74-1.768-1.698-1.788a1.723 1.723 0 0 0-1.756 1.728v10.707c0 .958.769 1.728 1.727 1.728a1.73 1.73 0 0 0 1.727-1.728z'
        fill='#345BFF'
      />
      <defs>
        <radialGradient
          id='a'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 .5 -48.5 0 208.5 117.5)'
        >
          <stop stopColor='#345BFF' />
          <stop offset='1' stopColor='#345BFF' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='b'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 .5 -35.5 0 35.5 117.5)'
        >
          <stop stopColor='#345BFF' />
          <stop offset='1' stopColor='#345BFF' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='c'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 1.5 -24.2626 -.00004 121 154.5)'
        >
          <stop stopColor='#345BFF' />
          <stop offset='1' stopColor='#345BFF' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='d'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 .5 -67 0 190 154.5)'
        >
          <stop stopColor='#345BFF' />
          <stop offset='1' stopColor='#345BFF' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='e'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 .5 -67 0 67 154.5)'
        >
          <stop stopColor='#345BFF' />
          <stop offset='1' stopColor='#345BFF' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='f'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 .5 -26.1904 0 142.232 99.926)'
        >
          <stop stopColor='#345BFF' />
          <stop offset='1' stopColor='#345BFF' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='g'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 .5 -31.5683 0 151.015 122.031)'
        >
          <stop stopColor='#345BFF' />
          <stop offset='1' stopColor='#345BFF' stopOpacity='0' />
        </radialGradient>
        <filter
          id='h'
          x='29.35'
          y='117.092'
          width='214.835'
          height='61.908'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='8' dy='16' />
          <feGaussianBlur stdDeviation='4' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_6016_9174' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow_6016_9174' result='shape' />
        </filter>
        <filter
          id='i'
          x='40.548'
          y='68.553'
          width='188.158'
          height='62.826'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='8' dy='16' />
          <feGaussianBlur stdDeviation='4' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_6016_9174' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow_6016_9174' result='shape' />
        </filter>
        <filter
          id='j'
          x='33.626'
          y='21.092'
          width='204.284'
          height='62.287'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='8' dy='16' />
          <feGaussianBlur stdDeviation='4' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_6016_9174' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow_6016_9174' result='shape' />
        </filter>
      </defs>
    </SvgIcon>
  );
};

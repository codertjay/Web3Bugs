import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name'>

const UsdtIcon: React.FC<Props> = ({ width = '31', height = '32', onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g clipPath="url(#clip0_138:507)">
        <path
          d="M12.2189 0.597656C18.846 0.597656 24.2189 5.97054 24.2189 12.5977C24.2189 19.2248 18.8458 24.5977 12.2189 24.5977C5.59199 24.5977 0.218872 19.2262 0.218872 12.5977C0.218872 5.9691 5.59103 0.597656 12.2189 0.597656Z"
          fill="#53AE94"
        />
        <path
          d="M13.6999 10.9987V9.21357H17.782V6.49365H6.6662V9.21357H10.7488V10.9973C7.43084 11.1497 4.93604 11.8068 4.93604 12.594C4.93604 13.3812 7.43203 14.0383 10.7488 14.1917V19.9097H13.7008V14.1912C17.0128 14.0383 19.5026 13.3817 19.5026 12.5952C19.5026 11.8087 17.0128 11.1521 13.7008 10.9992L13.6999 10.9987ZM13.7008 13.7069V13.7054C13.6176 13.7107 13.1896 13.7364 12.2368 13.7364C11.4751 13.7364 10.9392 13.7148 10.7503 13.7049V13.7073C7.81891 13.5775 5.63084 13.067 5.63084 12.4562C5.63084 11.8454 7.81915 11.3357 10.7503 11.2056V13.1988C10.9423 13.212 11.4914 13.2444 12.2493 13.2444C13.1596 13.2444 13.6173 13.2065 13.7013 13.1988V11.2056C16.6269 11.3359 18.81 11.8469 18.81 12.4555C18.81 13.0641 16.626 13.5753 13.7013 13.7057"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_138:507">
          <rect width="24" height="24" fill="white" transform="translate(0.218872 0.597656)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default UsdtIcon
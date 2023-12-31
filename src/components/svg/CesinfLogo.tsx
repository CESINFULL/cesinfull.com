export interface CesinfLogoProps {
  className?: string,
  circleColor?: string,
  letterColor?: string,
}

export default function CesinfLogo(props: CesinfLogoProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200.81 173.06" className={props.className}>
    <path d="M380.41 115.15a15 15 0 0 1-30 0 27.71 27.71 0 1 0-55.41 0v57.7a57.7 57.7 0 1 1-57.71-57.7 15 15 0 1 1 0 30 27.73 27.73 0 1 0 27.71 27.7v-57.7a57.7 57.7 0 0 1 115.39 0Z" style={{fill: props.letterColor ? props.letterColor : "#253746"}} transform="translate(-179.59 -57.47)"/>
    <circle cx="143.11" cy="72.1" r="14.42" style={{fill: props.circleColor ? props.circleColor : "#0069b1"}} />
  </svg>
}
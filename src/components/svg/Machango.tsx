import astronaut from '../../images/astronaut.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Machango(props: any) {
  return <img src={astronaut} alt="Astronaut" className={props.className} />;
}

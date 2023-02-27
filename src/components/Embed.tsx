export interface Props {
  src: string;
  style?: React.CSSProperties;
}

export default function Embed(props: Props) {
  return <embed src={props.src} style={props.style} />;
}

import { CardVideoStyle, TituloStyle, ImgStyle } from "./styled";

function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <CardVideoStyle onClick={reproduzVideo}>
      <ImgStyle src={props.image1} alt={props.textoAlternativo} />
      <TituloStyle>{props.titulo}</TituloStyle>
    </CardVideoStyle>
  );
}

export default CardVideo;

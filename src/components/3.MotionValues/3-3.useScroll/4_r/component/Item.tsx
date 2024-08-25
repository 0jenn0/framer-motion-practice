import * as S from "./Item.styled";
import { Image01, Image02, Image03, Image04, Image05 } from "../images";

const images = [Image01, Image02, Image03, Image04, Image05];

interface ItemProps {
  index: number;
}

const Item = ({ index }: ItemProps) => {
  const image = images[index];
  return (
    <S.Layout>
      <S.Image src={image.src} alt={`Image ${index + 1}`} />
      <S.Text>#00{index + 1}</S.Text>
    </S.Layout>
  );
};

export default Item;

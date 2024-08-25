import * as S from "./4_r.styled";
import Item from "./component/Item";

const UseScrollSelf04 = () => {
  return (
    <S.Layout>
      {Array.from({ length: 5 }, (_, index) => {
        return <Item key={index} index={index} />;
      })}
    </S.Layout>
  );
};

export default UseScrollSelf04;

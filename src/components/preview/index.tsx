import ArrowAnimate from '@/components/preview/ArrowAnimate';
import TypoAnimate from '@/components/preview/TypoAnimate';
import Wrapper from '@/components/preview/Wrapper';

export default function PreviewDiv() {
  return (
    <Wrapper>
      <TypoAnimate />
      <ArrowAnimate />
    </Wrapper>
  );
}

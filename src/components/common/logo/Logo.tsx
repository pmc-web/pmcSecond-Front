import LogoWithTextSvg from 'src/assets/logo/logo_horizontal_black.svg';
import LogoSvg from 'src/assets/logo/logo_logomark_black.svg';

type LogoProps = {
  withText?: boolean;
};

const Logo = ({ withText }: LogoProps) => (withText ? <LogoWithTextSvg /> : <LogoSvg />);

export default Logo;

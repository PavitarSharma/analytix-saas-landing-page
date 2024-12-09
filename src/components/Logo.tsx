/**
 * Assets
 */

import { favicon, logo } from "@/assets";

type LogoProps = {
  variant?: "default" | "icon";
};

const Logo = ({ variant = "default" }: LogoProps) => {
  return (
    <a href="">
      {variant === "default" && (
        <img src={logo} alt="Analytix logo" width={150} height={31} />
      )}

      {variant === "icon" && (
        <img src={favicon} alt="Analytix logo" width={32} height={32} />
      )}
    </a>
  );
};

export default Logo;

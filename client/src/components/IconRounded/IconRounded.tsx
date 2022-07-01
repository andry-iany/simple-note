import { FC } from "react";
import { Image } from "react-bootstrap";

export interface IIconRounded {
  src: string;
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

const IconRounded: FC<IIconRounded> = ({ src, className = "", onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`d-inline-flex justify-content-center align-items-center p-2 rounded-circle ${className} mx-1`}
    >
      <Image src={src} />
    </span>
  );
};

export default IconRounded;

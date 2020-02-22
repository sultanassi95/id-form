import React from "react";

import { SpaceProps, TypographyProps, ColorProps } from "styled-system";

import { StyledTypography, variants as typeVariants } from "./styles";

interface ITypographyProps extends SpaceProps, TypographyProps, ColorProps {
  children: React.ReactNode;
  variant?: string;
  as?: string;
}

const Typography: React.FC<ITypographyProps> = ({
  children,
  variant = "",
  as,
  ...otherProps
}: ITypographyProps) => {
  const { variants } = typeVariants;
  let tag: string = as ? as : variants[variant].as;
  const styledTypographyProps: { [index: string]: any } = {
    ...otherProps,
    as: tag,
    variant: variant
  };

  return (
    <StyledTypography {...styledTypographyProps}>{children}</StyledTypography>
  );
};

export const Hero: React.FC<ITypographyProps> = (props: ITypographyProps) => (
  <Typography variant="hero" {...props} />
);

export const Headline: React.FC<ITypographyProps> = (
  props: ITypographyProps
) => <Typography variant="headline" {...props} />;

export const Paragraph: React.FC<ITypographyProps> = (
  props: ITypographyProps
) => <Typography variant="paragraph" {...props} />;

export default Typography;

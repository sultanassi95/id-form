import React from "react";
import { Headline, Paragraph } from "components/Typography";
import { Header, Heading } from "./styles";

import { ReactComponent as RockerLogo } from "assets/logo/rockerlogo.svg";

const FormHeader: React.FC = () => {
  return (
    <Header>
      <Heading>
        <Headline mb="8px">Welcome!</Headline>
        <Paragraph mb="24px">
          Please fill in your application details below
        </Paragraph>
      </Heading>
      <RockerLogo />
    </Header>
  );
};

export default FormHeader;

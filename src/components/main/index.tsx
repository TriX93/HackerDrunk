import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

import { Button } from "@components";
import Image from "next/image";

export const Main: React.FC = () => {
  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <Container>
        <h1 className="display-2 text-white">Pronto alla sfida?</h1>
        <p className="lead text-white">
          <Image src="/ballmerpeak.png" layout="responsive" width="538" height="312"/>
        </p>
        <Button
          variant="primary"
          size="lg"
          href="/warmup"
        >
          Inizia
        </Button>
      </Container>
    </div>
  );
};

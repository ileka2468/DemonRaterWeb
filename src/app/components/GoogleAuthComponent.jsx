import { Button, Image } from "@nextui-org/react";
import React from "react";

const GoogleAuthComponent = () => {
  return (
    <Button className="rounded-md bg-transparent border-solid border-1">
      <Image src="/google.png" width={22} height={0} />
      <p className="text-auth_google_gray font-medium">Continue with Google</p>
    </Button>
  );
};

export default GoogleAuthComponent;

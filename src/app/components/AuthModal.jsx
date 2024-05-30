"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
  useDisclosure,
} from "@nextui-org/react";

const AuthModal = ({ isOpen, onOpen, onOpenChange, authRequestType }) => {
  return (
    <>
      <Modal
        className="h-[55%]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {authRequestType == "login" ? (
                <ModalHeader className="flex flex-col gap-1 text-center">
                  Login to your Account
                </ModalHeader>
              ) : (
                <ModalHeader className=" text-center flex flex-col gap-1">
                  Sign Up for an Account
                </ModalHeader>
              )}

              <ModalBody>
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

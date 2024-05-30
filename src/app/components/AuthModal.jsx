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
  Link,
  Divider,
  Input,
} from "@nextui-org/react";
import GoogleAuthComponent from "./GoogleAuthComponent";

const AuthModal = ({ isOpen, onOpen, onOpenChange, authRequestType }) => {
  return (
    <>
      <Modal
        className="h-[65%] py-10 px-8"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {authRequestType == "login" ? (
                <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-semibold font-poppins">
                  Login to your Account
                </ModalHeader>
              ) : (
                <ModalHeader className=" text-center flex flex-col gap-1 font-poppins">
                  Sign Up for an Account
                </ModalHeader>
              )}

              <ModalBody>
                <GoogleAuthComponent />
                <div className="flex justify-between">
                  <div className=" w-[30%] flex items-center">
                    <Divider className="bg-auth_faint_gray" />
                  </div>
                  <p className="text-sm text-center text-auth_dash_text_gray">
                    or Sign in with Email
                  </p>
                  <div className="w-[30%] flex items-center">
                    <Divider />
                  </div>
                </div>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  className="border-solid border-1 rounded-md h-12 px-2"
                  type="email"
                  placeholder="mail@abc.com"
                />

                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  className="border-solid border-1 rounded-md h-12 px-2"
                  type="password"
                  placeholder="mail@abc.com"
                />

                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    className=""
                    radius="sm"
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

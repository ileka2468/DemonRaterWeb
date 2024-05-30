"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import AuthModal from "./AuthModal.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [authRequestType, setAuthRequestType] = useState();

  const menuItems = [
    "Explore Professors",
    "Rate Professors",
    "Find Recommendations",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent"
      position="sticky"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Explore Professors
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Rate Professors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Find Recommendations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-theme_blue text-white"
            href="#"
            variant="flat"
            onPress={() => {
              onOpen();
              setAuthRequestType("login");
            }}
          >
            Login
          </Button>
          <AuthModal
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            authRequestType={authRequestType}
          />
        </NavbarItem>

        <NavbarItem className="cursor-pointer  lg:flex">
          <Link
            onPress={() => {
              onOpen();
              setAuthRequestType("signup");
            }}
          >
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

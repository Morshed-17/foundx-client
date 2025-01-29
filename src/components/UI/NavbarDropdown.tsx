"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { logout } from "@/services/AuthService";

export default function NavbarDropdown() {
  
  const router = useRouter();
  const handleNaviation = (pathname: string) => {
    router.push(pathname);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="John Doe" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem href="/profile" key="profile">
          Profile
        </DropdownItem>
        <DropdownItem href="/profile/create-post" key="create-post">
          Create Post
        </DropdownItem>

        <DropdownItem href="/profile/claim-request" key="claim-request">
          Claim Request
        </DropdownItem>
        <DropdownItem href="/profile/settings" key="settings">
          Settings
        </DropdownItem>
        <DropdownItem href="/profile/about" key="about">
          About
        </DropdownItem>

        <DropdownItem
          onPress={() => logout()}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

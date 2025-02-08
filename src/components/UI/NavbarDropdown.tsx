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
import { useUser } from "@/context/user.provider";

export default function NavbarDropdown() {
  const { setIsLoading: userLoading, user } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    userLoading(true);
  };

  const handleNaviation = (pathname: string) => {
    router.push(pathname);
  };


  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name={user?.name} src={user?.profilePhoto}/>
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
          onPress={handleLogout}
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

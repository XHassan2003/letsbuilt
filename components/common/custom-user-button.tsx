"use client";

import { OrganizationSwitcher, UserButton, useUser } from "@clerk/nextjs";
import { Building2Icon, BuildingIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CustomUserButton() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-2">
      <UserButton
        appearance={{
          elements: {
            avatarBox:
              "size-9 ring-2 ring-transparent hover:ring-primary/40 transition-all",
            userButtonPopoverCard: "rounded-xl shadow-lg border w-72",
          },
        }}
      >
        <UserButton.UserProfilePage
          label="Organizations"
          labelIcon={<BuildingIcon className="size-4" />}
          url="/organization"
        >
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-2">
              <BuildingIcon className="size-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold">Manage Organizations</h2>
            </div>

            <OrganizationSwitcher
              hidePersonal
              afterCreateOrganizationUrl="/submit"
              afterSelectPersonalUrl="/submit"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  organizationSwitcherTrigger:
                    "w-full justify-between border rounded-lg px-3 py-2 hover:bg-muted transition",
                },
              }}
            />
          </div>
        </UserButton.UserProfilePage>

        <UserButton.UserProfilePage
          label="Admin"
          labelIcon={<Building2Icon className="size-4" />}
          url="/admin"
        >
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-2">
              <Building2Icon className="size-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold">Admin Panel</h2>
            </div>

            <p className="text-xs text-muted-foreground">
              Manage products and approvals.
            </p>

            <Link href="/admin">
              <Button className="w-full">Go to Admin Panel</Button>
            </Link>
          </div>
        </UserButton.UserProfilePage>
      </UserButton>

      <span className="text-sm font-medium block sm:hidden">
        {user?.fullName ||
          `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() ||
          user?.username ||
          "User"}
      </span>
    </div>
  );
}

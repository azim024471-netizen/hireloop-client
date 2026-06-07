

import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";

export function DashboardSideBar() {
  const navItems = [
    {icon: House, label: "Home" , link: "/dashboard/recruiter"},
    {icon: Magnifier, label: "Company", link: "/dashboard/recruiter/company"},
    {icon: Bell, label: "Notifications", link:'/'},
    {icon: Envelope, label: "Post Jobs", link: "/dashboard/recruiter/jobs/new"},
    {icon: Person, label: "Jobs" , link: "/dashboard/recruiter/jobs"},
    {icon: Gear, label: "Settings" , link: "/"},
  ];

  const navContent= <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                   href={item.link}
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </Link>
                ))}
              </nav>
  return (
    <>
    <aside className="hidden lg:block w-64 shrink-0 border-r border-default p-4"> 
        {navContent}
    </aside>
    <Drawer>
      <Button className={'lg:hidden'} variant="secondary">
        <Bars />
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
             
              {navContent}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    </>
  );
}
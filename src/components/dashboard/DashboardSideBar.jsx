

// import { getsession } from "@/lib/coreFunction/session";
import { getsession } from "@/lib/coreFunction/session";
import {Bars, Bell, Bookmark, Briefcase, Envelope, FileText, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import { Building, CreditCard, Users } from "lucide-react";
import Link from "next/link";
import { GrDashboard } from "react-icons/gr";

export async function  DashboardSideBar() {
 
  const user =await getsession()

  // const user = {
  //   role : 'seeker'
  // }
 
  const adminItems = [
  {
    icon: GrDashboard,
    label: "Dashboard",
    link: "/dashboard/admin",
  },
  {
    icon: Users,
    label: "Users",
    link: "/dashboard/admin/users",
  },
  {
    icon: Building,
    label: "Companies",
    link: "/dashboard/admin/companies",
  },
  {
    icon: Briefcase,
    label: "Jobs",
    link: "/dashboard/admin/jobs",
  },
  {
    icon: CreditCard,
    label: "Payments",
    link: "/dashboard/admin/payments",
  },
  {
    icon: Gear,
    label: "Settings",
    link: "/dashboard/admin/settings",
  },
];

  const recruiterNavLinks = [
    {icon: House, label: "Home" , link: "/dashboard/recruiter"},
    {icon: Magnifier, label: "Company", link: "/dashboard/recruiter/company"},
    {icon: Bell, label: "Notifications", link:'/'},
    {icon: Envelope, label: "Post Jobs", link: "/dashboard/recruiter/jobs/new"},
    {icon: Person, label: "Jobs" , link: "/dashboard/recruiter/jobs"},
    {icon: Gear, label: "Settings" , link: "/"},
  ];

 
   const seekerNavLinks = [
  { icon: House, label: "Dashboard",link: "/dashboard/job-seeker",},
  {icon: Magnifier,label: "Jobs",link: "/jobs",},
  {icon: Bookmark,label: "Saved Jobs",link: "/dashboard/seeker/saved-jobs",},
  {icon: FileText, label: "Applications",    link: "/dashboard/seeker/applications",  },
  {   icon: CreditCard,    label: "Billing", link: "/dashboard/seeker/billing",  },
  {    icon: Gear,   label: "Settings",   link: "/dashboard/seeker/settings",  },
];
 

const setNavLinks={
  seeker : seekerNavLinks,
  recruiter : recruiterNavLinks,
  admin : adminItems
}

// console.log(user, 'from  side bar')


const navItems = setNavLinks[user?.role || 'seeker'];




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
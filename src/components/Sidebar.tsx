import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  ChevronDown,
  LogOut,
  LayoutDashboard,
  Search,
  FileText,
  Car,
  Users,
  Settings,
  Shield,
  ClipboardList,
  Package,
  Info,
  UserCircle,
  BarChart3,
  Wrench,
  KeyRound,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  onLogout: () => void
}

interface MenuItem {
  label: string
  icon: React.ReactNode
  children?: { label: string; icon?: React.ReactNode }[]
}

const menuItems: MenuItem[] = [
  {
    label: "Counter Functions",
    icon: <LayoutDashboard className="h-4 w-4" />,
    children: [
      { label: "Rent", icon: <Car className="h-4 w-4" /> },
      { label: "Return", icon: <ClipboardList className="h-4 w-4" /> },
      { label: "GS Start Rent" },
      { label: "Select GS Res List" },
      { label: "Post Rent" },
      { label: "Post Return" },
      { label: "Select Res Manifest" },
      { label: "Non-Move Exchange" },
      { label: "Vehicle Exchange" },
      { label: "AAO" },
      { label: "Update Opt Services" },
      { label: "Platinum Pre-Print" },
      { label: "Platinum Complete" },
      { label: "Incomplete RR List" },
      { label: "Complete Rental" },
    ],
  },
  {
    label: "Inventory Mgmt",
    icon: <Package className="h-4 w-4" />,
    children: [
      { label: "Vehicle Status" },
      { label: "Fleet Report" },
      { label: "Vehicle Search" },
    ],
  },
  {
    label: "Information Search",
    icon: <Search className="h-4 w-4" />,
    children: [
      { label: "Customer Lookup" },
      { label: "Reservation Search" },
      { label: "Rate Inquiry" },
    ],
  },
  {
    label: "Admin",
    icon: <Settings className="h-4 w-4" />,
    children: [
      { label: "User Management" },
      { label: "System Config" },
      { label: "Audit Logs" },
    ],
  },
  {
    label: "Rental Management",
    icon: <FileText className="h-4 w-4" />,
    children: [
      { label: "Rent" },
      { label: "Return" },
      { label: "RA Enquiry" },
      { label: "Post Rent" },
      { label: "Post Return" },
      { label: "Continuous Rental" },
      { label: "Cont.Rental Hist." },
      { label: "Gold Service" },
    ],
  },
  {
    label: "Res Processing",
    icon: <ClipboardList className="h-4 w-4" />,
    children: [
      { label: "New Reservation" },
      { label: "Modify Reservation" },
      { label: "Cancel Reservation" },
    ],
  },
  {
    label: "Car Control",
    icon: <Car className="h-4 w-4" />,
    children: [
      { label: "Check In" },
      { label: "Check Out" },
      { label: "Vehicle Transfer" },
    ],
  },
  {
    label: "Reports",
    icon: <BarChart3 className="h-4 w-4" />,
    children: [
      { label: "Daily Summary" },
      { label: "Revenue Report" },
      { label: "Fleet Utilization" },
    ],
  },
  {
    label: "System Admin",
    icon: <Wrench className="h-4 w-4" />,
    children: [
      { label: "Settings" },
      { label: "Permissions" },
      { label: "Backup" },
    ],
  },
  {
    label: "Security Menu",
    icon: <Shield className="h-4 w-4" />,
    children: [
      { label: "Change Password" },
      { label: "Session Management" },
      { label: "Access Control" },
    ],
  },
]

const quickLinks = [
  { label: "Res/Rental Research", icon: <Search className="h-4 w-4" /> },
  { label: "#1 Club Update", icon: <Users className="h-4 w-4" /> },
]

function SidebarMenuItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.children) {
    return (
      <Button variant="sidebar" size="sidebar">
        {item.icon}
        <span>{item.label}</span>
      </Button>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="sidebar" size="sidebar" className="w-full justify-between">
          <span className="flex items-center gap-3">
            {item.icon}
            <span>{item.label}</span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-sidebar-muted transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-up data-[state=open]:slide-down">
        <div className="ml-4 mt-1 space-y-0.5 border-l border-sidebar-border pl-3">
          {item.children.map((child, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sidebar"
              className="w-full justify-start text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {child.icon && <span className="mr-2">{child.icon}</span>}
              {child.label}
            </Button>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function Sidebar({ onLogout }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-sidebar flex flex-col shadow-xl">
      {/* Logo & Brand */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-sidebar-primary flex items-center justify-center shadow-lg">
            <span className="font-bold text-lg text-sidebar-primary-foreground">H</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground tracking-tight">Hertz DASH</h1>
            <p className="text-xs text-sidebar-muted">v3.21.0-14.11</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-2.5">
          <div className="h-9 w-9 rounded-full bg-sidebar-primary/20 flex items-center justify-center">
            <UserCircle className="h-5 w-5 text-sidebar-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">GEHDOFF</p>
            <p className="text-xs text-sidebar-muted">Location: 01</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-3 py-3 border-b border-sidebar-border">
        <p className="px-3 mb-2 text-xs font-semibold text-sidebar-muted uppercase tracking-wider">
          Quick Access
        </p>
        <div className="space-y-0.5">
          {quickLinks.map((link, index) => (
            <Button key={index} variant="sidebar" size="sidebar">
              {link.icon}
              <span>{link.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <p className="px-3 mb-2 text-xs font-semibold text-sidebar-muted uppercase tracking-wider">
          Navigation
        </p>
        <nav className="space-y-0.5">
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index} item={item} />
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-sidebar-border">
        <Button
          variant="sidebar"
          size="sidebar"
          onClick={onLogout}
          className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </Button>
      </div>
    </aside>
  )
}

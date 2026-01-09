import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight, ChevronDown } from "lucide-react"

interface DashboardPageProps {
  onLogout: () => void
}

interface MenuItem {
  label: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { label: "Logon/Logoff" },
  { label: "Res/Rental Research" },
  {
    label: "Counter Functions",
    children: [
      { label: "Rent" },
      { label: "Return" },
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
    children: [
      { label: "Vehicle Status" },
      { label: "Fleet Report" },
      { label: "Vehicle Search" },
    ],
  },
  {
    label: "Information Search",
    children: [
      { label: "Customer Lookup" },
      { label: "Reservation Search" },
      { label: "Rate Inquiry" },
    ],
  },
  {
    label: "Admin",
    children: [
      { label: "User Management" },
      { label: "System Config" },
      { label: "Audit Logs" },
    ],
  },
  {
    label: "Rental Management",
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
    children: [
      { label: "New Reservation" },
      { label: "Modify Reservation" },
      { label: "Cancel Reservation" },
    ],
  },
  { label: "#1 Club Update" },
  {
    label: "Car Control",
    children: [
      { label: "Check In" },
      { label: "Check Out" },
      { label: "Vehicle Transfer" },
    ],
  },
  {
    label: "Reports",
    children: [
      { label: "Daily Summary" },
      { label: "Revenue Report" },
      { label: "Fleet Utilization" },
    ],
  },
  {
    label: "System Admin",
    children: [
      { label: "Settings" },
      { label: "Permissions" },
      { label: "Backup" },
    ],
  },
  {
    label: "Security Menu",
    children: [
      { label: "Change Password" },
      { label: "Session Management" },
      { label: "Access Control" },
    ],
  },
]

function SidebarItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <Button
        variant="sidebar"
        size="sidebar"
        className="w-full justify-start text-left"
      >
        {item.label}
      </Button>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="sidebar"
          size="sidebar"
          className="w-full justify-between text-left"
        >
          <span>{item.label}</span>
          {isOpen ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2 space-y-0.5 mt-0.5">
        {item.children?.map((child, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sidebar"
            className="w-full justify-start text-left bg-brand-yellow/50 hover:bg-brand-yellow border border-gray-300"
          >
            {child.label}
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export function DashboardPage({ onLogout }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-lavender flex flex-col">
      {/* Header */}
      <header className="bg-brand-yellow border-b-2 border-gray-400 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="font-bold text-xl tracking-wide text-black">Hertz</div>
          <div className="text-xs text-gray-700">
            Version ID: 3.21.0-14.11
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <span>Login Location / Counter:</span>
            <span className="font-medium">GEHDOFF / 01</span>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-gray-800">WELCOME TO DASH</h1>
      </header>

      {/* Subheader */}
      <div className="bg-lavender-dark border-b border-gray-300 px-4 py-1 text-sm text-gray-700">
        3.19.0 - TESTING
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-44 bg-lavender border-r border-gray-300 p-1 space-y-0.5 overflow-y-auto">
          {menuItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {/* Welcome Card */}
          <Card className="bg-tan border-2 border-gray-400 mb-6">
            <CardContent className="p-6 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Copyright (c) 2003 The Hertz Corporation
              </h2>
              <p className="font-semibold text-gray-800 mb-4">
                All Rights Reserved (Unpublished)
              </p>
              <p className="text-sm text-red-700 leading-relaxed max-w-2xl mx-auto">
                The information contained herein is confidential and proprietary
                to The Hertz Corporation and may not be duplicated, disclosed to
                third parties, or used for any purpose not expressly authorized
                by it. Any unauthorized use, duplication or disclosure is
                prohibited by law.
              </p>
            </CardContent>
          </Card>

          {/* Status Card */}
          <Card className="bg-tan border-2 border-gray-400">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Logon Successful
              </h3>
              <p className="text-gray-800 mb-4">Welcome to TAS</p>
              <p className="text-sm text-gray-700 mb-2">
                Your Current Password will expire in 20 days.
              </p>
              <p className="text-sm text-gray-700">
                Please select an application from the Navigation Bar
              </p>
              <div className="mt-6">
                <Button variant="sidebar" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

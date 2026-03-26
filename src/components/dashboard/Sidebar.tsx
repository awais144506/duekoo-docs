"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DOCS_NAV } from "@/lib/Nav"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-100" {...props}>
      <SidebarHeader className="h-20 flex justify-center px-6">

      </SidebarHeader>

      <SidebarContent className="gap-0 bg-white">
        {DOCS_NAV.map((group) => (
          <SidebarGroup key={group.group}>
            <SidebarGroupLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              {group.group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={isActive
                          ? "bg-slate-900 text-white hover:bg-slate-800 hover:text-white font-bold h-10 px-4 rounded-xl"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-bold h-10 px-4 rounded-xl"
                        }
                      >
                        <Link href={item.url}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
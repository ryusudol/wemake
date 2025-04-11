import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarProvider,
} from "~/common/components/ui/sidebar";
import { Outlet } from "react-router";
import { MessageCard } from "~/features/users/components/message-card";

export default function MessagesLayout() {
  return (
    <SidebarProvider className="flex max-h-[calc(100vh-14rem)] overflow-hidden h-[calc(100vh-14rem)] min-h-full">
      <Sidebar className="pt-16" variant="floating">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {Array.from({ length: 30 }).map((_, idx) => (
                <MessageCard
                  key={idx}
                  id={String(idx)}
                  avatarUrl="https://github.com/k.png"
                  fallback="R"
                  username={`User ${idx}`}
                  lastMessage={`Last message ${idx}`}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}

import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from "@heroicons/react/24/outline"



export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

      {/*Logo*/}
      <div className="hoverEffect hover:bg-blue-100 xl:px-2">
        <Image alt="logo" width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"></Image>
      </div>
      
      {/*Menu*/}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" active Icon={HomeIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}></SidebarMenuItem>
        <SidebarMenuItem text="Profile" Icon={UserIcon}></SidebarMenuItem>
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon}></SidebarMenuItem>     
      </div>

      {/*Button*/}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

      {/*Profile*/}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img className="h-10 w-10 rounded-full xl:mr-2" alt="" src="https://media.istockphoto.com/id/1322275410/photo/profile-of-young-man.jpg?b=1&s=170667a&w=0&k=20&c=86FMyZeMtHqqcudnTIf0s8_QqMD2AZpio0O_1f76w5c="/>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Luis</h4>
          <p className="text-gray-500">@luis001155</p>
        </div>
          <EllipsisHorizontalCircleIcon className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>

    </div>
  )
}

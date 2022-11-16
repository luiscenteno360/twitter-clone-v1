import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";

export default function Input() {
  return (
    <div className="border-b border-gray-200 p-3 space-x-3">
        
        <div className="flex">
            <img className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95" alt="" src="https://media.istockphoto.com/id/1322275410/photo/profile-of-young-man.jpg?b=1&s=170667a&w=0&k=20&c=86FMyZeMtHqqcudnTIf0s8_QqMD2AZpio0O_1f76w5c="/>
            <div className="w-full divide-y divide-gray-200">
                <div className="">
                    <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" rows="2" placeholder="What's happening?"></textarea>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between pt-2.5">
            <div className="flex">
                <PhotoIcon className="hoverEffect h-10 w-10 p-2 text-sky-500 hover:bg-sky-100"/>
                <FaceSmileIcon className="hoverEffect h-10 w-10 p-2 text-sky-500 hover:bg-sky-100"/>
            </div>
            <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50" disabled>Tweet</button>
        </div>
    </div>
  )
}



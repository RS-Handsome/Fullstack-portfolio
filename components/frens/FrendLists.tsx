import {Avatar, AvatarGroup} from "@nextui-org/react";

export default function FriendLists({frens}:{frens:Array<object>}){
  return <>
    <div className="flex flex-col gap-4">
      <div className="flex text-md text-left gap-2">
        <p>{frens.length}</p>
        <p>frens</p>
      </div>
      {
        frens.map((friend,index) => (<>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <Avatar src="/image/alex.png" className="w-20 h-20 text-large" />
              <div className="flex flex-col items-center">
                <p className="text-md">{friend.name}</p>
                <p className="text-sm text-gray-500">👥 + 9</p>
              </div>
            </div>
            <div className="text-xl">91724 BP</div>
          </div>
        </>))
      }
    </div>
  </>
}
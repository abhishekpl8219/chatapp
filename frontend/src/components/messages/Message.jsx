import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white  bg-blue-500 pb-2`}>
        {" "}
        Hi whats going oin{" "}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12.1
      </div>
    </div>
  );
};

export default Message;

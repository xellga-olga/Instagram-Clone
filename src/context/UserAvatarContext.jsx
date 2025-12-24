import { createContext, useState } from "react";

export const UserAvatarContext = createContext(null);

export const UserAvatarProvider = ({ children }) => {
  const [avatar, setAvatar] = useState(null);

  return (
    <UserAvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </UserAvatarContext.Provider>
  );
};
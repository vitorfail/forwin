import React, { createContext } from "react";
import { IContext } from "./types";

export const Authcontext = createContext<IContext>({} as IContext);
export const AuthProvider = ()

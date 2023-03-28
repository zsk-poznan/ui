import { ComponentType } from "react";

export type SquircleProps = {
  corners: string;
  borderRadius: string;
  as: string | ComponentType<any> | undefined;
  children: React.ReactNode;
};

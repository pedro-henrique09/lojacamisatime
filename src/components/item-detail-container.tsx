import { ReactNode } from "react";

interface ItemDetailContainerProps {
  children: ReactNode;
}

export function ItemDetailContainer(props: ItemDetailContainerProps) {
  return <div className="flex gap-4">{props.children}</div>;
}

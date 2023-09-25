interface ItemListContainerProps {
  greeting: string;
}

export function ItemListContainer(props: ItemListContainerProps) {
  return <p>{props.greeting}</p>;
}

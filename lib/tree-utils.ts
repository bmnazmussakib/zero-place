import { NavItem } from "@/types";

export interface FlattenedItem extends NavItem {
  parentId: string | null;
  depth: number;
  index: number;
}

export function flatten(
  items: NavItem[],
  parentId: string | null = null,
  depth = 0
): FlattenedItem[] {
  return items.reduce<FlattenedItem[]>((acc, item, index) => {
    return [
      ...acc,
      { ...item, parentId, depth, index },
      ...flatten(item.children || [], item.id, depth + 1),
    ];
  }, []);
}

export function unflatten(flattenedItems: FlattenedItem[]): NavItem[] {
  const rootItems: NavItem[] = [];
  const itemsMap: Record<string, NavItem> = {};

  // First pass: create items and initialize children
  flattenedItems.forEach((item) => {
    const newItem: NavItem = {
      id: item.id,
      title: item.title,
      href: item.href,
      type: item.type,
      icon: item.icon,
      details: item.details,
      children: [],
    };
    itemsMap[newItem.id] = newItem;
  });

  // Second pass: build the tree
  flattenedItems.forEach((item) => {
    const navItem = itemsMap[item.id];
    if (item.parentId && itemsMap[item.parentId]) {
      itemsMap[item.parentId].children?.push(navItem);
    } else {
      rootItems.push(navItem);
    }
  });

  return rootItems;
}

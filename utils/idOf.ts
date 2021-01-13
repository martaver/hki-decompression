export const idOf = (menu_title: string) => {
  if (!menu_title) return undefined;
  return menu_title.toLowerCase().replace(' ', '_');
};

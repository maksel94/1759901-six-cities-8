import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

import { MenuItem, MenuItems } from '../../types/menu-item';

type MenuProps = {
  menuItems: MenuItems;
  selectedMenuItem?: MenuItem;
  setSelectedMenuItem: Dispatch<SetStateAction<MenuItem | undefined>>;
};

function Menu({ menuItems, selectedMenuItem, setSelectedMenuItem }: MenuProps): JSX.Element {
  // const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const menuItemRender = (menuItem: MenuItem): JSX.Element => {
    const onItemClick = (e: SyntheticEvent) => {
      e.preventDefault();
      setSelectedMenuItem(menuItem);
    };

    const itemActiveStyle = selectedMenuItem?.id === menuItem.id ? 'tabs__item--active' : '';

    return (
      <li className="locations__item">
        <a
          className={`locations__item-link tabs__item ${itemActiveStyle}`}
          href="#"
          onClick={onItemClick}
        >
          <span>{menuItem.name}</span>
        </a>
      </li>
    );
  };
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">{menuItems.map(menuItemRender)}</ul>
    </section>
  );
}

export default Menu;

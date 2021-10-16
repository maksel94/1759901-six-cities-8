import { SyntheticEvent, useState } from 'react';

import { MenuItem, MenuItems } from '../../types/menu-item';

const menuItems: MenuItems = [
  { id: '27874310-e307-44a1-acb7-70d2d5a8a562', name: 'Paris' },
  { id: 'd5a9c49b-e577-45cd-843e-f6b7a199bbb8', name: 'Cologne' },
  { id: 'd50c1173-942b-45e3-97d6-38c120bd732d', name: 'Brussels' },
  { id: 'a3025ec6-6bbb-4e86-bd6f-a0389e142a8c', name: 'Amsterdam' },
  { id: '9d9c2a0f-4f6a-4e12-a22a-ff7d9257ec58', name: 'Hamburg' },
  { id: 'e875881f-eca3-4b1a-9668-24f2c3678427', name: 'Dusseldorf' },
];

function Menu(): JSX.Element {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

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
      <ul className="locations__list tabs__list">
        {menuItems.map(menuItemRender)}
        {/* <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item">
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active" href="#">
            <span>Dusseldorf</span>
          </a>
        </li> */}
      </ul>
    </section>
  );
}

export default Menu;

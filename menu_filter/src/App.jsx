import { useState } from "react";
import Title from "./Title.jsx";
import menu from "./data.js";
import Menu from "./Menu.jsx";


const allCategories = ['all', ...new Set(menu.map(item => item.category) )]

const App = () => {
  const [menuItems, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  
  return (
    <main>
      <section className="menu">
        <Title title={'Our Menu'}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;

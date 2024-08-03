import { useState } from "react";
import Title from "./Title.jsx";
import menu from "./data.js";
import Menu from "./Menu.jsx";
import Categories from "./Categories.jsx";


const allCategories = ['all', ...new Set(menu.map(item => item.category) )]

const App = () => {
  const [menuItems, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItem(menu); 
      return;
    }
    console.log(category);
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  }  
  return (
    <main>
      <section className="menu">
        <Title title={'Our Menu'}/>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>     
    </main>
  );
};
export default App;

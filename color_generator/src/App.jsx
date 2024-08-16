import { useEffect, useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js';
import {ToastContainer, toast} from 'react-toastify'

const App = () => {
  const [colors, setColors] = useState(new Values('#bd3e14').all(10));

  const handleChangeColors = (color) => {
    console.log(color);  
    try {
      setColors(new Values(color).all(10))
      toast.success('Change color succes')
    } catch (error) {
      console.log(error);
      toast.error('Error change color')
    }
  }


  return (
    <main>
      <Form handleChangeColors={handleChangeColors}/>
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
};
export default App;

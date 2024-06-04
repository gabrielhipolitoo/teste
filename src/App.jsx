import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import DOMPurify from "dompurify";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Home from "../rotas/home";
import About from "../rotas/about";
function App() {
  const [data, setData] = useState();

  // const teste = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:10003/wp-json/wp/v2/portifolio/"
  //     );
  //     if (!response.ok) {
  //       throw new Error(`Erro: ${response.status} ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.error("Erro na requisição:", error);
  //   }

  //   { data &&
  //     <div dangerouslySetInnerHTML={{__html: data['0']['portifolio']}}/>
  //   }
  // };


  // useEffect(() => {
  //   teste();
  // }, []);


  const router = createBrowserRouter([
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ])

  return (
    <>
      teste
    </>
  );
}

export default App;

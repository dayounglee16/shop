import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data";
import Card from "./components/Card";
import Detail from "./pages/Detail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context1 = createContext();

const About = () => {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
};

const Event = () => {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
};

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const [stock, setStock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" onClick={() => navigate("/")}>
            ShoeShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <Container>
                <div className="row">
                  {shoes.map((shoe, i) => {
                    return <Card shoes={shoes[i]} i={i} key={i} />;
                  })}
                </div>

                {/* axios 사용방법 */}
                {/* <div className="d-flex justify-content-center">
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result) => {
                        console.log(result.data);
                        const copy = [...shoes, ...result.data];
                        setShoes(copy);
                      });

                      axios.post
                  }}
                >
                  더보기
                </button>
              </div> */}
              </Container>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

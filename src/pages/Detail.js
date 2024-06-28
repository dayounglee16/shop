import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Nav, Container } from "react-bootstrap";
import { tab } from "@testing-library/user-event/dist/tab";
import "../App.css";
import { Context1 } from "./../App.js";

const Detail = ({ shoes }) => {
  const { stock } = useContext(Context1);

  const { id } = useParams();
  const product = shoes.find((num) => num.id === parseInt(id));
  const [box, setBox] = useState(true);
  const [input, setInput] = useState("");
  const [tab, setTab] = useState(0);
  const [datialFade, setDatailFade] = useState("");

  useEffect(() => {
    const a = setTimeout(() => {
      setBox(false);

      return () => {
        clearTimeout(a);
      };
    }, 2000);
  }, []);

  const inputValue = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (isNaN(input) === true) {
      alert("숫자만 입력하세요.");
    }
  }, [input]);

  useEffect(() => {
    setDatailFade("end");
    return () => {
      setDatailFade("");
    };
  });

  return (
    <Container className={`start ${datialFade}`}>
      {box === true ? (
        <div style={{ background: "lightYellow", padding: "15px" }}>
          2초이내 구매 시 할인
        </div>
      ) : null}

      {stock}

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input value={input} onChange={inputValue} type="text" />
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab shoes={shoes} tab={tab} />
    </Container>
  );
};
const Tab = ({ tab, shoes }) => {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
};

export default Detail;

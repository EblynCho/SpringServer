import React, {useEffect, useState} from "react";
import axios from "axios";

function Test(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/test')
            .then((req) => {
                const {data} = req;  // 지역변수 data (위의 data 와는 다른 것)
                // console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log("통신 시 오류가 발생했습니다.");
            });
    }, []);  // 빈 배열 넣으면 한번만 동작

    return (
        <div>
            <h3>스프링 프로젝트 안에서 동작하는 리액트</h3>
            <ul>
                {
                    data.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Test;
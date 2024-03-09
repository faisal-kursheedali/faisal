import "./admin.css";

import { useEffect, useState } from "react";

const Admin = () => {
  useEffect(() => {}, []);

  const [data, setData] = useState(null);
  const [select, setSelect] = useState("");
  const [id, setId] = useState("");
  const [hour, setHour] = useState("24");
  const url = "https://faisal-backend.vercel.app/api/view";
  // const url = "http://localhost:3000/api/view";

  const userActionsUI = (data) => {
    const arr = [];
    for (const [index, e] of Object.entries(data)) {
      // console.log(index);
      // console.log(e);
      if (index !== "navigation")
        arr.push(
          <li key={index}>
            <h3>{index}</h3>
            {e.length > 0 ? (
              <table>
                <tbody>
                  <tr key={"header"}>
                    {Object.keys(e[0]).map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                  </tr>
                  {e.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((val, index) => {
                        // console.log(val);
                        // console.log(index);
                        return <td key={index}>{val}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>
                <h4>No data</h4>
              </>
            )}
          </li>
        );
    }
    return arr.map((e) => e);
  };
  return (
    <>
      <ul>
        <input
          type="radio"
          name="userSelect"
          value={"users"}
          onChange={(e) => {
            setData(null);
            setSelect(e.target.value);
          }}
        />
        Get all users
        <input
          type="radio"
          name="userSelect"
          value={"user"}
          onChange={(e) => {
            setData(null);
            setSelect(e.target.value);
          }}
        />
        Get user detail by id
        <input
          type="radio"
          name="userSelect"
          value={"allUserActions"}
          onChange={(e) => {
            setData(null);
            setSelect(e.target.value);
          }}
        />
        Get all users actions by time(hour)
        <input
          type="radio"
          name="userSelect"
          value={"userActions"}
          onChange={(e) => {
            setData(null);
            setSelect(e.target.value);
          }}
        />
        Get user action by id and time(hour)
        <br />
        <input
          type="number"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="number"
          placeholder="hour"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        <br />
        <small>id !== '' | null | 0</small>
        <br />
        <small>hour === null | '' | 0 make it hour = 24</small>
        <br />
        <br />
        <button
          onClick={async () => {
            if (select === "userActions") {
              if (id !== "" || id !== null || id !== 0) {
                (hour === null || hour === "" || hour === 0) ?? setHour(24);
                const res = await fetch(`${url}/${select}/${id}?hour=${hour}`);
                const json = await res.json();
                setData(null);
                setData(json);
              }
            } else if (select === "allUserActions") {
              (hour === null || hour === "" || hour === 0) ?? setHour(24);
              const res = await fetch(`${url}/${select}?hour=${hour}`);
              const json = await res.json();
              setData(null);
              setData(json);
            } else if (select === "user") {
              if (id !== "" || id !== null || id !== 0) {
                const res = await fetch(`${url}/${select}/${id}`);
                const json = await res.json();
                setData(null);
                setData(json);
              }
            } else if (select === "users") {
              const res = await fetch(`${url}/${select}`);
              const json = await res.json();
              setData(null);
              setData(json);
            }
          }}
        >
          Fetch data
        </button>
      </ul>
      {data !== null ? (
        select !== "userActions" && select !== "allUserActions" ? (
          Array.isArray(data) ? (
            <>
              <table>
                <tbody>
                  <tr key={"header"}>
                    {Object.keys(data[0]).map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                  </tr>
                  {data.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((val, index) => (
                        <td key={index}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : typeof data === "object" ? (
            <>
              <table>
                <tbody>
                  <tr key={"header"}>
                    {Object.keys(data).map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                  </tr>
                  <tr>
                    {Object.values(data).map((val, index) => (
                      <td key={index}>{val}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <>
              <h3>Out put</h3>
              <p>{data.toString()}</p>
            </>
          )
        ) : (
          <>
            <div>
              <ul>{userActionsUI(data)}</ul>
            </div>
          </>
        )
      ) : (
        <>
          <h2>No DATA</h2>
          <p>Data is null</p>
        </>
      )}
    </>
  );
};

export default Admin;

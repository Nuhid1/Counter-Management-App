import React from "react";
import style from "./Summary.module.css";

const Summary = ({ summary }) => {
  return (
    <div className={style["summary-container"]}>
      <h2 className="summary-title">Summary</h2>
      {summary.length === 0 ? (
        <p className="summary-empty">No counters available yet.</p>
      ) : (
        <table className="summary-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Generated Tokens </th>
              <th>Served Tokens</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((item) => (
              <tr key={item.id}>
                <td>({item.name})</td>
                <td>{item.currentToken}</td>
                <td>{item.servedTokens}</td>
                <td className={item.status === "Active" ? "active" : "stopped"}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Summary;

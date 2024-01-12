import React, { useState } from "react";
import { TableFilter } from "./tableFilter";
import { FilterOptions, PaginationButtons } from "../../Assets/consts/const";

export const Table = () => {
  const [filter,setFilter]= useState(1)
  return (
    <div className="tableSection">
      <div className="FilterSection">
        {FilterOptions.map((item) => {
          const { text, notification ,id} = item;
          return <TableFilter text={text} notification={notification}  id={id} setFilter={setFilter} filter={filter}/>;
        })}
        <select className="DropDown">
          {FilterOptions.map((item) => {
            const { text, notification } = item;
            return (
              <option value="">
                {text} {notification && <span>({notification})</span>}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>Advocate Name</th>
              <th>Enrollment</th>
              <th>Plan Choosed</th>
              <th>Amount </th>
              <th>Paid On</th>
              <th>Membership Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>12345</td>
              <td>Gold Plan</td>
              <td>$500</td>
              <td>2024-01-11</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>67890</td>
              <td>Silver Plan</td>
              <td>$300</td>
              <td>2024-01-12</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Pagination">
        <div className="rowSelector">
          <p>Rows per page :</p>
          <select>
            {[...Array(10).keys()].map((value) => {
              return (
                <option key={value + 1} value={value + 1}>
                  {value + 1}
                </option>
              );
            })}
          </select>
        </div>
        <p className="pageNoDisplayer">
          1-1 <span>Of</span> 1
        </p>
        <div className="PaginationButtons">
          {PaginationButtons.map((item) => {
            const { id, img } = item;
            return (
              <i>
                <img src={img} alt="Button" />
              </i>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React from "react";

import products from "../../data/products";
import "./ProductTable.css";

export default function ProductTable() {
  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={index % 2 === 0 ? 'Even' : 'Odd'}>
              <td>{product.id}</td>
              <td className="Name">{product.name}</td>
              <td className="Price">
                $ {product.price.toFixed(2).replace(".", ",")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

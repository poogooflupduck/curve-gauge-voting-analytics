import React from "react";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function () {
    return Object.keys(this.props.data[0]);
  };

  getHeader = function () {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return (
        <th
          key={key}
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {key.toUpperCase()}
        </th>
      );
    });
  };

  getRowsData = function () {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="flex flex-col">
        <div className="">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>{this.getHeader()}</tr>
                </thead>
                <tbody>{this.getRowsData()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    return (
      <td key={props.data[key]} className="px-6 py-4  text-sm text-gray-500">
        {props.data[key]}
      </td>
    );
  });
};

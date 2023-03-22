import React from "react";
import CustomerProfile from "./CustomerProfile";

class SearchRowClass extends React.Component {
  state = {
    isClicked: false,
  };

  render() {
    const { isClicked } = this.state;

    return (
      <tr
        onClick={() => {
          this.setState((oldState) => ({ isClicked: !oldState.isClicked }));
        }}
        style={isClicked ? { backgroundColor: "lightgrey" } : {}}
      >
        <td>
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.props.setSelectedId(this.props.result.id.toString());
            }}
          >
            Show profile
          </button>
        </td>
        {this.props.headings.map((key) => {
          return <td>{this.props.result[key]}</td>;
        })}
      </tr>
    );
  }
}

const SearchRowFunction = (props) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <tr
      onClick={() => {
        setIsClicked((bool) => !bool);
      }}
      style={isClicked ? { backgroundColor: "lightgrey" } : {}}
    >
      <td>
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.setSelectedId(props.result.id.toString());
          }}
        >
          Show profile
        </button>
      </td>
      {props.headings.map((key) => {
        return <td>{props.result[key]}</td>;
      })}
    </tr>
  );
};

const SearchResults = (props) => {
  const [selectedId, setSelectedId] = React.useState("");
  const [sortKey, setSortKey] = React.useState("");
  const [sortDirection, setSortDirection] = React.useState(1); // pretend 1 = ascending

  const headings = Object.keys(props.results[0] || {});
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Button!</th>
            {headings.map((columnHeading) => (
              <th
                key={columnHeading}
                onClick={() => {
                  if (sortKey === columnHeading) {
                    setSortDirection((d) => d * -1);
                  } else {
                    setSortDirection(1);
                  }
                  setSortKey(columnHeading);
                }}
              >
                {columnHeading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.results
            .sort((a, z) => {
              if (a[sortKey] < z[sortKey]) return -1 * sortDirection;
              else if (a[sortKey] > z[sortKey]) return 1 * sortDirection;
              else return 0;
            })
            .map((result) => (
              <SearchRowClass
                result={result}
                headings={headings}
                setSelectedId={setSelectedId}
              />
            ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </>
  );
};

export default SearchResults;

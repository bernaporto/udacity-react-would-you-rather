import React from "react";
import PropTypes from 'prop-types';
import { colors } from "../utils/constants";

const styles = {
  tabGroup: {
    display: "flex",
    borderBottom: "1px solid #cccccc",
    justifyContent: "space-evenly",
  },
  tab: {
    padding: 10,
    border: "none",
    fontWeight: "normal",
    color: colors.BLACK,
    backgroundColor: "transparent",
    flex: 1
  },
  selected: {
    fontWeight: "bold",
    color: colors.PRIMARY,
    backgroundColor: colors.LIGHT_GRAY,
  },
};

function TabGroup(props) {
  const { tabs, selected, onSelect } = props;

  const onClickTab = (e, id) => {
    e.preventDefault();
    onSelect(id);
  };

  const selectedStyle = { ...styles.tab, ...styles.selected };
  return (
    <div style={styles.tabGroup}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          style={tab.id === selected ? selectedStyle : styles.tab}
          onClick={(e) => onClickTab(e, tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

TabGroup.propTypes = {
  tabs: PropTypes.array,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
};

export default TabGroup;

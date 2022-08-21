import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FilterTag, FilterName } from "../../../styles";

const Filter = (props: any) => {
  const { handleRemove, artistName } = props;
  return (
    <FilterTag>
      <FilterName>{artistName}</FilterName>
      <FontAwesomeIcon
        onClick={() => {
          handleRemove();
        }}
        icon={faClose}
        className="text-white w-[0.8vw] cursor-pointer mt-[0.3vh]"
      ></FontAwesomeIcon>
    </FilterTag>
  );
};

export default Filter;

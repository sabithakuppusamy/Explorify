import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FilterTag, FilterName } from "../../../styles";

const Filter = (props: any) => {
  const { handleRemove, artistName, isMobile } = props;
  return (
    <FilterTag isMobile={isMobile}>
      <FilterName isMobile={isMobile}>{artistName}</FilterName>
      <FontAwesomeIcon
        onClick={() => {
          handleRemove();
        }}
        icon={faClose}
        className={`text-white ${
          isMobile ? "mx-[0.5vw] w-[1.8vw]" : "w-[0.8vw]"
        } cursor-pointer mt-[0.3vh]`}
      ></FontAwesomeIcon>
    </FilterTag>
  );
};

export default Filter;

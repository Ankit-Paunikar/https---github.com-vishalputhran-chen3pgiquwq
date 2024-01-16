import CaseboardTileItem from "./CaseboardTileItem";
import * as React from "react";

function CaseboardTileList({ listitems, category, categorycount, cases }) {
  return (
    <>
      <div id={"div" + category.replace(" ", "")}>
        <div className="row">
          <div className="col-sm-10">
            <div className="pt-1" style={{ color: "#616161" }}>
              <h6>
                <b>{category}</b>
              </h6>
            </div>
          </div>
          <div className="col-sm-2 align-items-right">
            <div className="pt-1 text-end" style={{ color: "#616161" }}>
              <h6>
                <b>{categorycount}</b>
              </h6>
            </div>
          </div>
        </div>

        {listitems.map((item, index) => {
          return (
            <CaseboardTileItem
              title={item.title}
              key={item.caseid}
              subtitle={item.date}
              score={item.score}
              scorecolor={item.scorecolor}
              broker={item.broker}
              uw={item.uw}
              caseid={item.caseid}
              subclass={item.subclass}
              name={item.name}
              id={item.caseid}
              index={index}
            ></CaseboardTileItem>
          );
        })}
      </div>
    </>
  );
}

export default CaseboardTileList;

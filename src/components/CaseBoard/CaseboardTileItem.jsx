import { useState, useEffect } from "react";

// import { propTypes } from "react-bootstrap/esm/Image";
import Card from "react-bootstrap/Card";

const maxStringLen = 13;
function CaseboardTileItem({
  title,
  subtitle,
  score,
  scorecolor,
  broker,
  uw,
  caseid,
  subclass,
  name,
  id,
  index,
}) {
  const [disabled, setDisabled] = useState(false);
  const trimString = (input) => {
    return input.length > maxStringLen ? input.substring(0, 10) + "..." : input;
  };
  const setTooltip = (input) => {
    return input.length > maxStringLen ? input : undefined;
  };
  const setStyle = (input) => {
    return input.length > maxStringLen
      ? { cursor: "pointer" }
      : { cursor: "auto" };
  };
  useEffect(() => {});
  const onDragStart = (evt, name) => {
    //debugger
    let elem = evt.currentTarget;
    elem.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
    console.log("logging from onDragStart" + evt.target.id);
    //ev.dataTransfer.setData('text',ev.target.id)
  };

  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };

  return (
    <>
      <div
        // draggable={true}
        // onDragStart={(e) => onDragStart(e, name)}
        // onDragEnd={(e) => onDragEnd(e)}
        className="pt-1"
        name={name || "casetileitem"}
        id={id}
      >
        <div className="row">
          <div className="col-sm-6">
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <div className="row">
                  <div className="col-sm-7">
                    <div className="card-title h9">
                      <b>{title || "Fresh Del Monte"}</b>
                    </div>
                    <div className="card-subtitle h10">
                      <span>&#128197;</span>
                      <i>{subtitle || "29/04/2023"}</i>
                    </div>
                  </div>
                  <div className="col-sm-5 card-title h2">
                    <p align={"right"} style={{ color: scorecolor || "Green" }}>
                      <b>{score || ""}</b>
                    </p>
                  </div>
                </div>
                <br></br>
                <div className="card-text">
                  <div className="row">
                    <div className="col-sm-4 border-bottom">Broker</div>
                    <div
                      title={setTooltip(broker)}
                      style={setStyle(broker)}
                      className="col-sm-8  border-bottom"
                    >
                      {trimString(broker) || "Tysers"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 border-bottom">UW</div>
                    <div
                      title={setTooltip(uw)}
                      style={setStyle(uw)}
                      className="col-sm-8  border-bottom"
                    >
                      {trimString(uw) || "Lili Tan"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 border-bottom">Case ID</div>
                    <div className="col-sm-8  border-bottom">
                      {caseid || "23FreshDel_FR"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">Sub class</div>
                    <div className="col-sm-8">{subclass || "PV/Terror"}</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseboardTileItem;

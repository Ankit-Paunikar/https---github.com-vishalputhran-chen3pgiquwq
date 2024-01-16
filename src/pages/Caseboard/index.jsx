import { useState } from "react";

import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import Form from "react-bootstrap/Form";
// import RDropdown from 'react-bootstrap/Dropdown'

import BenchmarkListbox from "../../components/CaseBoard/BenchmarkListbox";
import CaseboardTileList from "../../components/CaseBoard/CaseboardTileList";
// import CaseboardTileItem from "../../components/bodysec/CaseboardTileItem"

const Caseboard = () => {
  const styles = {
    filterDropdown1: {
      display: "none",
      position: "absolute",
      backgroundColor: "#f1f1f1",
      minWidth: "160px",
      overflow: "auto",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      zIndex: "1",
    },
    showfilterDropdown: {
      display: "block",
    },
  };

  const [showme, setShowme] = useState(["All cases"]);
  const [filterBoxCSS, setFilterBoxCSS] = useState({
    display: "none",
    position: "absolute",
    backgroundColor: "#f1f1f1",
    minWidth: "160px",
    overflow: "auto",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
  });
  const [assignedToData, setAssignedToData] = useState([
    ["COB 14", "COB 14"],
    ["me(AP)", "me(AP)"],
  ]);
  const [casesData, setCasesData] = useState([
    ["All cases", "All cases"],
    ["New cases", "New cases"],
    ["Renewals", "Renewals"],
  ]);
  const [lastDaysRangeSelected, setLastDaysRangeSelected] = useState(true);
  const [dayrangeData, setDayRangeData] = useState([
    ["7days", "7 days"],
    ["30days", "30 days"],
    ["60days", "60 days"],
  ]);
  const [cases, setCases] = useState([
    {
      title: "Fresh Del Monte",
      date: "12/05/2023",
      score: "",
      scorecolor: "",
      broker: "Tysers",
      uw: "Lili Tan",
      caseid: "23FreshDel_FR",
      subclass: "PV/Terror",
      status: "unproc",
    },
    {
      title: "Proctors",
      date: "01/10/2023",
      score: "",
      scorecolor: "",
      broker: "BMS",
      uw: "Likas Schmidth",
      caseid: "23Proctors_PR",
      subclass: "PV/Terror",
      status: "unproc",
    },
    {
      title: "Amazon",
      date: "29/09/2023",
      score: "",
      scorecolor: "",
      broker: "Thompsom Heather",
      uw: "Sofia Pertova",
      caseid: "23Amazon_AM",
      subclass: "PV/Terror",
      status: "unproc",
    },
    {
      title: "Cloudera",
      date: "28/09/2023",
      score: "80",
      scorecolor: "Green",
      broker: "Willis Re",
      uw: "Aisha Patel",
      caseid: "23Cloudera_CL",
      subclass: "PV/Terror",
      status: "renew",
    },
    {
      title: "Deckers Outdoor",
      date: "02/10/2023",
      score: "78",
      scorecolor: "Green",
      broker: "Liley Plummer",
      uw: "Lil Tan",
      caseid: "23DeckersOu_DE",
      subclass: "PV/Terror",
      status: "renew",
    },
    {
      title: "Crocs",
      date: "30/09/2023",
      score: "77",
      scorecolor: "Green",
      broker: "Willis",
      uw: "James Cannon",
      caseid: "23Crocs_CR",
      subclass: "PV/Terror",
      status: "renew",
    },
    {
      title: "CyberArk Software",
      date: "28/09/2023",
      score: "66",
      scorecolor: "Green",
      broker: "Price Forbes",
      uw: "Lili Tan",
      caseid: "23CyberArks_CY",
      subclass: "PV/Terror",
      status: "renew",
    },
    {
      title: "BOX",
      date: "Tommorow",
      score: "33",
      scorecolor: "Orange",
      broker: "Channing Lucas",
      uw: "Lili Tan",
      caseid: "23Box_BO",
      subclass: "PV/Terror",
      status: "renew",
    },
    {
      title: "Five Below",
      date: "Tommorow",
      score: "79",
      scorecolor: "Green",
      broker: "Lockton",
      uw: "Aisha Patel",
      caseid: "23FiveBelow_FI",
      subclass: "PV/Terror",
      status: "sentq",
    },
    {
      title: "GnubHub",
      date: "01/10/2023",
      score: "66",
      scorecolor: "Green",
      broker: "Arthur J Gallagher",
      uw: "Lucas Schmidth",
      caseid: "23Gnubhub_GR",
      subclass: "PV/Terror",
      status: "sentq",
    },
    {
      title: "HubSpot",
      date: "30/04/2023",
      score: "52",
      scorecolor: "Gray",
      broker: "Price Forbes",
      uw: "Aisha Patel",
      caseid: "23HubSpot_HU",
      subclass: "PV/Terror",
      status: "sentq",
    },
  ]);

  const getCases = (category) => {
    return cases.filter((cs) => {
      if (cs.status == category) return cs;
    });
  };
  let unprocessedSubmission = getCases("unproc");

  // [{ title: "Fresh Del Monte", date: "12/05/2023", score: "", scorecolor: "", broker: "Tysers", uw: "Lili Tan", caseid: "23FreshDel_FR", subclass: "PV/Terror", },
  // { title: "Proctors", date: "01/10/2023", score: "", scorecolor: "", broker: "BMS", uw: "Likas Schmidth", caseid: "23Proctors_PR", subclass: "PV/Terror", },
  // { title: "Amazon", date: "29/09/2023", score: "", scorecolor: "", broker: "Thompsom Heather", uw: "Sofia Pertova", caseid: "23Amazon_AM", subclass: "PV/Terror", }
  // ]

  let renewals = getCases("renew");

  // [{ title: "Cloudera", date: "28/09/2023", score: "80", scorecolor: "Green", broker: "Willis Re", uw: "Aisha Patel", caseid: "23Cloudera_CL", subclass: "PV/Terror", },
  // { title: "Deckers Outdoor", date: "02/10/2023", score: "78", scorecolor: "Green", broker: "Liley Plummer", uw: "Lil Tan", caseid: "23DeckersOu_DE", subclass: "PV/Terror", },
  // { title: "Crocs", date: "30/09/2023", score: "77", scorecolor: "Green", broker: "Willis", uw: "James Cannon", caseid: "23Crocs_CR", subclass: "PV/Terror", },
  // { title: "CyberArk Software", date: "28/09/2023", score: "66", scorecolor: "Green", broker: "Price Forbes", uw: "Lili Tan", caseid: "23CyberArks_CY", subclass: "PV/Terror", },
  // { title: "BOX", date: "Tommorow", score: "33", scorecolor: "Orange", broker: "Channing Lucas", uw: "Lili Tan", caseid: "23Box_BO", subclass: "PV/Terror", }
  // ]

  let processedSubmissions = getCases("proc");
  let sentQuotes = getCases("sentq");

  //     { title: "Five Below", date: "Tommorow", score: "79", scorecolor: "Green", broker: "Lockton", uw: "Aisha Patel", caseid: "23FiveBelow_FI", subclass: "PV/Terror", },
  //     { title: "GnubHub", date: "01/10/2023", score: "66", scorecolor: "Green", broker: "Arthur J Gallagher", uw: "Lucas Schmidth", caseid: "23Gnubhub_GR", subclass: "PV/Terror", },
  //     { title: "HubSpot", date: "30/04/2023", score: "52", scorecolor: "Gray", broker: "Price Forbes", uw: "Aisha Patel", caseid: "23HubSpot_HU", subclass: "PV/Terror", },
  // ]

  const onDragStart = (evt) => {
    let elem = evt.currentTarget;
    elem.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragEnter = (evt) => {
    evt.preventDefault();
    let elem = evt.currentTarget;
    elem.classList.add("dragged-over");
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (
      (newTarget && newTarget.parentNode === currentTarget) ||
      newTarget === currentTarget
    )
      return;
    evt.preventDefault();
    let elem = evt.currentTarget;
    elem.classList.remove("dragged-over");
  };

  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const onDrop = (evt, category, newStatus) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let newArr = [...cases];
    newArr.forEach((elem) => {
      if (elem.caseid == data) {
        elem.status = newStatus;
      }
    });
    setCases(newArr);
  };

  const onFilterButtonClick = (event) => {
    //document.getElementById('divFilterForm').classList.toggle('styles.showfilterDropdown')
    if (document.getElementById("divFilterForm").style.display == "block") {
      setFilterBoxCSS({
        display: "none",
      });
    } else {
      setFilterBoxCSS({
        display: "block",
        position: "absolute",
        backgroundColor: "#f1f1f1",
        minWidth: "160px",
        overflow: "auto",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        zIndex: "1",
      });
    }
    // setFilterBoxCSS({
    //     display: "block",
    //     position: "absolute",
    //     backgroundColor: "#f1f1f1",
    //     minWidth: "160px",
    //     overflow: "auto",
    //     boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    //     zIndex: "1"
    // })
  };

  const onLastDayRangeClick = (event) => {
    setLastDaysRangeSelected(true);
  };

  const onNextDayRangeClick = (event) => {
    setLastDaysRangeSelected(false);
  };

  const selectOptionDoubleClk = (event) => {
    let elem = document.getElementById(event.currentTarget.id);
    if (elem) {
      Array.from(elem.options).forEach((option, indx) => {
        if (
          option.index == elem.selectedIndex &&
          option.innerText.indexOf("✓") == -1
        ) {
          option.innerText += "✓";
          setShowme((prev) => prev.concat(option.value));
        } else {
          option.innerText = option.innerText.replace("✓", "");
          setShowme((prev) => prev.filter((e) => e !== option.value));
        }
      });
    }
  };

  const sortingCaseData = (event) => {
    renewals.sort((a, b) => a.score - b.score);
  };

  return (
    <>
      {/* filter section */}
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6">
              <FormLabel className="form-group m-1">Show me</FormLabel>
              {/* <Button variant="outline-secondary" className="m-1">
                COB 14
              </Button> */}
              {/* <Button variant="outline-secondary" className="m-1">
                All cases
              </Button> */}
              {showme.map((show, index) => (
                <Button key={index} variant="outline-secondary" className="m-1">
                  {show}
                </Button>
              ))}
              {/* <Button variant="outline-secondary" className="m-1">
                Last 7 days
              </Button> */}
            </div>
            {/* <div className="col-sm-1"></div> */}
            <div className="col-sm-1">
              <Button
                variant="outline-secondary"
                onClick={(event) => onFilterButtonClick(event)}
                className="m-1"
              >
                Filter
              </Button>
              <div id="divFilterForm" style={filterBoxCSS}>
                <div className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-10">
                    <Form>
                      <Form.Group className="mb-3" controlId="formsearchFilter">
                        <Form.Label>Add filter</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Search"
                        ></Form.Control>
                        Cases, brokers, underwriters
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formsearchFilter">
                        <Form.Label>Assigned to</Form.Label>
                        <br></br>
                        <BenchmarkListbox
                          lstOptions={assignedToData || []}
                          id={"lstassignedTo"}
                          onOptionDblClickEvent={(event) =>
                            selectOptionDoubleClk(event)
                          }
                          size={"3"}
                        ></BenchmarkListbox>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formsearchFilter">
                        <Form.Label>Case</Form.Label>
                        <br></br>
                        <BenchmarkListbox
                          lstOptions={casesData || []}
                          id={"lstcases"}
                          onOptionDblClickEvent={(event) =>
                            selectOptionDoubleClk(event)
                          }
                          size={"3"}
                        ></BenchmarkListbox>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formsearchFilter">
                        <Form.Label>Date range</Form.Label>
                        <div className="btn-group">
                          <input
                            type="button"
                            onClick={(event) => onLastDayRangeClick(event)}
                            name="datarange"
                            id="lastdayrange"
                            className={
                              lastDaysRangeSelected
                                ? "btn btn-secondary active"
                                : "btn btn-secondary"
                            }
                            defaultChecked
                            value={"Last"}
                          ></input>
                          <input
                            type="button"
                            onClick={(event) => onNextDayRangeClick(event)}
                            name="datarange"
                            id="nextdayrange"
                            className={
                              lastDaysRangeSelected
                                ? "btn btn-secondary"
                                : "btn btn-secondary active"
                            }
                            value={"Next"}
                          ></input>
                        </div>
                        <BenchmarkListbox
                          lstOptions={dayrangeData || []}
                          id={"lstdayrange"}
                          onOptionDblClickEvent={(event) =>
                            selectOptionDoubleClk(event)
                          }
                          size={"3"}
                          isMultiple={false}
                        ></BenchmarkListbox>
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-sm-1"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-4">
              <FormLabel className="form-group m-1">Sort by</FormLabel>
              <Button variant="outline-secondary" className="m-1">
                Score
              </Button>
              <Button variant="outline-secondary" className="m-1">
                Date
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="col-sm-6"></div>
      </div>
      {/* case list section */}
      <div className="row">
        <div
          className="col-sm-2"
          id={"dvunprocsub"}
          //   onDragLeave={(e) => onDragLeave(e)}
          //   onDragEnter={(e) => onDragEnter(e)}
          //   onDragOver={(e) => onDragOver(e)}
          //   onDrop={(e) => onDrop(e, true, "unproc")}
        >
          <CaseboardTileList
            id={"lstunprocsub"}
            category={"Unprocessed submissions"}
            categorycount={unprocessedSubmission.length || 0}
            listitems={unprocessedSubmission}
            cases={cases}
          ></CaseboardTileList>
        </div>
        <div
          className="col-sm-2"
          id={"dvrenew"}
          //   onDragLeave={(e) => onDragLeave(e)}
          //   onDragEnter={(e) => onDragEnter(e)}
          //   onDragOver={(e) => onDragOver(e)}
          //   onDrop={(e) => onDrop(e, true, "renew")}
        >
          <CaseboardTileList
            id={"lstrenew"}
            category={"Renewals"}
            categorycount={renewals.length || 0}
            listitems={renewals}
            cases={cases}
          ></CaseboardTileList>
        </div>
        <div
          className="col-sm-2"
          id={"dvprocsub"}
          //   onDragLeave={(e) => onDragLeave(e)}
          //   onDragEnter={(e) => onDragEnter(e)}
          //   onDragOver={(e) => onDragOver(e)}
          //   onDrop={(e) => onDrop(e, true, "proc")}
        >
          <CaseboardTileList
            id={"lstprocsub"}
            category={"Processed submissions"}
            categorycount={processedSubmissions.length || 0}
            listitems={processedSubmissions}
            cases={cases}
          ></CaseboardTileList>
        </div>
        <div
          className="col-sm-2"
          id={"dvsentqts"}
          //   onDragLeave={(e) => onDragLeave(e)}
          //   onDragEnter={(e) => onDragEnter(e)}
          //   onDragOver={(e) => onDragOver(e)}
          //   onDrop={(e) => onDrop(e, true, "sentq")}
        >
          <CaseboardTileList
            id={"lstsentqts"}
            category={"Sent quotes"}
            categorycount={sentQuotes.length || 0}
            listitems={sentQuotes}
            cases={cases}
          ></CaseboardTileList>
        </div>
      </div>
    </>
  );
};

export default Caseboard;

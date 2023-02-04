import { Button, Card, CardHeader, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventCalender extends Component {
  render() {
    return (
      <div>
        <Card
          className="card"
          style={{
            borderRadius: 20,
            marginLeft: 40,
            marginRight: 40,
            marginTop: 100,
          }}
        >
          <CardHeader
            title={
              <Typography className="cardHeader">Event Calendar </Typography>
            }
          />
          <div>
            <br></br>
          </div>
          <Link to="/">
            <Button
              variant="contained"
              className="backbtn"
              style={{
                borderRadius: 10,
                backgroundColor: "#21b6ae",
                padding: "12px 36px",
                fontSize: "12px",
                margin: "20px",
              }}
            >
              Back
            </Button>
          </Link>

          <h1>Event Calender</h1>
          {/* <CalendarViewDayOutlined /> */}

          {/* <Rcalendar /> */}
        </Card>
        <Card></Card>
      </div>
    );
  }
}

// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Button, Card, CardHeader, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// moment.locale("en-GB");
// const localizer = momentLocalizer(moment);

// export default function EventCalender() {
//   const [eventsData, setEventsData] = useState();

//   return (
//     <div className="App">
//       <div>
//         <Card className="card">
//           <CardHeader
//             title={
//               <Typography className="cardHeader">Event Calendar </Typography>
//             }
//           />
//           <div>
//             <br></br>
//           </div>
//           <Link to="/">
//             <Button
//               variant="contained"
//               className="backbtn"
//               style={{
//                 borderRadius: 10,
//                 backgroundColor: "#21b6ae",
//                 padding: "12px 36px",
//                 fontSize: "12px",
//                 margin: "20px",
//               }}
//             >
//               Back
//             </Button>
//           </Link>

//           <h1>Event Calender</h1>
//           {/* <CalendarViewDayOutlined /> */}
//         </Card>
//       </div>
//       <Card className="card">
//         <Calendar
//           views={["day", "agenda", "work_week", "month"]}
//           selectable
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView="month"
//           style={{ height: "100vh" }}
//         />
//       </Card>
//     </div>
//   );
// }

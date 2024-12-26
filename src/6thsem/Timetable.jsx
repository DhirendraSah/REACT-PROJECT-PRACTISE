import * as React from "react";

class lecture extends React.Component {
    render() {
        return(
            <div>
                <h1>Timetable</h1>
    <table border="2">
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
        <tr>
            <td>10:00 AM - 10:50 AM</td>
            <td>.NET (BD)/A.JV(MV)</td>
            <td>.NET (PJT)/A.JV(lib)</td>
            <td>AI/ML (CP)</td>
            <td>React (NV)</td>
            <td>React (SMS)</td>
        </tr>
        <tr>
            <td>10:50 AM - 11:40 AM</td>
            <td>.NET (PJT)/A.JV(lib)</td>
            <td>ADV.JAVA (UNI)</td>
            <td>AI/ML (CP)</td>
            <td>React (NV)</td>
            <td>React (SMS)</td>
        </tr>
        <tr>
            <td></td>
            <td>LL2 / LL5</td>
            <td>LL2 / LL5</td>
            <td>LL2</td>
            <td>LL1</td>
            <td>LL2</td>
        </tr>
        <tr>
            <td>11:40 AM - 12:30 AM</td>
            <td colSpan="5">TEA  BREAK</td>
        </tr>
        <tr>
            <td>12:30 PM - 1:20 PM</td>
            <td>PO (LB) / DM (DO) / EC (RK)</td>
            <td>AI/ML (CS)</td>
            <td>TEA BREAK</td>
            <td>FD (ES) / DM (LB) / EC (DB)</td>
            <td>FD (ES) / DM (LB) / EC (DB)</td>
        </tr>
        <tr>
            <td>1:20 PM - 2:10 PM</td>
            <td>PO (LB) / DM (DO) / EC (RK)</td>
            <td>TOC (AKK)</td>
            <td>213 / Elect. Machine Lab</td>
            <td>LL5</td>
            <td>118</td>
        </tr>
        <tr>
            <td></td>
            <td colSpan="5">LUNCH BREAK</td>
        </tr>
        <tr>
            <td>2:25 PM - 3:15 PM</td>
            <td>TOC (AKK)</td>
            <td>Resit</td>
            <td>JET (DO)</td>
            <td>ADV.JAVA (UNI)</td>
            <td>AI/ML (CS)</td>
        </tr>
        <tr>
            <td>3:15 PM - 4:00 PM</td>
            <td>LL2 / LL5</td>
            <td>LL2 / LL5</td>
            <td>LL2</td>
            <td>LL5</td>
            <td>LL2</td>
        </tr>
    </table>
            </div>

        );
    }
}
export default lecture;
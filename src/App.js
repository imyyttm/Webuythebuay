import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import mycourse from "./components/mycourse";
import course from "./components/course";
import courseout from "./components/courseout";
import PageLogout from "./components/Page/PageLogout";
import Page404 from "./components/Page/Page404";
import PageMember from "./components/Page/PageMember";
import Home from "./components/Page/PageHome";
import Homeout from "./components/Page/PageHomeout";
import Header_logout_stu from "./components/Header_logout_stu";
import Checkslip from "./components/Page/CheckSlip";
import FAQ from "./components/Page/FAQ";
import FAQout from "./components/Page/FAQout";
import Header from "./components/Header";
import Header_admin from "./components/Header_admin";
import TutorHeader from "./components/Tutor/Tutor_header";
import course_detail from "./components/Tutor/Course_detail"
import Tutor_header from "./components/Tutor/Tutor_header"
import tutorInsert from "./components/Tutor/TutorInsert";
import TutorPagehome from "./components/Tutor/Tutor_pagehome";
import Login from "./components/Page/Login"
import Register from "./components/Page/Register"
import Cart from "./components/Page/Cart"
import Payment from "./components/Page/Payment"
import PageContactout from "./components/pageClip/PageContactout"
import PageContact from "./components/pageClip/PageContact"
import Video from "./components/pageClip/PageClipThaiPart1"
import Clip from "./components/pageClip/ClipNext"
import EditUser from "./components/Page/EditUser"
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Cart">
            <Cart/>
          </Route>
          <Route path="/Payment">
            <Payment/>
          </Route>
          <Route path="/" component={Homeout} exact/>
          <Route path="/Register" component={Register} exact/>
          <Route path="/Login" component={Login} exact/>
          <Route path="/Header" component={Header} exact/>
          <Route path="/Tutorhome" component={TutorPagehome} exact/>
          <Route path="/Tutor_header" component={Tutor_header} exact/>
          <Route path="/FAQ" component={FAQ} exact/>
          <Route path="/FAQout" component={FAQout} exact/>
          <Route path="/Header_admin" component={Header_admin} exact/>
          <Route path="/Checkslip" component={Checkslip} exact/>
          <Route path="/PageHome" component={Home} exact/>
          <Route path="/Header_logout_stu" component={Header_logout_stu} exact/>
          <Route path="/PageHomeout" component={Homeout} exact/>
          <Route path="/Course" component={course} exact/>
          <Route path="/Mycourse" component={mycourse} exact/>
          <Route path="/Courseout" component={courseout} exact/>
          <Route path="/Logout" component={PageLogout} exact/>
          <Route path="/Member" component={PageMember} exact/>
          <Route path="/Insertcourse" component={tutorInsert} exact/>
          <Route path="/CourseDetail" component={course_detail} exact/>
          <Route path="/PageContactout" component={PageContactout} exact/>
          <Route path="/PageContact" component={PageContact} exact/>
          <Route path="/PageContact" component={PageContact} exact/>
          <Route path="/ClipNext" component={Clip} exact/>
          <Route path="/Clipback" component={Video} exact/>
          <Route path="/EditUser" component={EditUser} exact/>


          <Route path="*" component={Page404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

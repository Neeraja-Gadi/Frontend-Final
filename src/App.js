// import HeroPage from './components/HomePage/HeroPage'
// import Sec from './components/HomePage/Sec'
// import Third from './components/HomePage/Third'
// import Fourth from './components/HomePage/Fourth'
// import Fifth from './components/HomePage/Fifth'
// import UserProfile from './components/UserProfile.js'
// import Login from './components/loginPage/Login'
// import SignUp from './components/loginPage/SignUp'
// import EducationForm from './components/multiForm/EducationForm'
// import ProductSearch from "./components/Search.js"
// import RecruiterSearch from "./components/RecruiterSearch"
// // import JobForm from "./components/RecruiterForms/JobPostForm"
// import Dashboard from './components/Search/SearchPreferences'
// import ForgotPassword from './components/loginPage/ForgotPassword'
// import RecruiterProfileForm from "../src/components/RecruiterForms/RecruiterForm"
// import DashboardPortfolio from './components/Portfolio/Portfolio'
// import ResetPassword from './components/loginPage/ResetPassword'
// import { Routes, Route } from 'react-router-dom'
// import UserProfileForm from './components/multiForm/UserProfileForm'
// import UserExperience from './components/multiForm/UserExperience'
// import ProjectForm from './components/multiForm/UserProjects'
// import Pricing from './components/revenueModal/SubscriptionModal'
// import JobPost from './components/RecruiterForms/JobPost'
// import SearchResult from './components/Search/SearchComponents/SearchResult'
// import RecruiterProfilePage from './components/RecruiterProfile/RecruiterProfilePage'
// import TalentPoolNew from './components/RecruiterProfile/Templates/TalentPoolNew'
// import MyPlans from './components/RecruiterProfile/Templates/MyPlans'
// import RecProfile from './components/NewRecruiterProfile/RecProfile'
// import Employer from './components/RecruiterProfile/RecruiterProfileComponents/PageComponents/Employer'
// import SearchedItems from './components/Search/SearchComponents/SearchedItems'
// // import Search from './components/Search'


// function App() {
//     return (
//         <div>
//             <Routes>
//                 <Route path="/" element={<>
//                     {/* <SearchBar/>  */}
//                     <HeroPage />
//                     <Sec />
//                     <Third />
//                     <Fourth />
//                     <Fifth />
//                 </>} />

//                 <Route path="Login" element={<Login />} />
//                 <Route path="SignUp" element={<SignUp />} />
//                 <Route path='ForgotPassword' element={<ForgotPassword />} />
//                 <Route path='resetPassword/:id/:token' element={<ResetPassword />} />
//                 <Route path='UserProfileForm' element={<UserProfileForm />} />
//                 <Route path="UserProfile" element={<UserProfile />} />
//                 <Route path="EducationForm" element={<EducationForm />} />
//                 <Route path="UserExperience" element={<UserExperience />} />
//                 <Route path="UserProjects" element={<ProjectForm />} />
//                 <Route path="ProductSearch" element={<ProductSearch />} />
//                 <Route path="RecruiterSearch" element={<RecruiterSearch />} />
//                 <Route path="RecruiterForm" element={<RecruiterProfileForm />} />
//                 <Route path="SearchPreferences" element={<Dashboard />} />
//                 <Route path='SearchResult' element={<SearchResult />} />
//                 <Route path='SeacrhedItems' element={<SearchedItems />} />
//                 <Route path='Portfolio' element={<DashboardPortfolio />} />
//                 <Route path='SubscriptionModal' element={<Pricing />} />
//                 <Route path='JobPost' element={<JobPost />} />            
//                 <Route path='RecruiterProfilePage' element={<RecruiterProfilePage />} />
//                 {/* <Route path='TalentPoolNew' element={<TalentPoolNew />} /> */}
//                 <Route path='MyPlans' element={<MyPlans />} />
//                 <Route path='RecProfile' element={<RecProfile />} />
//                 {/* <Route path='Search' element={<Search />} /> */}                
//                 <Route path="/Employer/:uId/:id" element={<Employer />} />
//                 <Route path='TalentPoolNew/:jid' element={<TalentPoolNew />} />

//             </Routes>

//         </div>
//     )
// }
// export default App;


// import HeroPage from './components/HomePage/HeroPage'
// import Sec from './components/HomePage/Sec'
// import Third from './components/HomePage/Third'
// import Fourth from './components/HomePage/Fourth'
// import Fifth from './components/HomePage/Fifth'
import LandingPage from './components//HomePage/Landingpage'
import UserProfile from './components/UserProfile.js'
import Login from './components/loginPage/Login'
import SignUp from './components/loginPage/SignUp'
import EducationForm from './components/multiForm/EducationForm'
import ProductSearch from "./components/Search.js"
import RecruiterSearch from "./components/RecruiterSearch"
// import JobForm from "./components/RecruiterForms/JobPostForm"
import Dashboard from './components/Search/SearchPreferences'
import ForgotPassword from './components/loginPage/ForgotPassword'
import RecruiterProfileForm from "../src/components/RecruiterForms/RecruiterForm"
import DashboardPortfolio from './components/Portfolio/Portfolio'
import ResetPassword from './components/loginPage/ResetPassword'
import { Routes, Route } from 'react-router-dom'
import UserProfileForm from './components/multiForm/UserProfileForm'
import UserExperience from './components/multiForm/UserExperience'
import ProjectForm from './components/multiForm/UserProjects'
import Pricing from './components/revenueModal/SubscriptionModal'
import JobPost from './components/RecruiterForms/JobPost'
import SearchResult from './components/Search/SearchComponents/SearchResult'
import RecruiterProfilePage from './components/RecruiterProfile/RecruiterProfilePage'
import TalentPoolNew from './components/RecruiterProfile/Templates/TalentPoolNew'
import MyPlans from './components/RecruiterProfile/Templates/MyPlans'
import RecProfile from './components/NewRecruiterProfile/RecProfile'
import Employer from './components/RecruiterProfile/RecruiterProfileComponents/PageComponents/Employer'
import SearchedItems from './components/Search/SearchComponents/SearchedItems'
// import Search from './components/Search'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<>
                    {/* <SearchBar/>  */}
                    {/* <HeroPage />
                    <Sec />
                    <Third />
                    <Fourth />
                    <Fifth /> */}
                     <LandingPage />
                </>} />

                <Route path="Login" element={<Login />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path='ForgotPassword' element={<ForgotPassword />} />
                <Route path='resetPassword/:id/:token' element={<ResetPassword />} />
                <Route path='UserProfileForm' element={<UserProfileForm />} />
                <Route path="UserProfile" element={<UserProfile />} />
                <Route path="EducationForm" element={<EducationForm />} />
                <Route path="UserExperience" element={<UserExperience />} />
                <Route path="UserProjects" element={<ProjectForm />} />
                <Route path="ProductSearch" element={<ProductSearch />} />
                <Route path="RecruiterSearch" element={<RecruiterSearch />} />
                <Route path="RecruiterForm" element={<RecruiterProfileForm />} />
                <Route path="JobSearch" element={<Dashboard />} />
                <Route path='SearchResult' element={<SearchResult />} />
                <Route path='SeacrhedItems' element={<SearchedItems />} />
                <Route path='Portfolio' element={<DashboardPortfolio />} />
                <Route path='SubscriptionModal' element={<Pricing />} />
                <Route path='JobPost' element={<JobPost />} />            
                <Route path='RecruiterProfilePage' element={<RecruiterProfilePage />} />
                {/* <Route path='TalentPoolNew' element={<TalentPoolNew />} /> */}
                <Route path='MyPlans' element={<MyPlans />} />
                <Route path='RecProfile' element={<RecProfile />} />
                {/* <Route path='Search' element={<Search />} /> */}                
                <Route path="/Employer/:uId/:id" element={<Employer />} />
                <Route path='TalentPoolNew/:jid' element={<TalentPoolNew />} />

            </Routes>

        </div>
    )
}
export default App;
import React from 'react';
import MyCard from './Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap';
import Navbar from './Navbar';
import './PeopleToFollow.css';

function PeopleToFollow() {
  return (
    <>
    <Navbar/>
    <h1 >People you should follow</h1>
    <br />
    <h2>Twitter Ids and LinkedIn Profiles</h2>
  <Row>
    
    <Col  sm >
    <MyCard name="Paul Graham" profilePic="https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg"  twitterId="https://twitter.com/paulg"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Naval Ravikant" profilePic="https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg" twitterId="https://twitter.com/naval" linkedinId="https://www.linkedin.com/in/navalr/"/>
    </Col>

    <Col  sm>
    <MyCard name="Tim Ferriss" profilePic="https://pbs.twimg.com/profile_images/49918572/half-face-ice_400x400.jpg" twitterId="https://twitter.com/tferriss" linkedinId="https://www.linkedin.com/in/timferriss/"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Reid Hoffman" profilePic="https://pbs.twimg.com/profile_images/971127018023665664/cDRrTbCI_400x400.jpg"  twitterId="https://twitter.com/reidhoffman" linkedinId="https://www.linkedin.com/in/reidhoffman/"/>
    </Col>

    <Col  sm>
    <MyCard name="Mark Cuban"  profilePic="https://pbs.twimg.com/profile_images/1422637130/mccigartrophy_400x400.jpg"  twitterId="https://twitter.com/mcuban" linkedinId="https://www.linkedin.com/in/mark-cuban-06a0755b/"/>
    </Col>
   
  </Row>

  <Row>
    
    <Col  sm >
    <MyCard name="Kunal Shah" profilePic="https://pbs.twimg.com/profile_images/1190747917998546944/D3U5FNa7_400x400.jpg"  twitterId="https://twitter.com/kunalb11" linkedinId="https://www.linkedin.com/in/kunalshah1/?originalSubdomain=in"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Eric Ries" profilePic="https://pbs.twimg.com/profile_images/920360278650318848/QWtr0ikE_400x400.jpg" twitterId="https://twitter.com/ericries" linkedinId="https://www.linkedin.com/in/eries/"/>
    </Col>

    <Col  sm>
    <MyCard name="Richard Branson" profilePic="https://pbs.twimg.com/profile_images/1410740591483293697/tRbW1XoV_400x400.jpg" twitterId="https://twitter.com/richardbranson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/rbranson/?originalSubdomain=vg"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Kevin Rose" profilePic="https://media-exp1.licdn.com/dms/image/C5603AQEyx1xDxoPV3w/profile-displayphoto-shrink_800_800/0/1558744193654?e=1643846400&v=beta&t=qfa1X63zMUhIQqBSBupX7_6BHXMt01rU7h_T8KRu_4U"  twitterId="https://twitter.com/kevinrose?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/kevinrose/"/>
    </Col>

    <Col  sm>
    <MyCard name="Hiten Shah" profilePic="https://pbs.twimg.com/profile_images/1471187428304044033/265FXVPC_400x400.jpg"  twitterId="https://twitter.com/hnshah?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/hnshah/"/>
    </Col>
   
  </Row>

  <Row>
    
    <Col  sm >
    <MyCard name="Tim O'Reilly"  profilePic="https://pbs.twimg.com/profile_images/1245847410326114304/BhOiC4LA_400x400.jpg"  twitterId="https://twitter.com/timoreilly?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/timo3/"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Steve Blank"  profilePic="https://pbs.twimg.com/profile_images/658353847597838336/gudlMh3p_400x400.jpg" twitterId="https://twitter.com/sgblank?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/steveblank/"/>
    </Col>

    <Col  sm>
    <MyCard name="Mark Suster"  profilePic="https://pbs.twimg.com/profile_images/1464781108285870083/KF5D4s5l_400x400.jpg" twitterId="https://twitter.com/msuster?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/marksuster/"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Guy Kawasaki" profilePic="https://pbs.twimg.com/profile_images/1394349482578309120/ICAxHZPt_400x400.jpg"  twitterId="https://twitter.com/GuyKawasaki?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/guykawasaki/"/>
    </Col>

    <Col  sm>
    <MyCard name="Fred Wilson"  profilePic="https://pbs.twimg.com/profile_images/3580641456/82c873940343750638b7caa04b4652fe_400x400.jpeg"  twitterId="https://twitter.com/fredwilson?lang=en" linkedinId="https://www.linkedin.com/in/fredwilson/"/>
    </Col>
   
  </Row>

  <Row>
    
    <Col  sm >
    <MyCard name="Tim Berry"  profilePic="https://pbs.twimg.com/profile_images/490225625979179008/afeOzUo0_400x400.jpeg"  twitterId="https://twitter.com/sdcherokee" linkedinId="https://www.linkedin.com/in/timberry/"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Jason Calacanis"  profilePic="https://pbs.twimg.com/profile_images/1296864605269000192/tRBPfyJN_400x400.jpg" twitterId="https://twitter.com/Jason?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/jasoncalacanis/"/>
    </Col>

    <Col  sm>
    <MyCard name="Brad Feld" profilePic="https://pbs.twimg.com/profile_images/441605100440547328/vJhIbf6j_400x400.png" twitterId="https://twitter.com/bfeld" linkedinId="https://www.linkedin.com/in/bfeld/"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Ann Handley" profilePic="https://pbs.twimg.com/profile_images/850267821158277121/_Gz7G5uU_400x400.jpg"  twitterId="https://twitter.com/annhandley" linkedinId="https://www.linkedin.com/in/annhandley/"/>
    </Col>

    <Col  sm>
    <MyCard name="Gene Marks"  profilePic="https://pbs.twimg.com/profile_images/1296525355067609090/KMt_pgEG_400x400.jpg"  twitterId="https://twitter.com/genemarks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/genemarks/"/>
    </Col>
   
  </Row>

  <Row>
    
    <Col  sm >
    <MyCard name="Garry Vee"  profilePic="https://pbs.twimg.com/profile_images/1268176490979561472/aorwOh3s_400x400.jpg"  twitterId="https://twitter.com/garyvee?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/garyvaynerchuk/"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Maria Popova"  profilePic="https://pbs.twimg.com/profile_images/577255253852065794/qGnSwsBR_400x400.jpg" twitterId="https://twitter.com/brainpicker?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"/>
    </Col>

    <Col  sm>
    <MyCard name="Ben Horowitz"  profilePic="https://pbs.twimg.com/profile_images/1438305416853614593/5t9Peejn_400x400.jpg" twitterId="https://twitter.com/bhorowitz?lang=en" linkedinId="https://www.linkedin.com/in/behorowitz/"/>
    </Col>
    
    <Col  sm>
    <MyCard name="Elad Gill" profilePic="https://pbs.twimg.com/profile_images/1151122652/dragonball-tenkaichi-daibouken_400x400.jpg"  twitterId="https://twitter.com/eladgil" linkedinId="https://www.linkedin.com/in/eladgil/"/>
    </Col>

    <Col  sm>
    <MyCard name="Garry Tan"  profilePic="https://pbs.twimg.com/profile_images/1465093736027738112/wJKeoTwY_400x400.jpg"  twitterId="https://twitter.com/garrytan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/garrytan/"/>
    </Col>
   
  </Row>

  <Row>

    <Col sm>
      <MyCard name="Marc Andreessen" profilePic="https://pbs.twimg.com/profile_images/1405739314303037445/YbBg1Lhn_400x400.jpg" twitterId="https://twitter.com/pmarca"/>    
    </Col>

    <Col sm>
      <MyCard name="Daymond John" profilePic="https://pbs.twimg.com/profile_images/1187448678371463169/Bd0jNLQ9_400x400.jpg" twitterId="https://twitter.com/TheSharkDaymond?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/daymondjohn/"/>    
    </Col>

    <Col sm>
      <MyCard name="Ray Dalio" profilePic="https://media-exp1.licdn.com/dms/image/C5603AQEaAcHgvsm0UA/profile-displayphoto-shrink_800_800/0/1623860377060?e=1643846400&v=beta&t=lyeU4SHWNpXiIVwW2Kv6LyKJgQoQ_WF4mIMQWUy9SXg" twitterId="https://twitter.com/RayDalio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/raydalio/"/>    
    </Col>

    <Col sm>
      <MyCard name="Melinda Gates" profilePic="https://pbs.twimg.com/profile_images/1054713372845862912/1SR434Pr_400x400.jpg" twitterId="https://twitter.com/melindagates?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/melindagates/"/>    
    </Col>

    <Col sm>
      <MyCard name="Whitney Johnson" profilePic="https://pbs.twimg.com/profile_images/1420460301552607234/9jTMWBvv_400x400.jpg" twitterId="https://twitter.com/johnsonwhitney?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/whitneyjohnson/"/>    
    </Col>

  </Row>

  <Row>

    <Col sm>
      <MyCard name="Arne Sorenson" profilePic="https://media-exp1.licdn.com/dms/image/C5603AQEaGpTFnqf7-w/profile-displayphoto-shrink_800_800/0/1517378836765?e=1643846400&v=beta&t=Cv-fQlHXzYR8PPOlGa9LQ086vdOgQRawWs5cfspTLtE" linkedinId="https://www.linkedin.com/in/arnesorenson/"/>    
    </Col>

    <Col sm>
      <MyCard name="Jeff Weiner" profilePic="https://pbs.twimg.com/profile_images/500480798886084611/P5XUPlTJ_400x400.jpeg" twitterId="https://twitter.com/jeffweiner" linkedinId="https://www.linkedin.com/in/jeffweiner08/"/>    
    </Col>

    <Col sm>
      <MyCard name="Bill Gates" profilePic="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg" twitterId="https://twitter.com/BillGates?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/williamhgates/"/>    
    </Col>

    <Col sm>
      <MyCard name="Arianna Huffington" profilePic="https://pbs.twimg.com/profile_images/1315809894411403265/GFTl08tw_400x400.jpg" twitterId="https://twitter.com/ariannahuff?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/ariannahuffington/"/>    
    </Col>

    <Col sm>
      <MyCard name="James Caan CBE" profilePic="https://pbs.twimg.com/profile_images/1187663261296189440/DBYA7c9L_400x400.jpg" twitterId="https://twitter.com/jamescaan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/jamescaancbe/?originalSubdomain=uk"/>    
    </Col>

  </Row>

  <Row>

    <Col sm>
      <MyCard name="Tony Robbins" profilePic="https://pbs.twimg.com/profile_images/1257396956881498114/Fj13PSh-_400x400.jpg" twitterId="https://twitter.com/TonyRobbins?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/ajrobbins/"/>    
    </Col>

    <Col sm>
      <MyCard name="Sallie Krawcheck" profilePic="https://pbs.twimg.com/profile_images/1271233206478610432/_e--7ZZ5_400x400.jpg" twitterId="https://twitter.com/salliekrawcheck" linkedinId="https://www.linkedin.com/in/salliekrawcheck/"/>    
    </Col>

    <Col sm>
      <MyCard name="Ryan Holmes" profilePic="https://pbs.twimg.com/profile_images/1405238589735116801/gQHCYLI3_400x400.jpg" twitterId="https://twitter.com/invoker?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/rholmes/?originalSubdomain=ca"/>    
    </Col>

    <Col sm>
      <MyCard name="Bernard Marr" profilePic="https://pbs.twimg.com/profile_images/1398265987246571523/hxo0u2UC_400x400.jpg" twitterId="https://twitter.com/BernardMarr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/bernardmarr/?originalSubdomain=uk"/>    
    </Col>

    <Col sm>
      <MyCard name="Craig Newmark" profilePic="https://pbs.twimg.com/profile_images/649304642946383873/mZaX3rwz_400x400.jpg" twitterId="https://twitter.com/craignewmark?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/craignewmark/"/>    
    </Col>

  </Row>

  <Row>

    <Col sm>
      <MyCard name="Simon Sinek" profilePic="https://pbs.twimg.com/profile_images/1295112038096629760/3eCOaKDb_400x400.jpg" twitterId="https://twitter.com/simonsinek?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/simonsinek/"/>    
    </Col>

    <Col sm>
      <MyCard name="Pete Cashmore" profilePic="https://pbs.twimg.com/profile_images/1343708912130916352/yhxNRLSr_400x400.jpg" twitterId="https://twitter.com/petecashmore?lang=en" linkedinId="https://www.linkedin.com/in/petecashmore/"/>    
    </Col>

    <Col sm>
      <MyCard name="Naomi Simson" profilePic="https://pbs.twimg.com/profile_images/1246158243585355776/wjyALMRI_400x400.jpg" twitterId="https://twitter.com/NaomiSimson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/naomisimson/?originalSubdomain=au"/>    
    </Col>

    <Col sm>
      <MyCard name="Ankur Warikoo" profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQFxc9i7wRoJEQ/profile-displayphoto-shrink_800_800/0/1603532031865?e=1643846400&v=beta&t=E4nWNLIywak89CQjlZn_RhdDvGpuNLTo3m_nJ5RLUiI" twitterId="https://twitter.com/warikoo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/warikoo/"/>    
    </Col>

    <Col sm>
      <MyCard name="Marcus Sheridan" profilePic="https://pbs.twimg.com/profile_images/1009529750098935811/cG6THsGo_400x400.jpg" twitterId="https://twitter.com/TheSalesLion?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/marcussheridan/"/>    
    </Col>

  </Row>

  <Row>

    <Col sm>
      <MyCard name="Tiffany Dufu" profilePic="https://pbs.twimg.com/profile_images/1192492173389942788/IDtzSfvR_400x400.jpg" twitterId="https://twitter.com/tdufu" linkedinId="https://www.linkedin.com/in/tiffanydufu/"/>    
    </Col>

    <Col sm>
      <MyCard name="Chris Do" profilePic="https://pbs.twimg.com/profile_images/1364268291485622275/w2axzhBT_400x400.jpg" twitterId="https://twitter.com/theChrisDo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" linkedinId="https://www.linkedin.com/in/thechrisdo/"/>    
    </Col>

  </Row>

    </>
  );
}

export default PeopleToFollow;

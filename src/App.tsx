import Menu from './components/Menu';
import HeroExp from './pages/hero/HeroExp';
import React from 'react';
import {IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import {IonReactHashRouter, IonReactRouter} from '@ionic/react-router';
import {Redirect, Route} from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import Home from "./pages/Home";

import XLY from "./pages/army/XLY";
import MFW from "./pages/army/MFW";
import JinKu from "./pages/army/JinKu";
import JiuKu from "./pages/army/JiuKu";
import SkillExp from "./pages/hero/SkillExp";
import Hero from './pages/hero/Hero';
import Recommend from "./pages/intro/Recommend";
import Move from "./pages/intro/Move";
import VideoList from "./pages/intro/VideoList";
import Monster from "./pages/monster/Monster";
import Tech from "./pages/Tech";
import Magic from "./pages/Magic";
import GD from "./pages/other/GD";
import Dragon from "./pages/other/Dragon";

import Defense from "./pages/Defense";
import SBY from "./pages/army/SBY";
import YXWZ from "./pages/army/YXWZ";
import JinKuang from "./pages/army/JinKuang";
import NJC from "./pages/army/NJC";
import TH from "./pages/intro/TH";
import YJS from "./pages/army/YJS";
import LJS from "./pages/army/LJS";

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactHashRouter>
        <IonSplitPane contentId="main">
          <Menu/>
          <IonRouterOutlet id="main">
            <Route path="/recommend" component={Recommend}/>
            <Route path="/move" component={Move}/>
            <Route path="/th" component={TH}/>
            <Route path="/video" component={VideoList}/>
            <Route path="/monster/:id" component={Monster} exact/>
            <Route path="/tech/:id" component={Tech}/>

            <Route path="/home" component={Home}/>
            <Route path="/hero-exp" component={HeroExp}/>
            <Route path="/hero" component={Hero}/>
            <Route path="/skill-exp" component={SkillExp}/>
            <Route path="/xly" component={XLY}/>
            <Route path="/mfw" component={MFW}/>
            <Route path="/jinku" component={JinKu}/>
            <Route path="/jiuku" component={JiuKu}/>
            <Route path="/sby" component={SBY}/>
            <Route path="/yxwz" component={YXWZ}/>
            <Route path="/jinkuang" component={JinKuang}/>
            <Route path="/njc" component={NJC}/>
            <Route path="/yjs" component={YJS}/>
            <Route path="/ljs" component={LJS}/>



            <Route path="/defense/:id" component={Defense}/>
            <Route path="/magic/:id" component={Magic}/>

            <Route path="/gd" component={GD}/>
            <Route path="/dragon" component={Dragon}/>
            <Redirect from="/" to="/home" exact/>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;

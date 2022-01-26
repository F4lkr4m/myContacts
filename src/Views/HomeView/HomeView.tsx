import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Button from "../../Components/Button/Button";
import ContactList from "../../Components/ContactList/ContactList";
import Fonts from "../../Components/Fonts/Fonts";
import { logOut } from "../../Store/ActionCreators/UserActionCreators";
import { UserState } from "../../Store/Reducers/UserReducer";
import { rootReducerType } from "../../Store/Store";
import './HomeView.css';
import { constants } from "../../Utils/Constants";
import { Navigate } from 'react-router-dom';

interface HomeViewI {
  user: UserState;
  logOutUser: () => void;
}

const HomeView = (props: HomeViewI) => {
  const logOutHandler = () => {
    props.logOutUser();
  };

  if (!props.user.auth) {
    return (<Navigate to={constants.appPaths.sign} />);
  }

  return (
    <div className="home-view">
      <header className="home-view__header">
        <Fonts type="p" text={props.user.username} />
        <Button onClick={logOutHandler} label="Выйти" />
      </header>
      <main className="home-view__main">
        <ContactList />
      </main>
    </div>
  )
}

const mapStateToProps = (combinedReducer: rootReducerType) => {
  return {
    user: {
      auth: combinedReducer.userReducer.auth,
      username: combinedReducer.userReducer.username,
    }
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logOutUser: bindActionCreators(logOut, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

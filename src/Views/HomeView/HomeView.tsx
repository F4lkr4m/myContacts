import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import AddContactModal from "../../Components/AddContactModal/AddContactModal";
import Button from "../../Components/Button/Button";
import ContactList from "../../Components/ContactList/ContactList";
import Fonts from "../../Components/Fonts/Fonts";
import { signIn, userDataPayload } from "../../Store/ActionCreators/UserActionCreator";
import { UserState } from "../../Store/Reducers/UserReducer";
import { rootReducerType } from "../../Store/Store";
import './HomeView.css';
import { constants } from "../../Utils/Constants";
import { Navigate } from 'react-router-dom';

interface HomeViewI {
  user: UserState;
  loginUser: (payload: userDataPayload) => void;
}

const HomeView = (props: HomeViewI) => {
  const onClick = () => {
    props.loginUser({username: 'testuser', password: 'smth'});
  };
  if (!props.user.auth) {
    return (<Navigate to={constants.appPaths.sign} />);
  }

  return (
    <div className="home-view">
      <header className="home-view__header">
        <Fonts type="p" text="Сергей Щербаков" />
        <Button onClick={onClick} label="Выйти" />
      </header>
      <main className="home-view__main">
        <ContactList />
      </main>
      <AddContactModal />
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
    loginUser: bindActionCreators(signIn, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

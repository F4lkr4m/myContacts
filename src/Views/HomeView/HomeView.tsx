import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import AddContactModal from "../../Components/AddContactModal/AddContactModal";
import Button from "../../Components/Button/Button";
import ContactList from "../../Components/ContactList/ContactList";
import Fonts from "../../Components/Fonts/Fonts";
import { userSignIn, userSignInPayload } from "../../Store/ActionCreators/UserActionCreator";
import { rootReducerType } from "../../Store/Store";
import './HomeView.css';

interface HomeViewI {
  auth: boolean;
  username: string;
  loginUser: (payload: userSignInPayload) => void;
}

const HomeView = (props: HomeViewI) => {
  const onClick = () => {
    console.log(props.auth, props.loginUser, props.username);
    props.loginUser({username: 'testuser', password: 'smth'});
  };

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
    auth: combinedReducer.userReducer.auth,
    username: combinedReducer.userReducer.username,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loginUser: bindActionCreators(userSignIn, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

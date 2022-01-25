import React from "react";
import Button from "../../Components/Button/Button";
import ContactList from "../../Components/ContactList/ContactList";
import Fonts from "../../Components/Fonts/Fonts";
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-view">
      <header className="home-view__header">
        <Fonts type="p" text="Сергей Щербаков" />
        <Button label="Выйти" />
      </header>
      <main className="home-view__main">
        <ContactList />
      </main>
    </div>
  )
}

export default HomeView;

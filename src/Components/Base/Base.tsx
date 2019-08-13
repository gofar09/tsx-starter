import React from "react";
import { inject, observer } from "mobx-react";
import { Instance } from "mobx-state-tree";
import logo from "@Assets/Images/logo.svg";
import "./Base.css";
import { SESSION_STORE } from "@Shared/Constants/Models";
import { Session } from "@Models/Session";

export interface IBaseProps {
  [SESSION_STORE]?: Instance<typeof Session>;
}

interface IBaseState {
  message: { count: number; text: string };
}

@inject(SESSION_STORE)
@observer
class Base extends React.Component<IBaseProps, IBaseState> {
  constructor(props: any) {
    super(props);

    this.state = {
      message: { count: 0, text: "yo" },
    };
  }

  render() {
    const { welcomeMessage } = this.props[SESSION_STORE]!;
    const {
      message: { text },
    } = this.state;
    return (
      <div className="Base">
        <header className="Base-header">
          <img src={logo} className="Base-logo" alt="logo" />
          <div id="taco" />
          {/* <div>{text}</div> */}
          {welcomeMessage}
        </header>
      </div>
    );
  }
}

export default Base;
// export default inject(SESSION_STORE)(observer(Base));

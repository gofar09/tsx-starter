import { types } from "mobx-state-tree";
import { Session } from "./Session";
import { SESSION_STORE } from "@Shared/Constants/Models";

const rootStore = types
  .model({
    [SESSION_STORE]: types.optional(Session, {}),
  })
  .actions((self) => ({
    afterAttach() {
      console.log("--Root Store Was Attached--");
    },
    afterCreate() {
      console.log("--Root Store Was Successfully Created--");
    },
  }));

export default rootStore;

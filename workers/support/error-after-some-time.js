"use strict";

importScripts("/resources/testharness.js");

self.onmessage = ev => {
  switch (ev.data) {
    case "error expected": {
      self.addEventListener("error", ev => {
        assert_equals(ev.constructor, ErrorEvent, "The WorkerGlobalScope error event must fire");
        assert_equals(ev.message, "boo", "The WorkerGlobalScope error event must have the correct message");
      });
    }

    case "error not expected": {
      console.log("got here");
      self.addEventListener("error", ev => {
        throw new Error("Error event must not be fired");
      });
    }
  }

  setTimeout(() => { throw new Error("boo"); }, 100);
};

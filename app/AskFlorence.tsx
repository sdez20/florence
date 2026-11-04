"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

// Zendesk messaging (Web Widget) for florenceaihelp.zendesk.com.
// The widget is set to "Custom launcher" in Zendesk, so this component
// draws Florence's own launcher: a black circle with a white F.
const ZENDESK_KEY = "00b515fc-1cec-4dbe-9a51-080c105ca961";

type ZE = (...args: unknown[]) => void;
declare global {
  interface Window {
    zE?: ZE;
  }
}

export default function AskFlorence() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  const onLoad = () => {
    const zE = window.zE;
    if (!zE) return;
    zE("messenger:on", "open", () => setOpen(true));
    zE("messenger:on", "close", () => setOpen(false));
    setReady(true);
  };

  const toggle = () => {
    const zE = window.zE;
    if (!zE) return;
    zE("messenger", open ? "close" : "open");
  };

  // Any link on the page pointing to #ask-florence opens the widget,
  // including "Ask Florence Support" in the FAQ section.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href="#ask-florence"]');
      if (!a) return;
      e.preventDefault();
      window.zE?.("messenger", "open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script
        id="ze-snippet"
        src={`https://static.zdassets.com/ekr/snippet.js?key=${ZENDESK_KEY}`}
        strategy="afterInteractive"
        onLoad={onLoad}
      />
      <button
        type="button"
        aria-label={open ? "Close Ask Florence" : "Ask Florence"}
        title="Ask Florence"
        onClick={toggle}
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 999998,
          display: ready ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: open ? 26 : 30,
          fontWeight: 500,
          lineHeight: 1,
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        }}
      >
        {open ? "×" : "F"}
      </button>
    </>
  );
}

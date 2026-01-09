;! European Union Public License version 1.2 !;
;! Copyright © 2014 Rick Beerendonk          !;

(ns lab.core
  (:require
    ["react" :as React]
    ["react-dom/client" :as ReactDOM]))

(def version (.-version React))

(let [root-element (.getElementById js/document "root")]
  (when root-element
    (let [root (.createRoot ReactDOM root-element)]
      (.render root
        (React/createElement "h1" nil
          (str "Hello React " version "!"))))))

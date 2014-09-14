(ns hello-react.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil "Hello Om!"))))
  nil
  {:target (. js/document (getElementById "app"))})

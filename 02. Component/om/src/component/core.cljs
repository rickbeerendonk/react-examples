(ns component.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn hello-react [app owner]
  (om/component
    (dom/h1 nil "Hello Om!")))

(om/root
  hello-react
  nil
  {:target (. js/document (getElementById "app"))})

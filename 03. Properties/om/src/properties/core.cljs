(ns properties.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn hello-react [data owner]
  (om/component
    (dom/h1 nil (str "Hello " (:name data) "!"))))

(om/root
  hello-react
  {:name "Om"}
  {:target (. js/document (getElementById "app"))})

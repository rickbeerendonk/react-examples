(defproject basic1 "0.1.0"
  :description "Om example Basics1"
  :url "http://om.beerendonk.com"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.5.0"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "basic1"
              :source-paths ["src"]
              :compiler {
                :output-to "basic1.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})

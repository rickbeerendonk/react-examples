(defproject component "0.1.0"
  :description "Om example Hello React"
  :url "http://om.beerendonk.com"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [om "0.7.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "hello_react.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})

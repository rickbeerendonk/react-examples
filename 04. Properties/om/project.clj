(defproject component "0.1.0"
  :description "Om example Properties"
  :url "http://om.beerendonk.com"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [om "0.8.0-beta4"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "properties.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})

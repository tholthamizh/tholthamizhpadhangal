name := """thol"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs
)

//https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt
libraryDependencies += "io.jsonwebtoken" % "jjwt" % "0.6.0"


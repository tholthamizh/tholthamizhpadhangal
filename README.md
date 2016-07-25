# தொல்  தமிழ்ப் பதங்கள் 

##Developer Setup
### Dependencies
1. Git
2. sbt (http://www.scala-sbt.org/)
3. Java8
4. Angular CLI

### Steps
* Install the dependencies mentioned above
* Clone the repository

```
>> git clone git@github.com:tholthamizh/tholthamizhpadhangal.git
```
* Go to the play project root and start sbt

```
>> cd {REPO_ROOT}/play/thol
>> sbt
```

* Start UI
```
>> cd {REPO_ROOT}/tholang
>> ng start
```

* Local Build

```
[thol] run
```
The server starts at port 9000.

Hit localhost:9000 from you browser. The code compiles.


##Dployable Build

*Build UI
```
>> cd {REPO_ROOT}/tholang
>> ng build -prod
```

*Build Server
```
>> cd {REPO_ROOT}/play/thol
>> sbt
[thol] dist
```

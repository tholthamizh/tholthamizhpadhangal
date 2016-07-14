import json
import sys

f = open(sys.argv[1])
lf = open('words.json','r')
wordList = json.load(lf)
lf.close()

lines = f.readlines()
for line in lines:
	parts = line.split(":")
	data = {}
	data['meaning'] = parts[1]	
	nf = open("words/"+parts[0]+".json",'w')
	json.dump(data,nf)
	wordList['words'].append(parts[0])

wordList['words'] = list(set(wordList['words']))
lf = open('words.json','w')
json.dump(wordList,lf)
lf.close()
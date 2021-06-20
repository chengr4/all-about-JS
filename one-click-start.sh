#! /bin/zsh

youDontKnowJS="https://github.com/getify/You-Dont-Know-JS"
allAboutJS="https://github.com/chengr4/all-about-JS"
TRANSLATOR="https://translate.google.com.tw/?hl=zh-TW&sl=auto&tl=en&op=translate"

# open chrome
open -a 'google chrome' ${youDontKnowJS} ${allAboutJS} ${TRANSLATOR}

# open typora
open -a 'typora' README.md

# open vscode 
code .

/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-03 13:22:17
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-07 10:58:14
 */
import "codemirror/lib/codemirror.css";

// language
import "codemirror/mode/vue/vue.js";

// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
import "codemirror/addon/search/searchcursor.js";
// hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/selection/active-line.js";
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";

import "codemirror/addon/search/match-highlighter.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";

import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";

export { codemirror } from "vue-codemirror";

export const codemirrorOption = { 
  tabSize: 2,
  mode: "text/x-vue",
  styleActiveLine: true,
  lineNumbers: true,
  line: true,
  foldGutter: true, 
  styleSelectedText: true,  
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
  // hint.js options
  hintOptions: {
    // 当匹配只有一项的时候是否自动补全
    completeSingle: true
  }, 
  // 快捷键 可提供三种模式 sublime、emacs、vim
  keyMap: "sublime",
  matchBrackets: true,
  showCursorWhenSelecting: true,
  extraKeys: { Ctrl: "autocomplete" },
};

// 参数参考  https://blog.csdn.net/weixin_43080277/article/details/83860629 
export const changeOptions=(type)=>{
  let options = Object.assign({},codemirrorOption);
  if(!type){
    options['lineNumbers'] = false;
    options['line'] =false;
    options['foldGutter'] = false;
    options['readOnly'] = 'nocursor'
  }
  return options; 
}

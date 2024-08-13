"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/inline-style-parser";
exports.ids = ["vendor-chunks/inline-style-parser"];
exports.modules = {

/***/ "(ssr)/./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("// http://www.w3.org/TR/CSS21/grammar.html\n// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027\n\nvar COMMENT_REGEX = /\\/\\*[^*]*\\*+([^/*][^*]*\\*+)*\\//g;\nvar NEWLINE_REGEX = /\\n/g;\nvar WHITESPACE_REGEX = /^\\s*/;\n// declaration\nvar PROPERTY_REGEX = /^(\\*?[-#/*\\\\\\w]+(\\[[0-9a-z_-]+\\])?)\\s*/;\nvar COLON_REGEX = /^:\\s*/;\nvar VALUE_REGEX = /^((?:'(?:\\\\'|.)*?'|\"(?:\\\\\"|.)*?\"|\\([^)]*?\\)|[^};])+)/;\nvar SEMICOLON_REGEX = /^[;\\s]*/;\n// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill\nvar TRIM_REGEX = /^\\s+|\\s+$/g;\n// strings\nvar NEWLINE = \"\\n\";\nvar FORWARD_SLASH = \"/\";\nvar ASTERISK = \"*\";\nvar EMPTY_STRING = \"\";\n// types\nvar TYPE_COMMENT = \"comment\";\nvar TYPE_DECLARATION = \"declaration\";\n/**\n * @param {String} style\n * @param {Object} [options]\n * @return {Object[]}\n * @throws {TypeError}\n * @throws {Error}\n */ module.exports = function(style, options) {\n    if (typeof style !== \"string\") {\n        throw new TypeError(\"First argument must be a string\");\n    }\n    if (!style) return [];\n    options = options || {};\n    /**\n   * Positional.\n   */ var lineno = 1;\n    var column = 1;\n    /**\n   * Update lineno and column based on `str`.\n   *\n   * @param {String} str\n   */ function updatePosition(str) {\n        var lines = str.match(NEWLINE_REGEX);\n        if (lines) lineno += lines.length;\n        var i = str.lastIndexOf(NEWLINE);\n        column = ~i ? str.length - i : column + str.length;\n    }\n    /**\n   * Mark position and patch `node.position`.\n   *\n   * @return {Function}\n   */ function position() {\n        var start = {\n            line: lineno,\n            column: column\n        };\n        return function(node) {\n            node.position = new Position(start);\n            whitespace();\n            return node;\n        };\n    }\n    /**\n   * Store position information for a node.\n   *\n   * @constructor\n   * @property {Object} start\n   * @property {Object} end\n   * @property {undefined|String} source\n   */ function Position(start) {\n        this.start = start;\n        this.end = {\n            line: lineno,\n            column: column\n        };\n        this.source = options.source;\n    }\n    /**\n   * Non-enumerable source string.\n   */ Position.prototype.content = style;\n    var errorsList = [];\n    /**\n   * Error `msg`.\n   *\n   * @param {String} msg\n   * @throws {Error}\n   */ function error(msg) {\n        var err = new Error(options.source + \":\" + lineno + \":\" + column + \": \" + msg);\n        err.reason = msg;\n        err.filename = options.source;\n        err.line = lineno;\n        err.column = column;\n        err.source = style;\n        if (options.silent) {\n            errorsList.push(err);\n        } else {\n            throw err;\n        }\n    }\n    /**\n   * Match `re` and return captures.\n   *\n   * @param {RegExp} re\n   * @return {undefined|Array}\n   */ function match(re) {\n        var m = re.exec(style);\n        if (!m) return;\n        var str = m[0];\n        updatePosition(str);\n        style = style.slice(str.length);\n        return m;\n    }\n    /**\n   * Parse whitespace.\n   */ function whitespace() {\n        match(WHITESPACE_REGEX);\n    }\n    /**\n   * Parse comments.\n   *\n   * @param {Object[]} [rules]\n   * @return {Object[]}\n   */ function comments(rules) {\n        var c;\n        rules = rules || [];\n        while(c = comment()){\n            if (c !== false) {\n                rules.push(c);\n            }\n        }\n        return rules;\n    }\n    /**\n   * Parse comment.\n   *\n   * @return {Object}\n   * @throws {Error}\n   */ function comment() {\n        var pos = position();\n        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;\n        var i = 2;\n        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){\n            ++i;\n        }\n        i += 2;\n        if (EMPTY_STRING === style.charAt(i - 1)) {\n            return error(\"End of comment missing\");\n        }\n        var str = style.slice(2, i - 2);\n        column += 2;\n        updatePosition(str);\n        style = style.slice(i);\n        column += 2;\n        return pos({\n            type: TYPE_COMMENT,\n            comment: str\n        });\n    }\n    /**\n   * Parse declaration.\n   *\n   * @return {Object}\n   * @throws {Error}\n   */ function declaration() {\n        var pos = position();\n        // prop\n        var prop = match(PROPERTY_REGEX);\n        if (!prop) return;\n        comment();\n        // :\n        if (!match(COLON_REGEX)) return error(\"property missing ':'\");\n        // val\n        var val = match(VALUE_REGEX);\n        var ret = pos({\n            type: TYPE_DECLARATION,\n            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),\n            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING\n        });\n        // ;\n        match(SEMICOLON_REGEX);\n        return ret;\n    }\n    /**\n   * Parse declarations.\n   *\n   * @return {Object[]}\n   */ function declarations() {\n        var decls = [];\n        comments(decls);\n        // declarations\n        var decl;\n        while(decl = declaration()){\n            if (decl !== false) {\n                decls.push(decl);\n                comments(decls);\n            }\n        }\n        return decls;\n    }\n    whitespace();\n    return declarations();\n};\n/**\n * Trim `str`.\n *\n * @param {String} str\n * @return {String}\n */ function trim(str) {\n    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXBhcnNlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUMseUVBQXlFOztBQUN6RSxJQUFJQSxnQkFBZ0I7QUFFcEIsSUFBSUMsZ0JBQWdCO0FBQ3BCLElBQUlDLG1CQUFtQjtBQUV2QixjQUFjO0FBQ2QsSUFBSUMsaUJBQWlCO0FBQ3JCLElBQUlDLGNBQWM7QUFDbEIsSUFBSUMsY0FBYztBQUNsQixJQUFJQyxrQkFBa0I7QUFFdEIsa0dBQWtHO0FBQ2xHLElBQUlDLGFBQWE7QUFFakIsVUFBVTtBQUNWLElBQUlDLFVBQVU7QUFDZCxJQUFJQyxnQkFBZ0I7QUFDcEIsSUFBSUMsV0FBVztBQUNmLElBQUlDLGVBQWU7QUFFbkIsUUFBUTtBQUNSLElBQUlDLGVBQWU7QUFDbkIsSUFBSUMsbUJBQW1CO0FBRXZCOzs7Ozs7Q0FNQyxHQUNEQyxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3ZDLElBQUksT0FBT0QsVUFBVSxVQUFVO1FBQzdCLE1BQU0sSUFBSUUsVUFBVTtJQUN0QjtJQUVBLElBQUksQ0FBQ0YsT0FBTyxPQUFPLEVBQUU7SUFFckJDLFVBQVVBLFdBQVcsQ0FBQztJQUV0Qjs7R0FFQyxHQUNELElBQUlFLFNBQVM7SUFDYixJQUFJQyxTQUFTO0lBRWI7Ozs7R0FJQyxHQUNELFNBQVNDLGVBQWVDLEdBQUc7UUFDekIsSUFBSUMsUUFBUUQsSUFBSUUsS0FBSyxDQUFDdkI7UUFDdEIsSUFBSXNCLE9BQU9KLFVBQVVJLE1BQU1FLE1BQU07UUFDakMsSUFBSUMsSUFBSUosSUFBSUssV0FBVyxDQUFDbkI7UUFDeEJZLFNBQVMsQ0FBQ00sSUFBSUosSUFBSUcsTUFBTSxHQUFHQyxJQUFJTixTQUFTRSxJQUFJRyxNQUFNO0lBQ3BEO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNHO1FBQ1AsSUFBSUMsUUFBUTtZQUFFQyxNQUFNWDtZQUFRQyxRQUFRQTtRQUFPO1FB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TixJQUFJO1lBQ1pFLE1BQU01QztZQUNOaUQsVUFBVUMsS0FBS0osSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssT0FBTyxDQUFDaEUsZUFBZVc7WUFDOUNzRCxPQUFPTCxNQUNIRyxLQUFLSCxHQUFHLENBQUMsRUFBRSxDQUFDSSxPQUFPLENBQUNoRSxlQUFlVyxpQkFDbkNBO1FBQ047UUFFQSxJQUFJO1FBQ0phLE1BQU1sQjtRQUVOLE9BQU91RDtJQUNUO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNLO1FBQ1AsSUFBSUMsUUFBUSxFQUFFO1FBRWRoQixTQUFTZ0I7UUFFVCxlQUFlO1FBQ2YsSUFBSUM7UUFDSixNQUFRQSxPQUFPVixjQUFnQjtZQUM3QixJQUFJVSxTQUFTLE9BQU87Z0JBQ2xCRCxNQUFNckIsSUFBSSxDQUFDc0I7Z0JBQ1hqQixTQUFTZ0I7WUFDWDtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBbEM7SUFDQSxPQUFPaUM7QUFDVDtBQUVBOzs7OztDQUtDLEdBQ0QsU0FBU0gsS0FBS3pDLEdBQUc7SUFDZixPQUFPQSxNQUFNQSxJQUFJMEMsT0FBTyxDQUFDekQsWUFBWUksZ0JBQWdCQTtBQUN2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3VpLXN0dWR5Ly4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wYXJzZXIvaW5kZXguanM/NWRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9ncmFtbWFyLmh0bWxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9jc3MtcGFyc2UvcHVsbC80OSNpc3N1ZWNvbW1lbnQtMzAwODgwMjdcbnZhciBDT01NRU5UX1JFR0VYID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2c7XG5cbnZhciBORVdMSU5FX1JFR0VYID0gL1xcbi9nO1xudmFyIFdISVRFU1BBQ0VfUkVHRVggPSAvXlxccyovO1xuXG4vLyBkZWNsYXJhdGlvblxudmFyIFBST1BFUlRZX1JFR0VYID0gL14oXFwqP1stIy8qXFxcXFxcd10rKFxcW1swLTlhLXpfLV0rXFxdKT8pXFxzKi87XG52YXIgQ09MT05fUkVHRVggPSAvXjpcXHMqLztcbnZhciBWQUxVRV9SRUdFWCA9IC9eKCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTtdKSspLztcbnZhciBTRU1JQ09MT05fUkVHRVggPSAvXls7XFxzXSovO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvVHJpbSNQb2x5ZmlsbFxudmFyIFRSSU1fUkVHRVggPSAvXlxccyt8XFxzKyQvZztcblxuLy8gc3RyaW5nc1xudmFyIE5FV0xJTkUgPSAnXFxuJztcbnZhciBGT1JXQVJEX1NMQVNIID0gJy8nO1xudmFyIEFTVEVSSVNLID0gJyonO1xudmFyIEVNUFRZX1NUUklORyA9ICcnO1xuXG4vLyB0eXBlc1xudmFyIFRZUEVfQ09NTUVOVCA9ICdjb21tZW50JztcbnZhciBUWVBFX0RFQ0xBUkFUSU9OID0gJ2RlY2xhcmF0aW9uJztcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSkgcmV0dXJuIFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbmFsLlxuICAgKi9cbiAgdmFyIGxpbmVubyA9IDE7XG4gIHZhciBjb2x1bW4gPSAxO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgbGluZW5vIGFuZCBjb2x1bW4gYmFzZWQgb24gYHN0cmAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN0cikge1xuICAgIHZhciBsaW5lcyA9IHN0ci5tYXRjaChORVdMSU5FX1JFR0VYKTtcbiAgICBpZiAobGluZXMpIGxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgdmFyIGkgPSBzdHIubGFzdEluZGV4T2YoTkVXTElORSk7XG4gICAgY29sdW1uID0gfmkgPyBzdHIubGVuZ3RoIC0gaSA6IGNvbHVtbiArIHN0ci5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogTWFyayBwb3NpdGlvbiBhbmQgcGF0Y2ggYG5vZGUucG9zaXRpb25gLlxuICAgKlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihzdGFydCk7XG4gICAgICB3aGl0ZXNwYWNlKCk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIG5vZGUuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gc3RhcnRcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGVuZFxuICAgKiBAcHJvcGVydHkge3VuZGVmaW5lZHxTdHJpbmd9IHNvdXJjZVxuICAgKi9cbiAgZnVuY3Rpb24gUG9zaXRpb24oc3RhcnQpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcbiAgICB0aGlzLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vbi1lbnVtZXJhYmxlIHNvdXJjZSBzdHJpbmcuXG4gICAqL1xuICBQb3NpdGlvbi5wcm90b3R5cGUuY29udGVudCA9IHN0eWxlO1xuXG4gIHZhciBlcnJvcnNMaXN0ID0gW107XG5cbiAgLyoqXG4gICAqIEVycm9yIGBtc2dgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgIG9wdGlvbnMuc291cmNlICsgJzonICsgbGluZW5vICsgJzonICsgY29sdW1uICsgJzogJyArIG1zZ1xuICAgICk7XG4gICAgZXJyLnJlYXNvbiA9IG1zZztcbiAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcbiAgICBlcnIubGluZSA9IGxpbmVubztcbiAgICBlcnIuY29sdW1uID0gY29sdW1uO1xuICAgIGVyci5zb3VyY2UgPSBzdHlsZTtcblxuICAgIGlmIChvcHRpb25zLnNpbGVudCkge1xuICAgICAgZXJyb3JzTGlzdC5wdXNoKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWF0Y2ggYHJlYCBhbmQgcmV0dXJuIGNhcHR1cmVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3R5bGUpO1xuICAgIGlmICghbSkgcmV0dXJuO1xuICAgIHZhciBzdHIgPSBtWzBdO1xuICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XG4gICAgc3R5bGUgPSBzdHlsZS5zbGljZShzdHIubGVuZ3RoKTtcbiAgICByZXR1cm4gbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB3aGl0ZXNwYWNlLlxuICAgKi9cbiAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcbiAgICBtYXRjaChXSElURVNQQUNFX1JFR0VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBjb21tZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gW3J1bGVzXVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbW1lbnRzKHJ1bGVzKSB7XG4gICAgdmFyIGM7XG4gICAgcnVsZXMgPSBydWxlcyB8fCBbXTtcbiAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XG4gICAgICBpZiAoYyAhPT0gZmFsc2UpIHtcbiAgICAgICAgcnVsZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGNvbW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQHRocm93cyB7RXJyb3J9XG4gICAqL1xuICBmdW5jdGlvbiBjb21tZW50KCkge1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgIGlmIChGT1JXQVJEX1NMQVNIICE9IHN0eWxlLmNoYXJBdCgwKSB8fCBBU1RFUklTSyAhPSBzdHlsZS5jaGFyQXQoMSkpIHJldHVybjtcblxuICAgIHZhciBpID0gMjtcbiAgICB3aGlsZSAoXG4gICAgICBFTVBUWV9TVFJJTkcgIT0gc3R5bGUuY2hhckF0KGkpICYmXG4gICAgICAoQVNURVJJU0sgIT0gc3R5bGUuY2hhckF0KGkpIHx8IEZPUldBUkRfU0xBU0ggIT0gc3R5bGUuY2hhckF0KGkgKyAxKSlcbiAgICApIHtcbiAgICAgICsraTtcbiAgICB9XG4gICAgaSArPSAyO1xuXG4gICAgaWYgKEVNUFRZX1NUUklORyA9PT0gc3R5bGUuY2hhckF0KGkgLSAxKSkge1xuICAgICAgcmV0dXJuIGVycm9yKCdFbmQgb2YgY29tbWVudCBtaXNzaW5nJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IHN0eWxlLnNsaWNlKDIsIGkgLSAyKTtcbiAgICBjb2x1bW4gKz0gMjtcbiAgICB1cGRhdGVQb3NpdGlvbihzdHIpO1xuICAgIHN0eWxlID0gc3R5bGUuc2xpY2UoaSk7XG4gICAgY29sdW1uICs9IDI7XG5cbiAgICByZXR1cm4gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfQ09NTUVOVCxcbiAgICAgIGNvbW1lbnQ6IHN0clxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG5cbiAgICAvLyBwcm9wXG4gICAgdmFyIHByb3AgPSBtYXRjaChQUk9QRVJUWV9SRUdFWCk7XG4gICAgaWYgKCFwcm9wKSByZXR1cm47XG4gICAgY29tbWVudCgpO1xuXG4gICAgLy8gOlxuICAgIGlmICghbWF0Y2goQ09MT05fUkVHRVgpKSByZXR1cm4gZXJyb3IoXCJwcm9wZXJ0eSBtaXNzaW5nICc6J1wiKTtcblxuICAgIC8vIHZhbFxuICAgIHZhciB2YWwgPSBtYXRjaChWQUxVRV9SRUdFWCk7XG5cbiAgICB2YXIgcmV0ID0gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfREVDTEFSQVRJT04sXG4gICAgICBwcm9wZXJ0eTogdHJpbShwcm9wWzBdLnJlcGxhY2UoQ09NTUVOVF9SRUdFWCwgRU1QVFlfU1RSSU5HKSksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgICAgID8gdHJpbSh2YWxbMF0ucmVwbGFjZShDT01NRU5UX1JFR0VYLCBFTVBUWV9TVFJJTkcpKVxuICAgICAgICA6IEVNUFRZX1NUUklOR1xuICAgIH0pO1xuXG4gICAgLy8gO1xuICAgIG1hdGNoKFNFTUlDT0xPTl9SRUdFWCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9ucy5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0W119XG4gICAqL1xuICBmdW5jdGlvbiBkZWNsYXJhdGlvbnMoKSB7XG4gICAgdmFyIGRlY2xzID0gW107XG5cbiAgICBjb21tZW50cyhkZWNscyk7XG5cbiAgICAvLyBkZWNsYXJhdGlvbnNcbiAgICB2YXIgZGVjbDtcbiAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xuICAgICAgaWYgKGRlY2wgIT09IGZhbHNlKSB7XG4gICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XG4gICAgICAgIGNvbW1lbnRzKGRlY2xzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbHM7XG4gIH1cblxuICB3aGl0ZXNwYWNlKCk7XG4gIHJldHVybiBkZWNsYXJhdGlvbnMoKTtcbn07XG5cbi8qKlxuICogVHJpbSBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIgPyBzdHIucmVwbGFjZShUUklNX1JFR0VYLCBFTVBUWV9TVFJJTkcpIDogRU1QVFlfU1RSSU5HO1xufVxuIl0sIm5hbWVzIjpbIkNPTU1FTlRfUkVHRVgiLCJORVdMSU5FX1JFR0VYIiwiV0hJVEVTUEFDRV9SRUdFWCIsIlBST1BFUlRZX1JFR0VYIiwiQ09MT05fUkVHRVgiLCJWQUxVRV9SRUdFWCIsIlNFTUlDT0xPTl9SRUdFWCIsIlRSSU1fUkVHRVgiLCJORVdMSU5FIiwiRk9SV0FSRF9TTEFTSCIsIkFTVEVSSVNLIiwiRU1QVFlfU1RSSU5HIiwiVFlQRV9DT01NRU5UIiwiVFlQRV9ERUNMQVJBVElPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZSIsIm9wdGlvbnMiLCJUeXBlRXJyb3IiLCJsaW5lbm8iLCJjb2x1bW4iLCJ1cGRhdGVQb3NpdGlvbiIsInN0ciIsImxpbmVzIiwibWF0Y2giLCJsZW5ndGgiLCJpIiwibGFzdEluZGV4T2YiLCJwb3NpdGlvbiIsInN0YXJ0IiwibGluZSIsIm5vZGUiLCJQb3NpdGlvbiIsIndoaXRlc3BhY2UiLCJlbmQiLCJzb3VyY2UiLCJwcm90b3R5cGUiLCJjb250ZW50IiwiZXJyb3JzTGlzdCIsImVycm9yIiwibXNnIiwiZXJyIiwiRXJyb3IiLCJyZWFzb24iLCJmaWxlbmFtZSIsInNpbGVudCIsInB1c2giLCJyZSIsIm0iLCJleGVjIiwic2xpY2UiLCJjb21tZW50cyIsInJ1bGVzIiwiYyIsImNvbW1lbnQiLCJwb3MiLCJjaGFyQXQiLCJ0eXBlIiwiZGVjbGFyYXRpb24iLCJwcm9wIiwidmFsIiwicmV0IiwicHJvcGVydHkiLCJ0cmltIiwicmVwbGFjZSIsInZhbHVlIiwiZGVjbGFyYXRpb25zIiwiZGVjbHMiLCJkZWNsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/inline-style-parser/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("// http://www.w3.org/TR/CSS21/grammar.html\n// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027\n\nvar COMMENT_REGEX = /\\/\\*[^*]*\\*+([^/*][^*]*\\*+)*\\//g;\nvar NEWLINE_REGEX = /\\n/g;\nvar WHITESPACE_REGEX = /^\\s*/;\n// declaration\nvar PROPERTY_REGEX = /^(\\*?[-#/*\\\\\\w]+(\\[[0-9a-z_-]+\\])?)\\s*/;\nvar COLON_REGEX = /^:\\s*/;\nvar VALUE_REGEX = /^((?:'(?:\\\\'|.)*?'|\"(?:\\\\\"|.)*?\"|\\([^)]*?\\)|[^};])+)/;\nvar SEMICOLON_REGEX = /^[;\\s]*/;\n// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill\nvar TRIM_REGEX = /^\\s+|\\s+$/g;\n// strings\nvar NEWLINE = \"\\n\";\nvar FORWARD_SLASH = \"/\";\nvar ASTERISK = \"*\";\nvar EMPTY_STRING = \"\";\n// types\nvar TYPE_COMMENT = \"comment\";\nvar TYPE_DECLARATION = \"declaration\";\n/**\n * @param {String} style\n * @param {Object} [options]\n * @return {Object[]}\n * @throws {TypeError}\n * @throws {Error}\n */ module.exports = function(style, options) {\n    if (typeof style !== \"string\") {\n        throw new TypeError(\"First argument must be a string\");\n    }\n    if (!style) return [];\n    options = options || {};\n    /**\n   * Positional.\n   */ var lineno = 1;\n    var column = 1;\n    /**\n   * Update lineno and column based on `str`.\n   *\n   * @param {String} str\n   */ function updatePosition(str) {\n        var lines = str.match(NEWLINE_REGEX);\n        if (lines) lineno += lines.length;\n        var i = str.lastIndexOf(NEWLINE);\n        column = ~i ? str.length - i : column + str.length;\n    }\n    /**\n   * Mark position and patch `node.position`.\n   *\n   * @return {Function}\n   */ function position() {\n        var start = {\n            line: lineno,\n            column: column\n        };\n        return function(node) {\n            node.position = new Position(start);\n            whitespace();\n            return node;\n        };\n    }\n    /**\n   * Store position information for a node.\n   *\n   * @constructor\n   * @property {Object} start\n   * @property {Object} end\n   * @property {undefined|String} source\n   */ function Position(start) {\n        this.start = start;\n        this.end = {\n            line: lineno,\n            column: column\n        };\n        this.source = options.source;\n    }\n    /**\n   * Non-enumerable source string.\n   */ Position.prototype.content = style;\n    var errorsList = [];\n    /**\n   * Error `msg`.\n   *\n   * @param {String} msg\n   * @throws {Error}\n   */ function error(msg) {\n        var err = new Error(options.source + \":\" + lineno + \":\" + column + \": \" + msg);\n        err.reason = msg;\n        err.filename = options.source;\n        err.line = lineno;\n        err.column = column;\n        err.source = style;\n        if (options.silent) {\n            errorsList.push(err);\n        } else {\n            throw err;\n        }\n    }\n    /**\n   * Match `re` and return captures.\n   *\n   * @param {RegExp} re\n   * @return {undefined|Array}\n   */ function match(re) {\n        var m = re.exec(style);\n        if (!m) return;\n        var str = m[0];\n        updatePosition(str);\n        style = style.slice(str.length);\n        return m;\n    }\n    /**\n   * Parse whitespace.\n   */ function whitespace() {\n        match(WHITESPACE_REGEX);\n    }\n    /**\n   * Parse comments.\n   *\n   * @param {Object[]} [rules]\n   * @return {Object[]}\n   */ function comments(rules) {\n        var c;\n        rules = rules || [];\n        while(c = comment()){\n            if (c !== false) {\n                rules.push(c);\n            }\n        }\n        return rules;\n    }\n    /**\n   * Parse comment.\n   *\n   * @return {Object}\n   * @throws {Error}\n   */ function comment() {\n        var pos = position();\n        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;\n        var i = 2;\n        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){\n            ++i;\n        }\n        i += 2;\n        if (EMPTY_STRING === style.charAt(i - 1)) {\n            return error(\"End of comment missing\");\n        }\n        var str = style.slice(2, i - 2);\n        column += 2;\n        updatePosition(str);\n        style = style.slice(i);\n        column += 2;\n        return pos({\n            type: TYPE_COMMENT,\n            comment: str\n        });\n    }\n    /**\n   * Parse declaration.\n   *\n   * @return {Object}\n   * @throws {Error}\n   */ function declaration() {\n        var pos = position();\n        // prop\n        var prop = match(PROPERTY_REGEX);\n        if (!prop) return;\n        comment();\n        // :\n        if (!match(COLON_REGEX)) return error(\"property missing ':'\");\n        // val\n        var val = match(VALUE_REGEX);\n        var ret = pos({\n            type: TYPE_DECLARATION,\n            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),\n            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING\n        });\n        // ;\n        match(SEMICOLON_REGEX);\n        return ret;\n    }\n    /**\n   * Parse declarations.\n   *\n   * @return {Object[]}\n   */ function declarations() {\n        var decls = [];\n        comments(decls);\n        // declarations\n        var decl;\n        while(decl = declaration()){\n            if (decl !== false) {\n                decls.push(decl);\n                comments(decls);\n            }\n        }\n        return decls;\n    }\n    whitespace();\n    return declarations();\n};\n/**\n * Trim `str`.\n *\n * @param {String} str\n * @return {String}\n */ function trim(str) {\n    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXBhcnNlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUMseUVBQXlFOztBQUN6RSxJQUFJQSxnQkFBZ0I7QUFFcEIsSUFBSUMsZ0JBQWdCO0FBQ3BCLElBQUlDLG1CQUFtQjtBQUV2QixjQUFjO0FBQ2QsSUFBSUMsaUJBQWlCO0FBQ3JCLElBQUlDLGNBQWM7QUFDbEIsSUFBSUMsY0FBYztBQUNsQixJQUFJQyxrQkFBa0I7QUFFdEIsa0dBQWtHO0FBQ2xHLElBQUlDLGFBQWE7QUFFakIsVUFBVTtBQUNWLElBQUlDLFVBQVU7QUFDZCxJQUFJQyxnQkFBZ0I7QUFDcEIsSUFBSUMsV0FBVztBQUNmLElBQUlDLGVBQWU7QUFFbkIsUUFBUTtBQUNSLElBQUlDLGVBQWU7QUFDbkIsSUFBSUMsbUJBQW1CO0FBRXZCOzs7Ozs7Q0FNQyxHQUNEQyxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3ZDLElBQUksT0FBT0QsVUFBVSxVQUFVO1FBQzdCLE1BQU0sSUFBSUUsVUFBVTtJQUN0QjtJQUVBLElBQUksQ0FBQ0YsT0FBTyxPQUFPLEVBQUU7SUFFckJDLFVBQVVBLFdBQVcsQ0FBQztJQUV0Qjs7R0FFQyxHQUNELElBQUlFLFNBQVM7SUFDYixJQUFJQyxTQUFTO0lBRWI7Ozs7R0FJQyxHQUNELFNBQVNDLGVBQWVDLEdBQUc7UUFDekIsSUFBSUMsUUFBUUQsSUFBSUUsS0FBSyxDQUFDdkI7UUFDdEIsSUFBSXNCLE9BQU9KLFVBQVVJLE1BQU1FLE1BQU07UUFDakMsSUFBSUMsSUFBSUosSUFBSUssV0FBVyxDQUFDbkI7UUFDeEJZLFNBQVMsQ0FBQ00sSUFBSUosSUFBSUcsTUFBTSxHQUFHQyxJQUFJTixTQUFTRSxJQUFJRyxNQUFNO0lBQ3BEO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNHO1FBQ1AsSUFBSUMsUUFBUTtZQUFFQyxNQUFNWDtZQUFRQyxRQUFRQTtRQUFPO1FB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TixJQUFJO1lBQ1pFLE1BQU01QztZQUNOaUQsVUFBVUMsS0FBS0osSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssT0FBTyxDQUFDaEUsZUFBZVc7WUFDOUNzRCxPQUFPTCxNQUNIRyxLQUFLSCxHQUFHLENBQUMsRUFBRSxDQUFDSSxPQUFPLENBQUNoRSxlQUFlVyxpQkFDbkNBO1FBQ047UUFFQSxJQUFJO1FBQ0phLE1BQU1sQjtRQUVOLE9BQU91RDtJQUNUO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNLO1FBQ1AsSUFBSUMsUUFBUSxFQUFFO1FBRWRoQixTQUFTZ0I7UUFFVCxlQUFlO1FBQ2YsSUFBSUM7UUFDSixNQUFRQSxPQUFPVixjQUFnQjtZQUM3QixJQUFJVSxTQUFTLE9BQU87Z0JBQ2xCRCxNQUFNckIsSUFBSSxDQUFDc0I7Z0JBQ1hqQixTQUFTZ0I7WUFDWDtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBbEM7SUFDQSxPQUFPaUM7QUFDVDtBQUVBOzs7OztDQUtDLEdBQ0QsU0FBU0gsS0FBS3pDLEdBQUc7SUFDZixPQUFPQSxNQUFNQSxJQUFJMEMsT0FBTyxDQUFDekQsWUFBWUksZ0JBQWdCQTtBQUN2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3VpLXN0dWR5Ly4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wYXJzZXIvaW5kZXguanM/NWRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9ncmFtbWFyLmh0bWxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9jc3MtcGFyc2UvcHVsbC80OSNpc3N1ZWNvbW1lbnQtMzAwODgwMjdcbnZhciBDT01NRU5UX1JFR0VYID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2c7XG5cbnZhciBORVdMSU5FX1JFR0VYID0gL1xcbi9nO1xudmFyIFdISVRFU1BBQ0VfUkVHRVggPSAvXlxccyovO1xuXG4vLyBkZWNsYXJhdGlvblxudmFyIFBST1BFUlRZX1JFR0VYID0gL14oXFwqP1stIy8qXFxcXFxcd10rKFxcW1swLTlhLXpfLV0rXFxdKT8pXFxzKi87XG52YXIgQ09MT05fUkVHRVggPSAvXjpcXHMqLztcbnZhciBWQUxVRV9SRUdFWCA9IC9eKCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTtdKSspLztcbnZhciBTRU1JQ09MT05fUkVHRVggPSAvXls7XFxzXSovO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvVHJpbSNQb2x5ZmlsbFxudmFyIFRSSU1fUkVHRVggPSAvXlxccyt8XFxzKyQvZztcblxuLy8gc3RyaW5nc1xudmFyIE5FV0xJTkUgPSAnXFxuJztcbnZhciBGT1JXQVJEX1NMQVNIID0gJy8nO1xudmFyIEFTVEVSSVNLID0gJyonO1xudmFyIEVNUFRZX1NUUklORyA9ICcnO1xuXG4vLyB0eXBlc1xudmFyIFRZUEVfQ09NTUVOVCA9ICdjb21tZW50JztcbnZhciBUWVBFX0RFQ0xBUkFUSU9OID0gJ2RlY2xhcmF0aW9uJztcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogQHRocm93cyB7VHlwZUVycm9yfVxuICogQHRocm93cyB7RXJyb3J9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSkgcmV0dXJuIFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbmFsLlxuICAgKi9cbiAgdmFyIGxpbmVubyA9IDE7XG4gIHZhciBjb2x1bW4gPSAxO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgbGluZW5vIGFuZCBjb2x1bW4gYmFzZWQgb24gYHN0cmAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN0cikge1xuICAgIHZhciBsaW5lcyA9IHN0ci5tYXRjaChORVdMSU5FX1JFR0VYKTtcbiAgICBpZiAobGluZXMpIGxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgdmFyIGkgPSBzdHIubGFzdEluZGV4T2YoTkVXTElORSk7XG4gICAgY29sdW1uID0gfmkgPyBzdHIubGVuZ3RoIC0gaSA6IGNvbHVtbiArIHN0ci5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogTWFyayBwb3NpdGlvbiBhbmQgcGF0Y2ggYG5vZGUucG9zaXRpb25gLlxuICAgKlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihzdGFydCk7XG4gICAgICB3aGl0ZXNwYWNlKCk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIG5vZGUuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gc3RhcnRcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGVuZFxuICAgKiBAcHJvcGVydHkge3VuZGVmaW5lZHxTdHJpbmd9IHNvdXJjZVxuICAgKi9cbiAgZnVuY3Rpb24gUG9zaXRpb24oc3RhcnQpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcbiAgICB0aGlzLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vbi1lbnVtZXJhYmxlIHNvdXJjZSBzdHJpbmcuXG4gICAqL1xuICBQb3NpdGlvbi5wcm90b3R5cGUuY29udGVudCA9IHN0eWxlO1xuXG4gIHZhciBlcnJvcnNMaXN0ID0gW107XG5cbiAgLyoqXG4gICAqIEVycm9yIGBtc2dgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgIG9wdGlvbnMuc291cmNlICsgJzonICsgbGluZW5vICsgJzonICsgY29sdW1uICsgJzogJyArIG1zZ1xuICAgICk7XG4gICAgZXJyLnJlYXNvbiA9IG1zZztcbiAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcbiAgICBlcnIubGluZSA9IGxpbmVubztcbiAgICBlcnIuY29sdW1uID0gY29sdW1uO1xuICAgIGVyci5zb3VyY2UgPSBzdHlsZTtcblxuICAgIGlmIChvcHRpb25zLnNpbGVudCkge1xuICAgICAgZXJyb3JzTGlzdC5wdXNoKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWF0Y2ggYHJlYCBhbmQgcmV0dXJuIGNhcHR1cmVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3R5bGUpO1xuICAgIGlmICghbSkgcmV0dXJuO1xuICAgIHZhciBzdHIgPSBtWzBdO1xuICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XG4gICAgc3R5bGUgPSBzdHlsZS5zbGljZShzdHIubGVuZ3RoKTtcbiAgICByZXR1cm4gbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB3aGl0ZXNwYWNlLlxuICAgKi9cbiAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcbiAgICBtYXRjaChXSElURVNQQUNFX1JFR0VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBjb21tZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gW3J1bGVzXVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbW1lbnRzKHJ1bGVzKSB7XG4gICAgdmFyIGM7XG4gICAgcnVsZXMgPSBydWxlcyB8fCBbXTtcbiAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XG4gICAgICBpZiAoYyAhPT0gZmFsc2UpIHtcbiAgICAgICAgcnVsZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGNvbW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQHRocm93cyB7RXJyb3J9XG4gICAqL1xuICBmdW5jdGlvbiBjb21tZW50KCkge1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgIGlmIChGT1JXQVJEX1NMQVNIICE9IHN0eWxlLmNoYXJBdCgwKSB8fCBBU1RFUklTSyAhPSBzdHlsZS5jaGFyQXQoMSkpIHJldHVybjtcblxuICAgIHZhciBpID0gMjtcbiAgICB3aGlsZSAoXG4gICAgICBFTVBUWV9TVFJJTkcgIT0gc3R5bGUuY2hhckF0KGkpICYmXG4gICAgICAoQVNURVJJU0sgIT0gc3R5bGUuY2hhckF0KGkpIHx8IEZPUldBUkRfU0xBU0ggIT0gc3R5bGUuY2hhckF0KGkgKyAxKSlcbiAgICApIHtcbiAgICAgICsraTtcbiAgICB9XG4gICAgaSArPSAyO1xuXG4gICAgaWYgKEVNUFRZX1NUUklORyA9PT0gc3R5bGUuY2hhckF0KGkgLSAxKSkge1xuICAgICAgcmV0dXJuIGVycm9yKCdFbmQgb2YgY29tbWVudCBtaXNzaW5nJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IHN0eWxlLnNsaWNlKDIsIGkgLSAyKTtcbiAgICBjb2x1bW4gKz0gMjtcbiAgICB1cGRhdGVQb3NpdGlvbihzdHIpO1xuICAgIHN0eWxlID0gc3R5bGUuc2xpY2UoaSk7XG4gICAgY29sdW1uICs9IDI7XG5cbiAgICByZXR1cm4gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfQ09NTUVOVCxcbiAgICAgIGNvbW1lbnQ6IHN0clxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG5cbiAgICAvLyBwcm9wXG4gICAgdmFyIHByb3AgPSBtYXRjaChQUk9QRVJUWV9SRUdFWCk7XG4gICAgaWYgKCFwcm9wKSByZXR1cm47XG4gICAgY29tbWVudCgpO1xuXG4gICAgLy8gOlxuICAgIGlmICghbWF0Y2goQ09MT05fUkVHRVgpKSByZXR1cm4gZXJyb3IoXCJwcm9wZXJ0eSBtaXNzaW5nICc6J1wiKTtcblxuICAgIC8vIHZhbFxuICAgIHZhciB2YWwgPSBtYXRjaChWQUxVRV9SRUdFWCk7XG5cbiAgICB2YXIgcmV0ID0gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfREVDTEFSQVRJT04sXG4gICAgICBwcm9wZXJ0eTogdHJpbShwcm9wWzBdLnJlcGxhY2UoQ09NTUVOVF9SRUdFWCwgRU1QVFlfU1RSSU5HKSksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgICAgID8gdHJpbSh2YWxbMF0ucmVwbGFjZShDT01NRU5UX1JFR0VYLCBFTVBUWV9TVFJJTkcpKVxuICAgICAgICA6IEVNUFRZX1NUUklOR1xuICAgIH0pO1xuXG4gICAgLy8gO1xuICAgIG1hdGNoKFNFTUlDT0xPTl9SRUdFWCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9ucy5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0W119XG4gICAqL1xuICBmdW5jdGlvbiBkZWNsYXJhdGlvbnMoKSB7XG4gICAgdmFyIGRlY2xzID0gW107XG5cbiAgICBjb21tZW50cyhkZWNscyk7XG5cbiAgICAvLyBkZWNsYXJhdGlvbnNcbiAgICB2YXIgZGVjbDtcbiAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xuICAgICAgaWYgKGRlY2wgIT09IGZhbHNlKSB7XG4gICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XG4gICAgICAgIGNvbW1lbnRzKGRlY2xzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbHM7XG4gIH1cblxuICB3aGl0ZXNwYWNlKCk7XG4gIHJldHVybiBkZWNsYXJhdGlvbnMoKTtcbn07XG5cbi8qKlxuICogVHJpbSBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIgPyBzdHIucmVwbGFjZShUUklNX1JFR0VYLCBFTVBUWV9TVFJJTkcpIDogRU1QVFlfU1RSSU5HO1xufVxuIl0sIm5hbWVzIjpbIkNPTU1FTlRfUkVHRVgiLCJORVdMSU5FX1JFR0VYIiwiV0hJVEVTUEFDRV9SRUdFWCIsIlBST1BFUlRZX1JFR0VYIiwiQ09MT05fUkVHRVgiLCJWQUxVRV9SRUdFWCIsIlNFTUlDT0xPTl9SRUdFWCIsIlRSSU1fUkVHRVgiLCJORVdMSU5FIiwiRk9SV0FSRF9TTEFTSCIsIkFTVEVSSVNLIiwiRU1QVFlfU1RSSU5HIiwiVFlQRV9DT01NRU5UIiwiVFlQRV9ERUNMQVJBVElPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZSIsIm9wdGlvbnMiLCJUeXBlRXJyb3IiLCJsaW5lbm8iLCJjb2x1bW4iLCJ1cGRhdGVQb3NpdGlvbiIsInN0ciIsImxpbmVzIiwibWF0Y2giLCJsZW5ndGgiLCJpIiwibGFzdEluZGV4T2YiLCJwb3NpdGlvbiIsInN0YXJ0IiwibGluZSIsIm5vZGUiLCJQb3NpdGlvbiIsIndoaXRlc3BhY2UiLCJlbmQiLCJzb3VyY2UiLCJwcm90b3R5cGUiLCJjb250ZW50IiwiZXJyb3JzTGlzdCIsImVycm9yIiwibXNnIiwiZXJyIiwiRXJyb3IiLCJyZWFzb24iLCJmaWxlbmFtZSIsInNpbGVudCIsInB1c2giLCJyZSIsIm0iLCJleGVjIiwic2xpY2UiLCJjb21tZW50cyIsInJ1bGVzIiwiYyIsImNvbW1lbnQiLCJwb3MiLCJjaGFyQXQiLCJ0eXBlIiwiZGVjbGFyYXRpb24iLCJwcm9wIiwidmFsIiwicmV0IiwicHJvcGVydHkiLCJ0cmltIiwicmVwbGFjZSIsInZhbHVlIiwiZGVjbGFyYXRpb25zIiwiZGVjbHMiLCJkZWNsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/inline-style-parser/index.js\n");

/***/ })

};
;
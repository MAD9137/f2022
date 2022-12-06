(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{285:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("p",[s._v("Optionals are used in situations where a value may be absent. An optional type either holds a value or nothing (nil) however, accessing an optional with a nil value will cause an error so special handling is required to safely access an optional's payload. In Swift, this has the advantage of allowing the compiler to detect possible exception errors at compile time, which reduces the occurrence of these errors at run time.")]),s._v(" "),t("p",[s._v("Exception errors commonly occur when trying to access a property or call a function on a variable which is set to nil. Swift prevents property access and method calls on optional constants and variables preventing many Exceptions errors. The following code is allowed because Swift knows that the variable cheese can never be nil:")]),s._v(" "),t("div",{staticClass:"language-Swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cheddar"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// safe as count cannot be nil")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" uppercaseCheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uppercased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// safe as cheese cannot be nil")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uppercaseCheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("However the same code fails when using an optional String variable:")]),s._v(" "),t("div",{staticClass:"language-Swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cheddar"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This produces a compilation Error")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" uppercaseCheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uppercased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This produces a compilation Error")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uppercaseCheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("But the following code blocks will work. Can you spot the differences?")]),s._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Force unwrapping an optional")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cheddar"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" uppercaseCheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uppercased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uppercaseCheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Implicitly unwrapped optional")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cheddar"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" uppercaseCheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uppercased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uppercaseCheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("The Swift compiler knows, at compile time, which constants and variables can contain nil. This allows Swift to detect and prevent statements that may result in a nil value.")]),s._v(" "),t("p",[t("strong",[s._v("Considerations:")])]),s._v(" "),t("ul",[t("li",[s._v("All variables in Swift are non-nil-able by default")]),s._v(" "),t("li",[s._v("Optionals are declared by appending "),t("code",[s._v("?")]),s._v(" to the type annotation")]),s._v(" "),t("li",[s._v("If you attempt to assign a nil value to a standard Swift variable the compiler will throw an error")])]),s._v(" "),t("h2",{attrs:{id:"declaration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#declaration"}},[s._v("#")]),s._v(" Declaration")]),s._v(" "),t("div",{staticClass:"language-Swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Assigning nil to a non-optional ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cheddar"')])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This produces a compilation Error")]),s._v("\ncheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token nil constant"}},[s._v("nil")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("To support nil values in constants and variables Swift requires you to declare them as optional (they are allowed to contain nil) when they are created.")]),s._v(" "),t("div",{staticClass:"language-Swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// an optional String")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" nilableCheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cheddar"')])]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// by default will initialize with a nil value")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" nilableCheese"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this is allowed because nilableCheese is ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// an optional which is allowed to contain nil")]),s._v("\nnilableCheese "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token nil constant"}},[s._v("nil")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("Note:")]),s._v(" An optional can be nil or have a legal value for its type")]),s._v(" "),t("h2",{attrs:{id:"safely-accessing-an-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safely-accessing-an-optional"}},[s._v("#")]),s._v(" Safely Accessing an Optional")]),s._v(" "),t("p",[s._v("An optional needs to be unwrapped to safely use its value. Generally, this means employing a method to first check for the presence of a payload and if so, accessing its value.")]),s._v(" "),t("h3",{attrs:{id:"forced-unwrapping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forced-unwrapping"}},[s._v("#")]),s._v(" Forced Unwrapping")]),s._v(" "),t("p",[s._v("Use an if statement to check if an optional contains a value and access the value using forced unwrapping by appending "),t("code",[s._v("!")]),s._v(" to the optional name.")]),s._v(" "),t("div",{staticClass:"language-Swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// create an optional Int")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" optionalInt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Forced unwrapping: up to the developer to make sure the value is not nil")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// standard long form nil check, never force unwrap an optional that’s nil")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" optionalInt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token nil constant"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the ! allows us to pull out the value in an optional type")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" unwrappedInt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" optionalInt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"optional-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-binding"}},[s._v("#")]),s._v(" Optional Binding")]),s._v(" "),t("p",[s._v("A less verbose way to unwrap the value in an optional.  Optional binding provides a method to assign the optional's value to a temporary constant or variable within an "),t("code",[s._v("if")]),s._v(" or "),t("code",[s._v("while")]),s._v(" statement.")]),s._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// create an optional Int")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" optionalInt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// returns true if not nil then creates the unwrappedInt constant as a non-optional")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" unwrappedInt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" optionalInt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unwrappedInt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No value"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("When the condition is true (the optional is not nil) its value is assigned to the constant unwrappedInt. This constant is only available for use within the conditional body, this is its scope, it does not exist outside the conditional body. When the condition is false (the optional is nil) the conditional body is not executed.")]),s._v(" "),t("p",[s._v("This limited scope allows for more concise naming:")]),s._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pat"')])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// scoping allows us to use the same name")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// multiple if let statements are allowed:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" month "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" month"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" day "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" day"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" year "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" year "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n     "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Happy Birthday!"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// only executes if there are no nil values")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("If the original optional is no longer needed after accessing its value, you can use the same name for the new constant/variable.")]),s._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Declare optional")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("420")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// reuse optional name in optional binding")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My number is: ')]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("\\(")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or shorten even more by removing duplicate name")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this may be only available in 5.7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My number is: ')]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("\\(")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"implicitly-unwrapped-optionals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implicitly-unwrapped-optionals"}},[s._v("#")]),s._v(" Implicitly Unwrapped Optionals")]),s._v(" "),t("p",[s._v("Often, the certainty that an optional will always have a value is evident at declaration. Having to force un-wrap or use optional binding each time an optional is accessed can be time consuming so implicitly unwrapping an optional removes the requirement to check for nil. This can be accomplished by replacing "),t("code",[s._v("?")]),s._v(" with "),t("code",[s._v("!")]),s._v(" when declaring the optional.")]),s._v(" "),t("p",[s._v("Implicitly unwrapped optionals are normal optionals but can be used like non-optional values.")]),s._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" possibleNumber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("420")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// no need to force unwrap or use optional binding")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" newNumber "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" possibleNumber\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"guard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guard"}},[s._v("#")]),s._v(" Guard")]),s._v(" "),t("p",[s._v("Similar to an if-else statement, "),t("code",[s._v("guard")]),s._v(" statements control execution flow by testing if a condition is true or false. Unlike an if statement though, "),t("code",[s._v("guard")]),s._v(" always has an else clause where the code it contains is executed if the condition isn't true and control flow is transferred to the code containing the "),t("code",[s._v("guard")]),s._v(" statement. When true, execution continues after the closing brace of the "),t("code",[s._v("guard")]),s._v(" statement.  You can use "),t("code",[s._v("guard let")]),s._v(" to unwrap optionals at the start of a function, and return from the function if the optional is nil:")]),s._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// inside a function body")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("checkName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("guard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userName "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name is nil"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// returns if userName is nil")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name was not nil"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the constant name is scoped for this function")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"nil-coalescing-operator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nil-coalescing-operator"}},[s._v("#")]),s._v(" Nil-coalescing Operator")]),s._v(" "),t("p",[s._v("Another method for checking optionals is to use the nil-coalescing operator "),t("code",[s._v("??")]),s._v(". it will check whether an optional contains a value or not. If there is a value, it unwraps and returns it. Otherwise it returns a default value you provide in code. For example:")]),s._v(" "),t("div",{staticClass:"language-swift line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" middleName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" defaultName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Raya"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" returnedName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" middleName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" defaultName\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("returnedName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"see-also"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[s._v("#")]),s._v(" See Also")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID525",target:"_blank",rel:"noopener noreferrer"}},[s._v("Early Exit — The Swift Programming Language (Swift 5.7)"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID330",target:"_blank",rel:"noopener noreferrer"}},[s._v("Optionals — The Swift Programming Language (Swift 5.7)"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html#ID72",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nil-Coalescing Operator\n— The Swift Programming Language (Swift 5.7)"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://app.pluralsight.com/course-player?clipId=987e8f42-09a6-4ad0-b313-93f26ab082f2",target:"_blank",rel:"noopener noreferrer"}},[s._v("Swift Fundamentals - Optionals - An Introduction "),t("Badge",{attrs:{text:"Pluralsight"}}),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://app.pluralsight.com/course-player?clipId=5ca834db-075b-4290-9f87-1610b838df6f",target:"_blank",rel:"noopener noreferrer"}},[s._v("Swift Fundamentals - Unwrapping Your Optionals "),t("Badge",{attrs:{text:"Pluralsight"}}),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{317:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("Using the InternetConnected class from the previous page we can refactor it so it can be bound to SwiftUI views. While the "),e("code",[t._v("UpdatePathHandler")]),t._v(" updates our "),e("code",[t._v("connected")]),t._v(" property anytime a change in network state occurs it can't be used to trigger updates in our UI.")]),t._v(" "),e("p",[t._v("We'll need to update our class definition so that class instances can take advantage of automatic view updating as values change.")]),t._v(" "),e("h2",{attrs:{id:"define-an-observable-object-with-observableobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-an-observable-object-with-observableobject"}},[t._v("#")]),t._v(" Define an Observable Object with ObservableObject")]),t._v(" "),e("p",[t._v("To refactor our network monitor, we first need to update our class definition to adopt the "),e("code",[t._v("ObservableObject")]),t._v(" protocol.")]),t._v(" "),e("div",{staticClass:"language-swift line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternetConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObservableObject")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code in here...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"publish-properties-for-subscription"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publish-properties-for-subscription"}},[t._v("#")]),t._v(" Publish Properties for Subscription")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("@Published")]),t._v(" attribute indicates that the value associated with a property will be published for subscription.")]),t._v(" "),e("div",{staticClass:"language-swift line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternetConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObservableObject")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@Published")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isConnected "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@Published")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isExpensive "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//rest of code in here...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h2",{attrs:{id:"declare-an-observable-instance-with-stateobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declare-an-observable-instance-with-stateobject"}},[t._v("#")]),t._v(" Declare an Observable Instance with @StateObject")]),t._v(" "),e("p",[e("em",[t._v("From the docs:")])]),t._v(" "),e("blockquote",[e("p",[t._v("A property wrapper type that instantiates an observable object.")])]),t._v(" "),e("p",[t._v("Now that we've refactored our InternetConnection class, we can create observable instances with the "),e("code",[t._v("@StateObject")]),t._v(" property wrapper.")]),t._v(" "),e("div",{staticClass:"language-swift line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@StateObject")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myConnection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternetConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Building on the above we can now observe changes to the "),e("code",[t._v("isConnected")]),t._v(" property and trigger a prompt notifying users when connectivity has been interrupted.")]),t._v(" "),e("div",{staticClass:"language-swift line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an instance")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@StateObject")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myConnection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InternetConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Declare Alert presentation state variable")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@State")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" presentAlert"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bool")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("some")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VStack")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Views in here")]),t._v("\n            \n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when the connection state changes")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onChange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("of"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isConnected"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" perform"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connectionStatus "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n            \n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if connection state is false present alert to user")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" connectionStatus "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                presentAlert "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alert configuration")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Alert Title"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isPresented"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $presentAlert"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" role"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("none")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// once the user interacts with the alert")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it should be dismissed even without the")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next line.")]),t._v("\n                presentAlert "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection to the network has been lost"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br")])]),e("h2",{attrs:{id:"see-also"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),e("p",[t._v("There's some nuance around when to use "),e("code",[t._v("@StateObject")]),t._v(" and "),e("code",[t._v("@ObservedObject")]),t._v(". This nuance is mainly around the idea of which view owns the data being observed. Generally, whichever view is first to create an object should use "),e("code",[t._v("@StateObject")]),t._v(" while subsequent views use "),e("code",[t._v("@ObservedObject")]),t._v(".")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.hackingwithswift.com/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject",target:"_blank",rel:"noopener noreferrer"}},[t._v("What’s the difference between @ObservedObject, @State, and @EnvironmentObject?"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.hackingwithswift.com/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to use @StateObject to create and monitor external objects - a free SwiftUI by Example tutorial"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.apple.com/documentation/combine/observableobject",target:"_blank",rel:"noopener noreferrer"}},[t._v("ObservableObject - Apple Developer Documentation"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.apple.com/documentation/combine/published",target:"_blank",rel:"noopener noreferrer"}},[t._v("Published - Apple Developer Documentation"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.apple.com/documentation/swiftui/stateobject",target:"_blank",rel:"noopener noreferrer"}},[t._v("StateObject - Apple Developer Documentation"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.apple.com/documentation/swiftui/observedobject",target:"_blank",rel:"noopener noreferrer"}},[t._v("ObservedObject - Apple Developer Documentation"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);
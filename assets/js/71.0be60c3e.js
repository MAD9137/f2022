(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{333:function(e,t,o){"use strict";o.r(t);var a=o(9),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Xcode is Apple’s integrated development environment (IDE). You use Xcode to build apps for Apple products, including iPad, iPhone, Apple Watch, Apple TV, and Mac. Xcode provides tools to manage your entire development workflow—from creating your app to testing, optimizing, and submitting it to the App Store.")]),e._v(" "),t("h2",{attrs:{id:"xcode-projects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcode-projects"}},[e._v("#")]),e._v(" Xcode Projects")]),e._v(" "),t("p",[e._v("A project keeps the necessary files and resources for developing your app organized. To create a project, start with one of the templates, then modify it however you like. Templates are available for each platform (iOS, watchOS, tvOS, and macOS) and for common types of apps, frameworks, and libraries. Each template comes preconfigured with default settings and is ready to build and run. To see an interactive preview while laying out the interface and editing code, choose Swift as the programming language, and SwiftUI as the user interface.")]),e._v(" "),t("p",[e._v("Before creating a project, collect the following information Xcode will need to create the project:")]),e._v(" "),t("p",[t("strong",[e._v("Product name")]),e._v("\nThe name of your app as it will appear in the App Store and appear on a device when installed. The product name must be at least 2 characters and no more than 255 bytes, and should be similar to the app name that you enter later in App Store Connect.")]),e._v(" "),t("p",[t("strong",[e._v("Organization identifier")]),e._v("\nA reverse DNS string that uniquely identifies your organization. If you don’t have a company identifier, use com.example. followed by your organization name, and replace it before you distribute your app.")]),e._v(" "),t("p",[t("strong",[e._v("Organization name")]),e._v("\nThe name that appears in boilerplate text throughout your project folder. For example, the source and header file copyright strings contain the organization name. The organization name in your project isn’t the same as the organization name that appears in the App Store.")]),e._v(" "),t("h2",{attrs:{id:"create-an-ios-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-ios-project"}},[e._v("#")]),e._v(" Create an iOS Project")]),e._v(" "),t("p",[e._v("Launch Xcode then select 'Create a new Xcode project or choose File > New > Project. On the next screen select the template and application and click 'Next'")]),e._v(" "),t("p",[t("img",{attrs:{src:"/f2022/assets/img/new/creating-an-xcode-project-for-an-app-1@2x.png",alt:"create xcode project 1"}})]),e._v(" "),t("p",[e._v("You must provide a product name and organization identifier because they are used to create the bundle identifier that identifies your app throughout the system. Also enter an organization name. If you don’t belong to an organization, enter your name.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/f2022/assets/img/new/creating-an-xcode-project-for-an-app-2@2x.png",alt:"create xcode project 2"}})]),e._v(" "),t("h2",{attrs:{id:"main-project-window"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-project-window"}},[e._v("#")]),e._v(" Main Project Window")]),e._v(" "),t("p",[e._v("The main project window is a collection of configurable panels including:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("The toolbar:")]),e._v(" to build and run your app, view progress of tasks, and configure the main window.")]),e._v(" "),t("li",[t("strong",[e._v("The editor area:")]),e._v(" for viewing and editing the contents of your project including code, user interface files, property lists, project settings, and more.")]),e._v(" "),t("li",[t("strong",[e._v("The navigator area:")]),e._v(" for viewing the parts of your project including files, symbols, breakpoints, and build information.")]),e._v(" "),t("li",[t("strong",[e._v("The debug area:")]),e._v(" for controlling the execution of your app during debugging, and for displaying variables, register, and status information.")]),e._v(" "),t("li",[t("strong",[e._v("The inspector area:")]),e._v(" for viewing and editing information about the selected object in the navigator or editor area, or the entire project.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/f2022/assets/img/new/creating-an-xcode-project-for-an-app-3@2x.png",alt:"Xcode Main Window"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"/f2022/assets/img/new/xcode-project-window~dark@2x.png",alt:"Xcode Layout"}})]),e._v(" "),t("h2",{attrs:{id:"project-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-properties"}},[e._v("#")]),e._v(" Project Properties")]),e._v(" "),t("p",[e._v("To change properties you entered when creating your project, select the project name in the project navigator that appears at the top, then the project editor opens in the editor area. Most of the properties you entered appear on the General pane of the project editor.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/f2022/assets/img/new/creating-an-xcode-project-for-an-app-4@2x.png",alt:"Project Properties"}})]),e._v(" "),t("h2",{attrs:{id:"manage-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-files"}},[e._v("#")]),e._v(" Manage Files")]),e._v(" "),t("h3",{attrs:{id:"add-new-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-new-files"}},[e._v("#")]),e._v(" Add New Files")]),e._v(" "),t("p",[e._v("Xcode provides templates for the common types of files you might want to add to your project, such as Swift files or playgrounds. In the Project navigator, select the folder or group where you want to add a file and perform one of the following actions:")]),e._v(" "),t("ul",[t("li",[e._v("Click the Add button (+) in the filter bar and choose File from the pop-up menu.")]),e._v(" "),t("li",[e._v("Choose New > File.")]),e._v(" "),t("li",[e._v("Control-click and select New File.")])]),e._v(" "),t("p",[e._v("In the new file sheet, select a template for your new file. Xcode organizes templates by type to make them easier to find. You can also use the filter control to search for templates by name. After you select a template, click Next.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/f2022/assets/img/new/files-new-file-template@2x.png",alt:"New File"}})]),e._v(" "),t("h3",{attrs:{id:"add-existing-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-existing-files"}},[e._v("#")]),e._v(" Add Existing Files")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project#Add-Existing-Files-and-Folders-to-a-Project",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add Existing Files to a Project - Apple Developer Documentation"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"organize-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#organize-files"}},[e._v("#")]),e._v(" Organize Files")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project#Organize-Project-Files-in-the-Navigator",target:"_blank",rel:"noopener noreferrer"}},[e._v("Organize Project Files - Apple Developer Documentation"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"source-code-annotation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-code-annotation"}},[e._v("#")]),e._v(" Source Code Annotation")]),e._v(" "),t("p",[e._v("The jump bar and the minimap each provide a quick visual way to navigate your code in the Xcode source editor. Annotate your code with MARK, FIXME, and TODO comments to enhance the power of these tools when organizing your code.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/xcode/creating-organizing-and-editing-source-files#Annotate-Your-Code-for-Visibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("Annotate Your Code for Visibility"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"see-also"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/xcode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xcode - Apple Developer Documentation"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);
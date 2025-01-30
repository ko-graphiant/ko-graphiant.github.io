(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98865b6a"],{"38bb":function(t,e,a){"use strict";a("cda7")},4546:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"[data-v-08590e19] .p-password input{width:15rem}",""])},"7f59":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content-section introduction"},[t._m(0),e("AppInputStyleSwitch")],1),e("div",{staticClass:"content-section implementation"},[e("div",{staticClass:"card"},[e("h5",[t._v("Basic")]),e("Password",{attrs:{feedback:!1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),e("h5",[t._v("Password Meter")]),e("Password",{model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),e("h5",[t._v("Show Password")]),e("Password",{attrs:{toggleMask:""},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),e("h5",[t._v("Templating")]),e("Password",{scopedSlots:t._u([{key:"header",fn:function(){return[e("h6",[t._v("Pick a password")])]},proxy:!0},{key:"footer",fn:function(){return[e("Divider"),e("p",{staticClass:"mt-2"},[t._v("Suggestions")]),e("ul",{staticClass:"pl-2 ml-2 mt-0",staticStyle:{"line-height":"1.5"}},[e("li",[t._v("At least one lowercase")]),e("li",[t._v("At least one uppercase")]),e("li",[t._v("At least one numeric")]),e("li",[t._v("Minimum 8 characters")])])]},proxy:!0}]),model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1)]),e("PasswordDoc")],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"feature-intro"},[e("h1",[t._v("Password")]),e("p",[t._v("Password displays strength indicator for password fields.")])])}],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nimport Password from 'primevue/password';\n")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("A model can be bound using the standard v-model directive.")]),e("CodeHighlight",[t._v('\n<Password v-model="value" />\n')]),e("h5",[t._v("Customization")]),e("p",[t._v("Password components uses regular expressions for middle and strong passwords with the following defaults.")]),e("h6",[t._v("Medium")]),e("p",[e("i",[t._v("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).")])]),e("ul",[e("li",[t._v("At least one lowercase")]),e("li",[t._v("At least one uppercase or one number")]),e("li",[t._v("Minimum 6 characters")])]),e("h6",[t._v("Strong")]),e("p",[e("i",[t._v("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")])]),e("ul",[e("li",[t._v("At least one lowercase")]),e("li",[t._v("At least one uppercase")]),e("li",[t._v("At least one numeric")]),e("li",[t._v("Minimum 8 characters")])]),e("p",[t._v("It is possible to define your own checks with the "),e("i",[t._v("mediumRegex")]),t._v(" and "),e("i",[t._v("strongRegex")]),t._v(" properties.")]),e("h5",[t._v("Templating")]),e("p",[t._v("3 slots are included to customize the overlay. These are "),e("i",[t._v("header")]),t._v(", "),e("i",[t._v("content")]),t._v(" and "),e("i",[t._v("footer")]),t._v(". Note that content overrides the default meter.")]),e("CodeHighlight",[t._v('\n<Password v-model="value">\n    <template #header>\n        <h6>Pick a password</h6>\n    </template>\n    <template #footer>\n        <Divider />\n        <p class="mt-2">Suggestions</p>\n        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">\n            <li>At least one lowercase</li>\n            <li>At least one uppercase</li>\n            <li>At least one numeric</li>\n            <li>Minimum 8 characters</li>\n        </ul>\n    </template>\n</Password>\n')]),e("p",[t._v("It is possible to define your own checks with the "),e("i",[t._v("mediumRegex")]),t._v(" and "),e("i",[t._v("strongRegex")]),t._v(" properties.")]),e("h5",[t._v("Properties")]),e("p",[t._v("Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Value of the component.")])]),e("tr",[e("td",[t._v("promptLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Text to prompt password entry. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("mediumRegex")]),e("td",[t._v("string")]),e("td",[t._v("Regex for a medium level password.")]),e("td",[t._v("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).")])]),e("tr",[e("td",[t._v("strongRegex")]),e("td",[t._v("string")]),e("td",[t._v("Regex for a strong level password.")]),e("td",[t._v("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")])]),e("tr",[e("td",[t._v("weakLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Text for a weak password. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("mediumLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Text for a medium password. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("strongLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Text for a strong password. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("feedback")]),e("td",[t._v("boolean")]),e("td",[t._v("true")]),e("td",[t._v("Whether to show the strength indicator or not.")])]),e("tr",[e("td",[t._v("toggleMask")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Whether to show an icon to display the password as plain text.")])]),e("tr",[e("td",[t._v("appendTo")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v('Id of the element or "body" for document where the overlay should be appended to.')])]),e("tr",[e("td",[t._v("inputId")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Identifier of the underlying input element.")])]),e("tr",[e("td",[t._v("inputStyle")]),e("td",[t._v("any")]),e("td",[t._v("null")]),e("td",[t._v("Inline style of the input field.")])]),e("tr",[e("td",[t._v("inputClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the input field.")])]),e("tr",[e("td",[t._v("hideIcon")]),e("td",[t._v("string")]),e("td",[t._v("pi pi-eye-slash")]),e("td",[t._v("Icon to hide displaying the password as plain text.")])]),e("tr",[e("td",[t._v("showIcon")]),e("td",[t._v("string")]),e("td",[t._v("pi pi-eye")]),e("td",[t._v("Icon to show displaying the password as plain text.")])])])])]),e("h5",[t._v("Events")]),e("p",[t._v("Any valid event such as focus, blur and input are passed to the underlying input element.")]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("header")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("content")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("footer")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("Following is the list of structural style classes, for theming classes visit "),e("router-link",{attrs:{to:"/theming"}},[t._v("theming")]),t._v(" page.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-password-panel")]),e("td",[t._v("Container of password panel")])]),e("tr",[e("td",[t._v("p-password-meter")]),e("td",[t._v("Meter element of password strength")])]),e("tr",[e("td",[t._v("p-password-info")]),e("td",[t._v("Text to display strength")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue/tree/2.x/src/views/password",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[t._v('\n<Password v-model="value1" :feedback="false" />\n\n<h5>Password Meter</h5>\n<Password v-model="value2" />\n\n<h5>Show Password</h5>\n<Password v-model="value3" toggleMask></Password>\n\n<h5>Templating</h5>\n<Password v-model="value4">\n    <template #header>\n        <h6>Pick a password</h6>\n    </template>\n    <template #footer>\n        <Divider />\n        <p class="mt-2">Suggestions</p>\n        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">\n            <li>At least one lowercase</li>\n            <li>At least one uppercase</li>\n            <li>At least one numeric</li>\n            <li>Minimum 8 characters</li>\n        </ul>\n    </template>\n</Password>\n')]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tvalue1: null,\n            value2: null,\n            value3: null,\n            value4: null\n\t\t}\n\t}\n}\n")])],1)],1)],1)},o=[],r=a("2877"),i={},d=Object(r["a"])(i,l,o,!1,null,null,null),v=d.exports,u={data:function(){return{value1:null,value2:null,value3:null,value4:null}},components:{PasswordDoc:v}},p=u,_=(a("38bb"),Object(r["a"])(p,s,n,!1,null,"08590e19",null));e["default"]=_.exports},cda7:function(t,e,a){var s=a("4546");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a("499e").default;n("4334b1ab",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
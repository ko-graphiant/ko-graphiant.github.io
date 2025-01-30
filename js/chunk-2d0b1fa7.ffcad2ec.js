(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1fa7"],{"21c5":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content-section implementation"},[e("ConfirmPopup"),e("div",{staticClass:"card"},[e("Button",{staticClass:"mr-2",attrs:{icon:"pi pi-check",label:"Confirm"},on:{click:function(e){return t.confirm1(e)}}}),e("Button",{staticClass:"p-button-danger p-button-outlined",attrs:{icon:"pi pi-times",label:"Delete"},on:{click:function(e){return t.confirm2(e)}}})],1)],1),e("ConfirmPopupDoc")],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section introduction"},[e("div",{staticClass:"feature-intro"},[e("h1",[t._v("ConfirmPopup")]),e("p",[t._v("ConfirmPopup displays a confirmation overlay displayed relatively to its target.")])])])}],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-section documentation"},[e("TabView",[e("TabPanel",{attrs:{header:"Documentation"}},[e("h5",[t._v("ConfirmationService")]),e("p",[t._v("ConfirmPopup is controlled via the "),e("i",[t._v("ConfirmationService")]),t._v(" that needs to be installed globally before the application\n                    instance is created.")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nimport ConfirmationService from 'primevue/confirmationservice';\nVue.use(ConfirmationService);\n\n//example application instance\nnew Vue({\n    router,\n    render: h => h(App)\n}).$mount('#app');\n")]),e("h5",[t._v("Import")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nimport ConfirmPopup from 'primevue/confirmpopup';\n")]),e("h5",[t._v("Getting Started")]),e("p",[t._v("ConfirmPopup is displayed by calling the "),e("i",[t._v("require")]),t._v(" method of the "),e("i",[t._v("$confirm")]),t._v(" instance by passing the options to customize the Popup."),e("i",[t._v("target")]),t._v(" attribute is mandatory to align the popup to its caller.")]),e("CodeHighlight",[t._v('\n<ConfirmPopup></ConfirmPopup>\n\n<Button @click="delete()" icon="pi pi-check" label="Confirm"></Button>\n')]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nexport default {\n\tmethods: {\n        delete(event) {\n            this.$confirm.require({\n                target: event.currentTarget,\n                message: 'Are you sure you want to proceed?',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    //callback to execute when user confirms the action\n                },\n                reject: () => {\n                    //callback to execute when user rejects the action\n                }\n            });\n        },\n    }\n}\n")]),e("h5",[t._v("Close Confirmation")]),e("p",[t._v("The popup can also be hidden programmatically using the "),e("i",[t._v("close")]),t._v(" method.")]),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nexport default {\n\tmethods: {\n        discard() {\n            this.$confirm.close();\n        }\n    }\n}\n")]),e("h5",[t._v("Confirmation Options")]),e("p",[t._v("ConfirmDialog can be customized with various options listed here.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("target")]),e("td",[t._v("DomElement")]),e("td",[t._v("null")]),e("td",[t._v("Element to align the overlay.")])]),e("tr",[e("td",[t._v("message")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Message of the confirmation.")])]),e("tr",[e("td",[t._v("group")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Icon to display next to the message.")])]),e("tr",[e("td",[t._v("accept")]),e("td",[t._v("Function")]),e("td",[t._v("null")]),e("td",[t._v("Callback to execute when action is confirmed.")])]),e("tr",[e("td",[t._v("reject")]),e("td",[t._v("Function")]),e("td",[t._v("null")]),e("td",[t._v("Callback to execute when action is rejected.")])]),e("tr",[e("td",[t._v("acceptLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Label of the accept button. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("rejectLabel")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Label of the reject button. Defaults to PrimeVue "),e("router-link",{attrs:{to:"/locale"}},[t._v("Locale")]),t._v(" configuration.")],1)]),e("tr",[e("td",[t._v("acceptIcon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Icon of the accept button.")])]),e("tr",[e("td",[t._v("rejectIcon")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Icon of the reject button.")])]),e("tr",[e("td",[t._v("acceptClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the accept button.")])]),e("tr",[e("td",[t._v("rejectClass")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Style class of the reject button.")])])])])]),e("h5",[t._v("Properties")]),e("p",[t._v("Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("group")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.")])])])])]),e("h5",[t._v("Slots")]),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("message")]),e("td",[t._v("-")])])])])]),e("h5",[t._v("Styling")]),e("p",[t._v("ConfirmDialog inherits all the classes from the Dialog component, visit "),e("router-link",{attrs:{to:"/dialog"}},[t._v("dialog")]),t._v(" for more information.")],1),e("div",{staticClass:"doc-tablewrapper"},[e("table",{staticClass:"doc-table"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Element")])])]),e("tbody",[e("tr",[e("td",[t._v("p-confirm-popup")]),e("td",[t._v("Container element.")])]),e("tr",[e("td",[t._v("p-confirm-content")]),e("td",[t._v("Content element.")])]),e("tr",[e("td",[t._v("p-confirm-popup-icon")]),e("td",[t._v("Message icon.")])]),e("tr",[e("td",[t._v("p-confirm-popup-message")]),e("td",[t._v("Message text.")])]),e("tr",[e("td",[t._v("p-confirm-popup-footer")]),e("td",[t._v("Footer element for buttons.")])])])])]),e("h5",[t._v("Dependencies")]),e("p",[t._v("None.")])],1),e("TabPanel",{attrs:{header:"Source"}},[e("a",{staticClass:"btn-viewsource",attrs:{href:"https://github.com/primefaces/primevue/tree/2.x/src/views/dialog",target:"_blank",rel:"noopener noreferrer"}},[e("span",[t._v("View on GitHub")])]),e("CodeHighlight",[[t._v('\n<ConfirmPopup></ConfirmPopup>\n\n<div class="card">\n    <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm" class="mr-2"></Button>\n    <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" class="p-button-danger p-button-outlined"></Button>\n</div>\n')]],2),e("CodeHighlight",{attrs:{lang:"javascript"}},[t._v("\nexport default {\n    methods: {\n        confirm1(event) {\n            this.$confirm.require({\n                target: event.currentTarget,\n                message: 'Are you sure you want to proceed?',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        },\n        confirm2(event) {\n            this.$confirm.require({\n                target: event.currentTarget,\n                message: 'Do you want to delete this record?',\n                icon: 'pi pi-info-circle',\n                acceptClass: 'p-button-danger',\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        }\n    }\n}\n")])],1)],1)],1)},r=[],c=n("2877"),s={},l=Object(c["a"])(s,a,r,!1,null,null,null),d=l.exports,v={methods:{confirm1:function(t){var e=this;this.$confirm.require({target:t.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:function(){e.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:function(){e.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirm2:function(t){var e=this;this.$confirm.require({target:t.currentTarget,message:"Do you want to delete this record?",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:function(){e.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:function(){e.$toast.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})}},components:{ConfirmPopupDoc:d}},p=v,u=Object(c["a"])(p,o,i,!1,null,null,null);e["default"]=u.exports}}]);
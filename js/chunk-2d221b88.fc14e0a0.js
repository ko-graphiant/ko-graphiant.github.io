(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221b88"],{cc0b:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t._self._c;return n("div",[t._m(0),n("div",{staticClass:"content-section implementation"},[n("div",{staticClass:"card flex justify-content-center"},[n("Chart",{staticStyle:{width:"40%"},attrs:{type:"pie",data:t.chartData,options:t.chartOptions}})],1)]),n("PieChartDoc")],1)},i=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-section introduction"},[n("div",{staticClass:"feature-intro"},[n("h1",[t._v("Pie Chart")]),n("p",[t._v("A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.")])])])}],r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-section documentation"},[n("TabView",[n("TabPanel",{attrs:{header:"Source"}},[n("CodeHighlight",[[t._v('\n<Chart type="pie" :data="chartData" :options="chartOptions" />\n')]],2),n("CodeHighlight",{attrs:{lang:"javascript"}},[t._v('\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tchartData: {\n\t\t\t\tlabels: [\'A\',\'B\',\'C\'],\n\t\t\t\tdatasets: [\n\t\t\t\t\t{\n\t\t\t\t\t\tdata: [300, 50, 100],\n\t\t\t\t\t\tbackgroundColor: [\n                            "#42A5F5",\n                            "#66BB6A",\n                            "#FFA726"\n                        ],\n                        hoverBackgroundColor: [\n                            "#64B5F6",\n                            "#81C784",\n                            "#FFB74D"\n                        ]\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\tchartOptions: {\n\t\t\t\tlegend: {\n                    labels: {\n                        fontColor: \'#495057\'\n                    }\n                }\n\t\t\t}\n\t\t}\n\t}\n}\n')])],1)],1)],1)},o=[],s=e("2877"),c={},l=Object(s["a"])(c,r,o,!1,null,null,null),h=l.exports,u=e("d3e3"),d={mounted:function(){var t=this;u["a"].$on("change-theme",(function(n){n.dark?t.chartOptions=t.getDarkTheme():t.chartOptions=t.getLightTheme()}))},beforeDestroy:function(){u["a"].$off("change-theme")},data:function(){return{chartData:{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#42A5F5","#66BB6A","#FFA726"],hoverBackgroundColor:["#64B5F6","#81C784","#FFB74D"]}]},chartOptions:this.isDarkTheme()?this.getDarkTheme():this.getLightTheme()}},methods:{isDarkTheme:function(){return!0===this.$appState.darkTheme},getLightTheme:function(){return{plugins:{legend:{labels:{color:"#495057"}}}}},getDarkTheme:function(){return{plugins:{legend:{labels:{color:"#ebedef"}}}}}},components:{PieChartDoc:h}},p=d,g=Object(s["a"])(p,a,i,!1,null,null,null);n["default"]=g.exports}}]);